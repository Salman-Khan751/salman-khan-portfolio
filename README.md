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


