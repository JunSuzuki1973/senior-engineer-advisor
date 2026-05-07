export type Role = "admin" | "member" | "viewer";

export interface Organization {
  id: string;
  name: string;
  slug: string;
  created_at: Date;
}

export interface User {
  id: string;
  email: string;
  password_hash: string;
  display_name: string;
  created_at: Date;
}

export interface Membership {
  id: string;
  organization_id: string;
  user_id: string;
  role: Role;
  invited_at: Date;
  joined_at: Date | null;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export interface AccessTokenPayload {
  sub: string;
  email: string;
  org_id: string;
  role: Role;
  type: "access";
}

export interface RefreshTokenPayload {
  sub: string;
  token_id: string;
  type: "refresh";
}

export interface AuthenticatedRequest {
  userId: string;
  email: string;
  orgId: string;
  role: Role;
}
