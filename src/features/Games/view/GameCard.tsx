import { useNavigate } from "react-router";
import { GameImage } from "../../../components/GameImage";
import { Paper } from "../../../components/Paper";
import { Tooltip } from "../../../components/Tooltip";
import type { Game } from "../models/gameModels";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  const navigate = useNavigate();
  return (
    <Paper
      onClick={() => navigate(`/games/${game.game_id}`)}
      className="flex w-full h-30 gap-4 cursor-pointer"
    >
      <GameImage image={game.imagem} />
      <div>
        <h3 className="text-2xl font-semibold">{game.name}</h3>
        <p className="text-sm mt-2 line-clamp-3 max-w-xl">{game.description}</p>
      </div>
      <div className="flex justify-end items-center mr-4 ml-auto min-w-8">
        {game.metacritic > 0 && (
          <Tooltip title="IGDB rating">
            <div className="flex justify-center items-center bg-green-700 rounded-full h-8 w-8">
              {game.metacritic}
            </div>
          </Tooltip>
        )}
      </div>
    </Paper>
  );
}
