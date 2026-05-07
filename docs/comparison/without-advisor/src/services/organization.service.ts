import { pool } from "../db/pool";
import { Organization } from "../types";
import { ConflictError, NotFoundError } from "../utils/errors";

export async function createOrganization(
  name: string,
  slug: string,
  creatorId: string,
): Promise<Organization> {
  const existing = await pool.query(
    "SELECT id FROM organizations WHERE slug = $1",
    [slug],
  );
  if (existing.rows.length > 0) {
    throw new ConflictError("An organization with this slug already exists");
  }

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const result = await client.query(
      `INSERT INTO organizations (name, slug)
       VALUES ($1, $2)
       RETURNING id, name, slug, created_at`,
      [name, slug],
    );
    const org = result.rows[0];

    await client.query(
      `INSERT INTO memberships (organization_id, user_id, role, joined_at)
       VALUES ($1, $2, 'admin', now())`,
      [org.id, creatorId],
    );

    await client.query("COMMIT");
    return org;
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}

export async function getOrganization(orgId: string): Promise<Organization> {
  const result = await pool.query(
    "SELECT id, name, slug, created_at FROM organizations WHERE id = $1",
    [orgId],
  );
  if (result.rows.length === 0) {
    throw new NotFoundError("Organization");
  }
  return result.rows[0];
}

export async function listUserOrganizations(
  userId: string,
): Promise<Organization[]> {
  const result = await pool.query(
    `SELECT o.id, o.name, o.slug, o.created_at
     FROM organizations o
     INNER JOIN memberships m ON m.organization_id = o.id
     WHERE m.user_id = $1
     ORDER BY o.created_at DESC`,
    [userId],
  );
  return result.rows;
}

export async function deleteOrganization(orgId: string): Promise<void> {
  const result = await pool.query(
    "DELETE FROM organizations WHERE id = $1 RETURNING id",
    [orgId],
  );
  if (result.rows.length === 0) {
    throw new NotFoundError("Organization");
  }
}
