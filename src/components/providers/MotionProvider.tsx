"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

/**
 * Loads Motion's feature bundle on demand (components use the tiny `m.*` elements)
 * and respects the visitor's "reduce motion" OS setting for transform animations.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
