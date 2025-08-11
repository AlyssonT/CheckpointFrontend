import { BiJoystick } from "react-icons/bi";
import { TbStarsFilled } from "react-icons/tb";
import { Paper } from "../../../components/Paper";
import { useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { Button } from "../../../components/Button";

type ProfileUserCardProps = {
  profile: {
    bio: string;
  };
  userName: string;
  onSubmit: (data: { bio: string }) => void;
  isSubmitting: boolean;
};

export function ProfileUserCard({
  profile,
  userName,
  isSubmitting,
  onSubmit,
}: ProfileUserCardProps) {
  const [bio, setBio] = useState(profile.bio || "");
  const [isEditing, setIsEditing] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="relative flex h-[300px] w-full">
      <div className="absolute bg-black h-[252px] w-(--standard-page) z-0 mt-16 rounded-4xl" />
      <div className="h-full flex flex-col justify-between z-10 p-2">
        <img
          src="/avatar_placeholder.png"
          alt="avatar"
          width={160}
          height={160}
          className="rounded-full border-secondary border-2 bg-primary"
        />
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
        <div className="w-full h-8/11">
          <Paper className="bg-primary rounded-4xl! p-4 h-9/10">
            <textarea
              ref={textAreaRef}
              style={{ resize: "none" }}
              spellCheck="false"
              maxLength={500}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full h-full bg-transparent text-white focus:outline-none"
              placeholder="Write your bio here..."
              readOnly={!isEditing}
            />
          </Paper>

          <div className="flex justify-end mt-1 mr-2 items-center gap-1">
            {!isEditing ? (
              <button
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setIsEditing(true);
                  textAreaRef.current?.focus();
                }}
              >
                <MdEdit />
                <p className="text-sm">Edit bio</p>
              </button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    setIsEditing(false);
                  }}
                  disabled={isSubmitting}
                  size="sm"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    onSubmit({ bio });
                    setIsEditing(false);
                  }}
                  loading={isSubmitting}
                  size="sm"
                >
                  Save
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
