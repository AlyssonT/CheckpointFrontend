import { PaginatedDataGrid } from "../../../components/PaginatedDataGrid";
import { useListGamesController } from "../controller/ListGamesController";
import { GameCard } from "./GameCard";

export function ListGamesView() {
  const { query, gamesData } = useListGamesController();

  return (
    <div className="w-full h-auto flex justify-center py-8">
      <div className="w-(--standard-page)">
        {query && <h1 className="text-2xl mb-2">Results for "{query}":</h1>}
        <PaginatedDataGrid
          items={gamesData.games}
          getItemId={(game) => game.id}
          totalItems={gamesData.totalItems}
          renderRow={(game) => <GameCard game={game} />}
        />
      </div>
    </div>
  );
}
