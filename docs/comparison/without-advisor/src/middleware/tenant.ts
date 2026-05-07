import { Request, Response, NextFunction } from "express";
import { ForbiddenError } from "../utils/errors";

export function tenantGuard(req: Request, _res: Response, next: NextFunction): void {
  const paramOrgId = req.params.orgId;

  if (!paramOrgId) {
    return next();
  }

  if (!req.auth) {
    return next();
  }

  if (req.auth.orgId && req.auth.orgId !== paramOrgId) {
    if (req.auth.role === "admin") {
      return next();
    }
    throw new ForbiddenError("Cross-organization access is not permitted for your role");
  }

  next();
}
