import {
  SignJWT,
  jwtVerify,
  generateKeyPair,
  exportJWK,
  importJWK,
  calculateJwkThumbprint,
  JWTPayload,
  exportPKCS8,
  exportSPKI,
  importPKCS8,
  importSPKI,
} from 'jose';
import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import type { KeyObject, CryptoKey, JWK as JoseJWK } from 'jose';

type JoseKey = CryptoKey | KeyObject;

declare const AccessTokenBrand: unique symbol;
declare const RefreshTokenBrand: unique symbol;
declare const JtiBrand: unique symbol;
declare const FamilyIdBrand: unique symbol;
declare const TokenHashBrand: unique symbol;

export type AccessToken = string & { readonly [AccessTokenBrand]: true };
export type RefreshToken = string & { readonly [RefreshTokenBrand]: true };
export type Jti = string & { readonly [JtiBrand]: true };
export type FamilyId = string & { readonly [FamilyIdBrand]: true };
export type TokenHash = string & { readonly [TokenHashBrand]: true };

function asJti(s: string): Jti {
  return s as Jti;
}
function asFamilyId(s: string): FamilyId {
  return s as FamilyId;
}
function asAccessToken(s: string): AccessToken {
  return s as AccessToken;
}
function asRefreshToken(s: string): RefreshToken {
  return s as RefreshToken;
}
function asTokenHash(s: string): TokenHash {
  return s as TokenHash;
}

export type AuthError =
  | { kind: 'TokenExpired'; expiredAt: number; jti?: Jti }
  | { kind: 'TokenInvalid'; reason: string }
  | { kind: 'TokenRevoked'; jti: Jti }
  | { kind: 'TokenReused'; familyId: FamilyId; jti: Jti }
  | { kind: 'TokenNotFound'; jti: Jti }
  | { kind: 'SignatureInvalid' }
  | { kind: 'AlgorithmMismatch'; expected: 'RS256'; received: string }
  | { kind: 'IssuerInvalid'; expected: string; received?: string }
  | { kind: 'AudienceInvalid'; expected: string; received?: string }
  | { kind: 'StoreError'; operation: string; cause?: unknown }
  | { kind: 'KeyError'; reason: string }
  | { kind: 'ConfigError'; reason: string }
  | { kind: 'ClockSkewExceeded'; nbf?: number; iat?: number };

export type Result<T, E = AuthError> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function Ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}
function Err<E extends AuthError>(error: E): Result<never, E> {
  return { ok: false, error };
}

export interface AccessTokenPayload {
  sub: string;
  iat: number;
  exp: number;
  jti: Jti;
  typ: 'access';
  iss?: string;
  aud?: string;
  roles?: readonly string[];
  scope?: string;
}

export interface RefreshTokenPayload {
  sub: string;
  iat: number;
  exp: number;
  jti: Jti;
  typ: 'refresh';
  familyId: FamilyId;
  iss?: string;
  aud?: string;
}

export interface TokenPair {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
  accessTokenExpiresAt: number;
  refreshTokenExpiresAt: number;
}

export interface StoredRefreshToken {
  jti: Jti;
  familyId: FamilyId;
  userId: string;
  tokenHash: TokenHash;
  issuedAt: number;
  expiresAt: number;
  revokedAt: number | null;
  replacedBy: Jti | null;
}

export interface RefreshTokenStore {
  store(token: StoredRefreshToken): Promise<Result<void>>;
  findByJti(jti: Jti): Promise<Result<StoredRefreshToken | null>>;
  findByFamily(familyId: FamilyId): Promise<Result<readonly StoredRefreshToken[]>>;
  markReplaced(jti: Jti, replacedBy: Jti): Promise<Result<void>>;
  revokeByJti(jti: Jti, revokedAt: number): Promise<Result<void>>;
  revokeByFamily(familyId: FamilyId, revokedAt: number): Promise<Result<void>>;
}

export interface KeyEntry {
  kid: string;
  privateKey: JoseKey;
  publicKey: JoseKey;
  createdAt: number;
  isActive: boolean;
}

