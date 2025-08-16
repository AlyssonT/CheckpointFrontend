import { useNavigate } from "react-router";
import { GameImage } from "../../../components/GameImage";
import { Paper } from "../../../components/Paper";
import type { Game } from "../models/gameModels";
import { GenreTags } from "../../../components/GenreTags";
import { SiIgdb } from "react-icons/si";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  const navigate = useNavigate();
  return (
    <Paper
      onClick={() => navigate(`/games/${game.game_id}`)}
      className="flex w-full gap-4 p-4 cursor-pointer bg-gradient-to-r from-primary to-[#160700]"
    >
      <GameImage image={game.imagem} />
      <div>
        <h3 className="text-2xl">{game.name}</h3>
        <p className="text-sm mt-8 mb-8 mr-4 line-clamp-7 max-w-xl text-justify">
          {game.description}
        </p>
        <GenreTags genres={game.genres} className="mr-4" />
      </div>
      <div className="flex justify-end items-center mr-4 ml-auto min-w-8">
        {game.metacritic > 0 && (
          <div className="flex flex-col justify-center items-center">
            <SiIgdb size={42} />
            <div className="flex justify-center items-center bg-green-700 rounded-lg h-10 w-10">
              {game.metacritic}
            </div>
          </div>
        )}
      </div>
    </Paper>
  );
}
