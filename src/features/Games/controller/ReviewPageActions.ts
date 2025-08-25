import type { Params } from "react-router";
import { reviewSchema } from "../models/gameModels";
import { z } from "zod/v4";
import {
  DeleteGameReview,
  PostGameReview,
  PutGameReview,
} from "../service/GamesServices";

export async function reviewPageAction({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  try {
    const gameId = parseInt(params.gameId ?? "");

    if (request.method === "DELETE") {
      await DeleteGameReview(gameId);

      return {
        success: true,
        message: "Review deleted successfully.",
      };
    }

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const result = reviewSchema.safeParse(data);
    if (!result.success) {
      return {
        success: false,
        errors: z.treeifyError(result.error).errors,
      };
    }

    if (request.method === "POST") {
      await PostGameReview({ ...result.data, gameId });

      return {
        success: true,
        message: "Review submitted successfully.",
      };
    } else if (request.method === "PUT") {
      await PutGameReview({ ...result.data, gameId });

      return {
        success: true,
        message: "Review updated successfully.",
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    } else {
      return {
        sucess: false,
        error: "Unknown error.",
      };
    }
  }
}