export interface KeyRegistry {
  getActiveSigningKey(): Promise<Result<KeyEntry>>;
  getVerificationKey(kid: string): Promise<Result<KeyEntry | null>>;
  getAllPublicKeys(): Promise<Result<readonly KeyEntry[]>>;
}

export interface JWK {
  kty: string;
  kid: string;
  use?: string;
  alg?: string;
  n?: string;
  e?: string;
  [key: string]: unknown;
}

export interface JWKS {
  keys: JWK[];
}

export interface JwtAuthConfig {
  issuer: string;
  audience: string;
  accessTokenTtlSeconds?: number;
  refreshTokenTtlSeconds?: number;
  clockToleranceSeconds?: number;
  keyRegistry: KeyRegistry;
}

function generateJti(): Jti {
  return asJti(crypto.randomUUID());
}

function generateFamilyId(): FamilyId {
  return asFamilyId(crypto.randomUUID());
}

function generateRefreshTokenSecret(): string {
  return randomBytes(32).toString('base64url');
}

function hashToken(token: string): TokenHash {
  return asTokenHash(createHash('sha256').update(token).digest('base64url'));
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  try {
    return timingSafeEqual(Buffer.from(a), Buffer.from(b));
  } catch {
    return false;
  }
}

const DEFAULT_ACCESS_TOKEN_TTL = 15 * 60;
const DEFAULT_REFRESH_TOKEN_TTL = 7 * 24 * 60 * 60;
const DEFAULT_CLOCK_TOLERANCE = 30;

export class JwtAuthModule {
  private readonly config: {
    issuer: string;
    audience: string;
    accessTokenTtlSeconds: number;
    refreshTokenTtlSeconds: number;
    clockToleranceSeconds: number;
    keyRegistry: KeyRegistry;
  };

  constructor(config: JwtAuthConfig) {
    if (!config.issuer || !config.audience) {
      throw new Error('issuer and audience are required');
    }
    if (!config.keyRegistry) {
      throw new Error('keyRegistry is required');
    }

    this.config = {
      issuer: config.issuer,
      audience: config.audience,
      accessTokenTtlSeconds: config.accessTokenTtlSeconds ?? DEFAULT_ACCESS_TOKEN_TTL,
      refreshTokenTtlSeconds: config.refreshTokenTtlSeconds ?? DEFAULT_REFRESH_TOKEN_TTL,
      clockToleranceSeconds: config.clockToleranceSeconds ?? DEFAULT_CLOCK_TOLERANCE,
      keyRegistry: config.keyRegistry,
    };
  }

  async issueTokenPair(
    userId: string,
    store: RefreshTokenStore,
    roles?: readonly string[],
    scope?: string
  ): Promise<Result<TokenPair>> {
    const familyId = generateFamilyId();
    const now = Math.floor(Date.now() / 1000);

    const accessJti = generateJti();
    const accessPayload: AccessTokenPayload = {
      sub: userId,
      iat: now,
      exp: now + this.config.accessTokenTtlSeconds,
      jti: accessJti,
      typ: 'access',
      iss: this.config.issuer,
      aud: this.config.audience,
      ...(roles && { roles }),
      ...(scope && { scope }),
    };

    const refreshJti = generateJti();
    const refreshSecret = generateRefreshTokenSecret();
    const refreshPayload: RefreshTokenPayload = {
      sub: userId,
      iat: now,
      exp: now + this.config.refreshTokenTtlSeconds,
      jti: refreshJti,
      typ: 'refresh',
      familyId,
      iss: this.config.issuer,
      aud: this.config.audience,
    };

    const keyResult = await this.config.keyRegistry.getActiveSigningKey();
    if (!keyResult.ok) {
      return Err({ kind: 'KeyError', reason: 'No active signing key available' });
    }
    const { privateKey, kid } = keyResult.value;

    let accessToken: AccessToken;
    let refreshToken: RefreshToken;

    try {
      accessToken = asAccessToken(
        await new SignJWT(accessPayload as unknown as JWTPayload)
          .setProtectedHeader({ alg: 'RS256', typ: 'JWT', kid })
          .sign(privateKey)
      );

      const refreshJwt = await new SignJWT(refreshPayload as unknown as JWTPayload)
        .setProtectedHeader({ alg: 'RS256', typ: 'JWT', kid })
        .sign(privateKey);

      refreshToken = asRefreshToken(`${refreshSecret}.${refreshJwt}`);
    } catch (e) {
      return Err({ kind: 'KeyError', reason: `Failed to sign token: ${String(e)}` });
    }

    const tokenHash = hashToken(refreshToken);
    const storedToken: StoredRefreshToken = {
      jti: refreshJti,
      familyId,
      userId,
      tokenHash,
      issuedAt: now,
      expiresAt: refreshPayload.exp,
      revokedAt: null,
      replacedBy: null,
    };

    const storeResult = await store.store(storedToken);
    if (!storeResult.ok) {
      return Err(storeResult.error);
    }

    return Ok({
      accessToken,
      refreshToken,
      accessTokenExpiresAt: accessPayload.exp,
      refreshTokenExpiresAt: refreshPayload.exp,
    });
  }

