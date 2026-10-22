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
- Styling: CSS custom properties in `src/index.css`. One theme only (no light/dark mode).
- Design: 1970s retro-futurist bureau, TVA-inspired in look only (no TVA references or content: the site is about me). Dark warm browns, orange as the main colour with red mixed in (gradients, stamps, far wireframe edges), amber CRT phosphor for labels, deep teal as a sparing secondary accent (secondary button hover fill, skill/interest group headings, hero coordinates), manila paper for all recognition (publication file, certificates, award index cards); interests as embossed label-maker tape. Glows and a vignette; scanlines only inside the hero monitor (page-wide scanlines hurt readability). Thin rules, square corners, numbered sections. Fonts from Google Fonts: Barlow Condensed (display), IBM Plex Mono (labels), IBM Plex Sans (body).
- Hero: a CRT monitor with a rotating wireframe torus on a canvas, drawn like a vector display (`src/WireframeMonitor.tsx`); spins faster on hover.
- Motion: restrained: fill wipes, HUD corner brackets, small lifts, rubber stamps on hover; all motion respects `prefers-reduced-motion`.

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
- 2026-10-21: Replaced the cartoony first pass (thick outlines, offset shadows, synthwave sun) with a more serious TVA / Blade Runner direction.
- 2026-10-21: Dropped light/dark mode and Blade Runner; single dark TVA theme, orange primary with red, CRT effects.
- 2026-10-21: Removed page-wide scanlines and panel seams for readability; brass plaques became walnut + orange-red enamel; Sacred Timeline hero replaced by a wireframe torus (no TVA references).
- 2026-10-21: Walnut plaques clashed with the manila certificates and publication; awards are now manila index cards. Interests use label-maker tape so they don't look like skills.
- 2026-10-21: Tried swapping all red for teal; looked worse, reverted. Teal stays a slight accent only.
