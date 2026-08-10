# Next.js Portfolio — Performance Optimization Notes

> Reference doc for the build phase. Keep this open while coding.
> Verified live against npm on **Aug 10, 2026**: Next.js `16.3.0`, React `19.2.8`, Tailwind `4.3.3`, TypeScript `7.0.2`.

**A note on how this doc was made:** I don't have general web browsing turned on in this chat, so I couldn't "search Google." What I _did_ do is pull real, current version numbers straight from the npm registry — so the version numbers above are real, not guessed. The concepts below (Server Components, `next/image`, animation performance) are stable APIs that haven't changed much, so I'm confident in those. The **caching** section specifically has changed shape across the last few Next.js versions — I've flagged where you should double check the exact syntax against the current docs before you commit to it.

**Update — new sections added below:** React re-render/state patterns, CSS bloat, CDNs, compression, and deployment-level checks. These are stable, well-established concepts, not fast-moving framework APIs like caching is — so no fresh verification was needed for this round, my existing knowledge holds up fine here.

---

## Quick Priority List — if you only do 6 things

1. Keep almost every component a **Server Component**. Only the chatbot, and anything using `onClick`/`useState`, gets `"use client"`.
2. Every image goes through `next/image`. No plain `<img>` tags, ever.
3. Load your typeface with `next/font/local`, and only import the font **weights you actually use**.
4. Lazy-load the chatbot with `next/dynamic` — it shouldn't cost anything until someone opens it.
5. Animate only `opacity` and `transform`. Never animate `blur`, `width`, or `box-shadow` directly.
6. After you build, run `next build` and read the "First Load JS" size per route before you ship.

### Quick List — New Additions

7. Turn on React DevTools' **"highlight updates"** setting — it's the easiest way to _see_ wasted re-renders instead of guessing.
8. Don't put data in state if you can just calculate it while rendering — one less thing to keep in sync.
9. Skip Redux/Zustand entirely. `useState` + `useContext` is genuinely enough for a portfolio.
10. You don't need to manually set up a CDN, compression, or HTTP/2/3 — Vercel already gives you all three the moment you deploy.
11. Next.js already minifies your JS/CSS in production builds. No extra tooling needed there either.

---

## 1. Rendering — Server vs. Client Components

This is the single biggest performance decision in Next.js App Router, so it's worth understanding, not just following.

**Server Component** = the code runs on the server only. It sends finished HTML to the browser. **Zero JavaScript cost** for that component. This is the default for every file in the `app/` folder — you don't need to write anything special to get this.

**Client Component** = the code also runs _in the browser_, so it can use `useState`, `useEffect`, `onClick`, and so on. You opt into this by writing `"use client"` as the very first line of the file.

```tsx
// About.tsx — Server Component (default, no directive needed)
// This ships ZERO javascript to the browser. It's just HTML.
export default function About() {
  return <section>...</section>;
}
```

```tsx
// Chatbot.tsx — Client Component (needs interaction, so it needs JS)
'use client';
import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  // ...
}
```

**The common beginner mistake:** putting `"use client"` at the top of a big layout or section file "just to be safe." That drags _every child component_ into the client JS bundle — even the ones that don't need it.

**Rule for your site specifically:** your Hero text, About, Experience cards, Project cards, and Skills list have no interaction — they're pure Server Components. Only the chatbot widget (and maybe the "active nav link while scrolling" logic) needs `"use client"`. Push the directive as far **down** the component tree as possible — wrap just the small interactive piece, not the whole section around it.

---

## 2. "Better Code" — a few React patterns worth knowing

- **Don't memoize everything.** `useMemo` and `useCallback` have their own small cost. Only reach for them when you've noticed an actual re-render problem (e.g. a component re-rendering on every keystroke of an unrelated input), not by default on every function.
- **Keep state as local as possible.** If only the Chatbot needs `messages` state, keep it inside `Chatbot.tsx` — don't lift it to a global context that re-renders your whole page every time a message arrives.
- **Let Server Components fetch data directly.** No loading spinner needed for static content like your projects list — the data is already there when the HTML arrives. Save loading states for genuinely dynamic things (like the chatbot's reply).
- **Avoid fetch waterfalls.** If a component needs two pieces of data, fetch them at the same time (`Promise.all`), not one after another.

---

## 3. React Re-Renders & State Management

A "re-render" is React re-running a component's code to check if anything on screen needs to change. Some re-renders are necessary. A lot of them aren't — and those wasted ones are a common, invisible source of slowness. This section covers the three things you flagged, plus the DevTools setup to actually catch them.

### Prevent Unnecessary Re-Renders

**The rule to know first:** when a parent component re-renders, every child underneath it re-renders too, by default — even if that specific child's own props didn't change.

**See it for yourself with React DevTools:**

1. Install the **React Developer Tools** browser extension (Chrome or Firefox).
2. Open DevTools → find the **Components** tab → click the gear/settings icon → check **"Highlight updates when components render."**
3. Click around your site (open the chatbot, type a message, scroll). Every component that re-renders flashes a colored outline on screen.
4. If something flashes that clearly shouldn't need to change (say, your Hero text flashing while you're only typing in the chatbot), you've found a real, visible problem — not a guess.

