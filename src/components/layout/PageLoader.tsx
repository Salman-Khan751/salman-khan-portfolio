import { Logo } from "@/components/ui/Logo";

/**
 * Short intro overlay. It is pure CSS (see .page-loader in globals.css): it needs no JavaScript,
 * clears itself after ~1.2s, and is skipped entirely for visitors who prefer reduced motion.
 * To remove it, delete this component and its usage in layout.tsx.
 */
export function PageLoader() {
  return (
    <div className="page-loader" aria-hidden="true">
      <div className="page-loader__mark">
        <Logo priority className="h-24" sizes="80px" />
      </div>
      <div className="page-loader__bar" />
    </div>
  );
}
