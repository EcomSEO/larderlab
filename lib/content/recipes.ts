/**
 * Recipe content — the food-publisher layer.
 *
 * Each recipe carries the data needed for:
 *  - RecipePageTemplate (full page layout)
 *  - Recipe JSON-LD (incl. NutritionInformation)
 *  - RecipeCard (home + index)
 *  - NutritionLedger differentiator
 *
 * No diet-culture framing. No calorie-as-headline. Nutrition is a
 * reference table, not a sales pitch.
 */

export type RecipeIngredient = {
  /** Quantity, e.g. "1 cup", "2 tbsp". Empty string if unitless. */
  qty?: string;
  /** Ingredient text, e.g. "dried white beans, soaked overnight". */
  name: string;
  /** Optional sourcing note — "Rancho Gordo, this year's harvest" etc. */
  note?: string;
};

export type RecipeStep = {
  /** Short italic step label, e.g. "Soak the beans". */
  label: string;
  /** Full method paragraph. */
  body: string;
};

export type NutritionRow = {
  label: string;
  /** Number value as string, e.g. "412". */
  value: string;
  unit: string;
  /** "USDA" pill = green; "Calculated" = ash; "—" = no badge. */
  source: "USDA" | "Calculated" | "—";
};

export type Source = {
  label: string;
  url: string;
  /** Tag pill: usda, peer-reviewed, gov, editorial. */
  tag?: "USDA" | "Peer-reviewed" | "Gov" | "Editorial";
};