There's also a **Profiler** tab in the same extension — press record, interact with the page, stop recording, and it charts exactly which components rendered and how long each one took. Use this once "highlight updates" tells you _something_ is wrong and you need to see _how much_ it actually costs.

**The most common cause, with the fix:**

```tsx
// Bad — a new function is created every single render.
// This breaks memo() on Child below: React sees onClick as a "different" prop
// every time, so Child re-renders anyway, even though nothing meaningful changed.
function Parent() {
  const [count, setCount] = useState(0);
  return <Child onClick={() => console.log('clicked')} />;
}
```

```tsx
import { memo, useCallback, useState } from 'react';

// Good — useCallback keeps the same function reference across renders,
// so Child can actually skip re-rendering when nothing it cares about changed.
function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => console.log('clicked'), []);
  return <Child onClick={handleClick} />;
}

const Child = memo(function Child({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick}>Click</button>;
});
```

This only matters _because_ `Child` is wrapped in `memo()`. Without that wrapper, `Child` re-renders regardless of what you do in `Parent` — `useCallback` alone changes nothing by itself. This is also why Section 2's "don't memoize everything" advice still stands: reach for `useCallback` + `memo` together, on a component you've actually seen re-rendering wastefully in the Profiler — not by default, everywhere.

### State Management Optimization

For a portfolio, you almost certainly don't need Redux, Zustand, or any external state library. Here's the honest scoping:

- You have **one** genuinely stateful piece — the chatbot's conversation.
- Everything else (About, Experience, Projects, Skills) is static content, not state at all.

Plain `useState` inside `Chatbot.tsx` covers your entire app's state needs. If you later add something like a mobile nav menu (open/closed), that's another local `useState` — still nowhere near needing a state library.

**One habit worth building now:** don't store something in state if you can calculate it while rendering.

```tsx
// Bad — messageCount is "derived" data, just messages.length in disguise.
// Keeping it as separate state means it can drift out of sync, and it's an extra re-render.
const [messages, setMessages] = useState([]);
const [messageCount, setMessageCount] = useState(0);

// Good — compute it directly. Always correct, costs nothing extra.
const [messages, setMessages] = useState([]);
const messageCount = messages.length;
```

### Implement State Normalization

The plain version first: **normalization means storing a list as a flat lookup object (keyed by ID), instead of an array you have to search through.**

```tsx
// Not normalized — an array. Perfectly fine for a short list like a chat conversation.
const [messages, setMessages] = useState([
  { id: 1, role: 'user', text: 'Hi' },
  { id: 2, role: 'assistant', text: 'Hello!' }
]);

// To update message 2, you have to scan the whole array to find it:
setMessages((prev) => prev.map((m) => (m.id === 2 ? { ...m, text: 'Hello there!' } : m)));
```

```tsx
// Normalized — a flat object, keyed by id.
const [messagesById, setMessagesById] = useState({
  1: { id: 1, role: 'user', text: 'Hi' },
  2: { id: 2, role: 'assistant', text: 'Hello!' }
});

// Updating message 2 is a direct lookup — no scanning required:
setMessagesById((prev) => ({
  ...prev,
  2: { ...prev[2], text: 'Hello there!' }
}));
```

**Honest scoping, since this one's new to you:** normalization starts paying off once a list has hundreds or thousands of items, or updates very frequently (think a live feed, or a big spreadsheet-style table). A portfolio chatbot conversation is realistically a handful of messages in one sitting — the plain array in the first example is completely fine for that, and I wouldn't refactor a working chatbot just to normalize it. Good to have the pattern in your back pocket for the day you build something that actually needs it.

---

## 4. Caching ⚠️ _(verify exact syntax against current docs — this has changed release to release)_

Here's the concept, which is safe to rely on:

