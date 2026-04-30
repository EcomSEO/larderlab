# Larderlab Design System (locked 2026-04-30)

The Lab Notebook system. Light surface, olive brand, Source Serif 4
displays, Inter body, IBM Plex Mono numerics. **Numbers are first-class.**

This doc is the contract. Don't reach for a token not listed here —
add it to this doc first, then to `tailwind.config.ts`.

## Surface

| Token | Hex | Use |
|-------|-----|-----|
| `bg-surface` | `#FFFFFF` | Default page surface |
| `bg-surface-alt` | `#F7F9FB` | Sub-surface, inputs, code blocks |
| `bg-surface-warm` | `#EEF2E8` | Olive-tinted hero / callout panels |
| `border-rule` | `#E5E9EE` | Default border, separators |
| `border-rule-strong` | `#CDD3DA` | Hover border, emphasized separators |

## Olive (brand primary)

| Token | Hex | Use |
|-------|-----|-----|
| `bg-olive-50` | `#EEF2E8` | Tint background |
| `bg-olive-100` | `#DCE4CC` | Selected tint |
| `border-olive-200` | `#B8C99B` | Soft accent border |
| `text-olive` (500) | `#5C6F3C` | Brand text, link default |
| `bg-olive` (500) | `#5C6F3C` | CTA primary fill |
| `text-olive-700` | `#3F4D27` | Heading olive accent |
| `bg-olive-600` | `#445129` | CTA hover |

## Tomato (sparing accent)

Use only for evidence-tier-4 (anecdotal flag) and the rare critical alert.
**Do not use for CTAs.** That's olive's job.

| Token | Hex | Use |
|-------|-----|-----|
| `text-tomato` | `#C4452D` | Anecdotal flag, error |
| `bg-tomato-50` | `#FBEDEA` | Tomato tint |

## Text on light

| Token | Hex | Contrast on white |
|-------|-----|----|
| `text-ink` | `#1A1F2E` | 14.8:1 (AAA) |
| `text-ink-muted` | `#5A6573` | 6.6:1 (AAA) |
| `text-ink-soft` | `#8A92A1` | 3.6:1 — UI only, never body |

**Rule:** body copy MUST be `text-ink` or `text-ink-muted`. Never use
`text-black/70` opacity hacks.

## Type ramp

Source Serif 4 for displays. Inter for everything else. IBM Plex Mono
for any numeric value. Use the named sizes below.

| Token | Use |
|-------|-----|
| `text-display-xl` | Home hero only |
| `text-display-lg` | Pillar / category landing opener |
| `text-display-md` | Section opener |
| `text-h1` | Article H1 |
| `text-h2` | Article H2, page H2 |
| `text-h3` | Card title, sub-section |
| `text-h4` | Card sub-heading |
| `text-eyebrow` | UPPERCASE label above heading |
| `text-body` | Article body, 17px / 1.65 |
| `text-body-sm` | Card body |
| `text-caption` | Disclaimers, footnotes |
| `text-num-xl` | Hero numbers (cost-per-gram displays) |
| `text-num-lg` | Stat blocks |
| `text-num-md` | Inline numerics |
| `text-num-sm` | Table cell numerics |

Numerics MUST also carry the `.num` class (or `font-mono`) so
`tabular-nums` + Plex Mono apply. Never use sans for a numeric column.

## Evidence-tier badges (signature UI)

The cost-per-gram thesis is only credible when evidence is tiered.
Render every supplement / claim with a tier badge.

| Tier | Meaning | bg / text / border tokens |
|------|---------|---------------------------|
| 1 | RCT, meta-analysis | `bg-tier-1-bg text-tier-1-text border-tier-1-border` |
| 2 | Cohort, observational | `bg-tier-2-bg text-tier-2-text border-tier-2-border` |
| 3 | Mechanistic, animal | `bg-tier-3-bg text-tier-3-text border-tier-3-border` |
| 4 | Anecdotal, n=1 | `bg-tier-4-bg text-tier-4-text border-tier-4-border` |

Standard pill shape: `inline-flex items-center h-6 px-2.5 rounded-pill border text-eyebrow uppercase`.

## Elevation

| Token | Use |
|-------|-----|
| `shadow-notebook` | Default card — soft + faint olive cast |
| `shadow-notebook-hover` | Hover card |
| `shadow-card` | Deeper editorial card |
| `shadow-olive-glow` | Selected state |
| `shadow-focus-olive` | Focus ring fallback |

## Motion

| Token | Value |
|-------|-------|
| `duration-fast` | 150ms |
| `duration-base` | 220ms |
| `duration-slow` | 320ms |
| `ease-out` | `cubic-bezier(0.2, 0.7, 0.2, 1)` |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

**MUST** honor `prefers-reduced-motion: reduce` (handled site-wide in
`globals.css`).

## Focus states

```
focus-visible:outline-none focus-visible:ring-focus focus-visible:ring-offset-2
focus-visible:ring-offset-paper
```

Olive ring on white surface, 3:1 contrast minimum.

## Z-index scale

`z-base` (0) → `z-raised` (10) → `z-sticky` (20) → `z-overlay` (30) →
`z-modal` (40) → `z-nav` (50) → `z-toast` (60). No bare numbers.

## Component patterns

### CTA (primary)
```
inline-flex items-center h-11 px-5 rounded-pill bg-olive text-white
font-semibold hover:bg-olive-600 active:bg-olive-700 transition-colors
duration-base focus-visible:ring-focus focus-visible:ring-offset-2
focus-visible:ring-offset-paper
```

### Card (notebook)
```
bg-surface border border-rule rounded-lg p-6 shadow-notebook
hover:shadow-notebook-hover hover:border-olive-200
transition-all duration-base
```

### Data row (cost-per-gram, macro)
```
flex items-baseline justify-between border-b border-rule py-2.5
[&>.num]:text-num-md [&>.num]:text-ink
```

### Tier badge (Tier 1 example)
```
inline-flex items-center gap-1 h-6 px-2.5 rounded-pill
bg-tier-1-bg text-tier-1-text border border-tier-1-border
text-eyebrow uppercase font-semibold tracking-wider
```

## Anti-patterns (do not ship)

- `text-black/70` — use `text-ink-muted`
- Sans numerics in a column — always `.num` / `font-mono`
- Light tomato CTA — tomato is a flag, not a button
- `transition-all` — name the property
- Inline hex — always a token
- Drop shadow with no border — use `shadow-notebook` (border + shadow)
- Multi-color tier badges (gradient, neon) — keep it dry
- Recipe / first-person / "superfood" / "hack" / "detox" / "clean"

## Voice anchors

Repeat from `content/brand-book.md`:

- Engineered, numbers-first, tables-over-paragraphs
- No recipes, no personality, no first-person
- No: superfood, hack, detox, clean, miracle
- Cite primary sources, tier the evidence, date the price
