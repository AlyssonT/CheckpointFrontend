import { useEffect, useRef, useState, type ReactNode } from "react";

interface PopoverProps {
  anchor: ReactNode;
  children: (helpers: { close: () => void }) => ReactNode;
}

export function Popover({ anchor, children }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const anchorRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen && anchorRef.current) {
      const pos = anchorRef.current.getBoundingClientRect();
      setPosition({ top: pos.bottom, left: pos.left });
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        anchorRef.current &&
        popoverRef.current &&
        !anchorRef.current.contains(event.target as Node) &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        ref={anchorRef}
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {anchor}
      </div>
      <div
        ref={popoverRef}
        className="absolute"
        style={{ top: position.top, left: position.left }}
        hidden={!isOpen}
      >
        {children({ close })}
      </div>
    </>
  );
}