- Since **Next.js 15**, `fetch()` calls inside Server Components are **not cached by default** anymore. Older tutorials (Next.js 13/14) will tell you fetch is cached automatically — that's outdated advice now. On Next.js 16, treat every fetch as "runs fresh every time" unless you explicitly tell it otherwise.
- To cache a fetch and refresh it periodically (this is called **ISR** — Incremental Static Regeneration):

```tsx
const res = await fetch(url, { next: { revalidate: 3600 } }); // refresh every hour
```

- **For your specific case:** your projects, experience, and skills data is a fixed, known list (6+ real projects) — not something changing minute to minute. My honest recommendation: don't fetch this from an API or CMS at all. Keep it as a local TypeScript file (`data/projects.ts`). Zero network request, zero caching decision to make, and it becomes part of the static HTML at build time — the fastest possible option.
- You can also mark a whole page as always-static with:

```tsx
export const dynamic = 'force-static';
```

- **Your chatbot's API route should NOT be cached** — every question is different. Leave it as the default. This is fine and expected, because it lives in its own small route (`app/api/chat/route.ts`), completely separate from your main page. A slow AI response never slows down your portfolio's load time.
- Next.js 16 also has a newer, more explicit caching model built around a `"use cache"` directive (sometimes called "Cache Components"). I know it exists, but I can't confirm the exact current syntax without live docs access — worth a quick check before you build your data layer around it.

---

## 5. Code Splitting & Lazy Loading

`next/dynamic` delays loading a component's JavaScript until it's actually needed, instead of bundling it into the first page load.

```tsx
import dynamic from 'next/dynamic';

const Chatbot = dynamic(() => import('@/components/Chatbot'), {
  ssr: false, // it's purely interactive, no need to render it on the server
  loading: () => <ChatbotSkeleton /> // small placeholder shown while it loads
});
```

**Why this matters for you specifically:** your own design brief says the Hero's name and role need "a clean entrance" immediately, with the chatbot "inviting engagement second." Lazy-loading the chatbot isn't just a performance trick here — it directly matches your own design priority: text first, chatbot doesn't compete with it for load time.

For a long single-page scroll site like yours, most of the win comes from this one component. Sections further down (Skills, maybe) are cheap enough that lazy-loading them individually is a smaller win — not usually worth the added complexity.

---

## 6. Images

- Always use `next/image`, never a plain `<img>`. It auto-resizes, converts to WebP/AVIF, and lazy-loads anything off-screen — all without you writing that logic yourself.
- **Compress your project screenshots before uploading them** — `next/image` optimizes what you give it, but it can't fix a 5MB source PNG as well as you compressing it first (Squoosh or TinyPNG, down to WebP).
- Set the `sizes` prop correctly for responsive images, or the browser may download a bigger version than what's actually shown on screen.
- Only add `priority` to whatever is visible the instant the page loads. Don't mark every image `priority` — that defeats the purpose, since it tells the browser to load them all immediately instead of prioritizing.

---

## 7. Fonts & CSS Optimization

_This expands on fonts, plus the CSS-specific half you asked about. Tailwind's own bloat-prevention (purging unused classes) is covered in §9, so it isn't repeated here._

**Fonts:**

