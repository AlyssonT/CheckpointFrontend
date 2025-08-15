import { useLoaderData } from "react-router";
import type { GetGameByIdResponse } from "../models/gameModels";

export function useGamePageController() {
  const gameData = useLoaderData<GetGameByIdResponse>();

  return {
    gameData,
  };
}
