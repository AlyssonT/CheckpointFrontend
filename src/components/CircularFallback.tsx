import { TbProgress } from "react-icons/tb";

export function CircularFallback({ full = false }: { full?: boolean }) {
  const hClass = full ? "fixed inset-0" : "h-screen";
  return (
    <div className={`flex justify-center items-center ${hClass} bg-primary`}>
      <TbProgress size={64} className="text-secondary animate-spin" />
    </div>
  );
}
