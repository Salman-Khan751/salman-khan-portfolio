"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, useReducedMotion, type PanInfo } from "motion/react";
import * as m from "motion/react-m";
import { FiAward, FiCalendar, FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from "react-icons/fi";
import { CERTIFICATIONS } from "@/data/profile";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

const TOTAL = CERTIFICATIONS.length;
const mod = (n: number) => ((n % TOTAL) + TOTAL) % TOTAL;

function circularOffset(index: number, active: number) {
  let diff = index - active;
  if (diff > TOTAL / 2) diff -= TOTAL;
  if (diff < -TOTAL / 2) diff += TOTAL;
  return diff;
}

export function Certificates() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const compact = useMediaQuery("(max-width: 640px)");
  const spacing = compact ? 78 : 176;

  const next = useCallback(() => setActive((a) => mod(a + 1)), []);
  const prev = useCallback(() => setActive((a) => mod(a - 1)), []);

  // Gentle autoplay: pauses on hover/focus, while the lightbox is open, and for reduced motion.
  useEffect(() => {
    if (paused || lightbox !== null || reduce) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused, lightbox, reduce, next]);

  // Lightbox: Escape / arrow keys, scroll lock, focus trap, and focus returns to the opener on close.
  const isOpen = lightbox !== null;
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((l) => (l === null ? l : mod(l + 1)));
      if (e.key === "ArrowLeft") setLightbox((l) => (l === null ? l : mod(l - 1)));
      if (e.key === "Tab" && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll<HTMLElement>("button");
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      returnFocus.current?.focus();
    };
  }, [isOpen]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  const current = CERTIFICATIONS[active];

  return (
    <Section
      id="certificates"
      label="Certificates"
      title="Verified learning, hands-on proof"
      description={`${TOTAL} certifications across generative AI, cybersecurity, data analysis and cloud. Drag or use the arrows; open the front card to view it full size.`}
      tone="soft"
    >
      <Reveal>
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Certifications"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
          }}
        >
          <div className="relative grid h-[230px] place-items-center overflow-x-clip [perspective:1200px] sm:h-[380px]">
            {CERTIFICATIONS.map((cert, i) => {
              const offset = circularOffset(i, active);
              const abs = Math.abs(offset);
              const isActive = offset === 0;
              const open = () => {
                if (!isActive) return setActive(i);
                returnFocus.current = document.activeElement as HTMLElement | null;
                setLightbox(i);
              };

              return (
                <m.button
                  key={cert.id}
                  type="button"
                  aria-label={isActive ? `${cert.name}, ${cert.issuer}. Open full size` : `Show ${cert.name}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group relative col-start-1 row-start-1 w-[min(72vw,400px)] overflow-hidden rounded-xl border border-line-hi bg-surface text-left shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)]",
                    isActive ? "cursor-zoom-in" : "cursor-pointer",
                  )}
                  style={{ zIndex: 100 - abs }}
                  drag={isActive ? "x" : false}
                  dragElastic={0.18}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={isActive ? onDragEnd : undefined}
                  initial={false}
                  animate={{
                    x: offset * spacing,
                    rotateY: offset * -30,
                    scale: isActive ? 1 : 1 - abs * 0.14,
                    z: -abs * 90,
                    opacity: abs > 1 ? 0 : 1 - abs * 0.3,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  // onTap ignores drags; keyboard activation arrives as a click with detail 0.
                  onTap={open}
                  onClick={(e) => e.detail === 0 && open()}
                  tabIndex={abs > 1 ? -1 : 0}
                >
                  <Image
                    src={cert.image}
                    alt=""
                    width={cert.width}
                    height={cert.height}
                    sizes="(min-width: 640px) 400px, 72vw"
                    draggable={false}
                    className="h-auto w-full select-none"
                  />
                  {isActive && (
                    <span aria-hidden="true" className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-bg/80 text-fg opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <FiZoomIn />
                    </span>
                  )}
                </m.button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button type="button" onClick={prev} aria-label="Previous certificate" className="grid size-11 place-items-center rounded-full border border-line-hi text-fg transition-[border-color,color,transform] duration-200 hover:border-accent hover:text-accent-text active:scale-95">
              <FiChevronLeft aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2">
              {CERTIFICATIONS.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to ${c.name}`}
                  aria-current={i === active ? "true" : undefined}
                  className="grid size-6 place-items-center"
                >
                  <span className={cn("block h-2 rounded-full transition-[width,background-color] duration-300 ease-out-expo", i === active ? "w-7 bg-accent" : "w-2 bg-line-hi")} />
                </button>
              ))}
            </div>
            <button type="button" onClick={next} aria-label="Next certificate" className="grid size-11 place-items-center rounded-full border border-line-hi text-fg transition-[border-color,color,transform] duration-200 hover:border-accent hover:text-accent-text active:scale-95">
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 min-h-[8.5rem] max-w-xl text-center" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
          >
            <h3 className="font-display text-2xl font-semibold">{current.name}</h3>
            <p className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[0.9rem] text-fg-dim">
              <span className="inline-flex items-center gap-1.5"><FiAward aria-hidden="true" /> {current.issuer}</span>
              <span className="inline-flex items-center gap-1.5"><FiCalendar aria-hidden="true" /> {current.year}</span>
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {current.skills.map((s) => (
                <li key={s}><Tag>{s}</Tag></li>
              ))}
            </ul>
          </m.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <m.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${CERTIFICATIONS[lightbox].name} certificate`}
            className="fixed inset-0 z-[90] grid place-items-center bg-bg/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              autoFocus
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-line-hi bg-surface text-fg transition-colors hover:border-accent sm:right-6 sm:top-6"
            >
              <FiX aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l === null ? l : mod(l - 1))); }}
              aria-label="Previous certificate"
              className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-line-hi bg-surface text-fg transition-colors hover:border-accent sm:left-6"
            >
              <FiChevronLeft aria-hidden="true" />
            </button>
            <m.figure
              key={lightbox}
              className="max-w-[min(92vw,980px)]"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={CERTIFICATIONS[lightbox].image}
                alt={`${CERTIFICATIONS[lightbox].name} certificate from ${CERTIFICATIONS[lightbox].issuer}`}
                width={CERTIFICATIONS[lightbox].width}
                height={CERTIFICATIONS[lightbox].height}
                sizes="92vw"
                className="max-h-[78vh] w-auto rounded-xl border border-line-hi object-contain shadow-2xl"
              />
              <figcaption className="mt-4 text-center">
                <span className="font-display text-lg font-semibold">{CERTIFICATIONS[lightbox].name}</span>
                <span className="text-fg-dim"> · {CERTIFICATIONS[lightbox].issuer} · {CERTIFICATIONS[lightbox].year}</span>
              </figcaption>
            </m.figure>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l === null ? l : mod(l + 1))); }}
              aria-label="Next certificate"
              className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-line-hi bg-surface text-fg transition-colors hover:border-accent sm:right-6"
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
