import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { createHash } from "crypto";
import { config } from "../config";
import { pool } from "../db/pool";
import {
  AccessTokenPayload,
  RefreshTokenPayload,
  TokenPair,
  User,
  Role,
} from "../types";
import {
  ConflictError,
  UnauthorizedError,
  ForbiddenError,
} from "../utils/errors";

const SALT_ROUNDS = 12;

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

function generateAccessToken(userId: string, email: string, orgId: string, role: Role): string {
  const payload: AccessTokenPayload = {
    sub: userId,
    email,
    org_id: orgId,
    role,
    type: "access",
  };
  return jwt.sign(payload, config.jwt.accessSecret, {
    expiresIn: config.jwt.accessExpiresIn,
  } as jwt.SignOptions);
}

function generateRefreshToken(userId: string): { token: string; tokenId: string } {
  const tokenId = uuidv4();
  const payload: RefreshTokenPayload = {
    sub: userId,
    token_id: tokenId,
    type: "refresh",
  };
  const token = jwt.sign(payload, config.jwt.refreshSecret, {
    expiresIn: config.jwt.refreshExpiresIn,
  } as jwt.SignOptions);
  return { token, tokenId };
}

export async function registerUser(
  email: string,
  password: string,
  displayName: string,
): Promise<User> {
  const existing = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
  if (existing.rows.length > 0) {
    throw new ConflictError("A user with this email already exists");
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const result = await pool.query(
    `INSERT INTO users (email, password_hash, display_name)
     VALUES ($1, $2, $3)
     RETURNING id, email, password_hash, display_name, created_at`,
    [email, passwordHash, displayName],
  );

  return result.rows[0];
}

export async function loginUser(
  email: string,
  password: string,
): Promise<{ user: User; tokens: TokenPair }> {
  const result = await pool.query(
    "SELECT id, email, password_hash, display_name, created_at FROM users WHERE email = $1",
    [email],
  );
  if (result.rows.length === 0) {
    throw new UnauthorizedError("Invalid email or password");
  }

  const user: User = result.rows[0];
  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    throw new UnauthorizedError("Invalid email or password");
  }

  const memberships = await pool.query(
    `SELECT m.organization_id, m.role
     FROM memberships m
     WHERE m.user_id = $1
     ORDER BY m.invited_at ASC
     LIMIT 1`,
    [user.id],
  );

  const orgId = memberships.rows.length > 0 ? memberships.rows[0].organization_id : "";
  const role: Role = memberships.rows.length > 0 ? memberships.rows[0].role : "viewer";

  const accessToken = generateAccessToken(user.id, user.email, orgId, role);
  const { token: refreshToken, tokenId } = generateRefreshToken(user.id);

  const tokenHash = hashToken(refreshToken);
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  await pool.query(
    `INSERT INTO refresh_tokens (id, user_id, token_hash, expires_at)
     VALUES ($1, $2, $3, $4)`,
    [tokenId, user.id, tokenHash, expiresAt],
  );

  return { user, tokens: { accessToken, refreshToken } };
}

export async function refreshAccessToken(
  refreshToken: string,
): Promise<{ accessToken: string; newRefreshToken: string }> {
  let decoded: RefreshTokenPayload;
  try {
    decoded = jwt.verify(refreshToken, config.jwt.refreshSecret) as RefreshTokenPayload;
  } catch {
    throw new UnauthorizedError("Invalid or expired refresh token");
  }

  if (decoded.type !== "refresh") {
    throw new UnauthorizedError("Invalid token type");
  }

  const tokenHash = hashToken(refreshToken);
  const stored = await pool.query(
    `SELECT id, user_id, expires_at, revoked
     FROM refresh_tokens
     WHERE token_hash = $1`,
    [tokenHash],
  );

  if (stored.rows.length === 0 || stored.rows[0].revoked) {
    throw new UnauthorizedError("Refresh token has been revoked");
  }

  if (new Date(stored.rows[0].expires_at) < new Date()) {
    throw new UnauthorizedError("Refresh token has expired");
  }

  await pool.query(
    "UPDATE refresh_tokens SET revoked = true WHERE id = $1",
    [stored.rows[0].id],
  );

  const userResult = await pool.query(
    "SELECT id, email FROM users WHERE id = $1",
    [stored.rows[0].user_id],
  );

  if (userResult.rows.length === 0) {
    throw new UnauthorizedError("User not found");
  }

  const user = userResult.rows[0];

  const memberships = await pool.query(
    `SELECT m.organization_id, m.role
     FROM memberships m
     WHERE m.user_id = $1
     ORDER BY m.invited_at ASC
     LIMIT 1`,
    [user.id],
  );

  const orgId = memberships.rows.length > 0 ? memberships.rows[0].organization_id : "";
  const role: Role = memberships.rows.length > 0 ? memberships.rows[0].role : "viewer";

  const accessToken = generateAccessToken(user.id, user.email, orgId, role);
  const { token: newRefreshToken, tokenId } = generateRefreshToken(user.id);

  const newTokenHash = hashToken(newRefreshToken);
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  await pool.query(
    `INSERT INTO refresh_tokens (id, user_id, token_hash, expires_at)
     VALUES ($1, $2, $3, $4)`,
    [tokenId, user.id, newTokenHash, expiresAt],
  );

  return { accessToken, newRefreshToken };
}

export async function logoutUser(refreshToken: string): Promise<void> {
  const tokenHash = hashToken(refreshToken);
  await pool.query(
    "UPDATE refresh_tokens SET revoked = true WHERE token_hash = $1",
    [tokenHash],
  );
}

export async function switchOrganization(
  userId: string,
  orgId: string,
): Promise<{ accessToken: string }> {
  const membership = await pool.query(
    `SELECT m.role FROM memberships m
     WHERE m.user_id = $1 AND m.organization_id = $2`,
    [userId, orgId],
  );

  if (membership.rows.length === 0) {
    throw new ForbiddenError("You are not a member of this organization");
  }

  const userResult = await pool.query("SELECT id, email FROM users WHERE id = $1", [userId]);
  if (userResult.rows.length === 0) {
    throw new UnauthorizedError("User not found");
  }

  const { email } = userResult.rows[0];
  const { role } = membership.rows[0];

  const accessToken = generateAccessToken(userId, email, orgId, role);
  return { accessToken };
}
