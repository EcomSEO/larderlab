# Larderlab — Site Build Spec

The complete spec for building larderlab.com on Next.js + Vercel. Pairs with `content/larderlab/brand-book.md`, `docs/topical-maps/larderlab.md`, `docs/larderlab-sample-briefs.md`, `docs/larderlab-affiliate-partners.md`, `docs/larderlab-competitive-analysis.md`, and the shared `CLAUDE.md`.

The last research doc before Vercel. Closes the gap between "strategy is locked" and "Claude Code can scaffold the site."

**Important difference from plasticfreelab + peptips:** larderlab is calculator-heavy. Real interactive React components — not screenshots, not iframes, not linked spreadsheets. The calculators are the site's primary SEO moat (see competitive analysis §9).

---

## 1. Information architecture

### URL structure

Flat, keyword-first. Hubs navigational only. Calculators get their own top-level slugs because they're destination URLs.

```
https://larderlab.com/
https://larderlab.com/{slug}                           # every post / calculator at root
https://larderlab.com/guides/{hub-slug}                # hub landing (pillar + children)
https://larderlab.com/about
https://larderlab.com/editorial-standards
https://larderlab.com/methodology
https://larderlab.com/privacy
https://larderlab.com/terms
https://larderlab.com/affiliate-disclosure
https://larderlab.com/contact
https://larderlab.com/newsletter
https://larderlab.com/sitemap.xml
https://larderlab.com/robots.txt
https://larderlab.com/llms.txt
https://larderlab.com/feed.xml
```

Hub slugs:
- `guides/macros-protein`
- `guides/pantry-systems`
- `guides/ingredient-deep-dives`
- `guides/meal-prep`
- `guides/supplements`

**Calculator URLs** get top-level slugs (SEO + backlink-magnet reasons):
- `/macro-calculator`
- `/shelf-life-calculator`
- `/protein-cost-calculator`

### Canonical rules

Same pattern as plasticfreelab: self-canonical on every page, no trailing slash, `www.` → apex 301, `http` → `https` 301.

### Breadcrumbs

Home → Guides → Hub → Post. Breadcrumb JSON-LD on every post. Calculators get "Home → Tools → {Calculator name}."

### Global navigation (header)

```
[Logo]   Guides ▾   Tools ▾   About   Newsletter                   [Get the Macro Planner]

Guides dropdown:
  Macros & Protein       → /guides/macros-protein
  Pantry Systems         → /guides/pantry-systems
  Ingredient Deep-Dives  → /guides/ingredient-deep-dives
  Meal Prep              → /guides/meal-prep
  Supplements            → /guides/supplements

Tools dropdown:
  Macro Calculator       → /macro-calculator
  Shelf-Life Calculator  → /shelf-life-calculator
  Protein Cost Calculator → /protein-cost-calculator
  (more as they ship)
```

Mobile: hamburger → full-screen sheet, flat list, Guides and Tools as separate sections.

### Footer

Four columns (one more than plasticfreelab — the Tools column earns its place):

```
Column 1 — Guides      Column 2 — Tools       Column 3 — About         Column 4 — Fine print
(5 hub links)          (3+ calculators)       About Larderlab          Privacy Policy
                                              Editorial Standards      Terms of Service
                                              Methodology              Affiliate Disclosure
                                              Contact

Bottom strip:
© 2026 Larderlab · RSS · Newsletter
Affiliate disclosure (one sentence, always visible)
```

---

## 2. Page templates

Six templates — same five as plasticfreelab/peptips plus one new one:

### Template A — HomePage (`/`)

