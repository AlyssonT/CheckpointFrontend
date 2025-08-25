import { GetReviewsFromUser, getUserProfile } from "../service/ProfileServices";

export async function profileLoader() {
  const promises = await Promise.all([getUserProfile(), GetReviewsFromUser()]);

  return {
    profile: promises[0]?.data,
    reviewsData: promises[1],
  };
}
