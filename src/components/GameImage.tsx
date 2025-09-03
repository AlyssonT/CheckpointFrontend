import { FaImage } from "react-icons/fa";

export function GameImage({
  image,
  size = "lg",
}: {
  image?: string;
  size?: "sm" | "lg";
}) {
  const h = size === "sm" ? "h-32" : "h-64";
  const w = size === "sm" ? "w-24" : "w-48";

  return (
    <div className={`${h} ${w} flex shrink-0 items-center justify-center`}>
      {image && image.length > 0 ? (
        <img
          src={image}
          className="max-h-full max-w-full object-contain rounded-sm"
          loading="lazy"
          alt="Game"
        />
      ) : (
        <FaImage className="text-gray-400 text-5xl" />
      )}
    </div>
  );
}
