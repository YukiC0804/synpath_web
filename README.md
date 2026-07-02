# Synpath Web

Marketing site for [Synpath](https://www.synpath-ai.com) — AI-powered automation for manufacturers.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- React Router
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

- `src/components/home/Hero.tsx` — homepage hero section
- `src/legacy-app.jsx` — remainder of the app (routes, pages, i18n) ported from production
- `public/hero-manufacturing.png` — hero background image
