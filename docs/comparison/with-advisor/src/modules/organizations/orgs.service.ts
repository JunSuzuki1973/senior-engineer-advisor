import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import { query } from '../../db/pool';
import { ConflictError, ForbiddenError, NotFoundError } from '../../utils/errors';
import type {
  Organization,
  Membership,
  Invitation,
  SafeUser,
  UserRole,
  PaginatedResult,
} from '../../types';

export async function createOrganization(name: string, userId: string): Promise<Organization> {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const existing = await query('SELECT id FROM organizations WHERE slug = $1', [slug]);
  if (existing.rowCount && existing.rowCount > 0) {
    throw new ConflictError('Organization with this name already exists');
  }

  const orgId = uuidv4();

  const { rows } = await query(
    `INSERT INTO organizations (id, name, slug) VALUES ($1, $2, $3) RETURNING *`,
    [orgId, name, slug],
  );

  await query(
    `INSERT INTO memberships (user_id, organization_id, role) VALUES ($1, $2, 'admin')`,
    [userId, orgId],
  );

  return rows[0];
}

export async function getOrganization(orgId: string, userId: string): Promise<Organization> {
  await ensureMembership(orgId, userId);

  const { rows } = await query('SELECT * FROM organizations WHERE id = $1', [orgId]);
  if (rows.length === 0) {
    throw new NotFoundError('Organization');
  }

  return rows[0];
}

export async function getUserOrganizations(userId: string): Promise<(Organization & { role: UserRole })[]> {
  const { rows } = await query(
    `SELECT o.*, m.role
     FROM organizations o
     INNER JOIN memberships m ON m.organization_id = o.id
     WHERE m.user_id = $1
     ORDER BY o.created_at ASC`,
    [userId],
  );

  return rows;
}

export async function updateOrganization(
  orgId: string,
  userId: string,
  data: { name?: string; plan?: string },
): Promise<Organization> {
  await requireAdmin(orgId, userId);

  const updates: string[] = [];
  const values: unknown[] = [];
  let paramIndex = 1;

  if (data.name) {
    const slug = data.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    updates.push(`name = $${paramIndex++}`, `slug = $${paramIndex++}`);
    values.push(data.name, slug);
  }

  if (data.plan) {
    updates.push(`plan = $${paramIndex++}`);
    values.push(data.plan);
  }

  if (updates.length === 0) {
    const { rows } = await query('SELECT * FROM organizations WHERE id = $1', [orgId]);
    return rows[0];
  }

  values.push(orgId);
  const { rows } = await query(
    `UPDATE organizations SET ${updates.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
    values,
  );

  if (rows.length === 0) {
    throw new NotFoundError('Organization');
  }

  return rows[0];
}

export async function deleteOrganization(orgId: string, userId: string): Promise<void> {
  await requireAdmin(orgId, userId);
  await query('DELETE FROM organizations WHERE id = $1', [orgId]);
}

export async function getMembers(
  orgId: string,
  userId: string,
  page: number,
  limit: number,
): Promise<PaginatedResult<SafeUser & { role: UserRole }>> {
  await ensureMembership(orgId, userId);

  const offset = (page - 1) * limit;

  const { rows: countRows } = await query(
    'SELECT COUNT(*) as total FROM memberships WHERE organization_id = $1',
    [orgId],
  );
  const total = parseInt(countRows[0].total, 10);

  const { rows } = await query(
    `SELECT u.id, u.email, u.name, u.avatar_url, u.last_login_at, u.created_at, m.role
     FROM users u
     INNER JOIN memberships m ON m.user_id = u.id
     WHERE m.organization_id = $1
     ORDER BY m.joined_at ASC
     LIMIT $2 OFFSET $3`,
    [orgId, limit, offset],
  );

  return {
    data: rows,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

export async function inviteMember(
  orgId: string,
  inviterId: string,
  email: string,
  role: UserRole,
): Promise<Invitation> {
  await requireAdmin(orgId, inviterId);

  const existingMember = await query(
    `SELECT u.id FROM users u
     INNER JOIN memberships m ON m.user_id = u.id
     WHERE m.organization_id = $1 AND u.email = $2`,
    [orgId, email.toLowerCase()],
  );

  if (existingMember.rowCount && existingMember.rowCount > 0) {
    throw new ConflictError('User is already a member of this organization');
  }

  const existingInvite = await query(
    `SELECT id FROM invitations
     WHERE organization_id = $1 AND email = $2 AND accepted_at IS NULL AND expires_at > NOW()`,
    [orgId, email.toLowerCase()],
  );

  if (existingInvite.rowCount && existingInvite.rowCount > 0) {
    throw new ConflictError('An active invitation already exists for this email');
  }

  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const inviteId = uuidv4();

  const { rows } = await query(
    `INSERT INTO invitations (id, organization_id, email, role, token, invited_by, expires_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [inviteId, orgId, email.toLowerCase(), role, token, inviterId, expiresAt],
  );

  return rows[0];
}

export async function acceptInvitation(token: string, userId: string): Promise<Membership> {
  const { rows } = await query(
    `SELECT * FROM invitations
     WHERE token = $1 AND expires_at > NOW() AND accepted_at IS NULL`,
    [token],
  );

  if (rows.length === 0) {
    throw new NotFoundError('Invitation');
  }

  const invitation = rows[0];

  const existingMembership = await query(
    'SELECT id FROM memberships WHERE user_id = $1 AND organization_id = $2',
    [userId, invitation.organization_id],
  );

  if (existingMembership.rowCount && existingMembership.rowCount > 0) {
    throw new ConflictError('Already a member of this organization');
  }

  const membershipId = uuidv4();
  const { rows: membershipRows } = await query(
    `INSERT INTO memberships (id, user_id, organization_id, role, invited_by)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [membershipId, userId, invitation.organization_id, invitation.role, invitation.invited_by],
  );

  await query(
    'UPDATE invitations SET accepted_at = NOW() WHERE id = $1',
    [invitation.id],
  );

  return membershipRows[0];
}

export async function changeMemberRole(
  orgId: string,
  actorId: string,
  targetUserId: string,
  newRole: UserRole,
): Promise<Membership> {
  await requireAdmin(orgId, actorId);

  const { rows } = await query(
    `UPDATE memberships SET role = $1
     WHERE organization_id = $2 AND user_id = $3
     RETURNING *`,
    [newRole, orgId, targetUserId],
  );

  if (rows.length === 0) {
    throw new NotFoundError('Membership');
  }

  return rows[0];
}

export async function removeMember(
  orgId: string,
  actorId: string,
  targetUserId: string,
): Promise<void> {
  await requireAdmin(orgId, actorId);

  if (actorId === targetUserId) {
    throw new ForbiddenError('Cannot remove yourself. Use delete organization instead.');
  }

  const result = await query(
    'DELETE FROM memberships WHERE organization_id = $1 AND user_id = $2',
    [orgId, targetUserId],
  );

  if (result.rowCount === 0) {
    throw new NotFoundError('Membership');
  }
}

async function requireAdmin(orgId: string, userId: string): Promise<void> {
  const { rows } = await query(
    "SELECT role FROM memberships WHERE organization_id = $1 AND user_id = $2 AND role = 'admin'",
    [orgId, userId],
  );

  if (rows.length === 0) {
    throw new ForbiddenError('Admin access required for this operation');
  }
}

async function ensureMembership(orgId: string, userId: string): Promise<void> {
  const { rows } = await query(
    'SELECT role FROM memberships WHERE organization_id = $1 AND user_id = $2',
    [orgId, userId],
  );

  if (rows.length === 0) {
    throw new ForbiddenError('Not a member of this organization');
  }
}
