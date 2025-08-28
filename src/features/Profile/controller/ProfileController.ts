import { useLoaderData } from "react-router";
import type { ProfileLoaderData } from "../model/ProfileModels";
import { useAuthStore } from "../../../stores/authStore";
import { useActionController } from "../../../hooks/useActionController";

export function useProfileController() {
  const { profile, reviewsData, username } = useLoaderData<ProfileLoaderData>();
  const { user } = useAuthStore();

  const { isSubmitting, onSubmit } = useActionController<{ bio: string }, null>(
    { method: "put", action: "/profile" },
  );

  const isSameUser = profile.userID === user.id;

  return {
    profile,
    reviewsData,
    userName: username,
    isSubmitting,
    onSubmit,
    disableEdit: !isSameUser,
  };
}
