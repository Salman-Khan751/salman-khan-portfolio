"use client";

import { useRef, type ReactNode } from "react";
import { useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";

/**
 * A vertical rail that fills with the accent color as you scroll past it.
 * Children are server-rendered; only the rail itself is client code.
 */
export function TimelineColumn({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 72%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  return (
    <div ref={ref} className="relative space-y-12 pl-8 sm:pl-10">
      <span aria-hidden="true" className="absolute bottom-0 left-0 top-2 w-px bg-line" />
      <m.span aria-hidden="true" style={{ scaleY }} className="absolute bottom-0 left-0 top-2 w-px origin-top bg-accent" />
      {children}
    </div>
  );
}
