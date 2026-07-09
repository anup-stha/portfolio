# Design

## Theme

Editorial-precise design-engineer portfolio. Light warm-neutral canvas, confident grotesque display type, and hand-drawn patent-style line-art marginalia with a single yellow accent. Playfulness lives in small typographic devices (the yellow marker highlight, googly-eye footer, draggable marquees) executed with engineering precision, not in toy physics.

## Color palette

- Background: `#fafafa` (page), `#ffffff` (cards), `#050505` (footer)
- Ink: `#09090b` (primary), `#52525b` (soft), `#71717a` (muted; the floor for text on light backgrounds at 4.6:1, `--gray-light` is decorative-only)
- Footer text: `#fafafa` (primary), `#d4d4d8` (secondary), `#8b8b94` (muted, >=4.5:1 on #050505)
- Accent (brand): yellow `#fdcf00` — marker highlights, Email pill, progress bar, one accent per artwork
- Card marquee tints: `#fff4ec`, `#faf6ec`, `#fff7ed`, `#eef2ff`, `#effaf4`

Strategy: restrained neutrals with one committed yellow accent. Every line-art figure carries exactly one small yellow-filled element, echoing the marker.

## Typography

- Display: **Bricolage Grotesque** (variable) — `var(--font-display)`. Hero statement, nav wordmark, project-card titles, About statement, footer wordmark. Weight 600 for display, 700-800 for emphasis (no italics in the family; emphasize with weight).
- Body: **Hanken Grotesk** 400/500/600/700 — `var(--font-body)`. Nav links, descriptions, project blurbs, stats, footer copy.
- Mono accent: **Space Mono** 400/700 — `var(--font-mono-accent)`. Micro-labels (12-13px uppercase, tracking 0.08em), tech-stack lines, the location line. Never body copy, never section headings (About's "About me / How I ship / What I reach for" are Bricolage 600 sentence-case).

Scale ratio >=1.25 between steps. `text-wrap: balance` on display headings.

## Artwork (line-art marginalia)

Hand-drawn-precise ink illustrations generated with Higgsfield `nano_banana_pro`, prompt recipe:
"Minimal editorial spot illustration, single-weight thin black ink line drawing... [subject as exploded-view technical sketch]... patent drawing crossed with a New Yorker spot illustration. Exactly one small part filled in flat yellow #FDCF00... no text, no labels, no shading."
Then background-removed (transparent) and served as WebP under `public/hero/` and `public/about/`.

Placement rules: absolute, `-z-10` (behind text), `pointer-events-none`, `hidden lg:block`, entrance = top-down clip-path wipe, then a slow +-7px float loop (6-8s, mirrored). Current set: exploded motherboard (bottom-left hero), exploded anglepoise lamp (top-right hero), poker hand (bottom-left About), FPV drone over Himalayas (top-right About).

## Page structure

Hero (canvas) -> Project cards (`#work`, white sticky sheets) -> Other works (`#archive`) -> About (`#about`, canvas interlude) -> Footer (black finale). Content aligns to a shared `max-w-[1820px]` container (nav uses `max-w-[1220px]`) with `px-6 sm:px-10` gutters.

## Components

- **Nav**: minimal in-flow bar (76px): wordmark "Anup Shrestha" (Bricolage bold, yellow marker swipe on hover) left; yellow "Email me" pill + ink "Menu" pill right. Menu opens a full-screen black takeover (`--z-menu`) that drops as a clip-path curtain: giant staggered Bricolage links (clamp 2.75-5.5rem) with full-height yellow highlighter swipe + ink text on hover, mono email/location footer. ESC and link clicks close it; body scroll locks while open; reduced motion swaps the curtain and staggers for fades.
- **Hero**: centered statement (clamp 2.5-4rem, Bricolage 600, "obvious" at 800, yellow marker behind "think"), greeting line with the only profile photo, one-line subtext, single black pill CTA ("See the work"), flanked by two line-art figures.
- **Project cards**: full-bleed sticky sheets, radius 48px top corners, up-shadow. Compact header: chip + year, short display title (Bricolage 600, clamp 1.75-2.75rem), 1-2 line blurb (max 90ch), mono tech-stack line (md+), black pill CTA top-right (inline on mobile). Draggable screenshot marquee below.
- **Other works**: hairline-divided rows; desktop = index / name / description / origin-year / arrow in one row; mobile = name + arrow on row 1, description below.
- **About**: centered avatar + statement with marker highlight, then a two-column split (About me | How I ship + What I reach for) divided by a 1px hairline; collapses to stacked rows on mobile. Line-art figures in opposite corners.
- **Buttons**: full-pill, verb+object labels, uppercase 12-13px with tracking 0.08em, visible `:focus-visible` ring (2px ink offset 2px; inverted on dark).

## Motion

- Easing: ease-out expo/quart for UI. Entrances: fade+rise (24px) staggered ~0.1s; artwork uses clip-path wipe + float loop.
- Marquee: 28px/s leftward, draggable, pause-free, custom "drag" cursor on fine pointers.
- Sticky card stack: pure CSS sticky, no scroll-jacking.
- Everything honors `prefers-reduced-motion`: wipes/floats/marquee autoplay become static or crossfade.

## Assets & performance

- All artwork and screenshots served as WebP (originals archived in `.assets-original/`, gitignored).
- Hero/About figures ~15-165KB each; work screenshots <=1920px wide, q80.
- `metadataBase` reads `NEXT_PUBLIC_SITE_URL` (set this in the deployment environment).

## Z-index scale

`--z-nav: 10` · `--z-progress: 50`. Figures sit at `-z-10` inside a `z-10` content stacking context (keep the pair intact; removing the wrapper's z-index drops figures behind section backgrounds).
