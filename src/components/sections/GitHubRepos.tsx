import { FiExternalLink, FiGitBranch, FiGithub, FiStar } from "react-icons/fi";
import { PERSON } from "@/data/profile";
import { LANG_COLORS, getTopRepos, timeAgo } from "@/lib/github";
import { Reveal } from "@/components/ui/Reveal";

export function GitHubReposSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-36 animate-shimmer rounded-xl border border-line bg-surface" />
      ))}
    </div>
  );
}

/** Async server component: renders the most-starred, recently updated public repos. */
export async function GitHubRepos() {
  const repos = await getTopRepos();

  if (!repos || repos.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-line-hi px-6 py-8 text-fg-dim">
        {repos === null ? "Live repository data isn’t available right now." : "No public repositories to show yet."} Browse everything on{" "}
        <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="font-medium text-accent-text underline-offset-4 hover:underline">
          GitHub
        </a>
        .
      </p>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo, i) => (
        <Reveal as="li" key={repo.id} delay={(i % 3) * 0.06}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-[border-color,transform] duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent/60"
          >
            <span className="flex items-start justify-between gap-3">
              <span className="break-all font-mono text-[0.9rem] font-medium text-accent-text">{repo.name}</span>
              <FiExternalLink aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-fg-faint transition-colors group-hover:text-accent-text" />
            </span>
            <span className="mt-2 line-clamp-2 flex-1 text-[0.9rem] leading-relaxed text-fg-dim">{repo.description || "No description provided."}</span>
            <span className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.8rem] text-fg-faint">
              {repo.language && (
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full" style={{ background: LANG_COLORS[repo.language] ?? "#888" }} />
                  {repo.language}
                </span>
              )}
              <span className="inline-flex items-center gap-1">
                <FiStar aria-hidden="true" /> {repo.stargazers_count}
                <span className="sr-only"> stars</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <FiGitBranch aria-hidden="true" /> {repo.forks_count}
                <span className="sr-only"> forks</span>
              </span>
              <span className="ml-auto">{timeAgo(repo.updated_at)}</span>
            </span>
          </a>
        </Reveal>
      ))}
    </ul>
  );
}

export function GitHubHeader() {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h3 className="inline-flex items-center gap-2.5 font-display text-xl font-semibold">
        <FiGithub aria-hidden="true" /> Live from GitHub
      </h3>
      <a
        href={PERSON.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[0.9rem] text-fg-dim transition-colors hover:text-accent-text"
      >
        @{PERSON.githubUsername} <FiExternalLink aria-hidden="true" className="size-3.5" />
      </a>
    </div>
  );
}
