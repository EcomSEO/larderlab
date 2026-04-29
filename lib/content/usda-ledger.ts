/**
 * USDA FoodData Central (FDC) ledger.
 *
 * Every <NutritionLedger> instance reads from this manifest. No
 * invented macros — if an ingredient is not in the USDA database, cite
 * the closest match and note the substitution in the rationale prop.
 *
 * Schema:
 *   - fdcId: numeric USDA FDC identifier
 *   - sourceUrl: canonical FDC URL (https://fdc.nal.usda.gov/fdc-app.html#/food-details/{fdcId})
 *   - servingSizeG: the serving the macros are calculated against
 *   - macros: kcal, protein, fat, carbs, fibre, sugar (all per serving)
 *   - micros: optional (sodium, calcium, iron, B12, vitamin D — the
 *     ones the optimiser audience actually tracks)
 *   - lastVerified: ISO date the FDC record was last cross-checked
 *
 * Update cadence: quarterly. Operator-driven (not API), since FDC
 * record IDs occasionally retire and silent drift is worse than a
 * stale-but-explicit lastVerified.
 */

export type UsdaMacros = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
  sugar: number;
};

export type UsdaMicros = {
  sodium?: number;
  calcium?: number;
  iron?: number;
  b12?: number;
  vitaminD?: number;
  potassium?: number;
};

export type UsdaEntry = {
  fdcId: number;
  name: string;
  /** Common-name tag the post body uses (e.g. "whey-isolate", "skipjack-tuna"). */
  slug: string;
  servingSizeG: number;
  servingDescription: string;
  macros: UsdaMacros;
  micros?: UsdaMicros;
  sourceUrl: string;
  lastVerified: string;
  /** Use when the cited record is a substitution; document why. */
  substitutionNote?: string;
};

const fdcUrl = (id: number) =>
  `https://fdc.nal.usda.gov/fdc-app.html#/food-details/${id}/nutrients`;

export const USDA_LEDGER: Record<string, UsdaEntry> = {
  "whey-isolate": {
    fdcId: 174288,
    name: "Whey protein isolate",
    slug: "whey-isolate",
    servingSizeG: 30,
    servingDescription: "1 scoop (~30 g)",
    macros: { calories: 110, protein: 25, fat: 0.5, carbs: 1, fiber: 0, sugar: 1 },
    micros: { sodium: 60, calcium: 130 },
    sourceUrl: fdcUrl(174288),
    lastVerified: "2026-04-29",
  },
  "rolled-oats": {
    fdcId: 173904,
    name: "Oats, regular and quick, not fortified, dry",
    slug: "rolled-oats",
    servingSizeG: 40,
    servingDescription: "1/2 cup dry (~40 g)",
    macros: { calories: 150, protein: 5, fat: 2.5, carbs: 27, fiber: 4, sugar: 1 },
    micros: { iron: 1.7, potassium: 130 },
    sourceUrl: fdcUrl(173904),
    lastVerified: "2026-04-29",
  },
  "skipjack-tuna-canned": {
    fdcId: 174194,
    name: "Fish, tuna, light, canned in water, drained solids",
    slug: "skipjack-tuna-canned",
    servingSizeG: 100,
    servingDescription: "1 can drained (~100 g)",
    macros: { calories: 116, protein: 26, fat: 0.8, carbs: 0, fiber: 0, sugar: 0 },
    micros: { sodium: 247, b12: 2.5 },
    sourceUrl: fdcUrl(174194),
    lastVerified: "2026-04-29",
    substitutionNote:
      "FDC entry covers light tuna canned in water generically; skipjack is the dominant species in this category but yellowfin and tongol are also packed under 'light tuna'.",
  },
  "chicken-breast-cooked": {
    fdcId: 171477,
    name: "Chicken, broilers or fryers, breast, meat only, cooked, roasted",
    slug: "chicken-breast-cooked",
    servingSizeG: 100,
    servingDescription: "100 g cooked",
    macros: { calories: 165, protein: 31, fat: 3.6, carbs: 0, fiber: 0, sugar: 0 },
    micros: { sodium: 74, potassium: 256, b12: 0.3 },
    sourceUrl: fdcUrl(171477),
    lastVerified: "2026-04-29",
  },
  "egg-whole-large": {
    fdcId: 173424,
    name: "Egg, whole, raw, fresh",
    slug: "egg-whole-large",
    servingSizeG: 50,
    servingDescription: "1 large egg (~50 g)",
    macros: { calories: 72, protein: 6.3, fat: 4.8, carbs: 0.4, fiber: 0, sugar: 0.2 },
    micros: { sodium: 71, vitaminD: 1, b12: 0.5 },
    sourceUrl: fdcUrl(173424),
    lastVerified: "2026-04-29",
  },
  "greek-yogurt-nonfat": {
    fdcId: 170894,
    name: "Yogurt, Greek, plain, nonfat",
    slug: "greek-yogurt-nonfat",
    servingSizeG: 170,
    servingDescription: "1 cup (~170 g)",
    macros: { calories: 100, protein: 17, fat: 0.7, carbs: 6, fiber: 0, sugar: 6 },
    micros: { sodium: 65, calcium: 187 },
    sourceUrl: fdcUrl(170894),
    lastVerified: "2026-04-29",
  },
  "salmon-atlantic-cooked": {
    fdcId: 175168,
    name: "Fish, salmon, Atlantic, farmed, cooked, dry heat",
    slug: "salmon-atlantic-cooked",
    servingSizeG: 100,
    servingDescription: "100 g cooked",
    macros: { calories: 206, protein: 22, fat: 12, carbs: 0, fiber: 0, sugar: 0 },
    micros: { sodium: 61, vitaminD: 11, b12: 2.8, potassium: 384 },
    sourceUrl: fdcUrl(175168),
    lastVerified: "2026-04-29",
  },
  "lentils-cooked": {
    fdcId: 172420,
    name: "Lentils, mature seeds, cooked, boiled, without salt",
    slug: "lentils-cooked",
    servingSizeG: 100,
    servingDescription: "100 g cooked",
    macros: { calories: 116, protein: 9, fat: 0.4, carbs: 20, fiber: 7.9, sugar: 1.8 },
    micros: { iron: 3.3, potassium: 369 },
    sourceUrl: fdcUrl(172420),
    lastVerified: "2026-04-29",
  },
  "creatine-monohydrate": {
    // Creatine is a single-substance supplement, not a USDA food.
    // Cite the FDA OTC monograph instead. Keep here so NutritionLedger
    // still has a structured node.
    fdcId: 0,
    name: "Creatine monohydrate (supplement, single substance)",
    slug: "creatine-monohydrate",
    servingSizeG: 5,
    servingDescription: "1 scoop (~5 g)",
    macros: { calories: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, sugar: 0 },
    sourceUrl: "https://www.fda.gov/food/food-labeling-nutrition/dietary-supplements",
    lastVerified: "2026-04-29",
    substitutionNote:
      "Creatine monohydrate is not catalogued in USDA FDC because it is a single-substance dietary supplement, not a food. Cited here against the FDA dietary-supplement framework for completeness.",
  },
};

export function getUsdaEntry(slug: string): UsdaEntry | undefined {
  return USDA_LEDGER[slug];
}

export function listUsdaSlugs(): string[] {
  return Object.keys(USDA_LEDGER);
}
