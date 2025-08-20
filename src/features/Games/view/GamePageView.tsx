import { PaginatedDataGrid } from "../../../components/PaginatedDataGrid";
import { Paper } from "../../../components/Paper";
import { formatter } from "../../../utils/formatter";
import { useGamePageController } from "../controller/GamePageController";
import { GameCard } from "./GameCard";
import { ReviewCard } from "./ReviewCard";
import { IoGameController } from "react-icons/io5";
import { RiArchiveStackFill } from "react-icons/ri";
import { SiVerizon } from "react-icons/si";
import { FaThumbsDown } from "react-icons/fa";
import { Button } from "../../../components/Button";
import { GrAdd } from "react-icons/gr";
import { ReviewFormView } from "./ReviewFormView";

export function GamePageView() {
  const {
    gameData,
    reviewsData,
    handleClickAdd,
    shouldShowForm,
    userReviewData,
    handleHideForm,
  } = useGamePageController();

  return (
    <div className="w-full h-auto flex justify-center py-8">
      <div className="w-(--standard-page) flex flex-col gap-4">
        <GameCard game={gameData} disableCardClick />
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-evenly gap-12">
            <div className="flex flex-col items-center gap-4">
              <p className="text-xl">Average user rating</p>
              <div className="bg-green-700 rounded-lg h-10 w-10 flex justify-center items-center text-xl">
                {reviewsData.averageRating}
              </div>
            </div>
            <Paper className="p-4">
              <div className="flex gap-2">
                <div className="flex flex-col gap-2.5">
                  <p className="text-sm flex items-center gap-2">
                    <RiArchiveStackFill className="text-secondary" size={20} />
                    Backlog:
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <IoGameController className="text-secondary" size={20} />
                    Playing:
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <SiVerizon className="text-secondary" size={20} />
                    Finished:
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <FaThumbsDown className="text-secondary" size={20} />
                    Dropped:
                  </p>
                </div>
                <div className="flex flex-col mt-0.5" style={{ gap: "14px" }}>
                  <p>{formatter.format(reviewsData.backlog)}</p>
                  <p>{formatter.format(reviewsData.playing)}</p>
                  <p>{formatter.format(reviewsData.finished)}</p>
                  <p>{formatter.format(reviewsData.dropped)}</p>
                </div>
              </div>
            </Paper>
            <Button onClick={handleClickAdd}>
              <GrAdd size={20} />
              <span className="ml-2">Add Review</span>
            </Button>
          </div>
        </div>

        {shouldShowForm && (
          <div className="w-full flex justify-center">
            <ReviewFormView
              isEdit={userReviewData !== null}
              onClickCancel={handleHideForm}
              userReviewData={userReviewData}
            />
          </div>
        )}
        <div className="inline-flex text-2xl">
          <p>{`Reviews (${reviewsData.totalItems}):`}</p>
        </div>

        <PaginatedDataGrid
          items={reviewsData.reviews}
          renderRow={(review) => <ReviewCard review={review} />}
          getItemId={(review) => `${review.userId}-${review.gameId}`}
          totalItems={reviewsData.totalItems}
        />
      </div>
    </div>
  );
}
