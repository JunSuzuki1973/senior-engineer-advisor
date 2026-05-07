import { query } from '../../db/pool';
import { hashPassword, verifyPassword } from '../../utils/password';
import { UnauthorizedError, NotFoundError } from '../../utils/errors';
import type { SafeUser, PaginatedResult, UserRole } from '../../types';

export async function getProfile(userId: string): Promise<SafeUser> {
  const { rows } = await query(
    `SELECT id, email, name, avatar_url, email_verified_at, last_login_at, created_at, updated_at
     FROM users WHERE id = $1`,
    [userId],
  );

  if (rows.length === 0) {
    throw new NotFoundError('User');
  }

  return rows[0];
}

export async function updateProfile(
  userId: string,
  data: { name?: string; avatar_url?: string | null },
): Promise<SafeUser> {
  const updates: string[] = [];
  const values: unknown[] = [];
  let paramIndex = 1;

  if (data.name !== undefined) {
    updates.push(`name = $${paramIndex++}`);
    values.push(data.name);
  }

  if (data.avatar_url !== undefined) {
    updates.push(`avatar_url = $${paramIndex++}`);
    values.push(data.avatar_url);
  }

  if (updates.length === 0) {
    return getProfile(userId);
  }

  values.push(userId);
  const { rows } = await query(
    `UPDATE users SET ${updates.join(', ')} WHERE id = $${paramIndex}
     RETURNING id, email, name, avatar_url, email_verified_at, last_login_at, created_at, updated_at`,
    values,
  );

  return rows[0];
}

export async function changePassword(
  userId: string,
  currentPassword: string,
  newPassword: string,
): Promise<void> {
  const { rows } = await query('SELECT password_hash FROM users WHERE id = $1', [userId]);

  if (rows.length === 0) {
    throw new NotFoundError('User');
  }

  const isValid = await verifyPassword(currentPassword, rows[0].password_hash);
  if (!isValid) {
    throw new UnauthorizedError('Current password is incorrect');
  }

  const newHash = await hashPassword(newPassword);
  await query('UPDATE users SET password_hash = $1 WHERE id = $2', [newHash, userId]);
}

export async function getUserMemberships(
  userId: string,
  page: number,
  limit: number,
): Promise<PaginatedResult<{ organization_id: string; organization_name: string; role: UserRole; joined_at: Date }>> {
  const offset = (page - 1) * limit;

  const { rows: countRows } = await query(
    'SELECT COUNT(*) as total FROM memberships WHERE user_id = $1',
    [userId],
  );
  const total = parseInt(countRows[0].total, 10);

  const { rows } = await query(
    `SELECT m.organization_id, o.name as organization_name, m.role, m.joined_at
     FROM memberships m
     INNER JOIN organizations o ON o.id = m.organization_id
     WHERE m.user_id = $1
     ORDER BY m.joined_at ASC
     LIMIT $2 OFFSET $3`,
    [userId, limit, offset],
  );

  return {
    data: rows,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}