  async verifyAccessToken(token: string): Promise<Result<AccessTokenPayload>> {
    const unverified = this.decodeUnverified(token);
    if (!unverified.ok) {
      return unverified;
    }

    const { header, payload } = unverified.value;

    if (header.alg !== 'RS256') {
      return Err({
        kind: 'AlgorithmMismatch',
        expected: 'RS256',
        received: header.alg ?? 'none',
      });
    }

    if (!header.kid) {
      return Err({ kind: 'TokenInvalid', reason: 'Missing kid header' });
    }

    const keyResult = await this.config.keyRegistry.getVerificationKey(header.kid);
    if (!keyResult.ok) {
      return Err({ kind: 'KeyError', reason: 'Failed to resolve verification key' });
    }
    if (!keyResult.value) {
      return Err({ kind: 'TokenInvalid', reason: 'Unknown key id' });
    }

    try {
      const { payload: verified } = await jwtVerify(token, keyResult.value.publicKey, {
        algorithms: ['RS256'],
        issuer: this.config.issuer,
        audience: this.config.audience,
        clockTolerance: this.config.clockToleranceSeconds,
      });

      if (verified['typ'] !== 'access') {
        return Err({ kind: 'TokenInvalid', reason: 'Expected access token type' });
      }

      return Ok({
        sub: verified.sub as string,
        iat: verified.iat as number,
        exp: verified.exp as number,
        jti: verified['jti'] as Jti,
        typ: 'access',
        ...(verified.iss !== undefined && { iss: verified.iss }),
        ...(verified.aud !== undefined && { aud: verified.aud as string }),
        ...(verified['roles'] !== undefined && { roles: verified['roles'] as readonly string[] }),
        ...(verified['scope'] !== undefined && { scope: verified['scope'] as string }),
      });
    } catch (e) {
      return this.mapJoseError(e, payload['jti'] as Jti | undefined);
    }
  }

