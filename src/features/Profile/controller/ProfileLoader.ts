import { type Params } from "react-router";
import { useAuthStore } from "../../../stores/authStore";
import { GetReviewsFromUser, getUserProfile } from "../service/ProfileServices";

export async function profileLoader({ params }: { params: Params }) {
  const user = useAuthStore.getState().user;
  const username = params.username ?? user.name;
  const promises = await Promise.all([
    getUserProfile(username),
    GetReviewsFromUser(username),
  ]);

  return {
    profile: promises[0]?.data,
    reviewsData: promises[1],
    username,
  };
}
