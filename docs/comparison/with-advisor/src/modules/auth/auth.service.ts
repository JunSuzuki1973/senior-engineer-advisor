import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import { query } from '../../db/pool';
import { hashPassword, verifyPassword } from '../../utils/password';
import {
  signAccessToken,
  signAccessTokenWithOrg,
  signRefreshToken,
  verifyRefreshToken,
} from '../../utils/jwt';
import { ConflictError, UnauthorizedError } from '../../utils/errors';
import { config } from '../../config';
import type { RegisterInput, LoginInput } from './auth.schema';
import type { SafeUser, AuthTokens, UserRole } from '../../types';

export async function register(input: RegisterInput): Promise<{ user: SafeUser; tokens: AuthTokens }> {
  const existing = await query('SELECT id FROM users WHERE email = $1', [input.email.toLowerCase()]);
  if (existing.rowCount && existing.rowCount > 0) {
    throw new ConflictError('Email already registered');
  }

  const passwordHash = await hashPassword(input.password);
  const userId = uuidv4();

  const { rows } = await query(
    `INSERT INTO users (id, email, password_hash, name)
     VALUES ($1, $2, $3, $4)
     RETURNING id, email, name, avatar_url, email_verified_at, last_login_at, created_at, updated_at`,
    [userId, input.email.toLowerCase(), passwordHash, input.name],
  );

  const user: SafeUser = rows[0];

  if (input.organization) {
    const slug = input.organization
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      + '-' + userId.substring(0, 8);

    const orgId = uuidv4();
    await query(
      `INSERT INTO organizations (id, name, slug) VALUES ($1, $2, $3)`,
      [orgId, input.organization, slug],
    );

    await query(
      `INSERT INTO memberships (user_id, organization_id, role) VALUES ($1, $2, 'admin')`,
      [userId, orgId],
    );
  }

  const tokens = await generateTokens({ sub: user.id, email: user.email });

  return { user, tokens };
}

export async function login(input: LoginInput): Promise<{ user: SafeUser; tokens: AuthTokens }> {
  const { rows } = await query(
    `SELECT id, email, password_hash, name, avatar_url, email_verified_at, last_login_at, created_at, updated_at
     FROM users WHERE email = $1`,
    [input.email.toLowerCase()],
  );

  if (rows.length === 0) {
    throw new UnauthorizedError('Invalid email or password');
  }

  const userRow = rows[0];
  const isValid = await verifyPassword(input.password, userRow.password_hash);
  if (!isValid) {
    throw new UnauthorizedError('Invalid email or password');
  }

  await query('UPDATE users SET last_login_at = NOW() WHERE id = $1', [userRow.id]);

  const { password_hash, ...user } = userRow;

  const tokens = await generateTokens({ sub: user.id, email: user.email });

  return { user, tokens };
}

export async function refresh(refreshToken: string): Promise<AuthTokens> {
  let payload;
  try {
    payload = verifyRefreshToken(refreshToken);
  } catch {
    throw new UnauthorizedError('Invalid or expired refresh token');
  }

  const tokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex');

  const { rows } = await query(
    `SELECT id FROM refresh_tokens WHERE token_hash = $1 AND user_id = $2 AND expires_at > NOW()`,
    [tokenHash, payload.sub],
  );

  if (rows.length === 0) {
    throw new UnauthorizedError('Refresh token not found or expired');
  }

  await query('DELETE FROM refresh_tokens WHERE id = $1', [rows[0].id]);

  return generateTokens({ sub: payload.sub, email: payload.email });
}

export async function logout(refreshToken: string, userId: string): Promise<void> {
  if (refreshToken) {
    const tokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex');
    await query('DELETE FROM refresh_tokens WHERE token_hash = $1 AND user_id = $2', [tokenHash, userId]);
  }
}

export async function generateTokens(
  basePayload: { sub: string; email: string },
  orgPayload?: { org_id: string; role: UserRole },
): Promise<AuthTokens> {
  const accessToken = orgPayload
    ? signAccessTokenWithOrg({ ...basePayload, ...orgPayload })
    : signAccessToken(basePayload);

  const refreshToken = signRefreshToken(basePayload);

  const tokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex');
  const tokenId = uuidv4();
  const expiresMs = parseDuration(config.jwt.refreshExpiresIn);
  const expiresAt = new Date(Date.now() + expiresMs);

  await query(
    `INSERT INTO refresh_tokens (id, user_id, token_hash, expires_at)
     VALUES ($1, $2, $3, $4)`,
    [tokenId, basePayload.sub, tokenHash, expiresAt],
  );

  return { accessToken, refreshToken };
}

function parseDuration(duration: string): number {
  const match = duration.match(/^(\d+)(s|m|h|d)$/);
  if (!match) return 7 * 24 * 60 * 60 * 1000;
  const value = parseInt(match[1], 10);
  const unit = match[2];
  switch (unit) {
    case 's': return value * 1000;
    case 'm': return value * 60 * 1000;
    case 'h': return value * 3600 * 1000;
    case 'd': return value * 86400 * 1000;
    default: return 7 * 24 * 60 * 60 * 1000;
  }
}
