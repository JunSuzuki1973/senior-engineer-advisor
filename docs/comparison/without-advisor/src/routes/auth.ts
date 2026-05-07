import { Router } from "express";
import { z } from "zod";
import * as authService from "../services/auth.service";
import { authenticate } from "../middleware/auth";
import { ValidationError } from "../utils/errors";
import { asyncHandler } from "../utils/async-handler";

const router = Router();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  displayName: z.string().min(1).max(255),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const refreshSchema = z.object({
  refreshToken: z.string(),
});

const switchOrgSchema = z.object({
  orgId: z.string().uuid(),
});

router.post(
  "/register",
  asyncHandler(async (req, res) => {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new ValidationError(parsed.error.issues.map((i) => i.message).join(", "));
    }

    const user = await authService.registerUser(
      parsed.data.email,
      parsed.data.password,
      parsed.data.displayName,
    );

    res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        displayName: user.display_name,
        createdAt: user.created_at,
      },
    });
  }),
);

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new ValidationError(parsed.error.issues.map((i) => i.message).join(", "));
    }

    const { user, tokens } = await authService.loginUser(
      parsed.data.email,
      parsed.data.password,
    );

    res.json({
      user: {
        id: user.id,
        email: user.email,
        displayName: user.display_name,
        createdAt: user.created_at,
      },
      tokens,
    });
  }),
);

router.post(
  "/refresh",
  asyncHandler(async (req, res) => {
    const parsed = refreshSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new ValidationError(parsed.error.issues.map((i) => i.message).join(", "));
    }

    const { accessToken, newRefreshToken } = await authService.refreshAccessToken(
      parsed.data.refreshToken,
    );

    res.json({ accessToken, refreshToken: newRefreshToken });
  }),
);

router.post(
  "/logout",
  authenticate,
  asyncHandler(async (req, res) => {
    const parsed = refreshSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new ValidationError(parsed.error.issues.map((i) => i.message).join(", "));
    }

    await authService.logoutUser(parsed.data.refreshToken);
    res.json({ message: "Logged out successfully" });
  }),
);

router.post(
  "/switch-org",
  authenticate,
  asyncHandler(async (req, res) => {
    const parsed = switchOrgSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new ValidationError(parsed.error.issues.map((i) => i.message).join(", "));
    }

    const { accessToken } = await authService.switchOrganization(
      req.auth!.userId,
      parsed.data.orgId,
    );

    res.json({ accessToken });
  }),
);

router.get(
  "/me",
  authenticate,
  (req, res) => {
    res.json({ auth: req.auth });
  },
);

export default router;
