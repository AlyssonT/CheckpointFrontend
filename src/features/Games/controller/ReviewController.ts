import {
  reviewSchema,
  statusOptions,
  type ReviewForm,
  type StatusGame,
} from "../models/gameModels";
import { useActionController } from "../../../hooks/useActionController";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router";
import type { UserGameReview } from "../../Profile/model/ProfileModels";

interface ReviewControllerProps {
  userReviewData: UserGameReview | null;
}

export function useReviewController({ userReviewData }: ReviewControllerProps) {
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
    useActionController<ReviewForm, null>({
      method: "post",
      action: `/games/${gameId}`,
    });

  const { onSubmit: onSubmitPut, isSubmitting: isSubmittingPut } =
    useActionController<ReviewForm, null>({
      method: "put",
      action: `/games/${gameId}`,
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