1. **Hero** — H1 ("We engineer the food system so you don't have to."), subhead, primary CTA ("Open the Macro Calculator →"), secondary CTA ("Browse the guides").
2. **Featured calculator block** — large card pointing at the Macro Calculator (Wave 1 hero). Shows a preview of the output with the input pre-filled.
3. **Five hub grid** — 5 cards per hub, one-sentence description + "Browse →"
4. **Recent posts + data drops** — 6 recent items in a 3-column grid. Includes calculators, deep-dives, updates.
5. **Trust strip** — "Every number cited," "Every price dated," "Every calc you can inspect"
6. **Email capture (inline)** — "Get the Macro Planner (Google Sheet or Notion template)"
7. **Footer**

### Template B — HubPage (`/guides/{hub-slug}`)

Same structure as plasticfreelab's HubPage. Hub hero → pillar card → comparisons/calculators → everything-else grid → email capture → footer.

### Template C — PillarPage (long-form guide)

Same as plasticfreelab. Breadcrumbs → H1 → review stamp → sticky TOC → body (with callouts, tables, citations) → FAQ → sources → author bio → related posts → email capture → footer.

**Larderlab-specific:** tables are first-class content. Tailwind utilities + a `<DataTable>` component that right-aligns numbers, renders in monospace where appropriate, and scrolls horizontally on mobile without breaking layout.

### Template D — ComparisonPage (money page)

Same as plasticfreelab structure. Critical additions for Larderlab:

- Every product card has a `$/unit` metric prominent (e.g., `$0.013/g` of protein, `$0.08/g` of EPA+DHA)
- Every product card shows a dated price "(Checked 2026-04-20)"
- Third-party testing badge where relevant (Informed Sport, NSF Certified for Sport, Clean Label Project, ConsumerLab)
- A sortable table at the top of the comparison — readers can re-rank by any metric

### Template E — ClusterPage (long-tail Q&A)

Same as plasticfreelab. Direct-answer paragraph, body, key takeaways, FAQ, sources.

**Larderlab-specific:** every cluster post gets at least one original data visualization or table. Not stock images.

### Template F — ListiclePage

Same as plasticfreelab, with the larderlab house rule: **no more than 15 items**. Engineered lists, not infinite scroll.

### Template G — **CalculatorPage** (NEW — larderlab only)

Used for `/macro-calculator`, `/shelf-life-calculator`, `/protein-cost-calculator`, and future tools.

Sections:
1. **Breadcrumbs + H1**
2. **Review stamp** (methodology date, sources)
3. **The calculator itself** — as a real React component occupying the first screen. Inputs left, outputs right on desktop; stacked on mobile. Persist inputs to localStorage.
4. **Share/export row** — "Share this result" (URL with query params), "Download as PNG" (for the screenshot-Reddit loop), "Copy table" (for blog posts that want to reference)
5. **What this calculator does** — 2-3 paragraphs. The methodology. The source of the numbers. When the output is wrong.
6. **How the math works** — the formula, plainly stated, with the citation
7. **Assumptions** — explicit list of what we assumed and where you should deviate
8. **FAQ** (schema-marked)
9. **Sources** (numbered, DOIs where available)
10. **Related posts**
11. **Email capture**

This template is the site's signature.

---

## 3. Component inventory

Everything from plasticfreelab plus:

### New calculator primitives
- `<MacroCalculator>` — the Wave 1 hero calculator. Inputs: bodyweight, activity, goal. Outputs: 4 protein ranges, per-meal split, $/gram cost chart. Saves to localStorage.
- `<ShelfLifeCalculator>` — inputs: food type, storage condition. Outputs: expected shelf life + notes. Sourced from a data file.
- `<ProteinCostCalculator>` — inputs: weekly target grams, budget ceiling. Outputs: ranked food combinations that meet both.
- `<DataTable>` — sortable, right-aligned numerics, monospace numerals, horizontal scroll on mobile, copyable
- `<SourceCitation>` — inline citation that expands on click/hover
- `<PriceAsOf>` — displays a price with a dated "Checked YYYY-MM" hover/note
- `<MethodologyBlock>` — the "how we evaluated" module for comparison pages
- `<DecisionMatrix>` — the tripartite-framework component (used on seed oil post + others)

