import api from "../api/axiosInstance";
import {
  RegisterInput,
  LoginInput,
  ChangePasswordInput,
  LoginResponse,
  User,
  MessageResponse,
} from "../types/auth.types";

export const authService = {
  // ── Register ────────────────────────────
  register: async (data: RegisterInput): Promise<User> => {
    const response = await api.post<User>("/auth/register", data);
    return response.data;
  },

  // ── Login ───────────────────────────────
  login: async (data: LoginInput): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/auth/login", data);

    // Store token so request interceptor picks it up on next requests
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      // Set immediately for any requests made in the same session
      api.defaults.headers.common["Authorization"] =
        `Bearer ${response.data.token}`;
    }

    return response.data;
  },

  // ── Logout ──────────────────────────────
  logout: async (): Promise<MessageResponse> => {
    const response = await api.post<MessageResponse>("/auth/logout");

    // Clean up token from storage and axios defaults
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];

    return response.data;
  },

  // ── Get current user ────────────────────
  // Useful on page refresh to verify token is still valid
  getMe: async (): Promise<User> => {
    const response = await api.get<User>("/auth/me");
    return response.data;
  },

  // ── Change current user password ─────────────────
  changePassword: async (data: ChangePasswordInput): Promise<MessageResponse> => {
    const response = await api.put<MessageResponse>("/auth/change-password", data);
    return response.data;
  },
};