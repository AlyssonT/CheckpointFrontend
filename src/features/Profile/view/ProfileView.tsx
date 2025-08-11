import { useProfileController } from "../controller/ProfileController";
import { ProfileUserCard } from "./ProfileUserCard";

export function ProfileView() {
  const controller = useProfileController();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-(--standard-page) pt-16">
        <ProfileUserCard {...controller} />
      </div>
    </div>
  );
}
