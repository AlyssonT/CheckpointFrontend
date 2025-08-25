import { PaginatedDataGrid } from "../../../components/PaginatedDataGrid";
import type { GetUserReviewsResponse } from "../model/ProfileModels";
import { ReviewCardGame } from "./ReviewCardGame";

interface UserReviewsProps {
  reviewsData: GetUserReviewsResponse;
  username: string;
  userId: number;
}

export function UserReviews({ reviewsData, userId }: UserReviewsProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <PaginatedDataGrid
        items={reviewsData.games}
        renderRow={(review) => <ReviewCardGame review={review} />}
        getItemId={(review) => `${userId}-${review.game.game_id}`}
        totalItems={reviewsData.totalItems}
      />
    </div>
  );
}