  async rotateRefreshToken(
    token: string,
    store: RefreshTokenStore
  ): Promise<Result<TokenPair>> {
    const parts = token.split('.');
    if (parts.length < 4) {
      return Err({ kind: 'TokenInvalid', reason: 'Invalid refresh token format' });
    }

    const secret = parts[0];
    const jwtPart = parts.slice(1).join('.');

    const unverified = this.decodeUnverified(jwtPart);
    if (!unverified.ok) {
      return unverified;
    }

    const { header, payload } = unverified.value;

    if (header.alg !== 'RS256') {
      return Err({
        kind: 'AlgorithmMismatch',
        expected: 'RS256',
        received: header.alg ?? 'none',
      });
    }

    if (payload['typ'] !== 'refresh') {
      return Err({ kind: 'TokenInvalid', reason: 'Expected refresh token type' });
    }

    const jti = payload['jti'] as Jti;
    const familyId = payload['familyId'] as FamilyId;
    const userId = payload['sub'] as string;

    const storedResult = await store.findByJti(jti);
    if (!storedResult.ok) {
      return Err(storedResult.error);
    }

    if (!storedResult.value) {
      const now = Math.floor(Date.now() / 1000);
      const revokeResult = await store.revokeByFamily(familyId, now);
      if (!revokeResult.ok) {
        return Err(revokeResult.error);
      }
      return Err({ kind: 'TokenReused', familyId, jti });
    }

    const stored = storedResult.value;

    if (stored.revokedAt !== null || stored.replacedBy !== null) {
      const now = Math.floor(Date.now() / 1000);
      await store.revokeByFamily(familyId, now);
      return Err({ kind: 'TokenReused', familyId, jti });
    }

    const tokenHash = hashToken(token);
    if (!constantTimeEqual(stored.tokenHash, tokenHash)) {
      return Err({ kind: 'SignatureInvalid' });
    }

    const now = Math.floor(Date.now() / 1000);
    if (stored.expiresAt < now) {
      return Err({ kind: 'TokenExpired', expiredAt: stored.expiresAt, jti });
    }

    const keyResult = await this.config.keyRegistry.getActiveSigningKey();
    if (!keyResult.ok) {
      return Err({ kind: 'KeyError', reason: 'No active signing key available' });
    }
    const { privateKey, kid } = keyResult.value;

    const newAccessJti = generateJti();
    const newAccessPayload: AccessTokenPayload = {
      sub: userId,
      iat: now,
      exp: now + this.config.accessTokenTtlSeconds,
      jti: newAccessJti,
      typ: 'access',
      iss: this.config.issuer,
      aud: this.config.audience,
    };

    const newRefreshJti = generateJti();
    const newRefreshSecret = generateRefreshTokenSecret();
    const newRefreshPayload: RefreshTokenPayload = {
      sub: userId,
      iat: now,
      exp: now + this.config.refreshTokenTtlSeconds,
      jti: newRefreshJti,
      typ: 'refresh',
      familyId,
      iss: this.config.issuer,
      aud: this.config.audience,
    };

    let newAccessToken: AccessToken;
    let newRefreshToken: RefreshToken;

    try {
      newAccessToken = asAccessToken(
        await new SignJWT(newAccessPayload as unknown as JWTPayload)
          .setProtectedHeader({ alg: 'RS256', typ: 'JWT', kid })
          .sign(privateKey)
      );

      const newJwt = await new SignJWT(newRefreshPayload as unknown as JWTPayload)
        .setProtectedHeader({ alg: 'RS256', typ: 'JWT', kid })
        .sign(privateKey);

      newRefreshToken = asRefreshToken(`${newRefreshSecret}.${newJwt}`);
    } catch (e) {
      return Err({ kind: 'KeyError', reason: `Failed to sign token: ${String(e)}` });
    }

    const newTokenHash = hashToken(newRefreshToken);
    const newStoredToken: StoredRefreshToken = {
      jti: newRefreshJti,
      familyId,
      userId,
      tokenHash: newTokenHash,
      issuedAt: now,
      expiresAt: newRefreshPayload.exp,
      revokedAt: null,
      replacedBy: null,
    };

    const storeResult = await store.store(newStoredToken);
    if (!storeResult.ok) {
      return Err(storeResult.error);
    }

    const markResult = await store.markReplaced(jti, newRefreshJti);
    if (!markResult.ok) {
      return Err(markResult.error);
    }

    return Ok({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      accessTokenExpiresAt: newAccessPayload.exp,
      refreshTokenExpiresAt: newRefreshPayload.exp,
    });
  }

  async revokeFamily(
    familyId: FamilyId,
    store: RefreshTokenStore
  ): Promise<Result<void>> {
    const now = Math.floor(Date.now() / 1000);
    return store.revokeByFamily(familyId, now);
  }

