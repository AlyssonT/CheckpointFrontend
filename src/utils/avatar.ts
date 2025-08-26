export function getAvatarUrl(avatarPath: string | null): string {
  if (avatarPath && avatarPath.trim() !== "") {
    return import.meta.env.VITE_API_URL + avatarPath;
  }
  return "/avatar_placeholder.png";
}
