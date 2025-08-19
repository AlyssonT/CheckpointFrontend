import { FaImage } from "react-icons/fa";

export function GameImage({ image }: { image: string }) {
  return (
    <div className="h-64 w-48 flex shrink-0 items-center justify-center">
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
