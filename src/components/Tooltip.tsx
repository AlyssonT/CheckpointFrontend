import { useState, type ReactNode } from "react";

interface TooltipProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Tooltip({ children, title, className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const getTooltipClass = () => {
    const baseClass =
      "absolute z-99 bg-gray-900 left-1/2 -top-10 transform -translate-x-1/2 rounded-xl px-3 text-nowrap";
    const opacity = isVisible ? "opacity-100" : "opacity-0";
    const pointerEvents = isVisible
      ? "pointer-events-auto"
      : "pointer-events-none";

    return `${baseClass} ${opacity} ${pointerEvents}`;
  };

  return (
    <span
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className={getTooltipClass()}>{title}</div>
    </span>
  );
}
