import { useLoaderData } from "react-router";
import type { GamePageLoaderData } from "../models/gameModels";
import { useState } from "react";

export function useGamePageController() {
  const { gameData, reviewsData, userReviewData } =
    useLoaderData<GamePageLoaderData>();
  const [shouldShowForm, setShouldShowForm] = useState(false);

  const handleClickAdd = () => {
    setShouldShowForm(true);
  };

  const handleHideForm = () => {
    setShouldShowForm(false);
  };

  return {
    gameData,
    reviewsData,
    userReviewData,
    handleClickAdd,
    handleHideForm,
    shouldShowForm,
  };
}
