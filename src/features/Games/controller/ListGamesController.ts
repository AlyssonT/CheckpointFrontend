import { useLoaderData, useSearchParams } from "react-router";
import type { GetGamesResponse } from "../models/gameModels";

export function useListGamesController() {
  const [searchParams] = useSearchParams();

  const gamesData = useLoaderData<GetGamesResponse>();

  return {
    query: searchParams.get("query"),
    gamesData,
  };
}