### Typography-specific
- `<MonoNumber>` — inline monospace span for numerics in prose

### Schema (same as plasticfreelab plus)
- `<SoftwareApplicationJsonLd>` — for calculator pages (yes, it helps ranking)

---

## 4. SEO technical spec

### Meta tag patterns

| Page | Title pattern | Description pattern |
|---|---|---|
| Home | `Larderlab — Evidence-led nutrition systems, pantry architecture, and supplement reviews` | `Macro calculators, pantry frameworks, ingredient deep-dives, and supplement comparisons — cited, priced, and engineered. Not recipes.` |
| Hub | `{Hub name} — Larderlab` | Hub thesis, trimmed to 155 chars |
| Calculator | `{Calculator name} — Larderlab` | "Calculate your [target] with 4 expert-recommended ranges. Sources included. Free." (155 chars) |
| Comparison | `{H1} (Tested {year}, $/unit ranked) — Larderlab` | "[N] [category] compared by $/unit and [criterion]. With [certification] filters. Prices dated." |
| Pillar / cluster | `{H1 exact} — Larderlab` | First 155 chars of intro |

### Schema by template

| Template | Schema |
|---|---|
| Home | `Organization` + `WebSite` + `SearchAction` |
| Hub | `CollectionPage` + `BreadcrumbList` |
| Pillar | `Article` + `BreadcrumbList` + `FAQPage` |
| Comparison | `Article` + `BreadcrumbList` + `ItemList` + `FAQPage` + `Review` per product (with `Rating`) |
| Cluster | `Article` + `BreadcrumbList` + `FAQPage` |
| Listicle | `Article` + `BreadcrumbList` + `ItemList` |
| Calculator | `Article` + `SoftwareApplication` + `FAQPage` + `HowTo` (for the "how the math works" section) |

### robots.txt

Same as plasticfreelab. All AI crawlers allowed. Sitemap declared.

### llms.txt

```
# Larderlab

> Evidence-led nutrition systems, pantry architecture, ingredient deep-dives, and supplement comparisons. Calculators, decision matrices, and cited frameworks.

## Guides
- [Macros & Protein](https://larderlab.com/guides/macros-protein)
- [Pantry Systems](https://larderlab.com/guides/pantry-systems)
- [Ingredient Deep-Dives](https://larderlab.com/guides/ingredient-deep-dives)
- [Meal Prep](https://larderlab.com/guides/meal-prep)
- [Supplements](https://larderlab.com/guides/supplements)

## Tools
- [Macro Calculator](https://larderlab.com/macro-calculator)
- [Shelf-Life Calculator](https://larderlab.com/shelf-life-calculator)
- [Protein Cost Calculator](https://larderlab.com/protein-cost-calculator)

## Editorial
- [Editorial Standards](https://larderlab.com/editorial-standards)
- [Methodology](https://larderlab.com/methodology)
- [About](https://larderlab.com/about)
```

### Sitemap

Auto-generated. Home, hub pages, all posts, trust pages, **all calculator pages**.

### Internal linking rules

Same as plasticfreelab plus:
- Every calculator links out to at least 3 supporting explainer posts
- Every macro / supplement post links back to the relevant calculator
- "Calculator-first" content strategy for the Macros and Supplements hubs

### Core Web Vitals targets

Stricter than plasticfreelab because calculators can bloat JS bundles:
- LCP < 2.0s (p75)
- INP < 200ms (p75)
- CLS < 0.05 (p75)
- JS bundle for a calculator page < 120KB gzipped

Enforcement: Vercel Analytics + PageSpeed weekly. Calculator components use React.lazy for anything below the first screen.

---

## 5. Trust pages — ready-to-publish copy

Because Larderlab is evidence-led and cites sources, a public **Methodology** page is mandatory. This is a Larderlab-specific trust page in addition to the standard set.

### 5.1 About (`/about`)

