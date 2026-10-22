# BRIEF

## Project
Personal portfolio site showcasing projects and work experience.

## Vision
- **v1 (now):** a polished, conventional single-page site: hero, projects, experience, contact.
- **Future:** an art-piece version. A 2D parallax illustration of my room built with Three.js; clicking an object zooms the camera in and reveals a section (e.g. the chalkboard shows projects).

## Stack
- Vite + React + TypeScript, plain CSS (no Tailwind), oxlint.
- Future room: React Three Fiber + drei, added only when that work starts.

## Conventions
- Content lives in typed data files under `src/content/` (`profile.ts`, `projects.ts`, `experience.ts`, `education.ts`, `skills.ts`, `recognition.ts`, `interests.ts`), kept separate from presentation so the same data can feed the room scene later.
- Styling: CSS custom properties in `src/index.css`. Theme is `<html data-theme="light|dark">`, set before paint by an inline script in `index.html` (saved choice, else light) and toggled by `src/ThemeToggle.tsx`.
- Design: 70s/80s retro-futurism. Light = 70s daytime (cream, mustard, orange, brown); dark = 80s neon night (purple, magenta, cyan, scanlines). Fonts from Google Fonts: Righteous (display), Orbitron (labels), Space Grotesk (body).
- Motion: hover lifts with hard offset shadows, clicks press flat; all motion respects `prefers-reduced-motion`.

## Commands
- `npm run dev`: dev server
- `npm run build`: type check (`tsc -b`) + production build
- `npm run lint`: oxlint

## My rules
- Don't write or suggest tests until I start a test pass.

## Status
- v1 built; `src/content/` filled from resume (profile, projects, experience). Education, skills, recognition (publication, certifications, awards) and interests sections added.

## Decisions log
- 2026-10-21: Chose Vite + React + TS over Astro. The site is ultimately an art piece, so SEO and static pages matter less; React is kept so React Three Fiber can be added without a rewrite.
- 2026-10-21: Build a polished normal site first; the room comes later.
- 2026-10-21: Retro-futuristic 70s/80s theme with a manual light/dark toggle.
