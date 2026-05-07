import { Request, Response, NextFunction } from "express";
import { Role } from "../types";
import { ForbiddenError, UnauthorizedError } from "../utils/errors";

export function requireRole(...allowedRoles: Role[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.auth) {
      throw new UnauthorizedError("Authentication required");
    }

    if (!allowedRoles.includes(req.auth.role)) {
      throw new ForbiddenError(
        `This action requires one of the following roles: ${allowedRoles.join(", ")}`,
      );
    }

    next();
  };
}
