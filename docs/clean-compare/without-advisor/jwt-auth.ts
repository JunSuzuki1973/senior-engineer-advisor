import {
  createPublicKey,
  createPrivateKey,
  createSign,
  createVerify,
  randomBytes,
  timingSafeEqual,
  constants,
} from 'crypto';
import { readFileSync, existsSync } from 'fs';

type TokenPayload = Record<string, unknown>;

interface JwtHeader {
  alg: 'RS256';
  typ: 'JWT';
  kid?: string;
}

interface AccessTokenPayload {
  sub: string;
  iat: number;
  exp: number;
  jti: string;
  type: 'access';
}

interface RefreshTokenPayload {
  sub: string;
  iat: number;
  exp: number;
  jti: string;
  type: 'refresh';
  family: string;
}

interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  refreshExpiresIn: number;
}

interface RotatedTokenPair extends TokenPair {
  rotated: boolean;
}

interface RefreshTokenStore {
  get(jti: string): Promise<StoredRefreshToken | null>;
  set(jti: string, token: StoredRefreshToken): Promise<void>;
  delete(jti: string): Promise<void>;
  deleteByFamily(family: string): Promise<void>;
}

interface StoredRefreshToken {
  jti: string;
  sub: string;
  family: string;
  expiresAt: number;
  revoked: boolean;
}

interface JwtAuthConfig {
  privateKeyPath: string;
  publicKeyPath: string;
  accessTokenTtl?: number;
  refreshTokenTtl?: number;
  issuer?: string;
  audience?: string;
  keyId?: string;
}

interface JwtAuthDeps {
  refreshTokenStore: RefreshTokenStore;
}

type JwtErrorType =
  | 'TOKEN_EXPIRED'
  | 'TOKEN_INVALID'
  | 'TOKEN_REVOKED'
  | 'TOKEN_REUSE_DETECTED'
  | 'SIGNATURE_INVALID'
  | 'KEY_LOAD_ERROR'
  | 'STORE_ERROR';

class JwtError extends Error {
  readonly type: JwtErrorType;
  readonly cause?: Error;

  constructor(type: JwtErrorType, message: string, cause?: Error) {
    super(message);
    this.name = 'JwtError';
    this.type = type;
    this.cause = cause;
    Error.captureStackTrace(this, JwtError);
  }
}

class TokenExpiredError extends JwtError {
  readonly expiredAt: number;

  constructor(expiredAt: number) {
    super('TOKEN_EXPIRED', 'Token has expired');
    this.name = 'TokenExpiredError';
    this.expiredAt = expiredAt;
  }
}

const ACCESS_TOKEN_TTL = 15 * 60;
const REFRESH_TOKEN_TTL = 7 * 24 * 60 * 60;
const CLOCK_TOLERANCE = 30;

function base64urlEncode(data: Buffer | string): string {
  const buffer = typeof data === 'string' ? Buffer.from(data, 'utf8') : data;
  return buffer.toString('base64url');
}

function base64urlDecode(str: string): Buffer {
  return Buffer.from(str, 'base64url');
}

function constantTimeCompare(a: string, b: string): boolean {
  try {
    return timingSafeEqual(Buffer.from(a), Buffer.from(b));
  } catch {
    return false;
  }
}

class JwtAuth {
  private readonly privateKey: crypto.KeyObject;
  private readonly publicKey: crypto.KeyObject;
  private readonly accessTokenTtl: number;
  private readonly refreshTokenTtl: number;
  private readonly issuer?: string;
  private readonly audience?: string;
  private readonly keyId?: string;
  private readonly refreshTokenStore: RefreshTokenStore;

