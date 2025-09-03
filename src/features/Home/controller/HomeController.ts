import { useLoaderData } from "react-router";
import type { HomeLoaderData } from "../models/HomeModels";

export function useHomeController() {
  const { topGames, latestReviews } = useLoaderData<HomeLoaderData>();

  return {
    topGames,
    latestReviews,
  };
}
