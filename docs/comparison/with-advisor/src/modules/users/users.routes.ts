import { Router, RequestHandler } from 'express';
import { authenticate } from '../../middleware/authenticate';
import { validate } from '../../middleware/validate';
import { updateProfileSchema, changePasswordSchema } from './users.schema';
import * as usersController from './users.controller';

const router = Router();

router.use(authenticate);

router.get('/me', usersController.getProfile as RequestHandler);
router.patch('/me', validate(updateProfileSchema), usersController.updateProfile as RequestHandler);
router.patch('/me/password', validate(changePasswordSchema), usersController.changePassword as RequestHandler);
router.get('/me/memberships', usersController.getMemberships as RequestHandler);

export default router;
