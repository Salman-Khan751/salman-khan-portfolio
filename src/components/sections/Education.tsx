import { FiArrowRight, FiBookOpen } from "react-icons/fi";
import { EDUCATION } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Education() {
  return (
    <Section id="education" label="Education" title="Foundation for everything else">
      <Reveal>
        <SpotlightCard className="flex flex-col gap-8 p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent-text">
              <FiBookOpen aria-hidden="true" className="size-6" />
            </span>
            <div>
              <p className="font-mono text-[0.8rem] text-fg-faint">{EDUCATION.period}</p>
              <h3 className="mt-1 max-w-[30ch] font-display text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold leading-snug">{EDUCATION.degree}</h3>
              <p className="mt-2 text-fg-dim">{EDUCATION.school}</p>
            </div>
          </div>
          <a
            href="#certificates"
            className="group inline-flex shrink-0 items-center gap-2 font-semibold text-accent-text"
          >
            See my certifications
            <FiArrowRight aria-hidden="true" className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
          </a>
        </SpotlightCard>
      </Reveal>
    </Section>
  );
}
