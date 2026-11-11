import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TagProps {
  children: ReactNode;
  /** "mono" is for code-like identifiers (tech stacks); "plain" is for skills and labels. */
  variant?: "mono" | "plain" | "accent";
  className?: string;
}

export function Tag({ children, variant = "plain", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-[0.8rem] leading-none transition-colors duration-200",
        variant === "mono" && "border-line bg-surface font-mono text-[0.72rem] text-fg-dim",
        variant === "plain" && "border-line bg-surface text-fg-dim hover:border-line-hi hover:text-fg",
        variant === "accent" && "rounded-full border-accent/40 bg-accent-soft px-3 py-1.5 font-medium text-accent-text",
        className,
      )}
    >
      {children}
    </span>
  );
}