  constructor(config: JwtAuthConfig, deps: JwtAuthDeps) {
    this.accessTokenTtl = config.accessTokenTtl ?? ACCESS_TOKEN_TTL;
    this.refreshTokenTtl = config.refreshTokenTtl ?? REFRESH_TOKEN_TTL;
    this.issuer = config.issuer;
    this.audience = config.audience;
    this.keyId = config.keyId;
    this.refreshTokenStore = deps.refreshTokenStore;

    try {
      if (!existsSync(config.privateKeyPath) || !existsSync(config.publicKeyPath)) {
        throw new JwtError('KEY_LOAD_ERROR', 'Key files not found');
      }

      const privateKeyPem = readFileSync(config.privateKeyPath, 'utf8');
      const publicKeyPem = readFileSync(config.publicKeyPath, 'utf8');

      this.privateKey = createPrivateKey({
        key: privateKeyPem,
        format: 'pem',
        type: 'pkcs8',
      });

      this.publicKey = createPublicKey({
        key: publicKeyPem,
        format: 'pem',
        type: 'spki',
      });
    } catch (error) {
      if (error instanceof JwtError) throw error;
      throw new JwtError('KEY_LOAD_ERROR', 'Failed to load keys', error as Error);
    }
  }

  generateTokenPair(userId: string): Promise<TokenPair> {
    return this.generateTokenPairWithFamily(userId, randomBytes(16).toString('hex'));
  }

  private async generateTokenPairWithFamily(
    userId: string,
    family: string
  ): Promise<TokenPair> {
    const now = Math.floor(Date.now() / 1000);
    const accessJti = randomBytes(16).toString('hex');
    const refreshJti = randomBytes(16).toString('hex');

    const accessPayload: AccessTokenPayload = {
      sub: userId,
      iat: now,
      exp: now + this.accessTokenTtl,
      jti: accessJti,
      type: 'access',
    };

    const refreshPayload: RefreshTokenPayload = {
      sub: userId,
      iat: now,
      exp: now + this.refreshTokenTtl,
      jti: refreshJti,
      type: 'refresh',
      family,
    };

    const accessToken = this.signToken(accessPayload);
    const refreshToken = this.signToken(refreshPayload);

    await this.refreshTokenStore.set(refreshJti, {
      jti: refreshJti,
      sub: userId,
      family,
      expiresAt: refreshPayload.exp,
      revoked: false,
    });

    return {
      accessToken,
      refreshToken,
      expiresIn: this.accessTokenTtl,
      refreshExpiresIn: this.refreshTokenTtl,
    };
  }

  private signToken(payload: AccessTokenPayload | RefreshTokenPayload): string {
    const header: JwtHeader = {
      alg: 'RS256',
      typ: 'JWT',
      ...(this.keyId && { kid: this.keyId }),
    };

    const headerB64 = base64urlEncode(JSON.stringify(header));
    const payloadB64 = base64urlEncode(JSON.stringify(payload));
    const signingInput = `${headerB64}.${payloadB64}`;

    const signer = createSign('RSA-SHA256');
    signer.update(signingInput);
    const signature = signer.sign(this.privateKey);

    return `${signingInput}.${base64urlEncode(signature)}`;
  }

  verifyAccessToken(token: string): AccessTokenPayload {
    const payload = this.verifyToken(token);

    if (payload.type !== 'access') {
      throw new JwtError('TOKEN_INVALID', 'Expected access token');
    }

    return payload as AccessTokenPayload;
  }

  async refreshTokens(refreshToken: string): Promise<RotatedTokenPair> {
    const payload = this.verifyToken(refreshToken);

    if (payload.type !== 'refresh') {
      throw new JwtError('TOKEN_INVALID', 'Expected refresh token');
    }

    const refreshPayload = payload as RefreshTokenPayload;
    const storedToken = await this.refreshTokenStore.get(refreshPayload.jti);

    if (!storedToken) {
      await this.refreshTokenStore.deleteByFamily(refreshPayload.family);
      throw new JwtError('TOKEN_REUSE_DETECTED', 'Token reuse detected - family revoked');
    }

    if (storedToken.revoked) {
      await this.refreshTokenStore.deleteByFamily(refreshPayload.family);
      throw new JwtError('TOKEN_REVOKED', 'Token has been revoked - family revoked');
    }

    await this.refreshTokenStore.delete(refreshPayload.jti);

    const newTokens = await this.generateTokenPairWithFamily(
      refreshPayload.sub,
      refreshPayload.family
    );

    return {
      ...newTokens,
      rotated: true,
    };
  }

