import { useLoaderData, useSearchParams } from "react-router";
import type { GamePageLoaderData } from "../models/gameModels";
import { useShowHideReviewForm } from "../../../hooks/useShowHideReviewForm";

export function useGamePageController() {
  const [searchParams] = useSearchParams();
  const { gameData, reviewsData, userReviewData } =
    useLoaderData<GamePageLoaderData>();

  let startEditReview = false;
  if (searchParams.get("editReview") === "true" && userReviewData) {
    startEditReview = true;
  }

  const { handleClickAdd, handleHideForm, shouldShowForm } =
    useShowHideReviewForm({ defaultState: startEditReview });

  return {
    gameData,
    reviewsData,
    userReviewData,
    handleClickAdd,
    handleHideForm,
    shouldShowForm,
  };
}
