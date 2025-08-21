import {
  reviewSchema,
  statusOptions,
  type ReviewForm,
  type StatusGame,
} from "../models/gameModels";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router";
import type { UserGameReview } from "../../Profile/model/ProfileModels";
import { useFetcherController } from "../../../hooks/useFetcherController";

interface ReviewControllerProps {
  userReviewData: UserGameReview | null;
  hideForm?: () => void;
}

export function useReviewController({
  userReviewData,
  hideForm,
}: ReviewControllerProps) {
  const params = useParams();
  const gameId = parseInt(params.gameId ?? "");
  const { register, handleSubmit, formState } = useForm<ReviewForm>({
    resolver: zodResolver(reviewSchema),
    mode: "onBlur",
    defaultValues: userReviewData
      ? {
          review: userReviewData.review ?? "",
          status: (userReviewData.status ?? 0).toString() as StatusGame,
          score: (userReviewData.score ?? 0).toString(),
        }
      : undefined,
  });

  const { onSubmit: onSubmitPost, isSubmitting: isSubmittingPost } =
    useFetcherController<ReviewForm, null>({
      method: "post",
      action: `/games/${gameId}`,
      onSuccess: hideForm,
    });

  const { onSubmit: onSubmitPut, isSubmitting: isSubmittingPut } =
    useFetcherController<ReviewForm, null>({
      method: "put",
      action: `/games/${gameId}`,
      onSuccess: hideForm,
    });

  return {
    register,
    handleSubmit,
    formState,
    onSubmitPost,
    onSubmitPut,
    isSubmitting: isSubmittingPost || isSubmittingPut,
    statusOptions,
  };
}
