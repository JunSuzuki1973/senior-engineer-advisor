import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../index";
import { mockQuery, mockConnect, mockClient, mockRelease } from "./setup";

describe("Organization Routes", () => {
  const validToken = "Bearer valid-token";
  const authPayload = {
    sub: "user-1",
    email: "test@example.com",
    org_id: "org-1",
    role: "admin",
    type: "access",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jwt.verify.mockReturnValue(authPayload);
  });

  describe("POST /api/organizations", () => {
    it("creates an organization and returns 201", async () => {
      mockConnect.mockResolvedValue(mockClient);
      (mockClient.query as jest.Mock).mockResolvedValueOnce({ rows: [{ id: "org-new", name: "My Org", slug: "my-org", created_at: new Date().toISOString() }] });
      (mockClient.query as jest.Mock).mockResolvedValueOnce({ rows: [] });
      mockRelease.mockResolvedValue(undefined);

      const res = await request(app)
        .post("/api/organizations")
        .set("Authorization", validToken)
        .send({ name: "My Org", slug: "my-org" });

      expect(res.status).toBe(201);
      expect(res.body.name).toBe("My Org");
      expect(res.body.slug).toBe("my-org");
    });

    it("returns 400 for invalid slug", async () => {
      const res = await request(app)
        .post("/api/organizations")
        .set("Authorization", validToken)
        .send({ name: "Bad Slug", slug: "MY BAD SLUG" });

      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe("VALIDATION_ERROR");
    });

    it("returns 401 without auth", async () => {
      const res = await request(app)
        .post("/api/organizations")
        .send({ name: "No Auth", slug: "no-auth" });

      expect(res.status).toBe(401);
    });
  });

  describe("GET /api/organizations", () => {
    it("lists organizations for the user", async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [
          { id: "org-1", name: "Org 1", slug: "org-1", created_at: new Date().toISOString() },
          { id: "org-2", name: "Org 2", slug: "org-2", created_at: new Date().toISOString() },
        ],
      });

      const res = await request(app)
        .get("/api/organizations")
        .set("Authorization", validToken);

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
    });
  });

  describe("GET /api/organizations/:orgId", () => {
    it("returns organization details", async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [{ id: "org-1", name: "Org 1", slug: "org-1", created_at: new Date().toISOString() }],
      });

      const res = await request(app)
        .get("/api/organizations/org-1")
        .set("Authorization", validToken);

      expect(res.status).toBe(200);
      expect(res.body.name).toBe("Org 1");
    });

    it("returns 404 for missing org", async () => {
      mockQuery.mockResolvedValueOnce({ rows: [] });

      const res = await request(app)
        .get("/api/organizations/missing-org")
        .set("Authorization", validToken);

      expect(res.status).toBe(404);
    });
  });

  describe("DELETE /api/organizations/:orgId", () => {
    it("admin can delete org and returns 204", async () => {
      mockQuery.mockResolvedValueOnce({ rows: [{ id: "org-1" }] });

      const res = await request(app)
        .delete("/api/organizations/org-1")
        .set("Authorization", validToken);

      expect(res.status).toBe(204);
    });

    it("member cannot delete org", async () => {
      jwt.verify.mockReturnValue({ ...authPayload, role: "member" });

      const res = await request(app)
        .delete("/api/organizations/org-1")
        .set("Authorization", validToken);

      expect(res.status).toBe(403);
    });

    it("viewer cannot delete org", async () => {
      jwt.verify.mockReturnValue({ ...authPayload, role: "viewer" });

      const res = await request(app)
        .delete("/api/organizations/org-1")
        .set("Authorization", validToken);

      expect(res.status).toBe(403);
    });
  });
});
