import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UserData {
  name: string;
  email: string;
  id: number;
  exp: number;
}

const defaultUser = { name: "", email: "", id: NaN, exp: NaN };

interface AuthState {
  user: UserData;
  login: (user: UserData) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: defaultUser,
      login: (user) => set({ user }),
      logout: () => set({ user: defaultUser }),
    }),
    { name: "auth-storage" },
  ),
);
