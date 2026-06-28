# Salman Khan — Portfolio

A personal portfolio website built with React.js (Vite) for an AI Software Engineer, with a dark/light theme switcher and Framer Motion animations throughout.

**Sections:** Hero (single "AI Software Engineer" identity with animated typing tagline and key metrics), About, Skills, Experience, Projects (flagship projects + a live feed of recent GitHub repos), Education, Certifications, Resume downloads, Contact, and Social links.

## Tech stack

- React 19 + Vite
- Framer Motion (page-load transition, scroll reveals, hover/tap micro-interactions)
- react-icons
- Plain CSS with light/dark design tokens (no framework) — see `src/index.css`
- React Context for theme state (`src/context/`), persisted to `localStorage`
- GitHub REST API (client-side fetch, no token needed, no backend)

## Run it locally

```bash
npm install
npm run dev
```

Visit the printed `localhost` URL. To produce a production build:

```bash
npm run build
npm run preview   # serve the build locally to sanity-check it
```

## Update your content

Everything text-based lives in one file: **`src/data/profile.js`**. Edit:

- `PERSON` — name, email, phone, social links
- `IDENTITY` — the hero title, typed tagline, summary, and the three metric stats
- `SKILL_GROUPS`, `EXPERIENCE`, `PROJECTS`, `EDUCATION`, `CERTIFICATIONS`
- `RESUMES` — points at the PDFs in `public/resumes/`. Replace those PDF files directly to update your downloadable resumes (keep the same filenames, or update the `file` paths to match).

The Projects section also pulls your **6 most-starred non-fork repos** live from the GitHub REST API at `https://api.github.com/users/<username>/repos` — no setup needed, it just works once deployed. Change the username in `PERSON.githubUsername` if needed.

## Theme switcher

The dark/light toggle lives in the navbar (`src/components/ThemeToggle.jsx`) and is backed by `src/context/ThemeContext.jsx`. The chosen theme is saved to `localStorage` and re-applied instantly on next visit via a small inline script in `index.html` (prevents a flash of the wrong theme on load). All colors are CSS variables defined once in `src/index.css` under `:root` (dark) and `[data-theme="light"]` — there's nothing to update per-component when adjusting the palette.

## Deploy for free

Both options below are free, give you HTTPS and a public URL, and redeploy automatically on every push.

### Option A — Vercel (recommended, fastest)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub → **Add New Project**.
3. Import your repository. Vercel auto-detects Vite — leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live URL like `your-project.vercel.app` within a minute.
5. (Optional) Add a custom domain under Project → Settings → Domains.

Every future `git push` to your main branch redeploys automatically.

### Option B — Netlify

1. Push this project to a GitHub repository.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Connect GitHub and select your repo. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**. You'll get a URL like `your-project.netlify.app`.

### Option C — GitHub Pages

1. Install the deploy helper: `npm install --save-dev gh-pages`
2. In `package.json`, add:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.js`, set `base: '/<repo-name>/'`.
4. Run `npm run deploy`. Enable Pages in your repo settings (Settings → Pages → set source to the `gh-pages` branch).

> Vercel or Netlify are recommended over GitHub Pages here since this is a single-page app — both handle hosting and HTTPS with zero config, whereas Pages needs the extra `base` path step above.

## Notes

- The contact form uses a `mailto:` link (no backend) — it opens the visitor's email client pre-filled with their message. For a real inbox-based form, consider a free service like Formspree or Web3Forms and swap the `handleSubmit` in `src/components/Contact.jsx`.
- Reduced-motion preferences are respected (`prefers-reduced-motion`).
- All resume PDFs are served statically from `public/resumes/`.

