import { Router, Request, Response, NextFunction } from "express";
import { z } from "zod";
import * as orgService from "../services/organization.service";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/rbac";
import { ValidationError } from "../utils/errors";
import { asyncHandler } from "../utils/async-handler";

const router = Router();

const createOrgSchema = z.object({
  name: z.string().min(1).max(255),
  slug: z
    .string()
    .min(1)
    .max(255)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase alphanumeric with hyphens"),
});

router.post(
  "/",
  authenticate,
  asyncHandler(async (req, res) => {
    const parsed = createOrgSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new ValidationError(parsed.error.issues.map((i) => i.message).join(", "));
    }

    const org = await orgService.createOrganization(
      parsed.data.name,
      parsed.data.slug,
      req.auth!.userId,
    );

    res.status(201).json(org);
  }),
);

router.get(
  "/",
  authenticate,
  asyncHandler(async (_req, res) => {
    const orgs = await orgService.listUserOrganizations(_req.auth!.userId);
    res.json(orgs);
  }),
);

router.get(
  "/:orgId",
  authenticate,
  requireRole("admin", "member", "viewer"),
  asyncHandler(async (req, res) => {
    const org = await orgService.getOrganization(req.params.orgId);
    res.json(org);
  }),
);

router.delete(
  "/:orgId",
  authenticate,
  requireRole("admin"),
  asyncHandler(async (req, res) => {
    await orgService.deleteOrganization(req.params.orgId);
    res.status(204).send();
  }),
);

export default router;
