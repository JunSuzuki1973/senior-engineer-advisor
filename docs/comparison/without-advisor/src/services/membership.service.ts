import { pool } from "../db/pool";
import { Membership, Role, User } from "../types";
import { ForbiddenError, NotFoundError, ConflictError } from "../utils/errors";

const ROLE_HIERARCHY: Record<Role, number> = {
  admin: 3,
  member: 2,
  viewer: 1,
};

function canManageRole(actorRole: Role, targetRole: Role): boolean {
  return ROLE_HIERARCHY[actorRole] > ROLE_HIERARCHY[targetRole];
}

export async function inviteUser(
  orgId: string,
  email: string,
  role: Role,
  invitedByRole: Role,
): Promise<{ membership: Membership; user: User }> {
  if (!canManageRole(invitedByRole, role)) {
    throw new ForbiddenError("Cannot assign a role equal to or higher than your own");
  }

  const userResult = await pool.query(
    "SELECT id, email, display_name, created_at FROM users WHERE email = $1",
    [email],
  );
  if (userResult.rows.length === 0) {
    throw new NotFoundError("User");
  }

  const user = userResult.rows[0] as User;

  const existing = await pool.query(
    `SELECT id FROM memberships
     WHERE organization_id = $1 AND user_id = $2`,
    [orgId, user.id],
  );
  if (existing.rows.length > 0) {
    throw new ConflictError("User is already a member of this organization");
  }

  const result = await pool.query(
    `INSERT INTO memberships (organization_id, user_id, role, invited_at)
     VALUES ($1, $2, $3, now())
     RETURNING id, organization_id, user_id, role, invited_at, joined_at`,
    [orgId, user.id, role],
  );

  return { membership: result.rows[0], user };
}

export async function updateMemberRole(
  orgId: string,
  targetUserId: string,
  newRole: Role,
  actorUserId: string,
  actorRole: Role,
): Promise<Membership> {
  if (targetUserId === actorUserId) {
    throw new ForbiddenError("Cannot change your own role");
  }

  if (!canManageRole(actorRole, newRole)) {
    throw new ForbiddenError("Cannot assign a role equal to or higher than your own");
  }

  const targetResult = await pool.query(
    `SELECT id, role FROM memberships
     WHERE organization_id = $1 AND user_id = $2`,
    [orgId, targetUserId],
  );
  if (targetResult.rows.length === 0) {
    throw new NotFoundError("Membership");
  }

  if (!canManageRole(actorRole, targetResult.rows[0].role)) {
    throw new ForbiddenError("Cannot modify a user with a role equal to or higher than your own");
  }

  const result = await pool.query(
    `UPDATE memberships SET role = $1
     WHERE organization_id = $2 AND user_id = $3
     RETURNING id, organization_id, user_id, role, invited_at, joined_at`,
    [newRole, orgId, targetUserId],
  );

  return result.rows[0];
}

export async function removeMember(
  orgId: string,
  targetUserId: string,
  actorRole: Role,
): Promise<void> {
  const targetResult = await pool.query(
    `SELECT id, role FROM memberships
     WHERE organization_id = $1 AND user_id = $2`,
    [orgId, targetUserId],
  );
  if (targetResult.rows.length === 0) {
    throw new NotFoundError("Membership");
  }

  if (!canManageRole(actorRole, targetResult.rows[0].role)) {
    throw new ForbiddenError("Cannot remove a user with a role equal to or higher than your own");
  }

  await pool.query(
    "DELETE FROM memberships WHERE organization_id = $1 AND user_id = $2",
    [orgId, targetUserId],
  );
}

export async function listMembers(orgId: string): Promise<
  Array<Membership & { email: string; display_name: string }>
> {
  const result = await pool.query(
    `SELECT m.id, m.organization_id, m.user_id, m.role, m.invited_at, m.joined_at,
            u.email, u.display_name
     FROM memberships m
     INNER JOIN users u ON u.id = m.user_id
     WHERE m.organization_id = $1
     ORDER BY
       CASE m.role
         WHEN 'admin' THEN 1
         WHEN 'member' THEN 2
         WHEN 'viewer' THEN 3
       END,
       m.invited_at ASC`,
    [orgId],
  );
  return result.rows;
}

export async function acceptInvitation(
  userId: string,
  orgId: string,
): Promise<Membership> {
  const result = await pool.query(
    `UPDATE memberships SET joined_at = now()
     WHERE organization_id = $1 AND user_id = $2 AND joined_at IS NULL
     RETURNING id, organization_id, user_id, role, invited_at, joined_at`,
    [orgId, userId],
  );
  if (result.rows.length === 0) {
    throw new NotFoundError("Pending invitation");
  }
  return result.rows[0];
}
