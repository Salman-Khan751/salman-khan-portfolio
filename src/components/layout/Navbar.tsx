"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { FiDownload } from "react-icons/fi";
import { NAV_LINKS, PERSON } from "@/data/profile";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Condensed, blurred bar once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently crossing the middle of the viewport.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    const onTop = () => window.scrollY < 200 && setActive("");
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);

  // Mobile menu: lock page scroll, close on Escape or when the viewport becomes desktop-sized.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open ? "border-b border-line/70 bg-bg/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] w-full max-w-[1200px] items-center justify-between px-5 sm:px-6">
        <a href="#top" aria-label={`${PERSON.name} — back to top`} onClick={() => setOpen(false)} className="flex items-center gap-3">
          <Logo className="h-10" sizes="40px" />
          <span className="hidden font-display text-[0.95rem] font-semibold tracking-tight xl:block">{PERSON.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition-colors duration-200",
                  isActive ? "text-fg" : "text-fg-dim hover:text-fg",
                )}
              >
                {isActive && (
                  <m.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-accent-soft ring-1 ring-accent/30"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#resume"
            className="hidden items-center gap-2 rounded-full border border-line-hi px-4 py-2 text-[0.9rem] font-semibold text-fg transition-[border-color,background-color,color] duration-200 hover:border-accent hover:bg-accent-soft hover:text-accent-text lg:inline-flex"
          >
            <FiDownload aria-hidden="true" className="size-4" /> Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-line text-fg lg:hidden"
          >
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span className={cn("absolute left-0 top-0 h-[1.5px] w-full rounded bg-current transition-transform duration-300 ease-out-expo", open && "translate-y-[5.25px] rotate-45")} />
              <span className={cn("absolute left-0 top-[5.25px] h-[1.5px] w-full rounded bg-current transition-opacity duration-200", open && "opacity-0")} />
              <span className={cn("absolute left-0 top-[10.5px] h-[1.5px] w-full rounded bg-current transition-transform duration-300 ease-out-expo", open && "-translate-y-[5.25px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>
    </header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[4.25rem] z-40 overflow-y-auto bg-bg/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile" className="mx-auto flex max-w-[1200px] flex-col px-5 pb-10 pt-6 sm:px-6">
              {NAV_LINKS.map((l, i) => (
                <m.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.id ? "true" : undefined}
                  className={cn(
                    "border-b border-line py-4 font-display text-[1.65rem] font-medium tracking-tight",
                    active === l.id ? "text-accent-text" : "text-fg",
                  )}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.04 + i * 0.045, ease: EASE_OUT }}
                >
                  {l.label}
                </m.a>
              ))}
              <m.a
                href="#resume"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-accent-solid px-6 py-3.5 font-semibold text-white"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4, ease: EASE_OUT }}
              >
                <FiDownload aria-hidden="true" /> Get my resume
              </m.a>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
