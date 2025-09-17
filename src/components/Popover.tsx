import { useEffect, useRef, useState, type ReactNode } from "react";

type Positions = "tl" | "tr" | "bl" | "br";

interface PopoverProps {
  anchor: ReactNode;
  children: (helpers: { close: () => void }) => ReactNode;
  anchorPos?: Positions;
  popoverPos?: Positions;
}

function getPopoverPosition(
  anchorRect: DOMRect,
  popoverRect: DOMRect,
  anchorPos: Positions,
  popoverPos: Positions,
) {
  const anchorCorners = {
    tl: { x: anchorRect.left, y: anchorRect.top },
    tr: { x: anchorRect.right, y: anchorRect.top },
    bl: { x: anchorRect.left, y: anchorRect.bottom },
    br: { x: anchorRect.right, y: anchorRect.bottom },
  };

  const popoverOffsets = {
    tl: { x: 0, y: 0 },
    tr: { x: -popoverRect.width, y: 0 },
    bl: { x: 0, y: -popoverRect.height },
    br: { x: -popoverRect.width, y: -popoverRect.height },
  };

  const anchorCorner = anchorCorners[anchorPos];
  const popoverOffset = popoverOffsets[popoverPos];

  return {
    top: anchorCorner.y + popoverOffset.y,
    left: anchorCorner.x + popoverOffset.x,
  };
}

export function Popover({
  anchor,
  children,
  anchorPos = "bl",
  popoverPos = "tl",
}: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const anchorRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen && anchorRef.current && popoverRef.current) {
      const anchorRect = anchorRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();

      const newPosition = getPopoverPosition(
        anchorRect,
        popoverRect,
        anchorPos,
        popoverPos,
      );

      setPosition(newPosition);
    }
  }, [isOpen, anchorPos, popoverPos]);

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
        className="cursor-pointer inline-block"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {anchor}
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          className="fixed z-50 bg-primary rounded shadow-lg p-2"
          style={{
            top: position.top,
            left: position.left,
            visibility:
              position.top === 0 && position.left === 0 ? "hidden" : "visible",
          }}
        >
          {children({ close })}
        </div>
      )}
    </>
  );
}
