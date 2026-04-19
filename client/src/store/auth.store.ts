import { create } from "zustand";
import { User } from "../types/auth.types";
import { authService } from "../services/auth.service";

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;

  login: (email: string, password: string) => Promise<void>;
  logout: (navigate?: (path: string) => void) => Promise<void>;
  initAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem("token"),
  loading: false,

  // Called on app start — verifies token still valid
  initAuth: async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    set({ loading: true });
    try {
      const user = await authService.getMe();
      set({ user, token, loading: false });
    } catch {
      localStorage.removeItem("token");
      set({ user: null, token: null, loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true });
    try {
      const data = await authService.login({ email, password });
      set({ user: data.user, token: data.token, loading: false });
    } catch (error: any) {
      set({ loading: false });
      throw error;
    }
  },

  logout: async (navigate?: (path: string) => void) => {
    try {
      await authService.logout();
    } finally {
      set({ user: null, token: null });
      localStorage.removeItem("token");
      if (navigate) {
        navigate("/login");
      }
    }
  },
}));