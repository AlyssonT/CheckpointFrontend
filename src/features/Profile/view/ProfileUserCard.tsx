import { BiJoystick } from "react-icons/bi";
import { TbStarsFilled } from "react-icons/tb";
import { Paper } from "../../../components/Paper";
import { useProfileController } from "../controller/ProfileController";

export function ProfileUserCard() {
  const { profile, userName } = useProfileController();

  return (
    <div className="relative flex h-[400px] w-full">
      <div className="absolute bg-black h-[352px] w-(--standard-page) z-0 mt-16 rounded-4xl" />
      <div className="h-full flex flex-col justify-between z-10 p-2">
        <img
          src="/avatar_placeholder.png"
          alt="avatar"
          width={160}
          height={160}
          className="rounded-full border-secondary border-2 bg-primary"
        />
        <div className="flex items-center justify-center w-full space-x-2">
          <div className="rounded-full bg-gray-500 w-10 h-10" />
          <div className="rounded-full bg-gray-500 w-10 h-10" />
          <div className="rounded-full bg-gray-500 w-10 h-10" />
        </div>
        <div className="flex flex-col items-center mb-8 space-y-8">
          <div className="flex space-x-2 items-center">
            <BiJoystick size={24} className="text-(--color-secondary)" />
            <p>{47} games</p>
          </div>
          <div className="flex space-x-2 items-center">
            <TbStarsFilled size={24} className="text-(--color-secondary)" />
            <p>{5} reviews</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-between z-10 mr-4">
        <h1 className="mt-4 text-4xl">{userName}</h1>
        <Paper className="bg-primary w-full h-4/5 rounded-4xl! p-4">
          <p>{profile.bio}</p>
        </Paper>
      </div>
    </div>
  );
}
