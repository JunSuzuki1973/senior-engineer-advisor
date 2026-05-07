import { Pool, PoolConfig } from 'pg';
import { config } from '../config';

const poolConfig: PoolConfig = {
  connectionString: config.database.url,
  min: config.database.poolMin,
  max: config.database.poolMax,
  idleTimeoutMillis: config.database.poolIdleTimeout,
};

const pool = new Pool(poolConfig);

pool.on('error', (err) => {
  console.error('Unexpected database pool error', err);
});

export const query = async (text: string, params?: unknown[]) => {
  const start = Date.now();
  const result = await pool.query(text, params);
  const duration = Date.now() - start;

  if (config.env === 'development') {
    console.debug('Query executed', { text: text.substring(0, 80), duration, rows: result.rowCount });
  }

  return result;
};

export const getClient = () => pool.connect();

export default pool;
