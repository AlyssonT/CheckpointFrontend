import { PaginatedDataGrid } from "../../../components/PaginatedDataGrid";
import type { GetUserReviewsResponse } from "../model/ProfileModels";
import { ReviewCardGame } from "./ReviewCardGame";

interface UserReviewsProps {
  reviewsData: GetUserReviewsResponse;
  username: string;
  userId: number;
  disableEdit?: boolean;
}

export function UserReviews({
  reviewsData,
  userId,
  disableEdit = false,
}: UserReviewsProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <PaginatedDataGrid
        items={reviewsData.games}
        renderRow={(review) => (
          <ReviewCardGame review={review} disableEdit={disableEdit} />
        )}
        getItemId={(review) => `${userId}-${review.game.game_id}`}
        totalItems={reviewsData.totalItems}
      />
    </div>
  );
}
