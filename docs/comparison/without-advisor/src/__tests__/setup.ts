import { Pool, PoolClient } from "pg";

const mockQuery = jest.fn();
const mockConnect = jest.fn();
const mockRelease = jest.fn();
const mockEnd = jest.fn();

const mockClient: Partial<PoolClient> = {
  query: mockQuery,
  release: mockRelease,
};

mockConnect.mockResolvedValue(mockClient);
mockQuery.mockResolvedValue({ rows: [], rowCount: 0 });
mockEnd.mockResolvedValue(undefined);

jest.mock("../db/pool", () => ({
  pool: {
    query: mockQuery,
    connect: mockConnect,
    end: mockEnd,
  } as unknown as Pool,
}));

export { mockQuery, mockConnect, mockRelease, mockEnd, mockClient };
