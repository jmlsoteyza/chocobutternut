# Jom Oteyza — Portfolio Design Brief
> Reference document. Keep this open while designing or prompting AI.
> Last updated: 2026
 
---
 
## What This Portfolio Is
 
This is not a product page. It's not a sales pitch. It's a **window into how I think and what I build.**
 
A developer, a CEO, a small business owner, or a design agency should all be able to land here and immediately feel: *this person is calm, capable, and pays attention to things I care about.*
 
The work speaks first. The personality follows. The result is trust — and trust is what gets me hired.
 
---
 
## Who It's For
 
**Primary — Freelance clients:**
- Small businesses who need a website built right
- Startups who need UI shipped fast and cleanly
- Agencies looking for a reliable front-end partner
- Personal brands who care how their site looks and feels
 
**Secondary — Recruiters and developers:**
- People evaluating me for full-time or contract roles
- Other developers who just appreciate clean work
 
**The tone should work for all of them.** Non-technical clients should never feel lost. Technical people should never feel talked down to.
 
---
 
## Inspiration
 
**Brittany Chiang** — `brittanychiang.com`
**Bryl Lim** — (reference portfolio)
 
Not copying the design. Borrowing the **feeling.**
 
What they get right:
- Every element earns its place. Nothing is decorative.
- The copy sounds like a real person, not a resume.
- The layout gives the work room to breathe.
- You finish scrolling and you remember who you just met.
 
My portfolio should feel like that — but unmistakably mine.
 
---
 
## What the Viewer Should Feel
 
Think about the difference between a Toyota and a Lamborghini.
Both are cars. Both get you somewhere. But one of them you feel before you even touch it.
 
Or think Toy Story — every frame is intentional, nothing is lazy, and it holds up whether you're 6 or 40. That level of craft is the goal.
 
**Simplicity** — Nothing unnecessary. If it doesn't serve a purpose, it's gone. Clean layouts, focused copy, zero clutter.
 
**Detailed quality** — The kind of quality you feel before you name it. Good spacing. Comfortable contrast. Type sizes that respect the reader. Breathing room between sections. Consistent rhythm.
 
**Trustworthy** — This site should feel like I've done this before and I'll do it well for you too. Not arrogant. Grounded and capable.
 
**Emotional** — Not cold or robotic. It should feel like a real person built this. The About section, the copy tone, the small interactions — all of it should feel warm and human underneath the clean exterior.
 
**Problem-solving** — Clients should leave thinking: *this person understands my problem, not just my brief.* The projects section especially should demonstrate thinking, not just output.
 
**Subtly unique** — Not loud. Not trying too hard. But unmistakably not a template. The glass morphism system, the monochrome restraint, the chatbot interaction — these are the things that make it mine.
 
---
 
## Visual Identity — Locked In
 
### Color System (60 / 30 / 10)
 
| Role | Value | Usage |
|------|-------|-------|
| Background | `#111111` | 60% — the stage everything sits on |
| Primary text | `#FFFFFF` | Name, key headings — used sparingly |
| Secondary text | `#E8E8E8` | Section headings, project titles |
| Body text | `#999999` | Descriptions, paragraphs |
| Meta / labels | `#555555` | Tags, dates, secondary info |
| Glass fill | `rgba(255,255,255,0.04)` | Card backgrounds |
| Glass border | `rgba(255,255,255,0.08)` | Card strokes — 0.5px |
 
**No traditional color accent.** Glass morphism IS the accent. The restraint is the brand.
 
### Typography — Options (choose one)
 
Candidates: **Satoshi, Inter, General Sans, Montserrat**
 
Rules regardless of which is chosen:
- Max 2 typefaces. Ideally 1 family with weight variation.
- Body line-height: `1.7`
- Never pure white for large blocks of text — use `#E8E8E8` or `#999`
- Monospace font for tech labels, tags, and year stamps only
 
### Glass Card Spec (Figma-ready)
 
```
Fill:          #FFFFFF at 4% opacity
Stroke:        #FFFFFF at 8% opacity — 0.5px, inside
Corner radius: 8px
```
 
---
 
## Layout — Locked In
 
**Type:** Single-page scroll
**Container:** 1080–1180px centered, strict
**Nav:** Fixed top navbar — glass morphism, black tint, small and minimal
**Sections in order:**
1. Hero (with chatbot — see below)
2. About
3. Experience
4. Projects
5. Skills
 
### Fixed Navbar
- Small, glass morphism — `rgba(0,0,0,0.6)` background + blur
- Links: About · Experience · Project · Skills
- Right side: CTA — "Send me an email" (small, outlined or ghost style)
- On scroll: subtle border appears at bottom
 
---
 
## New Features & Changes
 
### Chatbot in Hero
- Centered in the hero section alongside my name and role
- Acts as the first interaction point — client or recruiter can ask it questions about me
- Replaces or sits alongside the static "Connect" CTA
- Should feel natural, not gimmicky — like a calm assistant, not a popup
 
> This changes the hero layout. The hero is no longer purely text — it now has an interactive element. Design must account for this: enough space, clear visual hierarchy so name and role still land first, chatbot invites engagement second.
 
### Glass Navbar (updated)
- Replaces the old pill-style nav
- Full-width but compact in height
- Glass morphism: dark tint + blur + 0.5px bottom border
- CTA: "Send me an email" — sits right side, small, ghost button
 
### Font Direction
Explore: **Satoshi** or **General Sans** first.
Both are modern, clean, and slightly warmer than Inter — good for the "human but precise" balance.
 
---
 
## Animation Quality Standard
 
**Think: Apple, Linear, Vercel.**
 
- Animations should feel like they were art-directed, not added.
- Scroll-triggered reveals: subtle, fast, intentional — not dramatic.
- Hover states: smooth `transition` — opacity and color shifts, not transforms that feel heavy.
- The chatbot interaction: smooth input, response fade-in, no janky loading states.
- Page load: name and role should have a clean entrance — not a bounce, not a fade from nowhere.
 
**Rule:** If an animation calls attention to itself, it's wrong. Good animation is felt, not noticed.
 
**Reduced motion:** Always respect `prefers-reduced-motion`. The site should work and feel good with all animations off.
 
---
 
## Copy Tone
 
- Written by a human, read like a human.
- No "passionate developer." No "I strive to." No buzzwords.
- Direct, warm, and specific.
- Clients should feel like they're reading a message from someone they'd want to work with.
- Developers should feel like they're reading someone who takes their craft seriously.
 
**Bold key phrases** in the About section — not randomly, only where the idea is the most important word in the sentence.
 
---
 
## What to Avoid - 
 
- Pure `#000000` background — too harsh
- Pure `#FFFFFF` for body text — eye strain on dark backgrounds
- Skill bars or percentage meters — they look made up
- "Welcome to my portfolio" anywhere
- Generic hero copy — "I build things for the web" is okay, but make it yours
- Overloading the glass effect — it works because it's used on 10% of the surface, not everything
- Animations that delay content — never make the user wait to read
 
---
 
## Reminder to Self (and AI)
 
> This portfolio is a handshake before the meeting.
> It should make the right people feel like they already know they want to work with me.
> Build it the way you'd want a client to build something with you — carefully, clearly, and with real intention behind every decision.
 
Styles can be change anytime depends on the repetition of changes.