```markdown
---
title: About Larderlab
description: Who we are, what we do, and why we built this.
layout: page
---

# About Larderlab

Larderlab exists because the evidence-led nutrition space is dominated by two groups: institutions that are decades behind the literature (still recommending the 0.8g/kg RDA in 2026) and influencers monetized by what they're recommending. Neither serves a reader who wants to read the study themselves.

We built Larderlab to publish the frameworks we'd use ourselves. Macro calculators. Pantry architectures. Ingredient deep-dives. Supplement comparisons. All with numbers, all with citations, all with dated prices, all showing the math.

## What we do

- **We cite.** Every claim has a year, a journal, a sample size. Reading the citations is expected.
- **We build calculators.** Not static content about "your needs vary." Real tools that give you your number.
- **We price everything.** Every supplement, every food, every tool — $/unit, dated, and noted when checked.
- **We maintain tables.** Price tables, protein source tables, shelf-life tables. These are living documents, updated as data drifts.
- **We steel-man dissent.** When the mainstream and the contrarians disagree, we lay out both, identify the layer of disagreement, and state our position.

## What we don't do

- We don't publish recipes.
- We don't write in first person.
- We don't use the word "superfood," "hack," "detox," "clean," or "miracle."
- We don't accept payment for editorial placement. Affiliate commissions never affect rankings.
- We don't write about whatever's trending — only what's trending *and* defensible.

## How to get in touch

Email hello@larderlab.com. We respond within 3-5 business days. Corrections go to corrections@larderlab.com and get logged publicly.

The Larderlab Team
```

### 5.2 Editorial Standards (`/editorial-standards`)

```markdown
---
title: Editorial Standards
description: Our public-facing editorial policies — sourcing, testing, price disclosure, AI tooling.
layout: page
---

# Editorial Standards

## Sourcing

Every factual claim on Larderlab is cited to at least one of:

- A peer-reviewed paper (PubMed-indexed, DOI visible)
- A regulatory document (FDA, EPA, USDA, EMA)
- A manufacturer's Certificate of Analysis
- A well-established database (Examine.com for supplement data, USDA for food data, Consumer Labs / Clean Label Project for independent testing)

When consensus exists in the literature, we cite the most recent systematic review or meta-analysis. When it doesn't, we say so — and we identify the dissenting positions explicitly.

## Testing vs research

On product comparisons, we're explicit about:
- **"We bought and tested"** — we own the product and used it long enough to form a real opinion
- **"We calculated from published data"** — we used manufacturer Certificates of Analysis, third-party lab data, or USDA figures to compare

We never merge the two. The product card shows a clear label.

## Price disclosure

Every product recommendation shows:
- The price we observed
- The retailer (Amazon, Costco, direct, etc.)
- The date we checked
- The $/unit calculation

Prices drift. We re-check quarterly on active comparison pages. When a price shifts by >15%, we update and annotate.

## Rankings

Every comparison commits to a #1 pick. When we update and the pick changes, we note the change at the top of the post with a dated revision note, and we keep the previous ranking in an archive section.

## Affiliate disclosure

Larderlab earns commission on some product links. When we do, we disclose on the page clearly, above the product list, in plain English. We include brands without affiliate programs when they're genuinely better — and we tell you about them.

## Corrections

When we're wrong, we correct the text, add a dated note at the bottom of the post, and don't silently edit. Email corrections@larderlab.com.

## AI tooling

We use AI tools in our workflow — research synthesis, draft generation, formatting, basic calculations. Every post is reviewed, fact-checked, and edited by a human before publication. When AI tooling materially shapes a post's conclusions, we say so.

## What we don't do

- Accept payment for editorial placement
- Accept manufacturer samples as compensation (we buy at retail price)
- Publish sponsored content under the editorial byline
- Use headlines with "hack," "secret," "shocking," or similar

Last updated: April 2026.
```

