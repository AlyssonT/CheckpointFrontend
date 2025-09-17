import { BiJoystick } from "react-icons/bi";
import { TbStarsFilled } from "react-icons/tb";
import { Paper } from "../../../components/Paper";
import { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { Button } from "../../../components/Button";
import { getAvatarUrl } from "../../../utils/avatar";

type ProfileUserCardProps = {
  profile: {
    bio: string;
    avatarUrl: string;
  };
  userName: string;
  onSubmit: (data: { bio: string }) => void;
  isSubmitting: boolean;
  totalReviews: number;
  disableEdit?: boolean;
};

export function ProfileUserCard({
  profile,
  userName,
  isSubmitting,
  onSubmit,
  totalReviews,
  disableEdit = false,
}: ProfileUserCardProps) {
  const [bio, setBio] = useState("");
  const [isEditingBio, setIsEditingBio] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setBio(profile.bio);
  }, [profile.bio]);

  return (
    <div className="relative flex h-[300px] w-full">
      <div className="absolute bg-black h-[252px] w-[100vw] md:w-[900px] z-0 mt-16 rounded-4xl" />
      <div className="h-full flex flex-col justify-between z-10 p-2">
        <div className="rounded-full border-secondary border-2 bg-primary w-40 h-40 overflow-hidden">
          <img src={getAvatarUrl(profile.avatarUrl)} alt="avatar" />
        </div>
        {/* <input type="file" accept="image/*" /> */}
        <div className="flex items-center mb-12 justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <BiJoystick size={24} className="text-(--color-secondary)" />
            <TbStarsFilled size={24} className="text-(--color-secondary)" />
          </div>
          <p>{totalReviews} reviews</p>
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
              readOnly={!isEditingBio}
            />
          </Paper>

          <div
            className="flex justify-end mt-1 mr-2 items-center gap-1"
            style={{ display: disableEdit ? "none" : "flex" }}
          >
            {!isEditingBio ? (
              <button
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setIsEditingBio(true);
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
                    setIsEditingBio(false);
                  }}
                  disabled={isSubmitting}
                  size="sm"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    onSubmit({ bio });
                    setIsEditingBio(false);
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
