import { TbProgress } from "react-icons/tb";

export function CircularFallback() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <TbProgress size={64} className="text-secondary animate-spin" />
    </div>
  );
}
