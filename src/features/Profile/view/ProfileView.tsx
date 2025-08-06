import { ProfileUserCard } from "./ProfileUserCard";

export function ProfileView() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-(--standard-page) pt-16">
        <ProfileUserCard />
      </div>
    </div>
  );
}
