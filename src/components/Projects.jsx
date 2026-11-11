import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from "react-icons/fi";
import { PROJECTS, PERSON } from "../data/profile";
import "./Projects.css";

const LANG_COLORS = {
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

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    let mounted = true;
    fetch(`https://api.github.com/users/${PERSON.githubUsername}/repos?sort=updated&per_page=12`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        const cleaned = (Array.isArray(data) ? data : [])
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);
        setRepos(cleaned);
        setStatus("ok");
      })
      .catch(() => {
        if (mounted) setStatus("error");
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Things I've shipped</h2>
          <p className="section-sub">
            Flagship builds from my resume, plus a live pull of my most recent GitHub repositories.
          </p>
        </motion.div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              className="proj-card card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
            >
              <div className="proj-card-top">
                {p.badge && <span className="pill accent">{p.badge}</span>}
                <span className="proj-period mono">{p.period}</span>
              </div>
              <h3>{p.title}</h3>
              <ul className="proj-points">
                {p.points.map((pt, pi) => (
                  <li key={pi}>{pt}</li>
                ))}
              </ul>
              <div className="proj-tech">
                {p.tech.map((t) => (
                  <span key={t} className="mono">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="proj-github-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          <h3>
            <FiGithub /> Live from GitHub
          </h3>
          <a href={PERSON.github} target="_blank" rel="noreferrer" className="proj-github-link">
            @{PERSON.githubUsername} <FiExternalLink />
          </a>
        </motion.div>

        {status === "loading" && (
          <div className="proj-repo-grid">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="proj-repo-card skeleton" />
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="proj-github-fallback">
            Couldn't load live repo data right now — browse the full list directly on{" "}
            <a href={PERSON.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
        )}

        {status === "ok" && repos.length === 0 && (
          <p className="proj-github-fallback">
            No public repositories found yet — check back soon, or visit my{" "}
            <a href={PERSON.github} target="_blank" rel="noreferrer">
              GitHub profile
            </a>{" "}
            directly.
          </p>
        )}

        {status === "ok" && repos.length > 0 && (
          <div className="proj-repo-grid">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="proj-repo-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="proj-repo-top">
                  <span className="proj-repo-name">{repo.name}</span>
                  <FiExternalLink className="proj-repo-ext" />
                </div>
                <p className="proj-repo-desc">{repo.description || "No description provided."}</p>
                <div className="proj-repo-meta">
                  {repo.language && (
                    <span className="proj-repo-lang">
                      <span
                        className="proj-repo-dot"
                        style={{ background: LANG_COLORS[repo.language] || "#888" }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span>
                    <FiStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FiGitBranch /> {repo.forks_count}
                  </span>
                  <span className="proj-repo-updated">{timeAgo(repo.updated_at)}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
