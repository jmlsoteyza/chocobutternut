# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Personal portfolio site for a frontend/UI developer — single-page scroll, App Router, built to read as "calm, capable, and detail-oriented" to both non-technical clients and other developers. The full design intent (voice, layout order, locked color system, glass-morphism spec) lives in [portfolio-design.md](portfolio-design.md) — read it before making any visual, copy, or layout decision. Performance/architecture reasoning for this stack lives in [nextjs-performance-notes.md](nextjs-performance-notes.md) — read it before adding client-side interactivity, fetching data, or introducing an animation.

## Common Commands

```
npm run dev      # start local dev server (localhost:3000)
npm run build    # production build
npm run start    # run the production build
npm run lint     # eslint check
```

No test suite is configured.

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4 — configured entirely in `app/globals.css` via `@theme inline`; there is no `tailwind.config.*` file
- Fonts wired up once in `app/layout.tsx`: Satoshi self-hosted via `next/font/local` (`public/font/`), Inter and Montserrat via `next/font/google` — all exposed as CSS variables (`--font-satoshi`, `--font-inter`, `--font-montserrat`) and mapped in `app/globals.css`
- No animation or state-management library is installed yet. The reference docs anticipate `motion` (the renamed Framer Motion) for the chatbot/scroll reveals — don't assume it or GSAP is present; check `package.json` before importing one.

## Architecture

- `app/layout.tsx` — root layout: font setup only, no page content.
- `app/page.tsx` — the real homepage. Currently placeholder scroll sections standing in for the locked section order from the design brief (Hero w/ chatbot → About → Experience → Projects → Skills).
- `app/test/page.tsx` — scratch page, not linked from real navigation. Used to prototype UI (currently the hero chatbot) in isolation before it's wired into `app/page.tsx`.
- `components/` — exists, currently empty. Extract components here as sections get built out for real.
- `app/globals.css` — design tokens (`--background`, `--foreground`, font variable mapping) and one-off global classes (e.g. `.bg-grid`) live here, Tailwind v4-style, instead of a JS/TS config file.
- Server/Client split: everything defaults to a Server Component (no directive needed). Only components that need `useState`/`onClick`/interaction (the chatbot) get `"use client"` — keep that directive on the smallest leaf component, not the section wrapping it.
- Chatbot conversation state is expected to stay local to the chatbot component (`useState`), not lifted into context — it's the only genuinely stateful piece of the site.

## Design System (locked — see `portfolio-design.md` for full detail)

- Palette: background `#111111`, primary text `#FFFFFF` (sparingly), secondary text `#E8E8E8`, body `#999999`, meta/labels `#555555`, glass fill `rgba(255,255,255,0.04)`, glass border `rgba(255,255,255,0.08)`. No color accent — glass morphism on ~10% of the surface _is_ the accent.
- Body line-height `1.7`; never pure white for large text blocks.
- Centered container, 1080–1180px.
- Animate only `opacity`/`transform`; nothing that "calls attention to itself"; always respect `prefers-reduced-motion`.

## Core Rules

### 1. Stay in scope — don't touch what wasn't asked

Only change what the request covers. Do not refactor, rename, "improve," or touch unrelated logic — even if you notice something else that could be better. If you spot an unrelated issue, mention it at the end of your reply instead of fixing it.

Example: "Fix the Tailwind styles for this component" means touch `className` / styling only. Don't modify `useState`, `useEffect`, or any other logic unless that was part of the request.

### 2. Explain every change

After making changes, give a short, plain-language summary: what changed, in which file(s), and why. Don't skip this unless explicitly told to.

Use proper English that's simple and easy to understand. No heavy jargon without explaining it — explain like the reader is a junior developer, not a senior one.

### 3. Clean, senior-level code

- Follow the patterns already used in this repo — don't introduce a new pattern for something that already has an established one.
- No `any` types. No leftover `console.log`s. No dead/commented-out code.
- Extract repeated logic into hooks or utils instead of duplicating it.
- Prefer clear, well-named variables over clever one-liners.
- Keep components focused — split a component up when it's doing too much.

## Additional Guardrails

- **Ask before installing new dependencies.** Don't add a package to solve something that can be done with what's already installed.
- **Ask instead of guessing** when a request is ambiguous, rather than picking an interpretation silently.
- **Never touch `.env` files or print/expose API keys or secrets** (e.g. a Claude API key, if one gets added for the portfolio chatbot) in code, logs, or chat output.
- **Match existing design tokens** (see Design System above) instead of inventing new colors/spacing on the fly.
