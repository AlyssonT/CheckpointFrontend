import { Link, useNavigate } from "react-router";
import { GameStatusName } from "../../Games/models/gameModels";
import type { UserGameReview } from "../model/ProfileModels";
import { BiEdit } from "react-icons/bi";
import { Tooltip } from "../../../components/Tooltip";

type ReviewCardProps = {
  review: UserGameReview;
  disableEdit?: boolean;
};

export function ReviewCardGame({
  review,
  disableEdit = false,
}: ReviewCardProps) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 items-center p-4">
      <div className="shrink-0">
        <Link to={`/games/${review.game.game_id}`}>
          <img
            src={review.game.imagem}
            className="max-h-24 max-w-16 rounded-md"
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
      <div className="w-full">
        <div className="flex gap-4 mb-3 items-center">
          <Link to={`/games/${review.game.game_id}`}>
            <p className="hover:underline">{review.game.name}</p>
          </Link>
          <p className="italic text-sm">{`${GameStatusName[review.status]}`}</p>
          <div className="flex gap-2 ml-auto items-center">
            <p>Rating:</p>
            <div className="bg-green-700 w-8 h-8 rounded-lg flex justify-center items-center p-0.5">
              {review.score}
            </div>
            {!disableEdit && (
              <Tooltip title="Edit Review" className="flex items-center">
                <button
                  className="cursor-pointer"
                  onClick={() =>
                    navigate(`/games/${review.game.game_id}?editReview=true`)
                  }
                >
                  <BiEdit size={24} />
                </button>
              </Tooltip>
            )}
          </div>
        </div>
        <p className="text-sm w-full wrap-anywhere line-clamp-5">
          {review.review}
        </p>
      </div>
    </div>
  );
}
