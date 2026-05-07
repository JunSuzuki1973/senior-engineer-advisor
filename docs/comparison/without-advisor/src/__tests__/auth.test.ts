import request from "supertest";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import app from "../index";
import { mockQuery } from "./setup";

jest.mock("jsonwebtoken");
jest.mock("bcrypt");

const mockedJwt = jwt as jest.Mocked<typeof jwt>;
const mockedBcrypt = bcrypt as jest.Mocked<typeof bcrypt>;

describe("Auth Routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("POST /api/auth/register", () => {
    it("returns 201 with user on success", async () => {
      mockQuery
        .mockResolvedValueOnce({ rows: [] })
        .mockResolvedValueOnce({
          rows: [
            {
              id: "user-1",
              email: "test@example.com",
              password_hash: "$2b$12$hash",
              display_name: "Test User",
              created_at: new Date().toISOString(),
            },
          ],
        });

      mockedBcrypt.hash.mockResolvedValue("$2b$12$hash" as never);

      const res = await request(app)
        .post("/api/auth/register")
        .send({ email: "test@example.com", password: "password123", displayName: "Test User" });

      expect(res.status).toBe(201);
      expect(res.body.user.email).toBe("test@example.com");
      expect(res.body.user.displayName).toBe("Test User");
    });

    it("returns 409 for duplicate email", async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [{ id: "existing-user" }],
      });

      const res = await request(app)
        .post("/api/auth/register")
        .send({ email: "dup@example.com", password: "password123", displayName: "Dup" });

      expect(res.status).toBe(409);
      expect(res.body.error.code).toBe("CONFLICT");
    });

    it("returns 400 for invalid email", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send({ email: "not-email", password: "password123", displayName: "Test" });

      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe("VALIDATION_ERROR");
    });

    it("returns 400 for short password", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send({ email: "test@example.com", password: "short", displayName: "Test" });

      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe("VALIDATION_ERROR");
    });
  });

  describe("POST /api/auth/login", () => {
    it("returns tokens on successful login", async () => {
      const userRow = {
        id: "user-1",
        email: "test@example.com",
        password_hash: "$2b$12$hash",
        display_name: "Test User",
        created_at: new Date().toISOString(),
      };

      mockQuery
        .mockResolvedValueOnce({ rows: [userRow] })
        .mockResolvedValueOnce({ rows: [{ organization_id: "org-1", role: "admin" }] })
        .mockResolvedValueOnce({ rows: [] });

      mockedBcrypt.compare.mockResolvedValue(true as never);
      mockedJwt.sign.mockReturnValue("signed-token" as any);

      const res = await request(app)
        .post("/api/auth/login")
        .send({ email: "test@example.com", password: "password123" });

      expect(res.status).toBe(200);
      expect(res.body.user.email).toBe("test@example.com");
      expect(res.body.tokens.accessToken).toBe("signed-token");
      expect(res.body.tokens.refreshToken).toBe("signed-token");
    });

    it("returns 401 for wrong password", async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [{ id: "user-1", email: "test@example.com", password_hash: "hash" }],
      });

      mockedBcrypt.compare.mockResolvedValue(false as never);

      const res = await request(app)
        .post("/api/auth/login")
        .send({ email: "test@example.com", password: "wrong" });

      expect(res.status).toBe(401);
    });

    it("returns 401 for nonexistent user", async () => {
      mockQuery.mockResolvedValueOnce({ rows: [] });

      const res = await request(app)
        .post("/api/auth/login")
        .send({ email: "ghost@example.com", password: "password123" });

      expect(res.status).toBe(401);
    });
  });

  describe("POST /api/auth/refresh", () => {
    it("returns new token pair", async () => {
      mockedJwt.verify.mockReturnValue({
        sub: "user-1",
        token_id: "token-1",
        type: "refresh",
      } as any);

      mockQuery
        .mockResolvedValueOnce({ rows: [{ id: "token-1", user_id: "user-1", expires_at: new Date(Date.now() + 86400000).toISOString(), revoked: false }] })
        .mockResolvedValueOnce({ rows: [] })
        .mockResolvedValueOnce({ rows: [{ id: "user-1", email: "test@example.com" }] })
        .mockResolvedValueOnce({ rows: [{ organization_id: "org-1", role: "member" }] })
        .mockResolvedValueOnce({ rows: [] });

      mockedJwt.sign.mockReturnValue("new-signed-token" as any);

      const res = await request(app)
        .post("/api/auth/refresh")
        .send({ refreshToken: "valid-refresh-token" });

      expect(res.status).toBe(200);
      expect(res.body.accessToken).toBe("new-signed-token");
      expect(res.body.refreshToken).toBe("new-signed-token");
    });

    it("returns 401 for invalid refresh token", async () => {
      mockedJwt.verify.mockImplementation(() => {
        throw new Error("invalid");
      });

      const res = await request(app)
        .post("/api/auth/refresh")
        .send({ refreshToken: "invalid-token" });

      expect(res.status).toBe(401);
    });
  });

  describe("GET /api/auth/me", () => {
    it("returns auth info for authenticated user", async () => {
      mockedJwt.verify.mockReturnValue({
        sub: "user-1",
        email: "test@example.com",
        org_id: "org-1",
        role: "admin",
        type: "access",
      } as any);

      const res = await request(app)
        .get("/api/auth/me")
        .set("Authorization", "Bearer valid-token");

      expect(res.status).toBe(200);
      expect(res.body.auth.userId).toBe("user-1");
      expect(res.body.auth.role).toBe("admin");
    });

    it("returns 401 without auth header", async () => {
      const res = await request(app).get("/api/auth/me");
      expect(res.status).toBe(401);
    });
  });

  describe("POST /api/auth/switch-org", () => {
    it("returns new access token for valid org switch", async () => {
      mockedJwt.verify.mockReturnValue({
        sub: "user-1",
        email: "test@example.com",
        org_id: "org-1",
        role: "admin",
        type: "access",
      } as any);

      mockQuery
        .mockResolvedValueOnce({ rows: [{ role: "member" }] })
        .mockResolvedValueOnce({ rows: [{ id: "user-1", email: "test@example.com" }] });

      mockedJwt.sign.mockReturnValue("switched-token" as any);

      const res = await request(app)
        .post("/api/auth/switch-org")
        .set("Authorization", "Bearer valid-token")
        .send({ orgId: "11111111-1111-1111-1111-111111111111" });

      expect(res.status).toBe(200);
      expect(res.body.accessToken).toBe("switched-token");
    });

    it("returns 401 without auth", async () => {
      const res = await request(app)
        .post("/api/auth/switch-org")
        .send({ orgId: "11111111-1111-1111-1111-111111111111" });

      expect(res.status).toBe(401);
    });
  });
});
