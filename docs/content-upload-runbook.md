# Larderlab — Content Upload Runbook

**Audience:** anyone adding a new pillar / comparison / cluster / listicle to larderlab without touching React, schema, or routing.

**Premise:** the data layer is the source of truth. Edit `lib/content/posts.ts`, commit, push. Vercel rebuilds, the page goes live, sitemap updates.

---

## The file you'll edit

**`lib/content/posts.ts`** — every post on larderlab lives here as a `Post` object.

The `[slug]` route reads from this file at build time. No MDX. No CMS. Append an object → push → Vercel deploys → page is live.

---

## Adding a new post

### 1. Open `lib/content/posts.ts` and append before the closing `];`

```ts
{
  slug: "new-post-slug",
  title: "Full SEO Title",
  h1: "On-page H1",
  description: "150–160 char description with primary keyword.",
  hub: "macros-protein",                          // see hub list below
  postType: "comparison",                          // pillar | comparison | cluster | listicle
  publishedAt: "2026-MM-DD",
  updatedAt: "2026-MM-DD",
  readingTime: 10,
  status: "published",
  costPerUnit: {                                   // OPTIONAL — comparison posts; the larderlab differentiator
    metric: "$/g of leucine",
    cheapest: "$0.42/g",
    median: "$0.78/g",
    premium: "$1.95/g",
    note: "Re-checked quarterly; based on Costco/Sam's Club bulk pricing.",
    pricedAt: "2026-MM-DD",
  },
  ourPick: {                                       // OPTIONAL — comparison posts
    name: "Product name",
    tier: "Best $/X",
    reason: "80–150 word reasoning grounded in the cost-per-unit math.",
  },
  products: [                                      // OPTIONAL — comparison posts
    { rank: 1, name: "Product 1", tier: "Tier", summary: "150-word summary." },
  ],
  faq: [                                           // 5–7 questions
    { q: "Question?", a: "Answer 75–150 words, cited where possible." },
  ],
  sources: [                                       // 5+ peer-reviewed sources
    { label: "Author YYYY — Title (Journal)", url: "https://pubmed.ncbi.nlm.nih.gov/PMID/" },
  ],
  featured: false,
},
```

### 2. Verify

```bash
pnpm typecheck       # must pass
pnpm audit:claims    # must pass — no forbidden-claim words
```

### 3. Commit + push

```bash
git add lib/content/posts.ts
git commit -m "content(posts): add {slug}"
git push
```

Vercel auto-deploys. Page goes live in ~2 minutes.

---

## Hub slugs

| Slug | Topic |
|---|---|
| `macros-protein` | Protein math, calculators, powder rankings |
| `pantry-systems` | Bulk-buying, shelf-life, container systems |
| `ingredient-deep-dives` | Single-ingredient analyses (seed oils, arsenic in rice) |
| `meal-prep` | Sunday prep systems, batch cooking, container math |
| `supplements-functional-foods` | Multis, electrolytes, creatine, magnesium, fish oil |

---

## Larderlab voice rules (per CLAUDE.md + brand book)

The voice is the moat:

- **Engineered, numbers-first, tables-over-paragraphs.** Specific dollar amounts. Specific cost-per-gram math. The `costPerUnit` block is the larderlab signature.
- **No first-person.** No "I tested" / "I prefer." Use "we" sparingly when speaking on behalf of the editorial process.
- **No recipes.** Link to recipe sites if needed; don't write them.
- **No personality.** No emojis, no exclamation points, no rule-of-three flourishes.
- **Primary-source citations only.** PubMed PMIDs, FDA, USDA, NIH ODS, USP, IOM. No podcast quotes as evidence.
- **Forbidden words** (CLAUDE.md): `superfood`, `hack`, `detox`, `clean`, `miracle`. The audit-claims linter catches these in EN + 11 EU languages.

---

## Citation density

**Pillar:** ≥ 6 peer-reviewed sources. **Comparison:** ≥ 5. **Cluster:** ≥ 3. **Listicle:** ≥ 3.

Sources go in the `sources` array. PubMed PMID URLs preferred. FDA, USDA, NIH ODS, IOM accepted. Wikipedia is not a source.

---

## Examples in the repo

The 4 posts shipped in `feat/seo-readiness-2026-04` are the canonical templates:

- **Pillar with costPerUnit:** `high-protein-meal-prep-protocol`
- **Comparison with cost-per-mg:** `best-electrolyte-powders-2026`
- **Comparison with $/serving over 5-year amortization:** `best-meal-prep-containers-2026`
- **Comparison with $/day RDA-coverage:** `best-multivitamin-2026`

The pre-existing `best-protein-powders` (ranked by $/g of leucine) is the gold-standard cost-per-unit example.

Read those entries before writing your first post.

---

## Slug conventions

- kebab-case
- For comparisons: `best-{thing}-{year}` (annual refresh) or `{x}-vs-{y}`
- For pillars: `{topic}-protocol` or `{topic}-explained`
- For ingredient deep-dives: `{ingredient}-{angle}` (e.g. `arsenic-in-rice`)
- Never include date stamps in slugs — use `updatedAt` for freshness

---

## What you don't have to do

- Write JSON-LD schema → emitted automatically based on `postType`
- Update the sitemap → regenerated from `posts.ts` on build
- Add the post to hub indexes → `postsByHub()` returns it once `hub` field matches
- Update related posts → derived at build time

---

## Don't forget

- **Refresh `costPerUnit.pricedAt`** every quarter; prices drift
- **Refresh `updatedAt`** when you edit
- **Generic + brand on first mention** for any specific product
- **Citations or cut**
- **Never link to other sites in the network publicly**

---

## Pointers

- Brand book: `content/brand-book.md`
- Network constitution: `~/Developer/active/health-network/CLAUDE.md`
- Q2 keyword priority: `docs/research/larderlab-keyword-priority-2026-q2.md`
- Launch blockers: `docs/launch-blockers.md`
- Topical map: `~/Developer/active/health-network/docs/topical-maps/larderlab.md`
