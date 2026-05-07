import { Router, Request, Response, NextFunction } from "express";
import { z } from "zod";
import * as membershipService from "../services/membership.service";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/rbac";
import { Role } from "../types";
import { ValidationError } from "../utils/errors";
import { asyncHandler } from "../utils/async-handler";

const router = Router({ mergeParams: true });

const inviteSchema = z.object({
  email: z.string().email(),
  role: z.enum(["admin", "member", "viewer"]),
});

const updateRoleSchema = z.object({
  role: z.enum(["admin", "member", "viewer"]),
});

router.get(
  "/",
  authenticate,
  requireRole("admin", "member", "viewer"),
  asyncHandler(async (req, res) => {
    const members = await membershipService.listMembers(req.params.orgId);
    res.json(members);
  }),
);

router.post(
  "/invite",
  authenticate,
  requireRole("admin", "member"),
  asyncHandler(async (req, res) => {
    const parsed = inviteSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new ValidationError(parsed.error.issues.map((i) => i.message).join(", "));
    }

    const result = await membershipService.inviteUser(
      req.params.orgId,
      parsed.data.email,
      parsed.data.role as Role,
      req.auth!.role,
    );

    res.status(201).json(result);
  }),
);

router.put(
  "/:userId/role",
  authenticate,
  requireRole("admin", "member"),
  asyncHandler(async (req, res) => {
    const parsed = updateRoleSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new ValidationError(parsed.error.issues.map((i) => i.message).join(", "));
    }

    const membership = await membershipService.updateMemberRole(
      req.params.orgId,
      req.params.userId,
      parsed.data.role as Role,
      req.auth!.userId,
      req.auth!.role,
    );

    res.json(membership);
  }),
);

router.delete(
  "/:userId",
  authenticate,
  requireRole("admin", "member"),
  asyncHandler(async (req, res) => {
    await membershipService.removeMember(
      req.params.orgId,
      req.params.userId,
      req.auth!.role,
    );

    res.status(204).send();
  }),
);

router.post(
  "/accept-invitation",
  authenticate,
  asyncHandler(async (req, res) => {
    const membership = await membershipService.acceptInvitation(
      req.auth!.userId,
      req.params.orgId,
    );

    res.json(membership);
  }),
);

export default router;
