/**
 * $/g cost-per-unit ledger.
 *
 * The CostPerUnitCallout component reads from this manifest. Larderlab's
 * core differentiator is that every staple carries a $/g calculation
 * that is dated, sourced, and reproducible — never a vague "cheap" tag.
 *
 * Hard rules (from CLAUDE.md + 04-larderlab.md hard rules):
 *   - $/g math to two decimals OR three significant figures, whichever
 *     is more precise. Never round to whole pennies.
 *   - Every entry has an asOfDate.
 *   - Every entry has a sourceUrl (the affiliate or retailer URL the
 *     price was sampled from).
 *   - Update cadence: monthly. Operator-driven, not API.
 *
 * Two metrics are surfaced:
 *   - pricePerG: $ per gram of product (the unit cost).
 *   - pricePerGProtein: $ per gram of protein (the metric the optimiser
 *     audience cares about — Mark's-test).
 *
 * For pure-protein products (whey isolate at ~83% protein by weight),
 * both are reported. For carb-dominant products (oats, rice), only
 * pricePerG is meaningful.
 */

export type Currency = "USD" | "EUR" | "GBP";

export type CostEntry = {
  /** Matches the affiliate registry productKey when the SKU is sold. */
  productKey: string;
  productName: string;
  /** Total purchase price observed. */
  pricePaid: number;
  currency: Currency;
  /** Total package weight in grams. */
  weightG: number;
  /** Grams of protein in the whole package (for protein-dominant SKUs). */
  proteinG?: number;
  /** $ per gram of product, rounded to 3 sig figs / 4 decimals. */
  pricePerG: number;
  /** $ per gram of protein, only when proteinG is set. */
  pricePerGProtein?: number;
  asOfDate: string;
  /** Affiliate or retailer URL the price was sampled from. */
  sourceUrl: string;
  /** Region the price applies to (US-Amazon vs UK-Amazon vs DE-Amazon). */
  region: "US" | "UK" | "DE" | "EU";
  notes?: string;
};

