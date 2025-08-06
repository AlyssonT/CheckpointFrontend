import { useLoaderData } from "react-router";
import type { ProfileLoaderData } from "../model/ProfileModels";
import { useAuthStore } from "../../../stores/authStore";

export function useProfileController() {
  const { profile } = useLoaderData<ProfileLoaderData>();
  const { user } = useAuthStore();

  return {
    profile,
    userName: user.name,
  };
}
