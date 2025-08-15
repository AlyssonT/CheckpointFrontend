import type { Genre } from "../features/Games/models/gameModels";

interface GenreTagsProps {
  genres: Genre[];
}

export function GenreTags({ genres }: GenreTagsProps) {
  return (
    <div className="flex flex-row gap-2">
      {genres.map((genre) => (
        <span className="bg-primary text-sm px-2 py-1 rounded-md">
          {genre.description}
        </span>
      ))}
    </div>
  );
}
