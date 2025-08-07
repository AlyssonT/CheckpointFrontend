import { create } from "zustand";
import { persist } from "zustand/middleware";
import { postLogout } from "../features/RootPage/service/rootServices";

export interface UserData {
  name: string;
  email: string;
  id: number | null;
  exp: number | null;
}

const defaultUser = { name: "", email: "", id: null, exp: null };

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
      logout: () => {
        set({ user: defaultUser });
        postLogout();
      },
    }),
    { name: "auth-storage" },
  ),
);
