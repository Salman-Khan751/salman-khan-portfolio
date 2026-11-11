import { EXPERIENCE } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { TimelineColumn } from "@/components/ui/TimelineColumn";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Where the work happened"
      description="Three organizations since August 2025, applying AI across healthcare, telecom, networking and transportation."
    >
      <div>
        {EXPERIENCE.map((job) => (
          <article key={job.org} className="grid gap-8 border-t border-line py-12 first:border-t-0 first:pt-0 lg:grid-cols-[250px_1fr] lg:gap-14">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <h3 className="font-display text-2xl font-semibold leading-tight">{job.org}</h3>
              <p className="mt-1.5 font-mono text-[0.8rem] text-fg-faint">{job.period}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.roles.map((r) => (
                  <li key={r}>
                    <Tag variant="accent" className="px-3 py-1.5 text-[0.75rem]">
                      {r}
                    </Tag>
                  </li>
                ))}
              </ul>
            </Reveal>

            <TimelineColumn>
              {job.items.map((item) => (
                <Reveal key={item.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-8 top-[0.6rem] size-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-bg sm:-left-10"
                  />
                  <h4 className="font-display text-xl font-semibold leading-snug">{item.title}</h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <li key={t}>
                        <Tag variant="mono">{t}</Tag>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 space-y-2.5 text-fg-dim">
                    {item.points.map((p) => (
                      <li key={p} className="relative max-w-[68ch] pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.72em] before:size-1 before:rounded-full before:bg-fg-faint">
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
              {job.footnote && <p className="text-sm text-fg-faint">{job.footnote}</p>}
            </TimelineColumn>
          </article>
        ))}
      </div>
    </Section>
  );
}