### 5.3 Methodology (`/methodology`) — larderlab-specific

```markdown
---
title: Methodology
description: How we test, calculate, price, and rank.
layout: page
---

# Methodology

This page documents how Larderlab evaluates products and generates the numbers readers see on calculators and comparison pages.

## Protein calculations

- We derive target protein intake from four expert ranges: IOM RDA (0.8 g/kg), ISSN Position Stand (1.4-2.0 g/kg), Morton et al. 2018 (1.6 g/kg), and Phillips 2017 for seniors (1.2-1.6 g/kg).
- We show all four. We default to 1.6 g/kg for resistance-trained adults.
- Leucine content is taken from manufacturer Certificates of Analysis, not marketing claims.

## $/gram of protein

- Base price: observed retail price (Amazon, Costco, grocery) on a specified date
- Protein grams per serving: from the label, verified against USDA when possible
- Formula: `$/gram = (price / protein_grams_per_container)`
- Costco prices are "with membership," noted as such

## Supplement testing transparency

We score supplements on:
- Third-party testing certification presence (Informed Sport / NSF Certified for Sport / Clean Label Project / ConsumerLab verification)
- Manufacturer publication of Certificates of Analysis
- Label claim vs COA match
- Filler and additive transparency

Brands without any third-party testing are clearly flagged. Brands with independent adverse findings (amino spiking, heavy metal failures) are named.

## Shelf-life data

The shelf-life calculator uses a combination of:
- USDA FoodKeeper App data
- Peer-reviewed food science literature
- Manufacturer guidance where credible

Conditions (pantry / fridge / freezer) are documented assumptions. Deviate with caution.

## Ingredient deep-dive framework

Every ingredient deep-dive post follows the same structure:
1. What claims are made about this food?
2. What does the literature actually show?
3. What's the real-world exposure / dose?
4. What's our position?

When the literature is mixed, we identify the layer of disagreement — different studies, different populations, different outcomes — and we say which layer we're weighting.

## What we explicitly don't do

- Use N-of-1 data as primary evidence
- Cite studies we haven't read
- Cite cohort associations as causation
- Accept supplement industry-funded studies as definitive without noting the funding

Last updated: April 2026.
```

### 5.4 Privacy Policy (`/privacy`)

Same template as plasticfreelab with domain swap: plasticfreelab.com → larderlab.com, brand name swap, email domain swap.

### 5.5 Terms of Service (`/terms`)

Same template as plasticfreelab with domain swap. Add a paragraph under §1 ("The Site is informational") stating: "Larderlab publishes evidence-led nutrition content. **Nothing on this Site is medical advice, nutrition advice for a specific condition, or professional dietitian guidance.** Consult a qualified professional — physician, registered dietitian, sports nutrition specialist — before making decisions that affect a medical condition."

### 5.6 Affiliate Disclosure (`/affiliate-disclosure`)

Same template as plasticfreelab with domain swap.

### 5.7 Contact (`/contact`)

Same template as plasticfreelab with domain swap + an additional block for calculator feedback:

```markdown
## Calculator feedback

**calculators@larderlab.com** — spotted an edge case? Want a different methodology option? We iterate.
```

---

## 6. Homepage copy (ready to paste)

### Hero

**H1:** We engineer the food system so you don't have to.

**Subhead:** Calculators, frameworks, and evidence-led buying guides — for macros, pantry architecture, ingredients, meal prep, and supplements. Every number cited. Every price dated. Not recipes.

**Primary CTA:** Open the Macro Calculator →
**Secondary CTA:** Browse the guides

### Featured calculator block

**Label:** The tool behind the site
**Title:** The Larderlab Macro Calculator
**Eyebrow:** Based on Morton 2018 + 3 other ranges
**Three bullets:** (preview of what the calculator outputs — 4 ranges, per-meal split, $/gram cost table)
**CTA:** Open the calculator →

### Hub grid (5 cards)

