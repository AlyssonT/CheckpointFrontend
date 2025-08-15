import { Paper } from "../../../components/Paper";
import { Tooltip } from "../../../components/Tooltip";
import type { Game } from "../models/gameModels";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <Paper className="flex w-full h-30 gap-4 cursor-pointer">
      <img
        src={game.imagem.length > 0 ? game.imagem : undefined}
        width={256}
        height={120}
        loading="lazy"
        style={{ objectFit: "contain" }}
      />
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
