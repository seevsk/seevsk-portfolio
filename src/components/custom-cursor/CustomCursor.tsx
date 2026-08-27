"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pulseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hovering, setHovering] = useState(false);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };
    const onOver = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest?.(INTERACTIVE_SELECTOR)) {
        setHovering(true);
      }
    };
    const onOut = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest?.(INTERACTIVE_SELECTOR)) {
        setHovering(false);
      }
    };
    const onDown = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest?.(INTERACTIVE_SELECTOR)) return;

      setPulsing(true);
      if (pulseTimeout.current) clearTimeout(pulseTimeout.current);
      pulseTimeout.current = setTimeout(() => setPulsing(false), 350);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      if (pulseTimeout.current) clearTimeout(pulseTimeout.current);
    };
  }, []);

  const ringSize = pulsing ? "h-24 w-24" : hovering ? "h-14 w-14" : "h-8 w-8";
  const dotSize = pulsing ? "h-4 w-4" : hovering ? "h-3 w-3" : "h-2 w-2";

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden md:block"
    >
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff206e]/50 ease-out ${ringSize} ${
          pulsing
            ? "opacity-0 transition-all duration-300"
            : "opacity-100 transition-all duration-200"
        }`}
      />
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff206e] transition-all duration-150 ease-out ${dotSize}`}
      />
    </div>
  );
};
