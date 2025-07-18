import { redirect } from "react-router";
import { useAuthStore } from "../../stores/authStore";

export function requireAuth() {
  const { user, logout } = useAuthStore.getState();
  const isYetValid = user.exp * 1000 > Date.now();

  if (!isYetValid) {
    logout();
    throw redirect("/login");
  }
}
