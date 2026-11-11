import { FiCpu, FiLayers, FiZap } from "react-icons/fi";
import { ABOUT } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const ICONS = [FiCpu, FiZap, FiLayers];

export function About() {
  return (
    <Section id="about" label="About" title={ABOUT.heading} description={ABOUT.lead}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-6 lg:col-span-7">
          {ABOUT.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="max-w-[62ch] text-[1.05rem] leading-[1.8] text-fg-dim">{p}</p>
            </Reveal>
          ))}
        </div>

        <ul className="divide-y divide-line border-y border-line lg:col-span-5">
          {ABOUT.pillars.map((pillar, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal as="li" key={pillar.title} delay={i * 0.08} className="flex gap-5 py-7 first:pt-6 last:pb-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-text">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-fg-dim">{pillar.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
