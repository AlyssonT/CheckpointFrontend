import { GetLatestReviews, GetTopGames } from "../service/HomeServices";

export async function HomeLoader() {
  const resolvedPromises = await Promise.all([
    GetLatestReviews(),
    GetTopGames(),
  ]);

  return {
    latestReviews: resolvedPromises[0],
    topGames: resolvedPromises[1],
  };
}
