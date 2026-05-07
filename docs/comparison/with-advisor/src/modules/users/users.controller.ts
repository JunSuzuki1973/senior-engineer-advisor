import { Request, Response, NextFunction } from 'express';
import * as usersService from './users.service';
import type { ApiResponse } from '../../types';

export async function getProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await usersService.getProfile(req.user!.sub);
    res.json({ success: true, data: user } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function updateProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await usersService.updateProfile(req.user!.sub, req.body);
    res.json({ success: true, data: user } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function changePassword(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await usersService.changePassword(req.user!.sub, req.body.currentPassword, req.body.newPassword);
    res.json({ success: true } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function getMemberships(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit as string, 10) || 20, 100);
    const result = await usersService.getUserMemberships(req.user!.sub, page, limit);
    res.json({ success: true, data: result } as ApiResponse);
  } catch (err) {
    next(err);
  }
}
