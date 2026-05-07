import fs from "fs";
import path from "path";
import { pool } from "./pool";

const SCHEMA_PATH = path.resolve(__dirname, "..", "db", "schema.sql");

async function migrate() {
  const client = await pool.connect();
  try {
    const sql = fs.readFileSync(SCHEMA_PATH, "utf-8");
    await client.query(sql);
    console.log("Migration completed successfully.");
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

migrate();
