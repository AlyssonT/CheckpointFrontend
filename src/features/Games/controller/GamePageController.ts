import { useLoaderData } from "react-router";
import type { GamePageLoaderData } from "../models/gameModels";

export function useGamePageController() {
  const { gameData, reviewsData } = useLoaderData<GamePageLoaderData>();

  return {
    gameData,
    reviewsData,
  };
}
