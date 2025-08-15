import { GameImage } from "../../../components/GameImage";
import { GenreTags } from "../../../components/GenreTags";
import { Paper } from "../../../components/Paper";
import { useGamePageController } from "../controller/GamePageController";

export function GamePageView() {
  const { gameData } = useGamePageController();

  return (
    <div className="w-full h-auto flex justify-center py-8">
      <div className="w-(--standard-page)">
        <Paper className="flex flex-row gap-8 p-4">
          <GameImage image={gameData.imagem} />
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">{gameData.name}</h2>
            <GenreTags genres={gameData.genres} />
            <p>{gameData.description}</p>
          </div>
        </Paper>
      </div>
    </div>
  );
}
