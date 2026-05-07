import { Request, Response, NextFunction } from 'express';
import * as orgsService from './orgs.service';
import type { ApiResponse } from '../../types';

export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const org = await orgsService.createOrganization(req.body.name, req.user!.sub);
    res.status(201).json({ success: true, data: org } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const org = await orgsService.getOrganization(req.params.orgId, req.user!.sub);
    res.json({ success: true, data: org } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function list(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const orgs = await orgsService.getUserOrganizations(req.user!.sub);
    res.json({ success: true, data: orgs } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const org = await orgsService.updateOrganization(req.params.orgId, req.user!.sub, req.body);
    res.json({ success: true, data: org } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await orgsService.deleteOrganization(req.params.orgId, req.user!.sub);
    res.json({ success: true } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function getMembers(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit as string, 10) || 20, 100);

    const result = await orgsService.getMembers(req.params.orgId, req.user!.sub, page, limit);
    res.json({ success: true, data: result } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function inviteMember(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const invitation = await orgsService.inviteMember(
      req.params.orgId,
      req.user!.sub,
      req.body.email,
      req.body.role,
    );
    res.status(201).json({ success: true, data: invitation } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function acceptInvitation(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const membership = await orgsService.acceptInvitation(req.params.token, req.user!.sub);
    res.json({ success: true, data: membership } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function changeRole(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const membership = await orgsService.changeMemberRole(
      req.params.orgId,
      req.user!.sub,
      req.params.userId,
      req.body.role,
    );
    res.json({ success: true, data: membership } as ApiResponse);
  } catch (err) {
    next(err);
  }
}

export async function removeMember(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await orgsService.removeMember(req.params.orgId, req.user!.sub, req.params.userId);
    res.json({ success: true } as ApiResponse);
  } catch (err) {
    next(err);
  }
}
