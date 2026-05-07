import { Router, RequestHandler } from 'express';
import { authenticate } from '../../middleware/authenticate';
import { authorize } from '../../middleware/authorize';
import { validate } from '../../middleware/validate';
import {
  createOrganizationSchema,
  updateOrganizationSchema,
  inviteMemberSchema,
} from './orgs.schema';
import * as orgsController from './orgs.controller';

const router = Router();

router.use(authenticate);

// Org CRUD
router.post('/', validate(createOrganizationSchema), orgsController.create as RequestHandler);
router.get('/', orgsController.list as RequestHandler);
router.get('/:orgId', orgsController.getOne as RequestHandler);
router.patch('/:orgId', authorize('admin'), validate(updateOrganizationSchema), orgsController.update as RequestHandler);
router.delete('/:orgId', authorize('admin'), orgsController.remove as RequestHandler);

// Invitations (public-ish, requires auth but not org membership for accept)
router.get('/invitations/:token/accept', orgsController.acceptInvitation as RequestHandler);

// Members
router.get('/:orgId/members', orgsController.getMembers as RequestHandler);
router.post('/:orgId/invitations', authorize('admin'), validate(inviteMemberSchema), orgsController.inviteMember as RequestHandler);
router.patch('/:orgId/members/:userId/role', authorize('admin'), validate(inviteMemberSchema.pick({ role: true })), orgsController.changeRole as RequestHandler);
router.delete('/:orgId/members/:userId', authorize('admin'), orgsController.removeMember as RequestHandler);

export default router;
