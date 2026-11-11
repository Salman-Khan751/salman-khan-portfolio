"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import { cn } from "@/lib/cn";

/**
 * A card with a soft highlight that follows the cursor.
 * Writes CSS variables directly to the DOM, so pointer movement never re-renders React.
 */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn(
        "spotlight rounded-2xl border border-line bg-surface transition-[border-color,transform] duration-300 ease-out-expo hover:-translate-y-1 hover:border-line-hi",
        className,
      )}
    >
      {children}
    </div>
  );
}
