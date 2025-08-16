export function GameImage({ image }: { image: string }) {
  return (
    <div className="h-64 w-48 flex items-center justify-center">
      <img
        src={image.length > 0 ? image : undefined}
        className="max-h-full max-w-full object-contain"
        loading="lazy"
      />
    </div>
  );
}
