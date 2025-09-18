import { useProfileController } from "../controller/ProfileController";
import { ProfileUserCard } from "./ProfileUserCard";
import { UserReviews } from "./UserReviews";

export function ProfileView() {
  const controller = useProfileController();

  return (
    <div className="w-full h-auto flex justify-center overflow-x-hidden">
      <div className="w-(--standard-page) pt-12 flex flex-col gap-8">
        <ProfileUserCard
          {...controller}
          totalReviews={controller.reviewsData.totalItems}
        />
        <UserReviews
          reviewsData={controller.reviewsData}
          username={controller.userName}
          userId={controller.profile.userID}
          disableEdit={controller.disableEdit}
        />
      </div>
    </div>
  );
}
