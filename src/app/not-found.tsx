import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[100svh] place-items-center px-6 text-center">
      <div className="flex flex-col items-center">
        <Logo className="h-24" sizes="80px" />
        <h1 className="mt-8 font-display text-[clamp(2.2rem,6vw,3.5rem)] font-semibold leading-tight">This page doesn’t exist</h1>
        <p className="mt-3 max-w-[40ch] text-fg-dim">The link may be broken or the page may have moved. The portfolio home page has everything.</p>
        <Button href="/" className="mt-8">
          Back to the portfolio
        </Button>
      </div>
    </main>
  );
}
