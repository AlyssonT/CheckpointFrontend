import type { Genre } from "../features/Games/models/gameModels";

interface GenreTagsProps {
  genres: Genre[] | null;
  className?: string;
}

export function GenreTags({ genres, className = "" }: GenreTagsProps) {
  return (
    <div className={`flex flex-row gap-2 flex-wrap ${className}`}>
      {genres &&
        genres.map((genre) => (
          <span
            key={genre.id}
            className="bg-primary text-sm px-2 py-1 rounded-md"
          >
            {genre.description}
          </span>
        ))}
    </div>
  );
}
