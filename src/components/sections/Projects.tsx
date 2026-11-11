import { Suspense } from "react";
import { FEATURED_PROJECT, OTHER_PROJECTS, PROJECTS, type Project } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Tag } from "@/components/ui/Tag";
import { GitHubHeader, GitHubRepos, GitHubReposSkeleton } from "./GitHubRepos";

function Bullets({ points }: { points: string[] }) {
  return (
    <ul className="space-y-2.5 text-fg-dim">
      {points.map((p) => (
        <li key={p} className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.72em] before:size-1 before:rounded-full before:bg-fg-faint">
          {p}
        </li>
      ))}
    </ul>
  );
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <li key={t}>
          <Tag variant="mono">{t}</Tag>
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <SpotlightCard className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <article>
          <div className="flex flex-wrap items-center gap-3">
            {project.badge && <Tag variant="accent">{project.badge}</Tag>}
            <span className="font-mono text-[0.8rem] text-fg-faint">{project.period}</span>
          </div>
          <h3 className="mt-5 max-w-[22ch] font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.12]">{project.title}</h3>
          <div className="mt-6">
            <Bullets points={project.points} />
          </div>
        </article>

        <div className="flex flex-col justify-between gap-8 rounded-xl border border-line bg-bg-soft p-7">
          {project.highlight && (
            <div>
              <p className="font-display text-[clamp(3.5rem,7vw,5rem)] font-bold leading-none tracking-tight text-accent-text">{project.highlight.value}</p>
              <p className="mt-3 max-w-[22ch] text-[0.95rem] leading-snug text-fg-dim">{project.highlight.label}</p>
            </div>
          )}
          <TechTags tech={project.tech} />
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Things I’ve built"
      description="A flagship final-year project, smaller builds from my résumés, and a live pull of my GitHub repositories."
      tone="soft"
    >
      <FeaturedProject project={FEATURED_PROJECT} />

      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07} className="h-full md:last:col-span-2 lg:last:col-span-1">
            <SpotlightCard className="flex h-full flex-col p-7">
              <article className="flex h-full flex-col">
                <span className="font-mono text-[0.78rem] text-fg-faint">{p.period}</span>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug">{p.title}</h3>
                <div className="mt-4 flex-1">
                  <Bullets points={p.points} />
                </div>
                <div className="mt-6">
                  <TechTags tech={p.tech} />
                </div>
              </article>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <h3 className="mb-4 font-display text-xl font-semibold">More builds</h3>
        <ul className="divide-y divide-line border-y border-line">
          {OTHER_PROJECTS.map((p) => (
            <li key={p.title} className="grid gap-2 py-5 md:grid-cols-[1fr_1.7fr_1fr] md:items-center md:gap-8">
              <h4 className="font-display text-lg font-semibold">{p.title}</h4>
              <p className="leading-relaxed text-fg-dim">{p.points[0]}</p>
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <TechTags tech={p.tech} />
                <span className="font-mono text-[0.78rem] text-fg-faint">{p.period}</span>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-20">
        <GitHubHeader />
        <Suspense fallback={<GitHubReposSkeleton />}>
          <GitHubRepos />
        </Suspense>
      </div>
    </Section>
  );
}
