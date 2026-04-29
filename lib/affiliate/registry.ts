/**
 * Larderlab affiliate registry.
 *
 * Per the 2026-04-29 monetization lock and the brand-DNA hard rules in
 * `CLAUDE.md`, this registry contains:
 *
 *   - Supplements with earned EvidencePill tier (creatine, whey, fish
 *     oil, magnesium, vitamin D, electrolytes — A/B-tier only at MVP)
 *   - Brand-direct on Thorne, Pure Encapsulations, NOW Foods, MyProtein
 *   - Kitchen scales (testing-grade — Escali, OXO)
 *   - CGM (Levels, Abbott Lingo)
 *   - Pantry staples (canned tuna, oats — only when EvidencePill ≥ B)
 *
 * It MUST NOT contain:
 *
 *   - Vague "wellness" supplements (turmeric blends, adaptogen
 *     mushrooms with no RCT support)
 *   - MLM brands (Herbalife, Beachbody, Plexus, Isagenix)
 *   - Peptide vendors / telehealth GLP-1 prescribers / compounding
 *     pharmacies (entirely out of scope per CLAUDE.md and Terms)
 *
 * Affiliate revenue does NOT influence EvidencePill tier scoring. The
 * methodology page must say so explicitly. The pre-commit hook should
 * block edits that introduce a forbidden brand here.
 */

export type AffiliateLink = {
  productKey: string;
  brand: string;
  name: string;
  thirdPartyUrl: string;
  thirdPartyLabel:
    | "Amazon"
    | "Direct"
    | "Thorne"
    | "MyProtein"
    | "Pure Encapsulations"
    | "Levels"
    | "Abbott";
  ownedShopUrl?: string;
  ownedShopAvailableFromDate?: string;
  category:
    | "supplement"
    | "kitchen-tool"
    | "cgm"
    | "pantry-staple";
  /** EvidencePill tier the linked product earns when reviewed (not paid). */
  evidenceTier: "A" | "B" | "C" | "D" | "F";
  /** Price-per-gram-of-protein when known, else null. */
  pricePerGProtein?: number;
  blurb: string;
};

const AMAZON_TAG = "larderlab-20";
const amazonUrl = (asin: string) =>
  `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`;

