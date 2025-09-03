import { Link, useNavigate } from "react-router";
import { GameImage } from "../../../components/GameImage";
import { Paper } from "../../../components/Paper";
import type { Game } from "../models/gameModels";
import { GenreTags } from "../../../components/GenreTags";
import { SiIgdb } from "react-icons/si";

type GameCardProps = {
  game: Partial<Game>;
  cardSize?: "sm" | "lg";
  disableCardClick?: boolean;
};

export function GameCard({
  game,
  disableCardClick = false,
  cardSize = "lg",
}: GameCardProps) {
  const navigate = useNavigate();
  const handleClickCard = !disableCardClick
    ? () => navigate(`/games/${game.game_id}`)
    : undefined;

  return (
    <Paper
      onClick={handleClickCard}
      className="flex w-full gap-4 p-4 cursor-pointer bg-gradient-to-r from-primary to-[#160700]"
    >
      <GameImage image={game.imagem} size={cardSize} />
      <div>
        <h3 className={`${cardSize === "sm" ? "text-md" : "text-2xl"}`}>
          {game.name}
        </h3>
        <p className="text-sm mt-6 mb-6 mr-4 line-clamp-7 max-w-xl text-justify">
          {game.description}
        </p>
        <GenreTags genres={game.genres} className="mr-4" />
      </div>
      {game.metacritic && game.metacritic > 0 ? (
        <div className="flex justify-end items-center mr-4 ml-auto min-w-8">
          <Link
            to={"https://www.igdb.com/games/" + game.slug}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col justify-center items-center cursor-pointer">
              <SiIgdb size={42} />
              <div className="flex justify-center items-center bg-green-700 rounded-lg h-10 w-10">
                {game.metacritic}
              </div>
            </div>
          </Link>
        </div>
      ) : null}
    </Paper>
  );
}
