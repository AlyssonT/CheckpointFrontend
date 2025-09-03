import { Link, useNavigate } from "react-router";
import { GameStatusName } from "../../Games/models/gameModels";
import type { UserGameReview } from "../model/ProfileModels";
import { BiEdit } from "react-icons/bi";
import { Tooltip } from "../../../components/Tooltip";

type ReviewCardProps = {
  review: Partial<UserGameReview>;
  userName?: string;
  disableEdit?: boolean;
};

export function ReviewCardGame({
  review,
  userName,
  disableEdit = false,
}: ReviewCardProps) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 items-center px-4 py-2">
      <div className="shrink-0">
        <Link to={`/games/${review.game?.game_id}`}>
          <img
            src={review.game?.imagem}
            className="max-h-24 max-w-16 rounded-md"
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
      <div className="w-full">
        <div className="flex gap-4 mb-3 items-center">
          <div className="mr-4">
            {userName && (
              <Link to={`/profile/${userName}`}>
                <p className="hover:underline">
                  {userName} <span className="text-sm italic">reviewed</span>
                </p>
              </Link>
            )}
            <Link to={`/games/${review.game?.game_id}`}>
              <p className="text-sm font-bold hover:underline">
                {review.game?.name}
              </p>
            </Link>
          </div>
          <div className="ml-auto">
            <p className="italic text-xs">{`${
              GameStatusName[review.status ?? 0]
            }`}</p>
            <div className="flex gap-2 items-center">
              <p>Rating:</p>
              <div className="bg-green-700 w-8 h-8 rounded-lg flex justify-center items-center p-0.5">
                {review.score}
              </div>
              {!disableEdit && (
                <Tooltip title="Edit Review" className="flex items-center">
                  <button
                    className="cursor-pointer"
                    onClick={() =>
                      navigate(`/games/${review.game?.game_id}?editReview=true`)
                    }
                  >
                    <BiEdit size={24} />
                  </button>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
        <p className="text-sm w-full line-clamp-5">{review.review}</p>
      </div>
    </div>
  );
}