1. **Macros & Protein** — Targets, sources, distribution, cost. With a live calculator.
2. **Pantry Systems** — Storage science, shelf life, bulk-buy math, rotation frameworks.
3. **Ingredient Deep-Dives** — Seed oils, rice arsenic, fish mercury — what the literature actually says.
4. **Meal Prep** — Component-based frameworks, batch cooking math, freeze-thaw logic. No recipes.
5. **Supplements** — What's worth taking, from which brand, at what $/unit. Third-party-tested only.

### Email capture block

**Headline:** Get the Macro Planner.
**Subhead:** A Google Sheet (or Notion template) that calculates your protein target, splits it across 3-5 meals, and ranks 20 protein sources by $/gram. Free.
**Field:** Email address
**Button:** Send me the planner
**Consent line:** By subscribing, you agree to our Privacy Policy. One useful email a week. Unsubscribe anytime.

### Trust strip

- **Every number cited.** If it's not sourced, it's not published.
- **Every price dated.** We note the day we checked. We re-check quarterly.
- **Every calc you can inspect.** Our methodology pages show the math.

---

## 7. Lead magnet spec — "The Larderlab Macro Planner"

Format: **Google Sheet** (primary) and **Notion template** (secondary). Not a PDF. This audience wants the spreadsheet.

### Google Sheet structure
- Sheet 1: "Your targets" — bodyweight input, goal selector, calculated protein/fat/carb targets
- Sheet 2: "Meal split" — splits the target across 3/4/5 meals
- Sheet 3: "Protein sources" — 20 sources with protein grams per serving and $/gram, sortable
- Sheet 4: "Weekly shopping list generator" — inputs: weekly protein target × 7, outputs: shopping list to hit it at minimum cost
- Sheet 5: "Sources" — the citations behind every default number

Readme at the top explaining: how to copy the sheet, how to customize the bodyweight input, how to add your own protein sources.

Stored as a public Google Sheet with "File → Make a copy" as the delivery mechanism, plus a downloadable `.xlsx` for Excel users.

### Welcome email sequence (3 emails, 7 days)

**Email 1 (instant, on signup):**
- Subject: Your Macro Planner is here
- Body (100 words): "Here's the sheet. Open, make a copy (File → Make a copy), put your bodyweight in cell B3. Everything else auto-calculates. A few notes on how we built it..." + link to methodology page. No upsell.

**Email 2 (Day 3):**
- Subject: The three numbers most people get wrong
- Body (180 words): Teaser for the three most-read larderlab posts — protein target, seed oils, creatine. One sentence each with a link. Doesn't oversell.

**Email 3 (Day 7):**
- Subject: How to hit 150g/day for $5
- Body (150 words): Link to the "high-protein foods by $/gram" listicle. Mention the total-shopping-list screenshot that's the post's signature artifact.

Day 8+: weekly digest. One useful thing. Always a number.

---

## 8. Launch checklist

Must be true before flipping `SITE.launched` to `true`:

- [ ] Domain resolves to Vercel, SSL active
- [ ] `www.` → apex redirect configured
- [ ] `http` → `https` redirect configured
- [ ] All trust pages live (About, Editorial Standards, **Methodology**, Privacy, Terms, Affiliate Disclosure, Contact)
- [ ] Home page live with working hero + featured calculator card
- [ ] At least 1 hub page live (Macros & Protein — the priority hub)
- [ ] At least 3 calculators functional end-to-end
- [ ] At least 10 posts with real content (not stubs)
- [ ] Breadcrumb, Article, ItemList, FAQ JSON-LD rendering where applicable
- [ ] SoftwareApplication JSON-LD on every calculator page
- [ ] `robots.txt`, `sitemap.xml`, `llms.txt` responding correctly
- [ ] Cookie banner functional
- [ ] Email capture wired to Beehiiv, Macro Planner Google Sheet linked
- [ ] Welcome sequence tested end-to-end
- [ ] Analytics wired (Neon)
- [ ] OG images render correctly
- [ ] Core Web Vitals green on 5 sample URLs including 2 calculator pages
- [ ] Google Search Console verified, sitemap submitted
- [ ] Bing Webmaster verified, sitemap submitted
- [ ] Manual indexing request for the 5 highest-priority posts
- [ ] `/macro-calculator` shared in 2-3 Reddit threads where it's genuinely relevant (not as self-promo — as useful response to a real question)