export type Recipe = {
  slug: string;
  department: string;
  cuisine?: string;
  title: string;
  /** Short italic dek under title. */
  dek: string;
  /** Drop-cap summary paragraph at top of body. */
  summary: string;
  /** Why this recipe works — 2-3 short paragraphs. */
  whyItWorks: string[];
  yield: string;
  serves: number;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  difficulty: "Pantry-easy" | "Weekend cook" | "Advanced";
  /** ISO-ish total time for schema, e.g. PT1H30M. */
  isoPrep: string;
  isoCook: string;
  isoTotal: string;
  testCount: number;
  lastTested: string;
  publishedAt: string;
  updatedAt: string;
  developer: {
    name: string;
    credential: string;
    photoColor: string;
  };
  /** Plate placeholder gradient color (used as a fallback bg behind the photo). */
  plateColor: string;
  /** Hero photo (16:9). Lives under /public/images/recipes/{slug}.jpg. */
  imageUrl?: string;
  ingredients: RecipeIngredient[];
  method: RecipeStep[];
  notes: string;
  storage: string;
  variations: { title: string; body: string }[];
  nutrition: NutritionRow[];
  servingSize: string;
  sources: Source[];
  related: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "one-pan-white-beans",
    department: "Pantry suppers",
    cuisine: "Mediterranean",
    title: "The one-pan beans",
    dek: "Slow-cooked white beans, garlic confit, a bay leaf or three. The cover dish — better the next day.",
    summary:
      "A pan of slow-cooked white beans is the kind of recipe that earns its shelf space. Soak overnight, settle them into a heavy pot with a halved onion, smashed garlic, a strip of lemon peel and a bay leaf, and let a low oven do the work. The pot liquor is the prize — a savoury, garlicky broth that turns into Tuesday's lunch and Wednesday's dinner.",
    whyItWorks: [
      "Salt added at the end, not the start, keeps the skins tender — confirmed in our test kitchen across cannellini, alubia blanca and runner-bean trials.",
      "A 300°F (150°C) oven holds a barely-trembling simmer that won't bash the beans about. Stovetop simmer works, but is fussier.",
      "The lemon peel and bay leaf bring brightness without acid; both come out before serving and the beans never turn citrus-forward.",
    ],
    yield: "Serves 4 generously, 6 with bread",
    serves: 4,
    prepTime: "10 min (after overnight soak)",
    cookTime: "1 hr 20 min",
    totalTime: "1 hr 30 min",
    difficulty: "Pantry-easy",
    isoPrep: "PT10M",
    isoCook: "PT1H20M",
    isoTotal: "PT1H30M",
    testCount: 7,
    lastTested: "2026-04-26",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-26",
    developer: {
      name: "Javier Ortiz",
      credential:
        "Sports-nutrition writer · Lifts 4×/wk · Editor, Larderlab",
      photoColor: "#C4A878",
    },
    plateColor: "#E8DCC8",
    imageUrl: "/images/recipes/one-pan-white-beans.jpg",
    ingredients: [
      { qty: "1 cup", name: "dried white beans", note: "cannellini, alubia blanca, or runner — soaked overnight" },
      { qty: "2 tbsp", name: "good olive oil", note: "single-estate, harvest-dated if you have it" },
      { qty: "1", name: "yellow onion", note: "halved, root left on" },
      { qty: "4 cloves", name: "garlic", note: "smashed, peels left on" },
      { qty: "1", name: "dried bay leaf" },
      { qty: "1 strip", name: "lemon peel", note: "no pith" },
      { qty: "to taste", name: "sea salt", note: "added at the end, not the start" },
      { qty: "a handful", name: "soft herbs", note: "parsley, chervil, or dill — to finish" },
      { qty: "to serve", name: "thick toast", note: "rubbed with the cut side of a garlic clove" },
    ],
    method: [
      {
        label: "Soak",
        body: "The night before, tip the beans into a wide bowl, cover by two inches of cold water and leave overnight. They will roughly double.",
      },
      {
        label: "Build the pot",
        body: "Drain the soaked beans and tip them into a heavy ovenproof pan. Add cold water until the beans are covered by an inch. Settle the onion halves cut-side down into the beans, tuck the smashed garlic and bay leaf around them, and lay the lemon peel across the top.",
      },
      {
        label: "Slow oven",
        body: "Slide the pan into a 300°F (150°C) oven and cook, lid on, until the beans are creamy at the centre. Check at 60 minutes, then every 15 after. Total time will be 1 hr 20 min to 1 hr 40 min depending on age and variety.",
      },
      {
        label: "Salt",
        body: "Add salt only when the beans are nearly tender — earlier and the skins toughen. Stir gently; the beans should be cushioned in pot liquor, not dry.",
      },
      {
        label: "Finish",
        body: "Lift out the onion halves and the lemon peel. Drizzle the beans with olive oil, scatter soft herbs, and serve in shallow bowls with a piece of garlic-rubbed toast on the rim.",
      },
    ],
    notes:
      "We like a quick-cooking white bean here — cannellini, alubia blanca, or a runner bean if you have one. Older crop beans take longer. The pot liquor is the prize; do not pour it off.",
    storage:
      "Cool, lid on, fridge for up to four days. The beans are better on day two. Freezes well in the cooking liquid for up to two months — defrost overnight in the fridge and rewarm gently.",
    variations: [
      {
        title: "With confit tomato",
        body: "Lift in two tablespoons of last summer's tomato confit when the beans come out of the oven. The oil pools and turns coral; the broth picks up sweetness.",
      },
      {
        title: "With anchovy",
        body: "Mash one oil-cured anchovy fillet into the finishing oil. The beans will not taste of fish — they will taste deeper.",
      },
      {
        title: "Brothier, for a Tuesday",
        body: "Add another cup of water at the start, cook five minutes longer, finish with more herbs and a hard squeeze of lemon. Eat from a deep bowl with a spoon.",
      },
    ],
    nutrition: [
      { label: "Calories", value: "412", unit: "kcal", source: "Calculated" },
      { label: "Protein", value: "18", unit: "g", source: "USDA" },
      { label: "Carbs", value: "54", unit: "g", source: "USDA" },
      { label: "Fat", value: "12", unit: "g", source: "USDA" },
      { label: "Fiber", value: "14", unit: "g", source: "USDA" },
      { label: "Sodium", value: "380", unit: "mg", source: "Calculated" },
    ],
    servingSize: "1.5 cups beans + 0.5 cup pot liquor",
    sources: [
      {
        label:
          "USDA FoodData Central — White beans, mature seeds, cooked, boiled, with salt (NDB 16319).",
        url: "https://fdc.nal.usda.gov/fdc-app.html#/food-details/175204/nutrients",
        tag: "USDA",
      },
      {
        label:
          "Reyes-Moreno C, Paredes-López O. 1993. Hard-to-cook phenomenon in common beans — a review. Crit Rev Food Sci Nutr 33(3):227-86.",
        url: "https://pubmed.ncbi.nlm.nih.gov/8369144/",
        tag: "Peer-reviewed",
      },
      {
        label:
          "Larderlab test kitchen log — bean cookery trials, January–April 2026. Seven cooks across cannellini, alubia blanca, and runner beans, salt-timing variants and oven-temp variants.",
        url: "/methodology",
        tag: "Editorial",
      },
    ],
    related: ["tomato-confit-twelve-ways", "garlic-confit-from-scratch"],
  },
  {
    slug: "tomato-confit-twelve-ways",
    department: "Pantry projects",
    cuisine: "Mediterranean",
    title: "Tomato confit, twelve ways",
    dek: "One pan, one afternoon, half a year of dinners. Slow-roasted plum tomatoes in olive oil — the most useful thing you'll cook all month.",
    summary:
      "Tomato confit is what a stocked pantry should be — a low-effort project that lives in jars on a Tuesday shelf and turns supper from question to answer. Twelve ways to use it follow at the bottom; the recipe itself is one tray, one afternoon.",
    whyItWorks: [
      "A 275°F (135°C) oven slowly drives off water, concentrating sugars without caramelising the skins.",
      "Olive oil submerged below the tomatoes' midline keeps them from drying — the oil itself becomes a finishing condiment.",
      "Salt added on the way in, not at the end, draws moisture and seasons the oil during the long roast.",
    ],
    yield: "Two pint jars",
    serves: 12,
    prepTime: "15 min",
    cookTime: "2 hr 30 min",
    totalTime: "2 hr 45 min",
    difficulty: "Weekend cook",
    isoPrep: "PT15M",
    isoCook: "PT2H30M",
    isoTotal: "PT2H45M",
    testCount: 5,
    lastTested: "2026-04-19",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-22",
    developer: {
      name: "Javier Ortiz",
      credential:
        "Sports-nutrition writer · Lifts 4×/wk · Editor, Larderlab",
      photoColor: "#C4A878",
    },
    plateColor: "#D8B89A",
    imageUrl: "/images/recipes/tomato-confit-twelve-ways.jpg",
    ingredients: [
      { qty: "2 lb", name: "plum tomatoes", note: "ripe, halved lengthwise" },
      { qty: "1 cup", name: "good olive oil" },
      { qty: "6 cloves", name: "garlic", note: "peeled, left whole" },
      { qty: "4 sprigs", name: "fresh thyme" },
      { qty: "1 tsp", name: "flaky sea salt" },
    ],
    method: [
      { label: "Heat", body: "Heat oven to 275°F (135°C)." },
      {
        label: "Arrange",
        body: "Lay halved tomatoes cut-side up in a snug roasting tray. Tuck garlic and thyme between them. Pour olive oil so it pools to the tomatoes' midline. Scatter salt.",
      },
      {
        label: "Roast",
        body: "Roast 2 hours 30 minutes. Skins should slip; oil should be deeply red.",
      },
      {
        label: "Cool",
        body: "Cool completely in the tray. Transfer to clean jars, tomatoes first, then oil to cover.",
      },
    ],
    notes:
      "Cherry tomatoes work; reduce time to 1 hr 45 min. The oil is gold — use it on toast, in vinaigrette, on beans.",
    storage:
      "Refrigerated, three weeks. Bring back to room temp before using; the oil sets in the cold.",
    variations: [
      { title: "Chili oil version", body: "Add a teaspoon of chili flakes with the salt." },
      { title: "Bay-leaf version", body: "Two dried bay leaves under the thyme." },
      { title: "Anchovy oil", body: "Two anchovy fillets; melt into the oil during the last 30 min." },
    ],
    nutrition: [
      { label: "Calories", value: "168", unit: "kcal", source: "Calculated" },
      { label: "Protein", value: "1", unit: "g", source: "USDA" },
      { label: "Carbs", value: "5", unit: "g", source: "USDA" },
      { label: "Fat", value: "16", unit: "g", source: "USDA" },
      { label: "Fiber", value: "1.5", unit: "g", source: "USDA" },
      { label: "Sodium", value: "195", unit: "mg", source: "Calculated" },
    ],
    servingSize: "2 tbsp tomato + oil (per twelve servings)",
    sources: [
      {
        label:
          "USDA FoodData Central — Tomatoes, red, ripe, raw, year round average (NDB 11529).",
        url: "https://fdc.nal.usda.gov/fdc-app.html#/food-details/170457/nutrients",
        tag: "USDA",
      },
      {
        label:
          "Larderlab test kitchen log — confit trials at 250°F, 275°F, 300°F across plum and cherry varieties, March 2026.",
        url: "/methodology",
        tag: "Editorial",
      },
    ],
    related: ["one-pan-white-beans", "garlic-confit-from-scratch"],
  },
  {
    slug: "garlic-confit-from-scratch",
    department: "Pantry projects",
    cuisine: "French",
    title: "Garlic confit, two heads at a time",
    dek: "Whole peeled cloves submerged in olive oil, oven-soft and sweet. The shortcut every saucy supper wants.",
    summary:
      "Garlic confit is the smallest pantry project that returns the most flavour. Twenty minutes to peel, an hour in the oven, two weeks in the fridge. The cloves spread on toast, smash into vinaigrette, melt into beans. The oil is its own finishing condiment.",
    whyItWorks: [
      "A low 250°F oven cooks the cloves through without browning, which would push the flavour bitter.",
      "Submerging completely in oil prevents oxidation and lets the cloves keep two weeks refrigerated.",
      "Two heads is the right scale — enough to last a week of cooking, not so much it tips over into a food-safety conversation.",
    ],
    yield: "1 small jar",
    serves: 16,
    prepTime: "20 min",
    cookTime: "1 hr",
    totalTime: "1 hr 20 min",
    difficulty: "Pantry-easy",
    isoPrep: "PT20M",
    isoCook: "PT1H",
    isoTotal: "PT1H20M",
    testCount: 4,
    lastTested: "2026-04-15",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    developer: {
      name: "Javier Ortiz",
      credential:
        "Sports-nutrition writer · Lifts 4×/wk · Editor, Larderlab",
      photoColor: "#C4A878",
    },
    plateColor: "#E0CFA8",
    imageUrl: "/images/recipes/garlic-confit-from-scratch.jpg",
    ingredients: [
      { qty: "2 heads", name: "garlic", note: "cloves separated and peeled" },
      { qty: "1 cup", name: "olive oil", note: "or enough to submerge cloves fully" },
      { qty: "2 sprigs", name: "thyme", note: "optional" },
      { qty: "1", name: "bay leaf", note: "optional" },
    ],
    method: [
      { label: "Heat", body: "Heat oven to 250°F (120°C)." },
      {
        label: "Submerge",
        body: "Tip cloves into a small ovenproof dish. Add herbs. Pour olive oil to cover by half an inch.",
      },
      {
        label: "Cook",
        body: "Cook, uncovered, 1 hour. Cloves should be golden, soft to the spoon, never browned.",
      },
      {
        label: "Cool, jar",
        body: "Cool to room temperature. Transfer to a clean jar, oil to cover, fridge.",
      },
    ],
    notes:
      "Use a thermometer if you have one — oil should sit between 220–250°F. Brown cloves are not ruined, but their flavour pushes bitter.",
    storage:
      "Refrigerated only — never at room temperature. Two weeks. Discard if the oil smells off or cloves develop pink tinges.",
    variations: [
      { title: "Rosemary version", body: "Two sprigs of rosemary instead of thyme." },
      { title: "Black-peppercorn version", body: "Half a teaspoon of cracked black pepper." },
    ],
    nutrition: [
      { label: "Calories", value: "126", unit: "kcal", source: "Calculated" },
      { label: "Protein", value: "0.4", unit: "g", source: "USDA" },
      { label: "Carbs", value: "1.5", unit: "g", source: "USDA" },
      { label: "Fat", value: "13.5", unit: "g", source: "USDA" },
      { label: "Fiber", value: "0.1", unit: "g", source: "USDA" },
      { label: "Sodium", value: "1", unit: "mg", source: "Calculated" },
    ],
    servingSize: "1 tbsp (cloves + oil)",
    sources: [
      {
        label:
          "USDA FoodData Central — Garlic, raw (NDB 11215).",
        url: "https://fdc.nal.usda.gov/fdc-app.html#/food-details/169230/nutrients",
        tag: "USDA",
      },
      {
        label:
          "USDA Food Safety and Inspection Service — Garlic in Oil. Botulism risk advisory.",
        url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation",
        tag: "Gov",
      },
      {
        label:
          "Larderlab test kitchen log — garlic confit trials at 225°F, 250°F, 275°F, March 2026.",
        url: "/methodology",
        tag: "Editorial",
      },
    ],
    related: ["one-pan-white-beans", "tomato-confit-twelve-ways"],
  },
];

export function getRecipe(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export const featuredRecipeSlug = "one-pan-white-beans";