export const COST_PER_UNIT: Record<string, CostEntry> = {
  // ── Whey isolates ──────────────────────────────────────────────────
  "myprotein-impact-whey-isolate-2.5kg": {
    productKey: "myprotein-impact-whey-isolate",
    productName: "MyProtein Impact Whey Isolate, 2.5 kg",
    pricePaid: 64.99,
    currency: "USD",
    weightG: 2500,
    proteinG: 2083, // 25 g protein per 30 g serving × 83.3 servings
    pricePerG: 0.026,
    pricePerGProtein: 0.0312,
    asOfDate: "2026-04-29",
    sourceUrl: "https://www.myprotein.com/sports-nutrition/impact-whey-isolate/",
    region: "US",
  },
  "now-whey-isolate-5lb": {
    productKey: "now-whey-isolate",
    productName: "NOW Sports Whey Protein Isolate, 5 lb",
    pricePaid: 84.99,
    currency: "USD",
    weightG: 2268,
    proteinG: 1875, // 25 g per 30.2 g serving × 75
    pricePerG: 0.0375,
    pricePerGProtein: 0.0453,
    asOfDate: "2026-04-29",
    sourceUrl: "https://www.amazon.com/dp/B0BFWQ7G9P/",
    region: "US",
  },

  // ── Creatine ──────────────────────────────────────────────────────
  "thorne-creatine-450g": {
    productKey: "thorne-creatine",
    productName: "Thorne Creatine Monohydrate, 450 g",
    pricePaid: 43.0,
    currency: "USD",
    weightG: 450,
    pricePerG: 0.0956,
    asOfDate: "2026-04-29",
    sourceUrl: "https://www.thorne.com/products/dp/creatine",
    region: "US",
    notes:
      "$/g of pure creatine; 5 g daily dose works out to ~$0.48/day at this price. Creatine is the cheapest A-tier supplement on a per-day basis.",
  },

  // ── Whole-food proteins ───────────────────────────────────────────
  "chicken-breast-100g-cooked": {
    productKey: "chicken-breast-cooked",
    productName: "Boneless skinless chicken breast (US grocery, 2026 Q2 average)",
    pricePaid: 0.94,
    currency: "USD",
    weightG: 100,
    proteinG: 31,
    pricePerG: 0.0094,
    pricePerGProtein: 0.0303,
    asOfDate: "2026-04-29",
    sourceUrl: "https://www.bls.gov/cpi/", // BLS chicken-breast index
    region: "US",
    notes:
      "BLS-tracked retail price for boneless skinless chicken breast, US national average. Adjust ±25% for regional variation.",
  },
  "wild-planet-skipjack-can": {
    productKey: "wild-planet-skipjack-tuna",
    productName: "Wild Planet Wild Skipjack Tuna, 142 g can (drained ~100 g)",
    pricePaid: 3.79,
    currency: "USD",
    weightG: 100,
    proteinG: 26,
    pricePerG: 0.0379,
    pricePerGProtein: 0.146,
    asOfDate: "2026-04-29",
    sourceUrl: "https://www.amazon.com/dp/B001G7QPV4/",
    region: "US",
    notes:
      "Premium pole-and-line skipjack. Cheaper canned tuna (StarKist, Bumble Bee Chunk Light) runs $0.018-0.022/g protein but the mercury-per-can math is worse.",
  },
  "egg-large-each": {
    productKey: "egg-whole-large",
    productName: "Large grade-A eggs (US grocery, 2026 Q2 average)",
    pricePaid: 0.42,
    currency: "USD",
    weightG: 50,
    proteinG: 6.3,
    pricePerG: 0.0084,
    pricePerGProtein: 0.0667,
    asOfDate: "2026-04-29",
    sourceUrl: "https://www.bls.gov/cpi/",
    region: "US",
    notes:
      "Per-egg cost based on 2026 BLS-tracked dozen-egg national average ($5.04/dozen).",
  },
  "greek-yogurt-nonfat-32oz": {
    productKey: "greek-yogurt-nonfat",
    productName: "Plain nonfat Greek yogurt, 907 g (32 oz) tub",
    pricePaid: 5.49,
    currency: "USD",
    weightG: 907,
    proteinG: 91, // 17 g per 170 g × 5.34 servings
    pricePerG: 0.00605,
    pricePerGProtein: 0.0603,
    asOfDate: "2026-04-29",
    sourceUrl: "https://www.target.com/",
    region: "US",
  },

  // ── Pantry carbs ──────────────────────────────────────────────────
  "bobs-red-mill-rolled-oats-907g": {
    productKey: "bobs-red-mill-rolled-oats",
    productName: "Bob's Red Mill Organic Rolled Oats, 907 g (32 oz)",
    pricePaid: 6.49,
    currency: "USD",
    weightG: 907,
    pricePerG: 0.00716,
    asOfDate: "2026-04-29",
    sourceUrl: "https://www.amazon.com/dp/B07FZG2N76/",
    region: "US",
    notes:
      "Cheapest reliable carb-per-dollar in the pantry hierarchy. Generic store-brand rolled oats run ~$0.004/g; the Bob's Red Mill premium is ~$0.003/g for the organic certification.",
  },
};

export function getCostEntry(productKey: string): CostEntry | undefined {
  return Object.values(COST_PER_UNIT).find((c) => c.productKey === productKey);
}

export function getCostEntryById(entryId: string): CostEntry | undefined {
  return COST_PER_UNIT[entryId];
}

/**
 * Sort entries by $/g of protein, ascending. Used by the
 * "12 high-protein foods by cost" listicle and the macro-calculator
 * cost chart.
 */
export function rankByPricePerGProtein(): CostEntry[] {
  return Object.values(COST_PER_UNIT)
    .filter((c) => c.pricePerGProtein != null)
    .sort((a, b) => (a.pricePerGProtein! - b.pricePerGProtein!));
}
