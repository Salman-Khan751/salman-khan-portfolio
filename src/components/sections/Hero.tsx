"use client";

import { useEffect, useState, type CSSProperties, type PointerEvent } from "react";
import { AnimatePresence, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IDENTITY, PERSON } from "@/data/profile";
import { EASE_OUT } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

/** Cycles through the roles with a soft blur transition. Purely decorative, so hidden from assistive tech. */
function RoleSlider({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <div aria-hidden="true" className="relative flex min-h-[46px] items-center overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={roles[index]}
          className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent-soft px-5 py-2 font-mono text-[clamp(0.95rem,1.8vw,1.15rem)] font-semibold text-accent-text"
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          {roles[index]}
          <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-blink bg-accent-text" />
        </m.span>
      </AnimatePresence>
    </div>
  );
}

const CHIPS: { label: string; dot: string; position: string; delay: string }[] = [
  { label: IDENTITY.strengths[0], dot: "bg-accent", position: "left-0 top-[12%] sm:-left-[3%]", delay: "0s" },
  { label: IDENTITY.strengths[1], dot: "bg-amber", position: "right-0 top-[46%] sm:-right-[5%]", delay: "-2.4s" },
  { label: IDENTITY.strengths[2], dot: "bg-[#38a8ff]", position: "bottom-[8%] left-[2%]", delay: "-4.6s" },
];

/** Logo emblem. Tilts toward the pointer; the three chips name the strengths the orbit stands for. */
function Emblem() {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), { stiffness: 120, damping: 16 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-11, 11]), { stiffness: 120, damping: 16 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div className="mx-auto w-full max-w-[400px] [perspective:900px] lg:max-w-[440px]" onPointerMove={onMove} onPointerLeave={onLeave}>
      <m.div style={{ rotateX, rotateY }} className="relative aspect-square w-full">
        <div aria-hidden="true" className="absolute inset-0 rounded-full border border-line" />
        <div aria-hidden="true" className="absolute inset-[9%] rounded-full border border-dashed border-line-hi/70" />

        <div aria-hidden="true" className="absolute inset-0 animate-orbit">
          <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_22px_var(--glow)]" />
        </div>
        <div aria-hidden="true" className="absolute inset-[9%] animate-orbit-reverse">
          <span className="absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-amber shadow-[0_0_18px_var(--amber-soft)]" />
        </div>
      <div className="absolute inset-[19%] grid place-items-center overflow-hidden rounded-full border border-line-hi bg-[radial-gradient(circle_at_50%_35%,var(--surface-hi),var(--surface))] shadow-[0_30px_80px_-30px_var(--glow)]">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle,var(--logo-glow),transparent_68%)]"/>
      <div className="absolute inset-0 flex items-center justify-center">
      <Logo
      className="relative left-[8%] h-[76%] w-auto object-contain"
      sizes="(min-width: 1024px) 190px, 150px"
       />
         </div>
            </div>
{/* 
        {CHIPS.map((c) => (
          <span
            key={c.label}
            style={{ animationDelay: c.delay } as CSSProperties}
            className={`pointer-events-none absolute flex animate-float items-center gap-2 rounded-full border border-line-hi bg-surface/85 px-3.5 py-2 text-[0.75rem] font-medium text-fg backdrop-blur-md sm:text-[0.8rem] ${c.position}`}
          >
            <span className={`size-1.5 rounded-full ${c.dot}`} />
            {c.label}
          </span>
        ))} */}
      </m.div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  // Start the entrance as the intro loader fades out (loader is skipped for reduced motion).
  const base = reduce ? 0 : 0.7;

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: base } } };
  const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } } };

  return (
    <section id="top" aria-label="Introduction" className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32 lg:pt-28">
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div aria-hidden="true" className="absolute -right-40 -top-40 size-[620px] rounded-full bg-[radial-gradient(circle,var(--accent-soft),transparent_68%)]" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-48 size-[460px] rounded-full bg-[radial-gradient(circle,var(--amber-soft),transparent_68%)]" />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-16 px-5 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <m.div variants={container} initial="hidden" animate="show" className="max-w-[640px]">
          <h1 className="font-display text-[clamp(3.4rem,6vw,4.6rem)] font-bold leading-[0.92] tracking-[-0.045em]">
            Salman K.            
            <span className="sr-only"> — {IDENTITY.title}</span>
          </h1>

          <m.div variants={item} className="mt-7">
            <RoleSlider roles={IDENTITY.roles} />
          </m.div>

          <m.p variants={item} className="mt-6 max-w-[34ch] font-display text-[1.35rem] font-medium leading-snug text-fg sm:text-[1.55rem]">
            {IDENTITY.tagline}
          </m.p>

          <m.p variants={item} className="mt-5 max-w-[58ch] leading-relaxed text-fg-dim">
            {IDENTITY.summary}
          </m.p>

          <m.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#contact">Get in touch</Button>
            <Button href="#projects" variant="ghost">
              View projects
            </Button>
            <Button href="#resume" variant="link">
              <FiDownload aria-hidden="true" className="size-4" /> Resume
            </Button>
          </m.div>

          <m.dl variants={item} className="mt-12 grid max-w-[560px] grid-cols-3 gap-5 border-t border-line pt-7">
            {IDENTITY.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1.5">
                <dt className="max-w-[17ch] text-[0.8rem] leading-snug text-fg-faint">{metric.label}</dt>            
                <dd className="order-first font-display text-[clamp(1.75rem,3.6vw,2.4rem)] font-semibold leading-none tracking-tight">{metric.value}</dd>              
              </div>
            ))}
          </m.dl>

          <m.div variants={item} className="mt-8 flex items-center gap-2">
            {[
              { href: PERSON.github, label: "GitHub profile", Icon: FiGithub, external: true },
              { href: PERSON.linkedin, label: "LinkedIn profile", Icon: FiLinkedin, external: true },
              { href: `mailto:${PERSON.email}`, label: "Send an email", Icon: FiMail, external: false },
            ].map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid size-11 place-items-center rounded-full border border-line text-fg-dim transition-[color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-text"
              >
                <Icon aria-hidden="true" className="size-5" />
              </a>
            ))}
          </m.div>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: base + 0.1, ease: EASE_OUT }}
        >
          <Emblem />
        </m.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-6 left-1/2 hidden size-10 -translate-x-1/2 place-items-center rounded-full border border-line text-fg-dim transition-colors hover:border-accent hover:text-accent-text md:grid"
      >
        <FiArrowDown aria-hidden="true" className="animate-float" />
      </a>
    </section>
  );
}
