import jwt, { SignOptions } from 'jsonwebtoken';
import { config } from '../config';
import type { JwtPayload } from '../types';

export function signAccessToken(payload: Omit<JwtPayload, 'org_id' | 'role'>): string {
  const options: SignOptions = {
    expiresIn: '15m',
    issuer: config.jwt.issuer,
    subject: payload.sub,
  };
  return jwt.sign(payload, config.jwt.accessSecret, options);
}

export function signAccessTokenWithOrg(payload: JwtPayload): string {
  const options: SignOptions = {
    expiresIn: '15m',
    issuer: config.jwt.issuer,
    subject: payload.sub,
  };
  return jwt.sign(payload, config.jwt.accessSecret, options);
}

export function signRefreshToken(payload: Omit<JwtPayload, 'org_id' | 'role'>): string {
  const options: SignOptions = {
    expiresIn: '7d',
    issuer: config.jwt.issuer,
    subject: payload.sub,
  };
  return jwt.sign(payload, config.jwt.refreshSecret, options);
}

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, config.jwt.accessSecret, {
    issuer: config.jwt.issuer,
  }) as JwtPayload;
}

export function verifyRefreshToken(token: string): JwtPayload {
  return jwt.verify(token, config.jwt.refreshSecret, {
    issuer: config.jwt.issuer,
  }) as JwtPayload;
}
