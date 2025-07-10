import { redirect } from "react-router";
import { isAuthenticated } from "../../utils/auth";

export function requireAuth() {
  if (!isAuthenticated()) {
    throw redirect("/login");
  }
}
