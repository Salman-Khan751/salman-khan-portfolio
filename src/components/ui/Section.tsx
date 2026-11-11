import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  /** Short name read by screen readers; matches the nav label. */
  label: string;
  title: string;
  description?: string;
  tone?: "default" | "soft";
  className?: string;
  children: ReactNode;
}

/** Shared section shell: consistent spacing, container width and heading treatment. */
export function Section({ id, label, title, description, tone = "default", className, children }: SectionProps) {
  return (
    <section id={id} aria-label={label} className={cn("relative py-20 md:py-28", tone === "soft" && "bg-bg-soft", className)}>
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6">
        <Reveal className="mb-12 grid gap-4 md:mb-16 md:grid-cols-12 md:items-end md:gap-8">
          <h2 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.05] md:col-span-7">{title}</h2>
          {description && <p className="max-w-[46ch] text-[1.02rem] leading-relaxed text-fg-dim md:col-span-5 md:justify-self-end">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
