import { Request, Response, NextFunction } from 'express';
import { ForbiddenError, UnauthorizedError } from '../utils/errors';
import type { UserRole } from '../types';

const ROLE_HIERARCHY: Record<UserRole, number> = {
  admin: 3,
  member: 2,
  viewer: 1,
};

export function authorize(...allowedRoles: UserRole[]): (req: Request, _res: Response, next: NextFunction) => void {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      throw new UnauthorizedError('Authentication required');
    }

    const userRole = req.user.role;

    if (!userRole) {
      throw new ForbiddenError('No role associated with current organization context');
    }

    const userLevel = ROLE_HIERARCHY[userRole];
    const allowed = allowedRoles.some((role) => userLevel >= ROLE_HIERARCHY[role]);

    if (!allowed) {
      throw new ForbiddenError(`Requires one of: ${allowedRoles.join(', ')}`);
    }

    next();
  };
}
