import { GameStatusName, type ReviewResponse } from "../models/gameModels";

type ReviewCardProps = {
  review: ReviewResponse;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex gap-4 items-center p-4">
      <div className="shrink-0">
        <img src="/avatar_placeholder.png" width={60} height={60} />
      </div>
      <div>
        <div className="flex gap-4 mb-3 items-center">
          <p className="text-xl">{review.username}</p>
          <p className="italic text-sm">{`${GameStatusName[review.status]}`}</p>
          <div className="flex gap-2 ml-auto items-center">
            <p>{`Rating: `}</p>
            <div className="bg-green-700 rounded-lg flex justify-center items-center p-0.5">
              {review.score}
            </div>
          </div>
        </div>
        <p className="text-sm w-full wrap-anywhere line-clamp-5">
          {review.review}
        </p>
      </div>
    </div>
  );
}
