export function GameImage({ image }: { image: string }) {
  return (
    <img
      src={image.length > 0 ? image : undefined}
      width={256}
      height={120}
      loading="lazy"
      style={{ objectFit: "contain" }}
    />
  );
}
