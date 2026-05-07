import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { AccessTokenPayload, AuthenticatedRequest } from "../types";
import { UnauthorizedError } from "../utils/errors";

declare global {
  namespace Express {
    interface Request {
      auth?: AuthenticatedRequest;
    }
  }
}

export function authenticate(req: Request, _res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    throw new UnauthorizedError("Missing or invalid authorization header");
  }

  const token = header.slice(7);

  try {
    const decoded = jwt.verify(token, config.jwt.accessSecret) as AccessTokenPayload;
    if (decoded.type !== "access") {
      throw new UnauthorizedError("Invalid token type");
    }

    req.auth = {
      userId: decoded.sub,
      email: decoded.email,
      orgId: decoded.org_id,
      role: decoded.role,
    };

    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      throw new UnauthorizedError("Access token has expired");
    }
    if (err instanceof jwt.JsonWebTokenError) {
      throw new UnauthorizedError("Invalid access token");
    }
    throw err;
  }
}
