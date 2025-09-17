import { Fragment } from "react/jsx-runtime";
import { Paper } from "../../../components/Paper";
import { GameCard } from "../../Games/view/GameCard";
import { ReviewCardGame } from "../../Profile/view/ReviewCardGame";
import type {
  LatestReviewsResponse,
  TopGamesResponse,
} from "../models/HomeModels";

interface HighlightsProps {
  topGames: TopGamesResponse;
  latestReviews: LatestReviewsResponse;
}

export function Highlights({ topGames, latestReviews }: HighlightsProps) {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4">
      <Paper className="w-full md:w-2/5 p-4 flex flex-col gap-2">
        <h1 className="mb-2 text-lg">Top Reviewed Games:</h1>
        {topGames.map((game) => (
          <GameCard
            key={game.game_id}
            cardSize="sm"
            game={{
              game_id: game.game_id,
              name: game.name,
              imagem: game.imageURL,
              description:
                game.reviewCount.toString() +
                ` review${game.reviewCount === 1 ? "" : "s"}`,
            }}
          />
        ))}
      </Paper>
      <Paper className="w-full md:w-3/5 p-4">
        <h1 className="mb-2 text-lg">Latest Reviews:</h1>
        {latestReviews.map((review, i) => (
          <Fragment key={review.user.name + "-" + review.game.game_id}>
            <ReviewCardGame
              disableEdit
              key={review.user.name + "_" + review.game.name}
              review={{
                game: {
                  name: review.game.name,
                  imagem: review.game.imageURL,
                  game_id: review.game.game_id,
                },
                status: review.status,
                score: review.score,
                review: review.userReview,
              }}
              userName={review.user.name}
            />
            {i !== latestReviews.length - 1 && (
              <div className="h-[1px] w-full bg-secondary" />
            )}
          </Fragment>
        ))}
      </Paper>
    </div>
  );
}
