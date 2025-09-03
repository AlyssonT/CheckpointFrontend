import { useHomeController } from "../controller/HomeController";
import { Highlights } from "./Highlights";
import { Welcome } from "./Welcome";

export function HomeView() {
  const { topGames, latestReviews } = useHomeController();

  return (
    <div className="w-full h-auto flex justify-center py-8">
      <div className="w-(--standard-page) flex flex-col gap-4">
        <Welcome />
        <Highlights topGames={topGames} latestReviews={latestReviews} />
      </div>
    </div>
  );
}