- Use `next/font/local` for Satoshi or General Sans (neither is on Google Fonts, so you'll self-host the actual font files in your project).
- **Only import the weights you use in the design.** If your Figma file uses Regular, Medium, and Semibold, import exactly those three — not all nine weights "just in case."
- `next/font` automatically prevents render-blocking font loading and layout shift (text jumping when the font swaps in). This is the main reason to use it over a `<link>` tag to a font CDN — you get this for free, no configuration needed.

**CSS, specifically:**

- **Critical CSS is already handled for you.** Next.js automatically inlines the CSS needed for the first screen of content in production builds — nothing to set up yourself.
- **Avoid `@import` inside your own hand-written CSS files.** A real `@import` in plain CSS is render-blocking and creates a request chain (the browser can't start fetching the second file until the first one arrives). Tailwind v4's `@import "tailwindcss";` at the top of your global CSS is safe and different — Tailwind's build step resolves that at build time, so nothing ships to the browser as a literal blocking `@import`.
- **Prefer Tailwind utility classes over hand-written custom CSS** where you reasonably can. Every custom class you write by hand is more CSS for the browser to parse on top of Tailwind's own output.
- **`contain: layout paint;`** is worth knowing for your glass card grid specifically — it tells the browser "changes inside this box don't affect anything outside it," so the browser can skip recalculating the rest of the page when one card changes (e.g., on hover). Optional, but a nice fit for a repeated-card layout like your Experience section.

---

## 8. Animations & Your Glass Morphism System

Your own design brief already sets the right bar here — Apple/Linear/Vercel-level restraint, and mandatory `prefers-reduced-motion` support. Here's how to hit that technically:

- **Only animate `opacity` and `transform`** (`translate`, `scale`). These run on the GPU and don't force the browser to recalculate layout — this is _why_ they feel smooth.
- **Avoid animating** `width`, `height`, `top`, `left`, or `box-shadow` directly — these are expensive, and are the usual cause of animations that feel janky instead of smooth.
- **Your glass cards use `backdrop-filter: blur()`.** This is one of the more GPU-expensive CSS properties that exists, especially with several cards on screen at once (your Experience section grid). Two rules: keep the blur value **static** — never animate the blur radius itself — and specifically test scroll performance in **Safari**, which has historically handled `backdrop-filter` worse than Chrome.
- **For scroll-triggered reveals:** use the browser's built-in `IntersectionObserver` to trigger a fade/translate-in once, when a section enters the viewport. No library needed, very cheap.
- **Respect `prefers-reduced-motion`** — wrap your transition CSS in a media query, don't just add it globally:

```css
@media (prefers-reduced-motion: no-preference) {
  .fade-in {
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
}
```

In plain terms: this line means _"only apply this animation if the visitor hasn't asked their OS to reduce motion."_ Without wrapping it in that media query, everyone gets the animation whether they asked to avoid it or not — which breaks the accessibility rule your own brief already sets.

- If you reach for an animation library, note that **Framer Motion is now published as `motion`** (same team, renamed package) — worth using the current name in a new project.

---

## 9. Bundle Size — Reducing JavaScript & CSS Bloat

**In plain terms: "bloat" is any code your browser downloads and has to parse that isn't actually needed for what's on screen.** It slows your site down even if a visitor never touches that code — the browser still has to download and process it before your page becomes interactive. Here's where it usually comes from, and what to do about each:

- Install `@next/bundle-analyzer` and run it occasionally. It wraps your Next.js config and shows a visual map of what's actually taking up space in your JS bundle — you often find a surprise.
- Run `npx depcheck` periodically — it lists packages sitting in your `package.json` that nothing in your code actually imports anymore.
- **Icon imports:** always import icons one at a time.

```tsx
// Good — only these two icons end up in your bundle
import { Github, Mail } from 'lucide-react';

// Bad — pulls in the entire icon library
import * as Icons from 'lucide-react';
```

- Skip heavy libraries you don't need for a portfolio site: no `moment.js` (native `Intl.DateTimeFormat` or `date-fns` covers formatting your Experience dates), no full `lodash` import (plain JS array/object methods cover almost everything a portfolio needs).
- Tailwind v4 tree-shakes unused CSS automatically by scanning your files — just confirm your content/source paths actually cover every component folder, or you'll get _missing_ styles rather than bloat. Worth knowing: Tailwind v4 also ships a new Rust-based build engine, so your local build times should already be noticeably faster than v3 without you doing anything.
- **Minification is already automatic.** `next build` minifies your JS and CSS (strips whitespace, shortens variable names, etc.) as a normal part of production builds — no need to install or configure Terser/cssnano yourself.
- **Watch for duplicate dependencies.** Sometimes two different packages each depend on a different version of the same underlying library, so you end up shipping it twice without realizing. The bundle analyzer above is how you'd actually spot this — it shows up as an unexpectedly large, repeated chunk.

---

## 10. Third-Party Scripts

- If you add analytics later (Vercel Analytics is a natural fit since your current reference site is already on Vercel), load it with `next/script` so it never blocks your page from becoming interactive.
- Keep third-party scripts close to zero on a portfolio. Every extra script is a request, a parse cost, and one more thing that can slow down the exact first impression your brief is built around.

---

## 11. Chatbot API Route — Specific Notes

- **Stream the response** instead of waiting for the full AI reply before showing anything. The visitor sees words appear as they're generated — it _feels_ faster even when the total time is the same.
- Keep it on its own route, `app/api/chat/route.ts`, fully separate from your page. This guarantees a slow AI response can never slow down your portfolio's actual page load.
- Consider `export const runtime = "edge"` for this route — lower latency, especially for visitors outside your server's region. Edge Runtime can't use every Node.js API, but a simple "call an AI API and stream the answer back" route almost always fits fine within that limit.

---

## 12. CDNs, Compression & Caching Headers

You mentioned reading about this without being fully sure what it meant — fair, this is infrastructure-level stuff, not really "code" in the way the rest of this doc is. Here's the plain version of each, and — good news — how much of it you actually have to do yourself.

**Leverage a CDN (Content Delivery Network):**
A CDN keeps copies of your site's files on servers physically spread around the world, so a visitor in Tokyo downloads from a server near Tokyo, not from wherever your original server sits. This mainly helps with distance-related delay (latency).

> **For you specifically:** since your reference site is already on Vercel, this is done the moment you deploy. Vercel automatically serves every page and static asset through its global edge network — there's no separate CDN to set up or configure.

**Enable Compression (Gzip / Brotli):**
These shrink text-based files (HTML, CSS, JS) before sending them over the network; the browser un-shrinks them automatically on arrival. Brotli usually compresses better than Gzip for this kind of content.

> **For you specifically:** Vercel (and basically every modern host) already serves your assets Brotli-compressed automatically. The `compress: true` option in `next.config.js` you may see mentioned online is Next's _built-in Gzip_, meant for when you self-host and run `next start` on your own server — it's not something you need to add on Vercel.

**Caching Headers (`Cache-Control`):**
This is an instruction attached to a file that tells the browser (and any CDN) how long it's allowed to reuse that file before checking back with the server for a newer version.

> **For you specifically:** Next.js already sets this correctly for the files that matter most — everything under `/_next/static/` has a content hash baked into its filename (so if the file changes, the filename changes too), which lets Next.js mark those as cacheable _forever_, safely. If you ever build a custom API route returning data that doesn't change often, you can add this yourself:

```ts
// app/api/example/route.ts
export async function GET() {
  return new Response(JSON.stringify({ data: '...' }), {
    headers: { 'Cache-Control': 'public, max-age=3600, s-maxage=3600' }
  });
}
```

> But for a mostly-static portfolio, you likely won't need to write this yourself at all.

---

## 13. Deployment Optimization

1. **Deploy to a CDN like Vercel or Cloudflare, for edge caching.** Same idea as §12 above, just at the whole-app level instead of per-asset. Since you're already planning Vercel, this is checked automatically — nothing to configure.
2. **Enable HTTP/2 or HTTP/3.** Think of these as the delivery method the browser and server use to talk to each other. HTTP/1.1 (the old one) loads files one at a time per connection. HTTP/2 loads many files over a single connection at once. HTTP/3 is newer still, and handles flaky connections (like mobile data) better.

> **For you specifically:** both Vercel and Cloudflare already serve everything over HTTP/2 and HTTP/3 automatically. This isn't something you write in your Next.js code at all — it's a hosting-level feature you get simply by deploying there. Nothing to check off except "did I deploy to Vercel," which you already were.

---

## 14. Measuring — Don't Guess

- Run **Lighthouse** in Chrome DevTools, or [pagespeed.web.dev](https://pagespeed.web.dev), before and after any change you're unsure about.
- Watch the **Core Web Vitals**:
  - **LCP** (Largest Contentful Paint) — how fast the main content appears. Target: under 2.5s.
  - **CLS** (Cumulative Layout Shift) — how much things jump around while loading. Target: as close to 0 as possible.
  - **INP** (Interaction to Next Paint) — how fast the page responds when clicked/tapped. Target: under 200ms.
- Turn on **Vercel Speed Insights** once you deploy. It's free at your scale, and gives you _real visitor_ data — which matters more than your own laptop's Lighthouse score, since your laptop and internet are probably faster than most visitors'.

---

## Pre-Launch Checklist

- [ ] `next build` runs clean — check "First Load JS" per route in the output
- [ ] Every image goes through `next/image`, and source files are pre-compressed
- [ ] Fonts loaded via `next/font/local`, only the weights actually used
- [ ] Chatbot is lazy-loaded via `next/dynamic`, not blocking the first paint
- [ ] All animations wrapped to respect `prefers-reduced-motion`
- [ ] No animated `backdrop-filter`, `box-shadow`, or `width`/`height`
- [ ] `npx depcheck` run, unused packages removed
- [ ] React DevTools "highlight updates" checked — no surprise re-renders when using the chatbot
- [ ] No state values kept around that could just be calculated during render instead
- [ ] Lighthouse checked on both mobile and desktop presets
- [ ] Confirmed compression + cache headers in DevTools → Network tab (should already be automatic on Vercel)
- [ ] Tested on a real, mid-range phone — not just your dev laptop
