export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface ChangePasswordInput {
  currentPassword: string;
  newPassword: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "ADMIN";
  createdAt?: string;
  storeProfileCompleted?: boolean;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface MessageResponse {
  message: string;
}