  async exportJwks(): Promise<Result<JWKS>> {
    const keysResult = await this.config.keyRegistry.getAllPublicKeys();
    if (!keysResult.ok) {
      return Err(keysResult.error);
    }

    const keys: JWK[] = [];
    for (const entry of keysResult.value) {
      try {
        const jwk = await exportJWK(entry.publicKey);
        const keyEntry: JWK = {
          kty: jwk.kty ?? 'RSA',
          kid: entry.kid,
          use: 'sig',
          alg: 'RS256',
        };
        if (jwk.n !== undefined) {
          keyEntry.n = jwk.n;
        }
        if (jwk.e !== undefined) {
          keyEntry.e = jwk.e;
        }
        keys.push(keyEntry);
      } catch (e) {
        return Err({ kind: 'KeyError', reason: `Failed to export key ${entry.kid}` });
      }
    }

    return Ok({ keys });
  }

  private decodeUnverified(
    token: string
  ): Result<{ header: { alg?: string; kid?: string; typ?: string }; payload: Record<string, unknown> }> {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return Err({ kind: 'TokenInvalid', reason: 'Invalid JWT format' });
    }

    try {
      const headerPart = parts[0];
      const payloadPart = parts[1];
      if (!headerPart || !payloadPart) {
        return Err({ kind: 'TokenInvalid', reason: 'Invalid JWT format' });
      }
      const header = JSON.parse(
        Buffer.from(headerPart, 'base64url').toString('utf8')
      ) as { alg?: string; kid?: string; typ?: string };
      const payload = JSON.parse(
        Buffer.from(payloadPart, 'base64url').toString('utf8')
      ) as Record<string, unknown>;
      return Ok({ header, payload });
    } catch {
      return Err({ kind: 'TokenInvalid', reason: 'Failed to decode token' });
    }
  }

  private mapJoseError(e: unknown, jti?: Jti): Result<never> {
    const error = e as { code?: string; claim?: string; payload?: { exp?: number } };
    
    if (error.code === 'ERR_JWT_EXPIRED') {
      const expiredAt = error.payload?.exp ?? 0;
      const err: AuthError = { kind: 'TokenExpired', expiredAt };
      return Err(err);
    }
    if (error.code === 'ERR_JWT_INVALID') {
      return Err({ kind: 'SignatureInvalid' });
    }
    if (error.code === 'ERR_JWKS_NO_MATCHING_KEY') {
      return Err({ kind: 'TokenInvalid', reason: 'No matching key found' });
    }
    if (error.code === 'ERR_JWT_CLAIM_VALIDATION_FAILED') {
      if (error.claim === 'iss') {
        return Err({ kind: 'IssuerInvalid', expected: this.config.issuer });
      }
      if (error.claim === 'aud') {
        return Err({ kind: 'AudienceInvalid', expected: this.config.audience });
      }
    }
    
    return Err({ kind: 'TokenInvalid', reason: `Verification failed: ${String(e)}` });
  }
}

export class InMemoryKeyRegistry implements KeyRegistry {
  private keys: Map<string, KeyEntry> = new Map();
  private activeKid: string | null = null;

  async generateKey(): Promise<Result<KeyEntry>> {
    try {
      const { publicKey, privateKey } = await generateKeyPair('RS256', {
        modulusLength: 2048,
      });

      const publicJwk = await exportJWK(publicKey);
      const kid = await calculateJwkThumbprint(publicJwk as JoseJWK);
      
      const entry: KeyEntry = {
        kid,
        privateKey,
        publicKey,
        createdAt: Math.floor(Date.now() / 1000),
        isActive: true,
      };

      if (this.activeKid) {
        const current = this.keys.get(this.activeKid);
        if (current) {
          this.keys.set(this.activeKid, { ...current, isActive: false });
        }
      }

      this.keys.set(kid, entry);
      this.activeKid = kid;

      return Ok(entry);
    } catch (e) {
      return Err({ kind: 'KeyError', reason: `Failed to generate key: ${String(e)}` });
    }
  }

