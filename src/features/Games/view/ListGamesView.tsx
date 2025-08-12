import { useListGamesController } from "../controller/ListGamesController";
import { GameCard } from "./GameCard";

export function ListGamesView() {
  const { query, gamesData } = useListGamesController();

  return (
    <div className="w-full h-(--screen-minus-header) flex justify-center pt-8">
      <div className="w-(--standard-page)">
        {query && <h1 className="text-2xl">Results for "{query}":</h1>}
        <div className="flex flex-col gap-4">
          {gamesData.games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