---

## 9. Content at launch (minimum viable)

The 10 posts from the Wave 1 priority list that ship with launch:

1. **Macro Calculator** (`/macro-calculator`) — the signature calculator + explainer pillar
2. **Pillar — The complete macro guide** (`/macros-guide`) — embeds the Macro Calculator
3. **Comparison — Best protein powders ranked by $/gram of leucine** (`/best-protein-powder`)
4. **Comparison — Best whole-food protein sources, ranked by $/gram** (`/protein-source-cost`)
5. **Cluster — How much protein per day, by bodyweight** (`/how-much-protein-per-day`)
6. **Cluster — The 1.6g/kg target: Morton 2018 explained** (`/1-6-g-per-kg-protein`)
7. **Pillar — The complete supplement guide** (`/supplement-guide`)
8. **Comparison — Best creatine monohydrate, ranked by $/g** (`/best-creatine`)
9. **Cluster — Seed oil vs butter vs olive oil** (`/seed-oil-vs-butter`)
10. **Listicle — 12 high-protein foods ranked by $/gram** (`/high-protein-foods-by-cost`)

This establishes topical authority in Macros + Supplements + a taste of Ingredient deep-dives. Pantry Systems and Meal Prep hubs fill in Weeks 5-8.

---

## 10. What's still deferred

- Real calculator UI polish + animations (launch with functional + clean; polish in Week 5)
- Logo (placeholder wordmark acceptable)
- Commissioned photography (launch without; add as Week 5 project)
- Display ads (never — affiliate-only monetization)
- Premium digital products (Macro Planner Pro, Supplement Database Subscription) — post-launch quarter 2

---

## 11. Handoff to Claude Code

Once this doc is saved to `docs/larderlab-site-spec.md` in the monorepo:

> Read `CLAUDE.md`, `content/larderlab/brand-book.md`, `docs/topical-maps/larderlab.md`, `docs/larderlab-sample-briefs.md`, `docs/larderlab-affiliate-partners.md`, `docs/larderlab-competitive-analysis.md`, and `docs/larderlab-site-spec.md`. Scaffold a new standalone Next.js 14 app for larderlab at `~/Developer/active/larderlab-standalone` following the pattern from plasticfreelab-standalone. Implement:
>
> - All 6 page templates (Home, Hub, Pillar, Comparison, Cluster, Listicle, **Calculator**)
> - The `<MacroCalculator>` React component (the Wave 1 hero calculator) with real math from the site spec §5 (Methodology)
> - Full component inventory including `<DataTable>`, `<PriceAsOf>`, `<SourceCitation>`, `<MethodologyBlock>`
> - `/robots.txt`, `/llms.txt`, `/sitemap.xml`, RSS
> - All 7 trust pages (including the new `/methodology`)
> - Homepage per site spec §6
> - 10 Wave 1 post stubs per site spec §9 (with "TODO: draft" bodies)
> - `SITE.launched = false` until launch checklist is green
>
> Brand tokens: `ink: #1A2332, paper: #F5F2EB, copper: #B87333, steel: #6B7A8A, charcoal: #202020`. Fonts: Fraunces (headlines) or GT Alpina if available; Inter Tight (body); IBM Plex Mono (numerics). Commit as `feat: initial larderlab site — templates, calculator, SEO`.

That plus the foundation pack gives Claude Code everything needed to ship larderlab.com end-to-end.