  async revokeRefreshToken(token: string): Promise<void> {
    const payload = this.verifyToken(token);

    if (payload.type !== 'refresh') {
      throw new JwtError('TOKEN_INVALID', 'Expected refresh token');
    }

    const refreshPayload = payload as RefreshTokenPayload;
    const storedToken = await this.refreshTokenStore.get(refreshPayload.jti);

    if (storedToken) {
      await this.refreshTokenStore.delete(refreshPayload.jti);
    }
  }

  async revokeAllUserTokens(userId: string): Promise<void> {
    // Implementation depends on store capabilities
    // This is a placeholder - extend RefreshTokenStore if needed
    throw new JwtError('STORE_ERROR', 'revokeAllUserTokens not implemented');
  }

  private verifyToken(token: string): AccessTokenPayload | RefreshTokenPayload {
    const parts = token.split('.');

    if (parts.length !== 3) {
      throw new JwtError('TOKEN_INVALID', 'Invalid token format');
    }

    const [headerB64, payloadB64, signatureB64] = parts;
    const signingInput = `${headerB64}.${payloadB64}`;

    let header: JwtHeader;
    let payload: AccessTokenPayload | RefreshTokenPayload;

    try {
      header = JSON.parse(base64urlDecode(headerB64).toString('utf8'));
      payload = JSON.parse(base64urlDecode(payloadB64).toString('utf8'));
    } catch {
      throw new JwtError('TOKEN_INVALID', 'Failed to decode token');
    }

    if (header.alg !== 'RS256') {
      throw new JwtError('TOKEN_INVALID', 'Unsupported algorithm');
    }

    const signature = base64urlDecode(signatureB64);
    const verifier = createVerify('RSA-SHA256');
    verifier.update(signingInput);

    const isValid = verifier.verify(this.publicKey, signature);

    if (!isValid) {
      throw new JwtError('SIGNATURE_INVALID', 'Invalid token signature');
    }

    const now = Math.floor(Date.now() / 1000);

    if (payload.exp && payload.exp < now - CLOCK_TOLERANCE) {
      throw new TokenExpiredError(payload.exp);
    }

    if (payload.iat && payload.iat > now + CLOCK_TOLERANCE) {
      throw new JwtError('TOKEN_INVALID', 'Token issued in the future');
    }

    if (this.issuer && payload.iss && !constantTimeCompare(payload.iss as string, this.issuer)) {
      throw new JwtError('TOKEN_INVALID', 'Invalid issuer');
    }

    if (this.audience && payload.aud && !constantTimeCompare(payload.aud as string, this.audience)) {
      throw new JwtError('TOKEN_INVALID', 'Invalid audience');
    }

    return payload;
  }

  decodeToken(token: string): AccessTokenPayload | RefreshTokenPayload | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;

      const payloadB64 = parts[1];
      return JSON.parse(base64urlDecode(payloadB64).toString('utf8'));
    } catch {
      return null;
    }
  }
}

class InMemoryRefreshTokenStore implements RefreshTokenStore {
  private readonly tokens = new Map<string, StoredRefreshToken>();

  async get(jti: string): Promise<StoredRefreshToken | null> {
    return this.tokens.get(jti) ?? null;
  }

  async set(jti: string, token: StoredRefreshToken): Promise<void> {
    this.tokens.set(jti, token);
  }

  async delete(jti: string): Promise<void> {
    this.tokens.delete(jti);
  }

  async deleteByFamily(family: string): Promise<void> {
    for (const [jti, token] of this.tokens.entries()) {
      if (token.family === family) {
        this.tokens.delete(jti);
      }
    }
  }
}

function createJwtAuth(config: JwtAuthConfig, deps: JwtAuthDeps): JwtAuth {
  return new JwtAuth(config, deps);
}

export {
  JwtAuth,
  JwtError,
  TokenExpiredError,
  InMemoryRefreshTokenStore,
  createJwtAuth,
  type AccessTokenPayload,
  type RefreshTokenPayload,
  type TokenPair,
  type RotatedTokenPair,
  type RefreshTokenStore,
  type StoredRefreshToken,
  type JwtAuthConfig,
  type JwtAuthDeps,
  type JwtErrorType,
};
