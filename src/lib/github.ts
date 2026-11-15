import { PERSON } from "@/data/profile";

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

/**
 * Fetches public repos on the server and caches the response for an hour (ISR), so visitors
 * never hit GitHub's per-IP rate limit. Set GITHUB_TOKEN to raise the server-side limit further.
 * Returns null if GitHub is unreachable, so the UI can fall back to a plain link.
 */
export async function getTopRepos(limit = 6): Promise<Repo[] | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${PERSON.githubUsername}/repos?sort=updated&per_page=30`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
      signal: AbortSignal.timeout(4000),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data: unknown = await res.json();
    if (!Array.isArray(data)) return null;
    return (data as Repo[])
      .filter((r) => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count || +new Date(b.updated_at) - +new Date(a.updated_at))
      .slice(0, limit);
  } catch {
    return null;
  }
}

export function timeAgo(dateStr: string): string {
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86_400_000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export const LANG_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  Dart: "#00B4AB",
};
