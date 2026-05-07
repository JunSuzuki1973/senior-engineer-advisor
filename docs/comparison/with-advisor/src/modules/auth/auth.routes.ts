import { Router, RequestHandler } from 'express';
import rateLimit from 'express-rate-limit';
import { validate } from '../../middleware/validate';
import { authenticate } from '../../middleware/authenticate';
import { registerSchema, loginSchema } from './auth.schema';
import * as authController from './auth.controller';
import { config } from '../../config';

const router = Router();

const authLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.authMax,
  message: { success: false, error: { code: 'RATE_LIMITED', message: 'Too many auth attempts, try again later' } },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/register', authLimiter, validate(registerSchema), authController.register as RequestHandler);
router.post('/login', authLimiter, validate(loginSchema), authController.login as RequestHandler);
router.post('/refresh', authController.refresh as RequestHandler);
router.post('/logout', authenticate, authController.logout as RequestHandler);

export default router;
