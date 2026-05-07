import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../index";
import { mockQuery } from "./setup";

describe("Membership Routes", () => {
  const validToken = "Bearer valid-token";
  const adminPayload = {
    sub: "admin-user",
    email: "admin@example.com",
    org_id: "org-1",
    role: "admin",
    type: "access",
  };
  const memberPayload = {
    sub: "member-user",
    email: "member@example.com",
    org_id: "org-1",
    role: "member",
    type: "access",
  };
  const viewerPayload = {
    sub: "viewer-user",
    email: "viewer@example.com",
    org_id: "org-1",
    role: "viewer",
    type: "access",
  };

  describe("GET /:orgId/members", () => {
    it("lists members for admin", async () => {
      jwt.verify.mockReturnValue(adminPayload);
      mockQuery.mockResolvedValueOnce({
        rows: [
          {
            id: "m-1", organization_id: "org-1", user_id: "admin-user", role: "admin",
            invited_at: new Date().toISOString(), joined_at: new Date().toISOString(),
            email: "admin@example.com", display_name: "Admin",
          },
          {
            id: "m-2", organization_id: "org-1", user_id: "member-user", role: "member",
            invited_at: new Date().toISOString(), joined_at: new Date().toISOString(),
            email: "member@example.com", display_name: "Member",
          },
        ],
      });

      const res = await request(app)
        .get("/api/organizations/org-1/members")
        .set("Authorization", validToken);

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
    });

    it("viewer can list members", async () => {
      jwt.verify.mockReturnValue(viewerPayload);
      mockQuery.mockResolvedValueOnce({ rows: [] });

      const res = await request(app)
        .get("/api/organizations/org-1/members")
        .set("Authorization", validToken);

      expect(res.status).toBe(200);
    });
  });

  describe("POST /:orgId/members/invite", () => {
    it("admin can invite a user", async () => {
      jwt.verify.mockReturnValue(adminPayload);
      mockQuery
        .mockResolvedValueOnce({ rows: [{ id: "target-user", email: "target@example.com", display_name: "Target", created_at: new Date().toISOString() }] })
        .mockResolvedValueOnce({ rows: [] })
        .mockResolvedValueOnce({
          rows: [{
            id: "inv-1", organization_id: "org-1", user_id: "target-user", role: "member",
            invited_at: new Date().toISOString(), joined_at: null,
          }],
        });

      const res = await request(app)
        .post("/api/organizations/org-1/members/invite")
        .set("Authorization", validToken)
        .send({ email: "target@example.com", role: "member" });

      expect(res.status).toBe(201);
      expect(res.body.membership.role).toBe("member");
      expect(res.body.user.email).toBe("target@example.com");
    });

    it("member cannot invite with admin role", async () => {
      jwt.verify.mockReturnValue(memberPayload);

      const res = await request(app)
        .post("/api/organizations/org-1/members/invite")
        .set("Authorization", validToken)
        .send({ email: "target@example.com", role: "admin" });

      expect(res.status).toBe(403);
      expect(res.body.error.code).toBe("FORBIDDEN");
    });

    it("viewer cannot invite", async () => {
      jwt.verify.mockReturnValue(viewerPayload);

      const res = await request(app)
        .post("/api/organizations/org-1/members/invite")
        .set("Authorization", validToken)
        .send({ email: "target@example.com", role: "viewer" });

      expect(res.status).toBe(403);
    });

    it("returns 400 for invalid role", async () => {
      jwt.verify.mockReturnValue(adminPayload);

      const res = await request(app)
        .post("/api/organizations/org-1/members/invite")
        .set("Authorization", validToken)
        .send({ email: "target@example.com", role: "superadmin" });

      expect(res.status).toBe(400);
    });
  });

  describe("PUT /:orgId/members/:userId/role", () => {
    it("admin can change member role", async () => {
      jwt.verify.mockReturnValue(adminPayload);
      mockQuery
        .mockResolvedValueOnce({ rows: [{ id: "m-2", role: "viewer" }] })
        .mockResolvedValueOnce({
          rows: [{
            id: "m-2", organization_id: "org-1", user_id: "member-user", role: "viewer",
            invited_at: new Date().toISOString(), joined_at: new Date().toISOString(),
          }],
        });

      const res = await request(app)
        .put("/api/organizations/org-1/members/member-user/role")
        .set("Authorization", validToken)
        .send({ role: "viewer" });

      expect(res.status).toBe(200);
    });

    it("member cannot change admin role", async () => {
      jwt.verify.mockReturnValue(memberPayload);
      mockQuery.mockResolvedValueOnce({ rows: [{ id: "m-1", role: "admin" }] });

      const res = await request(app)
        .put("/api/organizations/org-1/members/admin-user/role")
        .set("Authorization", validToken)
        .send({ role: "viewer" });

      expect(res.status).toBe(403);
    });
  });

  describe("DELETE /:orgId/members/:userId", () => {
    it("admin can remove member", async () => {
      jwt.verify.mockReturnValue(adminPayload);
      mockQuery
        .mockResolvedValueOnce({ rows: [{ id: "m-2", role: "member" }] })
        .mockResolvedValueOnce({ rowCount: 1 });

      const res = await request(app)
        .delete("/api/organizations/org-1/members/member-user")
        .set("Authorization", validToken);

      expect(res.status).toBe(204);
    });

    it("viewer cannot remove", async () => {
      jwt.verify.mockReturnValue(viewerPayload);

      const res = await request(app)
        .delete("/api/organizations/org-1/members/member-user")
        .set("Authorization", validToken);

      expect(res.status).toBe(403);
    });
  });

  describe("POST /:orgId/members/accept-invitation", () => {
    it("accepts pending invitation", async () => {
      jwt.verify.mockReturnValue(memberPayload);
      mockQuery.mockResolvedValueOnce({
        rows: [{
          id: "m-3", organization_id: "org-1", user_id: "member-user", role: "member",
          invited_at: new Date().toISOString(), joined_at: new Date().toISOString(),
        }],
      });

      const res = await request(app)
        .post("/api/organizations/org-1/members/accept-invitation")
        .set("Authorization", validToken);

      expect(res.status).toBe(200);
      expect(res.body.role).toBe("member");
    });
  });
});