export const AFFILIATES: Record<string, AffiliateLink> = {
  // ── Supplements (A-tier — RCT consensus) ──────────────────────────
  "thorne-creatine": {
    productKey: "thorne-creatine",
    brand: "Thorne",
    name: "Creatine Monohydrate",
    thirdPartyUrl: amazonUrl("B0019LRY8A"),
    thirdPartyLabel: "Thorne",
    category: "supplement",
    evidenceTier: "A",
    blurb:
      "NSF Certified for Sport. 5 g/day creatine monohydrate — the dose 300+ RCTs converge on for strength + power gains.",
  },
  "myprotein-impact-whey-isolate": {
    productKey: "myprotein-impact-whey-isolate",
    brand: "MyProtein",
    name: "Impact Whey Isolate",
    thirdPartyUrl: "https://www.myprotein.com/sports-nutrition/impact-whey-isolate/",
    thirdPartyLabel: "MyProtein",
    category: "supplement",
    evidenceTier: "A",
    pricePerGProtein: 0.034,
    blurb:
      "25 g whey isolate per 30 g serving. The $/g-of-protein benchmark we use to calibrate every other whey on the page.",
  },
  "now-whey-isolate": {
    productKey: "now-whey-isolate",
    brand: "NOW Foods",
    name: "Whey Protein Isolate",
    thirdPartyUrl: amazonUrl("B0BFWQ7G9P"),
    thirdPartyLabel: "Amazon",
    category: "supplement",
    evidenceTier: "A",
    pricePerGProtein: 0.038,
    blurb:
      "25 g whey isolate per scoop. Cleaner label than most retail whey; the runner-up when MyProtein is out of stock.",
  },

  // ── Supplements (B-tier — supportive but conditional) ─────────────
  "thorne-omega-3": {
    productKey: "thorne-omega-3",
    brand: "Thorne",
    name: "Omega-3 with CoQ10",
    thirdPartyUrl: amazonUrl("B0006O0DM6"),
    thirdPartyLabel: "Thorne",
    category: "supplement",
    evidenceTier: "B",
    blurb:
      "2.4 g EPA+DHA per 4-cap dose. RCT support for cardiovascular outcomes; performance evidence weaker.",
  },
  "thorne-magnesium-bisglycinate": {
    productKey: "thorne-magnesium-bisglycinate",
    brand: "Thorne",
    name: "Magnesium Bisglycinate",
    thirdPartyUrl: amazonUrl("B07KFXSBLD"),
    thirdPartyLabel: "Thorne",
    category: "supplement",
    evidenceTier: "B",
    blurb:
      "Glycinate form — better tolerated than oxide / citrate at the same elemental dose. The form the sleep + sports-nutrition literature actually uses.",
  },
  "pure-encapsulations-vitamin-d3": {
    productKey: "pure-encapsulations-vitamin-d3",
    brand: "Pure Encapsulations",
    name: "Vitamin D3 5000 IU",
    thirdPartyUrl: amazonUrl("B003L1U68A"),
    thirdPartyLabel: "Pure Encapsulations",
    category: "supplement",
    evidenceTier: "B",
    blurb:
      "Cholecalciferol 5000 IU. Tier-B because the dose-response RCT data is solid for status correction, weaker for performance per se.",
  },
  "lmnt-electrolytes": {
    productKey: "lmnt-electrolytes",
    brand: "LMNT",
    name: "Recharge Electrolytes",
    thirdPartyUrl: "https://drinklmnt.com/",
    thirdPartyLabel: "Direct",
    category: "supplement",
    evidenceTier: "B",
    blurb:
      "1000 mg Na, 200 mg K, 60 mg Mg per stick. The dose math the lifting literature actually supports for high-sweat training.",
  },

  // ── Kitchen tools (testing-grade) ─────────────────────────────────
  "escali-primo-scale": {
    productKey: "escali-primo-scale",
    brand: "Escali",
    name: "Primo Digital Kitchen Scale",
    thirdPartyUrl: amazonUrl("B0007GAWRS"),
    thirdPartyLabel: "Amazon",
    category: "kitchen-tool",
    evidenceTier: "A",
    blurb:
      "1 g resolution, tare in g and oz, 11 lb capacity. The reference scale we use to measure every $/g claim on the site.",
  },
  "oxo-good-grips-scale": {
    productKey: "oxo-good-grips-scale",
    brand: "OXO",
    name: "Good Grips Stainless Steel Scale",
    thirdPartyUrl: amazonUrl("B0721Y58GZ"),
    thirdPartyLabel: "Amazon",
    category: "kitchen-tool",
    evidenceTier: "A",
    blurb:
      "Pull-out display (so a mixing bowl doesn't block readout), 1 g resolution. The runner-up to Escali for $5 less.",
  },

  // ── CGM ───────────────────────────────────────────────────────────
  "abbott-lingo": {
    productKey: "abbott-lingo",
    brand: "Abbott",
    name: "Lingo CGM (Stelo in US)",
    thirdPartyUrl: "https://www.hellolingo.com/",
    thirdPartyLabel: "Abbott",
    category: "cgm",
    evidenceTier: "B",
    blurb:
      "Over-the-counter CGM. Useful for self-monitoring carb-strategy + post-workout glucose curves without a prescription.",
  },
  "levels-cgm": {
    productKey: "levels-cgm",
    brand: "Levels",
    name: "Levels CGM Program",
    thirdPartyUrl: "https://www.levelshealth.com/",
    thirdPartyLabel: "Levels",
    category: "cgm",
    evidenceTier: "B",
    blurb:
      "CGM + nutrition app wrapper. Tier-B because the underlying sensor (Libre) is solid; the app value-add depends on personal use case.",
  },

  // ── Pantry staples (only EvidencePill ≥ B) ─────────────────────────
  "wild-planet-skipjack-tuna": {
    productKey: "wild-planet-skipjack-tuna",
    brand: "Wild Planet",
    name: "Wild Skipjack Wild Tuna",
    thirdPartyUrl: amazonUrl("B001G7QPV4"),
    thirdPartyLabel: "Amazon",
    category: "pantry-staple",
    evidenceTier: "B",
    blurb:
      "Pole-and-line caught skipjack — the smaller-fish alternative to albacore that keeps mercury exposure manageable for high-frequency consumers.",
  },
  "bobs-red-mill-rolled-oats": {
    productKey: "bobs-red-mill-rolled-oats",
    brand: "Bob's Red Mill",
    name: "Organic Rolled Oats",
    thirdPartyUrl: amazonUrl("B07FZG2N76"),
    thirdPartyLabel: "Amazon",
    category: "pantry-staple",
    evidenceTier: "A",
    blurb:
      "The cheapest reliable carbohydrate-per-dollar in the pantry hierarchy. $/g-protein worse than rice; $/g-fibre and $/g-carb best in class.",
  },
};

export function getAffiliate(
  productKey: string,
): { url: string; label: string; isOwned: boolean } | null {
  const a = AFFILIATES[productKey];
  if (!a) return null;
  if (a.ownedShopUrl) {
    return { url: a.ownedShopUrl, label: "Larderlab Shop", isOwned: true };
  }
  return { url: a.thirdPartyUrl, label: a.thirdPartyLabel, isOwned: false };
}

export function affiliatesByCategory(
  category: AffiliateLink["category"],
): AffiliateLink[] {
  return Object.values(AFFILIATES).filter((a) => a.category === category);
}

export function affiliatesByTier(
  tier: AffiliateLink["evidenceTier"],
): AffiliateLink[] {
  return Object.values(AFFILIATES).filter((a) => a.evidenceTier === tier);
}
