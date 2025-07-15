import { useAuthStore } from "../stores/authStore";
import { useEffect } from "react";

export function useVerifyToken() {
  const { user, logout } = useAuthStore();

  const verifyToken = () => {
    try {
      const isYetValid = user.exp * 1000 > Date.now();

      if (!isYetValid) {
        logout();
      }
    } catch (e) {
      logout();
    }
  };

  useEffect(() => {
    verifyToken();
  }, [user.token]);
}
