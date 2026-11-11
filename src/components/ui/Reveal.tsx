"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { EASE_OUT } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance in px the element travels while fading in. Keep it small. */
  y?: number;
  as?: "div" | "li" | "article";
}

const TAGS = { div: m.div, li: m.li, article: m.article } as const;

/** Fades content in once as it enters the viewport. Subtle by design. */
export function Reveal({ children, className, delay = 0, y = 16, as = "div" }: RevealProps) {
  const Tag = TAGS[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
    >
      {children}
    </Tag>
  );
}
