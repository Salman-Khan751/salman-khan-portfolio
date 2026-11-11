import { FiDownload, FiFileText } from "react-icons/fi";
import { RESUMES } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Resume() {
  return (
    <Section
      id="resume"
      label="Resume"
      title="Pick the résumé that fits the role"
      description="Three versions of the same experience, each focused on a different side of my work. All are PDFs."
    >
      <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
        {RESUMES.map((r, i) => (
          <Reveal as="li" key={r.key} delay={i * 0.07}>
            <a
              href={r.file}
              download
              className="group flex items-center gap-5 px-6 py-6 transition-colors duration-200 hover:bg-surface-hi sm:px-8"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-text transition-transform duration-300 ease-out-expo group-hover:scale-105">
                <FiFileText aria-hidden="true" className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg font-semibold">{r.label}</span>
                <span className="mt-0.5 block text-[0.92rem] text-fg-dim">{r.description}</span>
              </span>
              <span className="hidden items-center gap-2 text-[0.9rem] font-semibold text-fg-dim transition-colors group-hover:text-accent-text sm:inline-flex">
                Download PDF
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line-hi text-fg-dim transition-[border-color,color,transform] duration-300 ease-out-expo group-hover:translate-y-0.5 group-hover:border-accent group-hover:text-accent-text">
                <FiDownload aria-hidden="true" />
                <span className="sr-only">Download {r.label} résumé (PDF)</span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
