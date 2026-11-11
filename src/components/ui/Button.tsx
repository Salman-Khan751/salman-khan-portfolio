import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "link";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out-expo active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "btn-sheen rounded-xl bg-accent-solid px-6 py-3 text-[0.95rem] text-white hover:-translate-y-0.5 hover:bg-accent-solid-hover hover:shadow-[0_14px_34px_-12px_var(--glow)]",
  ghost:
    "rounded-xl border border-line-hi bg-transparent px-6 py-3 text-[0.95rem] text-fg hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft hover:text-accent-text",
  link: "rounded-lg px-1 py-2 text-[0.95rem] text-fg-dim hover:text-accent-text",
};

/** Anchor styled as a button. Server-safe; all motion is CSS. */
export function Button({ href, children, variant = "primary", external, download, className }: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  );
}