  async importKey(
    privateKeyPem: string,
    publicKeyPem: string,
    kid?: string
  ): Promise<Result<KeyEntry>> {
    try {
      const privateKey = await importPKCS8(privateKeyPem, 'RS256');
      const publicKey = await importSPKI(publicKeyPem, 'RS256');

      const resolvedKid = kid ?? (await calculateJwkThumbprint(await exportJWK(publicKey) as JoseJWK));

      const entry: KeyEntry = {
        kid: resolvedKid,
        privateKey,
        publicKey,
        createdAt: Math.floor(Date.now() / 1000),
        isActive: true,
      };

      if (this.activeKid) {
        const current = this.keys.get(this.activeKid);
        if (current) {
          this.keys.set(this.activeKid, { ...current, isActive: false });
        }
      }

      this.keys.set(resolvedKid, entry);
      this.activeKid = resolvedKid;

      return Ok(entry);
    } catch (e) {
      return Err({ kind: 'KeyError', reason: `Failed to import key: ${String(e)}` });
    }
  }

  async getActiveSigningKey(): Promise<Result<KeyEntry>> {
    if (!this.activeKid) {
      return Err({ kind: 'KeyError', reason: 'No active signing key' });
    }
    const entry = this.keys.get(this.activeKid);
    if (!entry) {
      return Err({ kind: 'KeyError', reason: 'Active key not found' });
    }
    return Ok(entry);
  }

  async getVerificationKey(kid: string): Promise<Result<KeyEntry | null>> {
    const entry = this.keys.get(kid);
    return Ok(entry ?? null);
  }

  async getAllPublicKeys(): Promise<Result<readonly KeyEntry[]>> {
    return Ok(Array.from(this.keys.values()));
  }
}

export class InMemoryRefreshTokenStore implements RefreshTokenStore {
  private tokens: Map<string, StoredRefreshToken> = new Map();
  private familyIndex: Map<string, Set<string>> = new Map();

  async store(token: StoredRefreshToken): Promise<Result<void>> {
    this.tokens.set(token.jti, token);
    
    if (!this.familyIndex.has(token.familyId)) {
      this.familyIndex.set(token.familyId, new Set());
    }
    this.familyIndex.get(token.familyId)!.add(token.jti);
    
    return Ok(undefined);
  }

  async findByJti(jti: Jti): Promise<Result<StoredRefreshToken | null>> {
    return Ok(this.tokens.get(jti) ?? null);
  }

  async findByFamily(familyId: FamilyId): Promise<Result<readonly StoredRefreshToken[]>> {
    const jtiSet = this.familyIndex.get(familyId);
    if (!jtiSet) {
      return Ok([]);
    }
    const tokens: StoredRefreshToken[] = [];
    for (const jti of jtiSet) {
      const token = this.tokens.get(jti);
      if (token) {
        tokens.push(token);
      }
    }
    return Ok(tokens);
  }

  async markReplaced(jti: Jti, replacedBy: Jti): Promise<Result<void>> {
    const token = this.tokens.get(jti);
    if (!token) {
      return Err({ kind: 'TokenNotFound', jti });
    }
    this.tokens.set(jti, { ...token, replacedBy });
    return Ok(undefined);
  }

  async revokeByJti(jti: Jti, revokedAt: number): Promise<Result<void>> {
    const token = this.tokens.get(jti);
    if (!token) {
      return Err({ kind: 'TokenNotFound', jti });
    }
    this.tokens.set(jti, { ...token, revokedAt });
    return Ok(undefined);
  }

  async revokeByFamily(familyId: FamilyId, revokedAt: number): Promise<Result<void>> {
    const jtiSet = this.familyIndex.get(familyId);
    if (!jtiSet) {
      return Ok(undefined);
    }
    
    for (const jti of jtiSet) {
      const token = this.tokens.get(jti);
      if (token) {
        this.tokens.set(jti, { ...token, revokedAt });
      }
    }
    return Ok(undefined);
  }
}

export function createJwtAuthModule(config: JwtAuthConfig): JwtAuthModule {
  return new JwtAuthModule(config);
}
