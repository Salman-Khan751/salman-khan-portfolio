# Salman Khan — Portfolio

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion (Framer Motion)

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint && npm run typecheck
```

Copy `.env.example` to `.env.local`. `NEXT_PUBLIC_SITE_URL` sets canonical/OG URLs; `GITHUB_TOKEN` (optional, no scopes) raises the GitHub API limit for the "Live from GitHub" section.

## Edit content

Everything lives in **`src/data/profile.ts`**: bio, skills, experience, projects, certificates, résumé files. Résumé PDFs are in `public/resumes/`, certificate images in `public/certificates/`.

## Structure

```
src/
  app/               layout (fonts, SEO, JSON-LD, theme script), page, sitemap, robots, OG image, 404
  components/
    layout/          Navbar, Footer, ScrollProgress, PageLoader, ThemeToggle
    sections/        Hero, About, Skills, Experience, Projects, GitHubRepos, Education,
                     Certificates, Resume, Contact, ContactForm
    ui/              Section, Reveal, Button, Tag, SpotlightCard, TimelineColumn, Logo, CopyEmailButton
    providers/       MotionProvider (LazyMotion + reduced-motion)
  data/profile.ts    all content
  lib/               cn, motion easing, github fetch, useMediaQuery
```

## Notes

- Server Components by default; client code only where interaction/animation needs it.
- Motion loads lazily (`LazyMotion`) and honours `prefers-reduced-motion`.
- Theme: `<html data-theme>` is set by an inline script before paint (no flash); colors are CSS variables in `globals.css`.
- Fonts are self-hosted via `next/font/local` (from `@fontsource-variable`): no Google Fonts request.
- The intro loader is pure CSS; remove `<PageLoader />` in `layout.tsx` to drop it.
- The contact form validates, then POSTs to `/api/contact`. With `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` set it sends the message from the server (honeypot + rate limit included). Without them the route returns 501 and the form opens a pre-filled `mailto:` instead, so it works with zero configuration.
- Deploy to Vercel: import the repo and set `NEXT_PUBLIC_SITE_URL`.
