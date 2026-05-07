import { Request, Response, NextFunction } from 'express';
import * as authService from './auth.service';
import { config } from '../../config';
import type { ApiResponse, SafeUser, AuthTokens } from '../../types';

export async function register(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { user, tokens } = await authService.register(req.body);
    setRefreshCookie(res, tokens.refreshToken);

    const response: ApiResponse<{ user: SafeUser; accessToken: string }> = {
      success: true,
      data: { user, accessToken: tokens.accessToken },
    };

    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
}

export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { user, tokens } = await authService.login(req.body);
    setRefreshCookie(res, tokens.refreshToken);

    const response: ApiResponse<{ user: SafeUser; accessToken: string }> = {
      success: true,
      data: { user, accessToken: tokens.accessToken },
    };

    res.json(response);
  } catch (err) {
    next(err);
  }
}

export async function refresh(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const refreshToken = req.cookies?.[config.refreshCookie.name];
    if (!refreshToken) {
      res.status(401).json({ success: false, error: { code: 'UNAUTHORIZED', message: 'No refresh token provided' } });
      return;
    }

    const tokens = await authService.refresh(refreshToken);
    setRefreshCookie(res, tokens.refreshToken);

    const response: ApiResponse<{ accessToken: string }> = {
      success: true,
      data: { accessToken: tokens.accessToken },
    };

    res.json(response);
  } catch (err) {
    next(err);
  }
}

export async function logout(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const refreshToken = req.cookies?.[config.refreshCookie.name];
    if (refreshToken && req.user?.sub) {
      await authService.logout(refreshToken, req.user.sub);
    }

    res.clearCookie(config.refreshCookie.name, {
      path: config.refreshCookie.path,
      httpOnly: config.refreshCookie.httpOnly,
      secure: config.refreshCookie.secure,
      sameSite: config.refreshCookie.sameSite,
    });

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
}

function setRefreshCookie(res: Response, token: string): void {
  const maxAge = parseDuration(config.jwt.refreshExpiresIn);
  res.cookie(config.refreshCookie.name, token, {
    httpOnly: config.refreshCookie.httpOnly,
    secure: config.refreshCookie.secure,
    sameSite: config.refreshCookie.sameSite,
    path: config.refreshCookie.path,
    maxAge,
  });
}

function parseDuration(duration: string): number {
  const match = duration.match(/^(\d+)(s|m|h|d)$/);
  if (!match) return 7 * 24 * 60 * 60 * 1000;
  const value = parseInt(match[1], 10);
  const unit = match[2];
  switch (unit) {
    case 's': return value * 1000;
    case 'm': return value * 60 * 1000;
    case 'h': return value * 3600 * 1000;
    case 'd': return value * 86400 * 1000;
    default: return 7 * 24 * 60 * 60 * 1000;
  }
}
