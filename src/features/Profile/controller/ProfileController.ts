import { useLoaderData } from "react-router";
import type { ProfileLoaderData } from "../model/ProfileModels";
import { useAuthStore } from "../../../stores/authStore";
import { useActionController } from "../../../hooks/useActionController";

export function useProfileController() {
  const { profile } = useLoaderData<ProfileLoaderData>();
  const { user } = useAuthStore();

  const { isSubmitting, onSubmit } = useActionController<{ bio: string }, null>(
    { method: "put", action: "/profile" },
  );

  return {
    profile,
    userName: user.name,
    isSubmitting,
    onSubmit,
  };
}
