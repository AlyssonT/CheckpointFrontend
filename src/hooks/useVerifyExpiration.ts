import { useAuthStore } from "../stores/authStore";
import { useEffect } from "react";

export function useVerifyExpiration() {
  const { user, logout } = useAuthStore();

  const verifyExpiration = () => {
    if (user.id === null || user.exp === null) return;
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
    verifyExpiration();
  }, [user.exp]);
}
