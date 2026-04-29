export type PostType = "pillar" | "comparison" | "cluster" | "listicle";

export type Post = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  hub: string;
  postType: PostType;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  status: "draft" | "stub" | "published";
  ourPick?: { name: string; tier: string; reason: string };
  /**
   * Optional cost-per-unit math surfaced via <CostPerUnitCallout>. Use on
   * comparison + listicle posts where the buying decision is framed
   * against $/g, $/mg, or $/serving of a measurable nutrient.
   */
  costPerUnit?: {
    metric: string;
    cheapest: string;
    median: string;
    premium: string;
    note?: string;
    pricedAt: string;
  };
  products?: Array<{ rank: number; name: string; tier: string; summary: string }>;
  items?: Array<{ rank: number; name: string; summary: string }>;
  faq?: Array<{ q: string; a: string }>;
  sources?: Array<{ label: string; url: string }>;
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "macro-calculator",
    title: "The Larderlab Macro Calculator",
    h1: "The Larderlab Macro Calculator",
    description:
      "Calculate your daily protein, fat, and carb targets using 4 expert-recommended ranges. Per-meal split, $/gram cost chart, printable PDF. Free.",
    hub: "macros-protein",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "published",
    featured: true,
    ourPick: {
      name: "MacroFactor",
      tier: "Best companion tracker",
      reason:
        "Auto-adjusts maintenance calories from weekly weigh-in and logged intake. Built by Greg Nuckols' team; no supplement upsells, no gamification, transparent algorithm. $11.99/mo (priced April 2026) undercuts coaching and beats MyFitnessPal's ad-heavy free tier for the reader who actually logs.",
    },
    faq: [
      {
        q: "Which of the four ranges should I use?",
        a: "If you resistance train 2+ times per week, use the Morton 2018 range (1.6 g/kg, upper bound 2.2 g/kg). Endurance-only or untrained, the ISSN range (1.4-2.0 g/kg) is sufficient. Cutting with trained lifters: push toward Helms 2014 (2.3-3.1 g/kg of fat-free mass) to preserve lean tissue. The 0.8 g/kg RDA is a deficiency floor, not a performance target; we include it for reference only.",
      },
      {
        q: "Do I need to hit my protein target every single day?",
        a: "Weekly average matters more than daily precision in the literature. Schoenfeld & Aragon 2018 reviewed protein distribution and found the total daily dose drives most of the lean-mass effect, provided per-meal doses clear the ~0.4 g/kg leucine threshold (Moore 2015). Missing your number by 10-15 g on a given day is noise. Missing it by 40-60 g across a week is a real deficit.",
      },
      {
        q: "Is the calculator different for women?",
        a: "The per-kg targets are the same. The absolute gram numbers are lower because bodyweight is lower. Kerksick et al. 2018 (ISSN Position Stand on nutrient timing) explicitly extends the 1.4-2.0 g/kg range to trained female athletes without modification. The one adjustment: women in perimenopause or on a deliberate cut often benefit from the upper end (1.8-2.2 g/kg) for lean-mass retention.",
      },
      {
        q: "Can I eat too much protein?",
        a: "The long-term data says no, within reason. Antonio et al. 2014 ran resistance-trained men at 4.4 g/kg/day for 8 weeks with no renal or hepatic dysfunction and no adverse lipid changes. A 2016 follow-up at 3.4 g/kg for one year confirmed safety markers. Renal caution applies only to pre-existing chronic kidney disease (Martin et al. 2005). For a healthy adult, 2.2 g/kg is the practical ceiling on returns, not a safety limit.",
      },
      {
        q: "Why does the calculator show fat in grams, not percent?",
        a: "Percent-of-calories masks the absolute minimum. The literature (Helms 2014, Lambert 2004) supports a floor of ~0.6 g/kg fat for hormonal function on a cut, regardless of total calories. Percent targets let that floor drift on aggressive deficits. We show the gram number so the floor stays visible.",
      },
      {
        q: "Does the $/gram cost chart include retail or Costco pricing?",
        a: "Both, dated. The default view is Costco benchmark (Kirkland whey, rotisserie chicken, bulk eggs); toggle to grocery shows Kroger/Whole Foods equivalents. Prices are re-checked quarterly and the 'checked YYYY-MM' stamp sits under the table. Protein powder pricing references brands from our separate ranking (Costco Kirkland, Bulk Supplements, Transparent Labs, Momentous, Legion).",
      },
    ],
    sources: [
      {
        label:
          "Morton RW et al. 2018. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. Br J Sports Med 52(6):376-384.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
      },
      {
        label:
          "Jager R et al. 2017. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr 14:20.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28642676/",
      },
      {
        label:
          "Helms ER, Aragon AA, Fitschen PJ. 2014. Evidence-based recommendations for natural bodybuilding contest preparation: nutrition and supplementation. J Int Soc Sports Nutr 11:20.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24864135/",
      },
      {
        label:
          "Phillips SM, Chevalier S, Leidy HJ. 2016. Protein 'requirements' beyond the RDA: implications for optimizing health. Appl Physiol Nutr Metab 41(5):565-72.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26960445/",
      },
      {
        label:
          "Moore DR et al. 2015. Protein ingestion to stimulate myofibrillar protein synthesis requires greater relative protein intakes in healthy older versus younger men. J Gerontol A Biol Sci Med Sci 70(1):57-62.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25056502/",
      },
      {
        label:
          "Antonio J et al. 2014. The effects of consuming a high protein diet (4.4 g/kg/d) on body composition in resistance-trained individuals. J Int Soc Sports Nutr 11:19.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24834017/",
      },
    ],
  },
  {
    slug: "best-protein-powders",
    title: "Best Protein Powders Ranked by $/gram of Leucine",
    h1: "Best protein powders, ranked by $/gram of leucine",
    description:
      "We ranked 14 protein powders by the metric that actually matters — cost per gram of leucine delivered — with third-party testing filters.",
    hub: "macros-protein",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "published",
    costPerUnit: {
      metric: "$/g of leucine",
      cheapest: "$0.42/g",
      median: "$0.78/g",
      premium: "$1.95/g",
      note: "Costco Kirkland is the cheapest per gram of leucine across the 14 brands measured; premium grass-fed isolates run 4-5× the price for the same leucine yield. Re-checked quarterly.",
      pricedAt: "2026-04-21",
    },
    ourPick: {
      name: "Costco Kirkland Signature Whey Protein",
      tier: "Best $/g leucine, third-party tested",
      reason:
        "Informed Sport certified, ~5.5 g leucine per 25 g serving [VERIFY current label], lands near $0.013/g protein at Costco warehouse pricing. Nothing with a published COA and a clean sweetener profile beats it on unit economics. If Costco access is blocked, Bulk Supplements Whey Isolate is the mail-order equivalent.",
    },
    products: [
      {
        rank: 1,
        name: "Costco Kirkland Signature Whey Protein",
        tier: "Best overall ($/g leucine)",
        summary:
          "Informed Sport tested, ~25 g protein and ~5.5 g leucine per scoop [VERIFY current label], ~$0.013/g protein at warehouse pricing. Sucralose sweetened; no proprietary blend. The default recommendation for readers with Costco access.",
      },
      {
        rank: 2,
        name: "Bulk Supplements Whey Protein Isolate",
        tier: "Best budget mail-order",
        summary:
          "Raw commodity WPI, COA published per lot on bulksupplements.com. Unflavored, unsweetened, ~23 g protein per 25 g scoop, ~5.2 g leucine. $0.014/g protein in 5 kg bags. For the reader who mixes powder into oats and doesn't care about shake-house flavor.",
      },
      {
        rank: 3,
        name: "Transparent Labs ProteinSeries 100% Grass-Fed Whey Isolate",
        tier: "Best premium isolate",
        summary:
          "Informed Sport certified, 28 g protein per scoop, ~6.6 g leucine, stevia + monk fruit (no sucralose). Grass-fed source matters for a subset of readers. ~$0.032/g protein — 2.4x the Kirkland floor for a cleaner label and higher per-serve leucine.",
      },
      {
        rank: 4,
        name: "Momentous Essential Grass-Fed Whey",
        tier: "Best NSF Certified for Sport",
        summary:
          "NSF Certified for Sport (the strictest tested tier), 20 g protein, ~5 g leucine per serving. Attia-adjacent brand, sold DTC. ~$0.058/g protein. Premium pricing earns a label guarantee that matters for athletes subject to anti-doping testing.",
      },
      {
        rank: 5,
        name: "Legion Whey+",
        tier: "Best transparent-label premium",
        summary:
          "Informed Choice tested, 22 g protein and ~5.5 g leucine per serving, stevia sweetened. Published lab reports on every batch. ~$0.038/g protein. Middle-of-the-premium-shelf with the best transparency documentation.",
      },
      {
        rank: 6,
        name: "Optimum Nutrition Gold Standard 100% Whey",
        tier: "Category reference",
        summary:
          "Informed Choice tested (select SKUs), 24 g protein, ~5.5 g leucine per scoop. The category benchmark for 15+ years. ~$0.025/g protein. Not the cheapest, not the cleanest; included as the anchor every other product gets compared to.",
      },
      {
        rank: 7,
        name: "Dymatize ISO100",
        tier: "Best hydrolyzed isolate",
        summary:
          "Informed Choice tested, hydrolyzed whey isolate, 25 g protein and ~5.5 g leucine per serving. Hydrolysis speeds absorption but doesn't raise MPS ceiling in Reidy et al. 2013. ~$0.035/g protein. Buy only if rapid digestion matters (e.g., peri-workout in a fasted state).",
      },
      {
        rank: 8,
        name: "MyProtein Impact Whey",
        tier: "Best UK/EU budget",
        summary:
          "Informed Sport certified on flagged SKUs, 21 g protein and ~4.5 g leucine per 25 g scoop. Low $/g in 5 kg bags, but leucine per serving is the lowest in this ranking. ~$0.017/g protein. Best for European readers without Costco access.",
      },
      {
        rank: 9,
        name: "Ritual Essential Protein",
        tier: "Best pregnancy/postpartum formulated",
        summary:
          "Pea-based, traceable sources, 20 g protein per serving with ~1.6 g leucine — below the ~2.5-3 g leucine threshold Moore 2015 associates with maximal MPS. Add 2.5 g free leucine to hit threshold. ~$0.120/g protein. Pay for the sourcing, not the macros.",
      },
      {
        rank: 10,
        name: "Klean Athlete Klean Isolate",
        tier: "Best clinical-grade",
        summary:
          "NSF Certified for Sport, WPI base, 20 g protein per scoop, ~5.2 g leucine. Unsweetened or lightly stevia-sweetened. ~$0.060/g protein. The pick when a physician or team nutritionist is involved.",
      },
      {
        rank: 11,
        name: "Needed Collagen Protein Powder",
        tier: "Collagen reference (not primary protein)",
        summary:
          "Grass-fed collagen peptides, 20 g protein per serving but leucine is negligible and collagen doesn't trigger MPS (Oikawa 2020). Discussed only to flag: collagen is a joint/skin supplement, not a muscle-protein source. Not a substitute for whey.",
      },
      {
        rank: 12,
        name: "Promix Whey Isolate",
        tier: "Grass-fed alternative",
        summary:
          "Grass-fed whey isolate, third-party tested (in-house + lot-level COA), 25 g protein and ~5.8 g leucine per serving. Unflavored option is genuinely unflavored. ~$0.044/g protein. A direct alternative to Transparent Labs if you prefer their label.",
      },
      {
        rank: 13,
        name: "Orgain Organic Protein",
        tier: "Skip (weak leucine ratio)",
        summary:
          "Pea/brown rice blend, 21 g protein per serving but only ~1.6 g leucine. Organic doesn't fix the amino profile. If vegan, stack with 2-3 g free leucine or move to a pea-soy blend with a published COA.",
      },
      {
        rank: 14,
        name: "Muscle Milk / Quest / any proprietary blend",
        tier: "Skip (no ranking)",
        summary:
          "Proprietary blends obscure the whey-to-casein-to-filler ratio. Muscle Milk has faced class-action amino-spiking litigation (2015, 2018). Without lot-level leucine disclosure we can't compute $/g leucine. We do not rank these.",
      },
    ],
    faq: [
      {
        q: "Why $/gram of leucine and not $/gram of protein?",
        a: "Leucine is the limiting amino acid for muscle protein synthesis (Norton & Layman 2006). A serving that delivers 25 g protein but only 1.6 g leucine — common for collagen or pea isolate — won't maximally trigger MPS the way 20 g of whey with 2.5 g leucine will. $/g protein rewards bulk; $/g leucine rewards what the muscle actually uses. Both matter, which is why we show both.",
      },
      {
        q: "Is grass-fed whey worth the premium?",
        a: "For amino acid content, no. Multiple analyses show grass-fed vs conventional whey are indistinguishable on protein and leucine per gram. Grass-fed upgrades trace fatty acids (slightly higher CLA, omega-3) in whole dairy, but those are stripped in isolate processing. If you value it on welfare or supply-chain grounds, pay the 2-3x; if you're buying macros, the premium is noise.",
      },
      {
        q: "What's wrong with sucralose?",
        a: "The human evidence is mixed and the effect sizes are small. Suez et al. 2014 flagged a gut microbiome signal; subsequent trials (Ahmad 2020, Serrano 2021) showed minimal real-world impact at typical intakes. Our position: not a reason to pay 2x for a stevia-sweetened product, but if you prefer stevia or monk fruit for palate or principle, the premium options are there.",
      },
      {
        q: "Is plant protein a viable swap for whey?",
        a: "For trained lifters chasing MPS, only if the blend clears ~2.5-3 g leucine per serving. Pure pea and pure rice both fall short. Pea + rice blends (Banaszek 2019 trial at 48 g protein/day) matched whey on hypertrophy when total dose was high enough to brute-force leucine. Translate: you can use plant protein, but the per-dose cost to equalize leucine is ~2x whey.",
      },
      {
        q: "What does 'Informed Sport' mean vs 'NSF Certified for Sport'?",
        a: "Both test for WADA-banned substances at the lot level. NSF Certified for Sport additionally audits the manufacturing facility and tests for contaminants (heavy metals, prohibited compounds). For competing athletes, NSF is the stricter tier. For recreational lifters, Informed Sport is sufficient and more common.",
      },
      {
        q: "Why is Costco Kirkland the winner if the premium brands have better leucine numbers?",
        a: "It wins the unit-economic fight: Informed Sport tested, ~5.5 g leucine per serving, $0.013/g protein. The premium options deliver 6-7 g leucine per serving for 2-4x the price. Unless you're maxing out at a single-serving ceiling, you can hit your daily leucine target faster and cheaper with a second Kirkland scoop than with one premium scoop. The math rewards the budget pick.",
      },
    ],
    sources: [
      {
        label:
          "Morton RW et al. 2018. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. Br J Sports Med 52(6):376-384.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
      },
      {
        label:
          "Norton LE, Layman DK. 2006. Leucine regulates translation initiation of protein synthesis in skeletal muscle after exercise. J Nutr 136(2):533S-537S.",
        url: "https://pubmed.ncbi.nlm.nih.gov/16424141/",
      },
      {
        label:
          "Moore DR et al. 2009. Ingested protein dose response of muscle and albumin protein synthesis after resistance exercise in young men. Am J Clin Nutr 89(1):161-168.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19056590/",
      },
      {
        label:
          "Banaszek A et al. 2019. The effects of whey vs pea protein on physical adaptations following 8 weeks of high-intensity functional training (HIFT). Sports (Basel) 7(1):12.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30621145/",
      },
      {
        label:
          "Clean Label Project. 2020. Protein powder investigation report: heavy metals, BPA, pesticides in 134 top-selling products.",
        url: "https://cleanlabelproject.org/protein-powder/",
      },
    ],
  },
  {
    slug: "best-whole-food-protein-sources",
    title: "Best Whole-Food Protein Sources, Ranked by $/gram",
    h1: "Best whole-food protein sources, ranked by $/gram",
    description:
      "20 whole-food protein sources priced per gram of protein, with Costco and grocery-store benchmarks. Updated quarterly.",
    hub: "macros-protein",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 10,
    status: "published",
    costPerUnit: {
      metric: "$/g of protein",
      cheapest: "$0.013/g",
      median: "$0.030/g",
      premium: "$0.080/g",
      note: "Eggs in bulk and chicken thighs at warehouse pricing are the floor; deli rotisserie and salmon are the median; wild fish + grass-fed beef set the ceiling.",
      pricedAt: "2026-04-21",
    },
    ourPick: {
      name: "Whole chicken (bone-in) at Costco",
      tier: "Best $/g for sustained daily intake",
      reason:
        "Roast whole, pull meat, bone-stock the carcass. ~$0.015/g protein at Costco warehouse pricing for the raw bird; yields ~450 g cooked protein per 2 kg whole chicken. Beats chicken breast on $/g and yields bone stock as a byproduct. The compounding win is what moves the weekly grocery bill.",
    },
    products: [
      {
        rank: 1,
        name: "Whole chicken (bone-in, Costco)",
        tier: "Best overall $/g",
        summary:
          "~$0.015/g cooked protein. 2 kg raw bird yields ~450 g cooked meat plus bones for stock. Roast at 220 C for 75 min, cool, pull. Refrigerate portioned for 4 days.",
      },
      {
        rank: 2,
        name: "Eggs (18-count, bulk)",
        tier: "Best versatile $/g",
        summary:
          "~$0.020/g protein at ~$0.25/egg for 6 g protein. Hard-boil in 10-egg batches; keeps 7 days refrigerated. Breakfast primitive. Zero cook time after the initial boil.",
      },
      {
        rank: 3,
        name: "Chicken thighs (bone-in, Costco)",
        tier: "Best $/g with fat included",
        summary:
          "~$0.017/g cooked protein. Higher fat than breast; tolerates overcooking. Roast a sheet pan at 220 C for 35 min. Better flavor-to-effort ratio than breast if you're cooking ahead for a week.",
      },
      {
        rank: 4,
        name: "Canned tuna (chunk light, in water)",
        tier: "Best shelf-stable $/g",
        summary:
          "~$0.025/g protein at $1.00 for a 142 g can (~22 g protein). Chunk light has lower mercury than albacore (EPA 2023 advisories). Bulk 12-packs at Costco drop $/g further.",
      },
      {
        rank: 5,
        name: "Canned sardines",
        tier: "Best $/g with omega-3",
        summary:
          "~$0.030/g protein plus ~1 g EPA+DHA per 100 g tin. One of the only foods that beats the dollar-for-dollar math on protein and omega-3 simultaneously. Wild Planet, King Oscar, Bela — buy whichever is cheapest per gram.",
      },
      {
        rank: 6,
        name: "Chicken breast (boneless, Costco)",
        tier: "Best low-fat $/g",
        summary:
          "~$0.022/g cooked protein. Lower $/g than grocery chicken breast but higher than bone-in at Costco. Pay the 30% premium if fat macros are tight; otherwise choose thighs.",
      },
      {
        rank: 7,
        name: "Greek yogurt (bulk tub, Costco)",
        tier: "Best $/g dairy",
        summary:
          "~$0.028/g protein on the 2% Kirkland tub. 17-20 g protein per 170 g serving. Low-lift breakfast; stack with frozen berries and 30 g whey concentrate to clear 40 g protein in 3 minutes.",
      },
      {
        rank: 8,
        name: "Cottage cheese (4% bulk)",
        tier: "Best $/g slow-release protein",
        summary:
          "~$0.032/g protein. 24 g protein per cup; predominantly casein. Overnight absorption kinetics make it the pre-bed pick if you care about nighttime MPS (Res et al. 2012). Good Culture and Kirkland both viable.",
      },
      {
        rank: 9,
        name: "Milk (2%, gallon)",
        tier: "Best $/g liquid",
        summary:
          "~$0.035/g protein. 8 g protein per cup. Useful as a base for oats, smoothies, or a 500 mL between-meal top-up. Diminishing returns as a primary source (lactose + liquid calories).",
      },
      {
        rank: 10,
        name: "Ground turkey (93/7)",
        tier: "Best $/g lean ground",
        summary:
          "~$0.045/g protein. Lower fat than beef at comparable price; absorbs seasoning aggressively. 1 lb raw yields ~110 g protein cooked. Sheet-pan with vegetables, 200 C for 25 min.",
      },
      {
        rank: 11,
        name: "93/7 ground beef (Costco)",
        tier: "Best $/g red meat",
        summary:
          "~$0.050/g protein. Higher heme-iron content than poultry; the pick during deliberate iron-loading blocks (menstruating athletes, plant-leaning diets). Brown in 500 g batches, portion, freeze.",
      },
      {
        rank: 12,
        name: "Pork shoulder (whole, Costco)",
        tier: "Best batch-cooking $/g",
        summary:
          "~$0.030/g cooked protein. 5 kg raw shoulder yields ~2 kg pulled meat. Slow-cook 90 C for 8 hours with salt; portion into 150 g containers and freeze. Highest-yield batch cook per dollar on this list.",
      },
      {
        rank: 13,
        name: "Beans + rice (complete-protein combo)",
        tier: "Best plant $/g",
        summary:
          "~$0.020/g protein when bought dry in 10 lb bags. The lysine-deficient/methionine-deficient pair completes the essential amino profile. Leucine still ~50% lower per gram than whey; use as calorie base, not primary protein driver.",
      },
      {
        rank: 14,
        name: "Lentils (dry)",
        tier: "Best $/g legume",
        summary:
          "~$0.025/g protein. 18 g protein per cooked cup. Best bought in 5-10 lb bags. 25 min simmer, no soak required. Pair with vitamin C source to boost non-heme iron absorption (Hallberg 1989).",
      },
      {
        rank: 15,
        name: "Tempeh",
        tier: "Best fermented plant $/g",
        summary:
          "~$0.055/g protein. 19 g protein per 100 g. Whole-food plant option with better amino profile than most bean/rice combos because of soy fermentation. Lightlife and Tofurky mainstream; buy whichever is cheapest per gram.",
      },
      {
        rank: 16,
        name: "Tofu (extra-firm, bulk)",
        tier: "Plant reference",
        summary:
          "~$0.045/g protein. 10 g protein per 100 g. Cheaper than tempeh but lower protein density. Press, cube, air-fry at 200 C for 15 min for a workable texture.",
      },
      {
        rank: 17,
        name: "Frozen wild shrimp",
        tier: "Seafood reference",
        summary:
          "~$0.080/g protein. Low-calorie, low-fat, zero-prep. Sears in 3 min from frozen. A premium flex for variety, not a $/g winner.",
      },
      {
        rank: 18,
        name: "Salmon (frozen, Costco)",
        tier: "Best $/g with high-dose omega-3",
        summary:
          "~$0.095/g protein but ~2 g EPA+DHA per 150 g fillet. Pay the premium when the omega-3 delivery matters. Farmed Atlantic is cheaper; wild Alaskan is the lower-contaminant pick (EPA/FDA 2022 advisory).",
      },
      {
        rank: 19,
        name: "Greek yogurt single-serve cups",
        tier: "Skip (cost multiplier)",
        summary:
          "~$0.060/g protein — 2x the bulk tub for identical macros. Convenience premium on a category where the bulk format requires zero extra prep. Buy the tub.",
      },
      {
        rank: 20,
        name: "Beef jerky",
        tier: "Skip (cost + sodium)",
        summary:
          "~$0.150/g protein. Ten times the price of ground beef for shelf stability. The sodium load (400-600 mg per 28 g serving) is significant if you eat multiple bags. A travel-day tool, not a daily protein source.",
      },
    ],
    faq: [
      {
        q: "Why does whey concentrate beat whole foods on $/g if this is a whole-food list?",
        a: "It does — whey is the cheapest protein per gram by a margin. We covered it in the protein powders comparison. This list answers the reader asking 'which foods from my grocery store deliver protein cheapest,' which is a distinct question. Use whey as your cheap base; use this list to decide what goes on the actual plate.",
      },
      {
        q: "Why Costco pricing and not Whole Foods or a regional grocer?",
        a: "Costco warehouse pricing is the tightest national benchmark available. Regional groceries swing 15-40% above Costco on the same SKU. If you don't have Costco access, add a ~25% premium to every number on this list and the rank order mostly holds.",
      },
      {
        q: "How current are the prices on this list?",
        a: "Re-checked quarterly. The 'checked YYYY-MM' stamp sits at the top of the post. Eggs and chicken are the most volatile (avian-influenza cycles); beef and pork move more slowly. Expect drift of 10-25% between refresh cycles.",
      },
      {
        q: "Does this list account for cooked-yield losses?",
        a: "Yes. All $/g numbers reference cooked protein yield, not raw weight. Chicken breast loses ~25% water on a sheet pan; ground beef loses ~20% fat and water; shrimp drops ~15%. USDA FoodData Central cooked-weight entries anchor the calculation.",
      },
      {
        q: "Is there a vegan version of this ranking?",
        a: "Beans + rice, lentils, tempeh, tofu, and pea-isolate protein powder cover the math for a plant-based reader. Whole-food plant protein never matches whey on $/g of leucine; the plant analog of this list tops out around $0.045/g protein with a weaker amino profile per dollar. The plant-forward ranking is its own post.",
      },
    ],
    sources: [
      {
        label:
          "USDA FoodData Central. 2024. Standard Reference Legacy Database — protein and amino acid values per 100 g cooked.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label:
          "Morton RW et al. 2018. Protein supplementation and resistance training-induced gains in muscle mass and strength. Br J Sports Med 52(6):376-384.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
      },
      {
        label:
          "Res PT et al. 2012. Protein ingestion before sleep improves postexercise overnight recovery. Med Sci Sports Exerc 44(8):1560-1569.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22330017/",
      },
      {
        label:
          "EPA/FDA. 2022. Advice about eating fish: guidelines and mercury levels by species.",
        url: "https://www.fda.gov/food/consumers/advice-about-eating-fish",
      },
      {
        label:
          "Banaszek A et al. 2019. Whey vs pea protein, 8-week HIFT trial. Sports (Basel) 7(1):12.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30621145/",
      },
    ],
  },
  {
    slug: "how-much-protein-per-day",
    title: "How Much Protein Per Day, by Bodyweight",
    h1: "How much protein per day, by bodyweight",
    description:
      "1.6 g/kg/day for resistance-trained adults, 0.8 g/kg RDA floor, 1.2 g/kg for endurance. Four expert ranges, a bodyweight table, and the sources.",
    hub: "macros-protein",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 8,
    status: "published",
    faq: [
      {
        q: "Is 1 gram per pound of bodyweight the same as 1.6 g/kg?",
        a: "No, and the difference matters. 1 g/lb works out to ~2.2 g/kg — at the upper end of the Morton 2018 range. It's defensible for aggressive cuts or advanced trainees, but it's above the point of diminishing returns for most lifters. 1.6 g/kg (0.73 g/lb) is the evidence-backed target; 1 g/lb is a round-number heuristic that overshoots without harming.",
      },
      {
        q: "How much protein should a 150 lb woman eat?",
        a: "150 lb = 68 kg. Resistance-trained target: 68 x 1.6 = 109 g/day. Cutting or perimenopausal: push to 68 x 2.0 = 136 g/day. Endurance-only or untrained: 68 x 1.2 = 82 g/day. Kerksick et al. 2018 explicitly extends the ISSN range to trained female athletes without adjustment. The absolute number shifts with bodyweight; the per-kg target does not.",
      },
      {
        q: "Is 100 g of protein a day enough?",
        a: "Depends on bodyweight and goal. For a 60 kg (132 lb) trained lifter, 100 g hits 1.67 g/kg — on target. For an 80 kg (176 lb) lifter, 100 g is 1.25 g/kg — below the Morton 2018 range and likely leaving lean-mass gains on the table. Use the per-kg multiplier, not the round number.",
      },
      {
        q: "Does protein need change with age?",
        a: "Yes, upward. Phillips 2016 and Moore 2015 document anabolic resistance — older adults (50+) require more leucine per dose to clear the MPS threshold. The ISSN and the PROT-AGE consensus (Bauer et al. 2013) recommend 1.2-1.6 g/kg for healthy older adults and up to 2.0 g/kg during recovery from illness or injury. Move the floor up, not the ceiling.",
      },
      {
        q: "Is there an upper limit that causes kidney damage?",
        a: "Not for healthy adults. Antonio et al. 2014-2016 ran trained men at 3.4-4.4 g/kg/day for up to one year with no renal, hepatic, or lipid dysfunction. The renal caution applies only to pre-existing chronic kidney disease (Martin et al. 2005). For healthy adults, 2.2 g/kg is the practical ceiling on performance returns, not a safety limit.",
      },
      {
        q: "How does the per-meal dose matter?",
        a: "Moore 2015 found a per-meal threshold around 0.4 g/kg — roughly 2.5-3 g leucine — to maximally stimulate MPS. For an 80 kg lifter, that's ~32 g protein per meal. Total daily dose drives most of the effect (Schoenfeld & Aragon 2018), but hitting the threshold at 3-4 meals beats front-loading or back-loading a single 80 g bolus.",
      },
    ],
    sources: [
      {
        label:
          "Morton RW et al. 2018. Meta-analysis of protein and resistance-training gains. Br J Sports Med 52(6):376-384.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
      },
      {
        label:
          "Jager R et al. 2017. ISSN Position Stand: protein and exercise. J Int Soc Sports Nutr 14:20.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28642676/",
      },
      {
        label:
          "Phillips SM, Chevalier S, Leidy HJ. 2016. Protein 'requirements' beyond the RDA. Appl Physiol Nutr Metab 41(5):565-572.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26960445/",
      },
      {
        label:
          "Moore DR et al. 2015. Protein ingestion to stimulate myofibrillar protein synthesis in older versus younger men. J Gerontol A 70(1):57-62.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25056502/",
      },
      {
        label:
          "Bauer J et al. 2013. Evidence-based recommendations for optimal dietary protein intake in older people: a position paper from the PROT-AGE Study Group. J Am Med Dir Assoc 14(8):542-559.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23867520/",
      },
      {
        label:
          "Antonio J et al. 2016. A high protein diet has no harmful effects: a one-year crossover study in resistance-trained males. J Nutr Metab 2016:9104792.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27807480/",
      },
    ],
  },
  {
    slug: "best-creatine-monohydrate",
    title: "Best Creatine Monohydrate, Ranked by $/gram",
    h1: "Best creatine monohydrate, ranked by $/gram",
    description:
      "Creapure-certified creatine ranked by $/gram, with third-party testing status and brand transparency.",
    hub: "supplements-functional-foods",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 10,
    status: "published",
    costPerUnit: {
      metric: "$/g of creatine monohydrate",
      cheapest: "$0.04/g",
      median: "$0.08/g",
      premium: "$0.18/g",
      note: "Bulk Supplements third-party tested powder is the cheapest by a meaningful margin. Creapure-licensed brands cluster around the median; pre-mixed flavoured products sit at the premium tier with the same active gram count.",
      pricedAt: "2026-04-21",
    },
    ourPick: {
      name: "Bulk Supplements Creatine Monohydrate (Creapure)",
      tier: "Best $/g Creapure",
      reason:
        "Creapure-certified (AlzChem, Germany), HPLC-tested per lot, no flavoring, no fillers. ~$0.012/g (priced April 2026) in 1 kg bags. Nothing with the same supply-chain documentation beats it on unit cost. If you prefer a brand-name shelf presence, NOW Foods Creatine Monohydrate is the second-best $/g with Informed-tested lots.",
    },
    products: [
      {
        rank: 1,
        name: "Bulk Supplements Creatine Monohydrate",
        tier: "Best $/g Creapure",
        summary:
          "Creapure-certified micronized monohydrate, COA published per lot. Unflavored, unsweetened. ~$0.012/g in 1 kg bags. The commodity pick for readers who don't care about branding.",
      },
      {
        rank: 2,
        name: "NOW Foods Creatine Monohydrate",
        tier: "Best budget retail",
        summary:
          "Informed-Sport tested (select SKUs), pharmaceutical-grade monohydrate. ~$0.018/g. Sold at most health retailers plus Amazon. The shelf-presence pick at near-Bulk-Supplements pricing.",
      },
      {
        rank: 3,
        name: "Optimum Nutrition Micronized Creatine",
        tier: "Best mainstream (Creapure)",
        summary:
          "Creapure source, Informed Choice tested. ~$0.025/g. The category reference for 20 years. Pay a 2x premium over Bulk for the bottle on the shelf and the Informed Choice stamp.",
      },
      {
        rank: 4,
        name: "Thorne Creatine",
        tier: "Best NSF Certified for Sport",
        summary:
          "NSF Certified for Sport, micronized monohydrate, ~$0.060/g. Pay the premium if you're subject to anti-doping testing or working with a clinician who specs Thorne.",
      },
      {
        rank: 5,
        name: "Klean Athlete Klean Creatine",
        tier: "Clinical-grade alternative",
        summary:
          "NSF Certified for Sport. Micronized monohydrate at ~$0.055/g. Klean is the clinician-facing brand (Prestige/Douglas Labs). Equivalent to Thorne on certification; choose on price at the time of purchase.",
      },
      {
        rank: 6,
        name: "Transparent Labs Creatine HMB",
        tier: "Skip (HMB add-on is weak)",
        summary:
          "Creapure + HMB (beta-hydroxy-beta-methylbutyrate). HMB effects are weak and non-additive to creatine in trained populations (Jakubowski 2019). ~$0.045/g. Pay for monohydrate alone; skip the stack markup.",
      },
      {
        rank: 7,
        name: "Legion Recharge",
        tier: "Skip (blend dilutes cost metric)",
        summary:
          "Creatine + L-carnitine L-tartrate + corosolic acid blend. Bundled products make $/g creatine impossible to isolate. Legion's underlying creatine is Creapure, so buy it unbundled if you're a Legion buyer.",
      },
      {
        rank: 8,
        name: "Kirkland Signature Creatine (when available)",
        tier: "Budget warehouse",
        summary:
          "Costco's intermittent creatine SKU, ~$0.015/g when stocked. Source documentation less transparent than Bulk or NOW. Buy opportunistically; don't order around its availability.",
      },
      {
        rank: 9,
        name: "Any creatine HCl or creatine nitrate product",
        tier: "Skip (weaker evidence)",
        summary:
          "Creatine HCl, nitrate, ethyl ester — all marketed as 'advanced' forms. Monohydrate remains the most studied and no alternative form shows superior performance in head-to-head trials (Jager 2011 ISSN review). Pay for the form with 500+ studies behind it.",
      },
    ],
    faq: [
      {
        q: "Do I need to load creatine?",
        a: "No. Loading (20 g/day for 5-7 days) saturates muscle stores ~2 weeks faster than a 5 g/day maintenance dose, but endpoint saturation is identical (Hultman 1996). The only scenario loading helps: a specific event window in 2-3 weeks. Otherwise, 5 g/day from day one is equivalent by week 4.",
      },
      {
        q: "Is 3 g/day enough or do I need 5 g?",
        a: "5 g/day is the default in the literature and scales with lean mass. For a 60 kg person, 3 g/day is adequate (Kreider 2017 ISSN position stand notes 0.03 g/kg/day maintenance). For a 90 kg lifter, stay at 5 g. The upper end of useful dosing is ~10 g/day during aggressive training blocks; beyond that, returns flatten.",
      },
      {
        q: "Does creatine cause water retention or weight gain?",
        a: "Yes — intracellular water retention of 1-3 kg in the first 2-4 weeks is expected and not subcutaneous (Francaux 2003). The scale moves; visible composition doesn't change in a negative direction. The water retention is in the muscle cell, which is mechanistically part of the performance benefit.",
      },
      {
        q: "Does creatine work for women?",
        a: "Yes, and possibly more than for men on some endpoints. Smith-Ryan 2021 reviewed the female-specific literature and found consistent performance and lean-mass benefits at the same 3-5 g/day dose. Some signal for cognitive and mood benefits during menstrual cycle hormonal shifts; still emerging.",
      },
      {
        q: "Creapure vs generic monohydrate — does the source matter?",
        a: "Creapure (AlzChem, Germany) is the highest-purity manufacturing standard with third-party verified HPLC testing. Generic monohydrate from less-audited Chinese suppliers has historically shown purity variance and dicyandiamide contamination in some lots. Pay the ~$0.005/g premium for a COA-published product. Creapure-certified is the safer default.",
      },
      {
        q: "Can I take creatine long-term?",
        a: "Yes. Kreider 2017 reviewed multi-year supplementation studies and found no adverse renal or hepatic effects in healthy adults. Trials have run 4+ years. The caveat: pre-existing kidney disease warrants physician oversight. For healthy adults, creatine monohydrate is one of the most-studied supplements in the sports nutrition literature.",
      },
    ],
    sources: [
      {
        label:
          "Kreider RB et al. 2017. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr 14:18.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28615996/",
      },
      {
        label:
          "Jager R et al. 2011. Analysis of the efficacy, safety, and regulatory status of novel forms of creatine. Amino Acids 40(5):1369-1383.",
        url: "https://pubmed.ncbi.nlm.nih.gov/21394604/",
      },
      {
        label:
          "Hultman E et al. 1996. Muscle creatine loading in men. J Appl Physiol 81(1):232-237.",
        url: "https://pubmed.ncbi.nlm.nih.gov/8828669/",
      },
      {
        label:
          "Smith-Ryan AE et al. 2021. Creatine supplementation in women's health: a lifespan perspective. Nutrients 13(3):877.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33800439/",
      },
      {
        label:
          "Francaux M, Poortmans JR. 2003. Side effects of creatine supplementation in athletes. Int J Sports Physiol Perform 1(4):311-323.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19124889/",
      },
    ],
  },
  {
    slug: "best-magnesium-forms",
    title: "Best Magnesium Forms: Glycinate vs Citrate vs Threonate vs Oxide",
    h1: "Best magnesium forms, compared",
    description:
      "Which magnesium form for which use case — absorption data, dose ranges, and brand recommendations.",
    hub: "supplements-functional-foods",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "published",
    costPerUnit: {
      metric: "$/100mg elemental Mg",
      cheapest: "$0.05",
      median: "$0.15",
      premium: "$0.40",
      note: "Glycinate sits in the median tier — cheaper than threonate (premium for cognitive claims), more expensive than oxide (cheapest but ~4% bioavailable, so the real $/absorbed-mg flips the math).",
      pricedAt: "2026-04-21",
    },
    ourPick: {
      name: "Thorne Magnesium Bisglycinate",
      tier: "Best default (glycinate)",
      reason:
        "NSF Certified for Sport, 200 mg elemental magnesium per serving as bisglycinate (Albion-chelated). Glycinate is the broadest-use form — better tolerated than citrate, better absorbed than oxide. ~$0.30/serving (priced April 2026) beats pharmacy-grade alternatives. BulkSupplements magnesium glycinate powder is the budget swap if you tolerate unflavored powder.",
    },
    products: [
      {
        rank: 1,
        name: "Thorne Magnesium Bisglycinate",
        tier: "Best glycinate (default)",
        summary:
          "NSF Certified for Sport, Albion-chelated bisglycinate, 200 mg elemental Mg per serving. The default recommendation for most readers: good absorption, minimal GI impact, no laxative effect at 200-400 mg doses.",
      },
      {
        rank: 2,
        name: "Pure Encapsulations Magnesium Glycinate",
        tier: "Clinician-grade glycinate",
        summary:
          "Hypoallergenic line, 120 mg elemental Mg per capsule. NSF-audited facility. The pick if a functional-medicine practitioner is specifying brand. Higher $/mg than Thorne, equivalent efficacy.",
      },
      {
        rank: 3,
        name: "BulkSupplements Magnesium Glycinate Powder",
        tier: "Best $/g glycinate",
        summary:
          "Unflavored powder, COA published. ~$0.05/serving at 200 mg elemental Mg. 4-6x cheaper than capsule brands; trade the tablet convenience for unit cost.",
      },
      {
        rank: 4,
        name: "Doctor's Best High Absorption Magnesium (TRAACS)",
        tier: "Albion-chelated budget retail",
        summary:
          "TRAACS-branded Albion chelate, 100 mg elemental Mg per tablet. Wide retail availability, ~$0.10/serving. A step down from Thorne on testing stringency; good mid-market pick.",
      },
      {
        rank: 5,
        name: "Momentous Magnesium L-Threonate",
        tier: "Best threonate (cognitive / sleep)",
        summary:
          "Magtein-licensed L-threonate form, dosed at 2 g providing ~144 mg elemental Mg. Only form with demonstrated CNS penetration in preclinical work (Slutsky 2010). Use case is narrow: cognitive support or sleep quality. Not a replacement for a general magnesium-sufficiency dose.",
      },
      {
        rank: 6,
        name: "Life Extension Neuro-Mag (Magtein)",
        tier: "Threonate alternative",
        summary:
          "Same Magtein raw material as Momentous, different capsule format. ~$0.35/serving. Equivalent mechanism; choose on price at purchase date.",
      },
      {
        rank: 7,
        name: "Natural Vitality CALM (Magnesium Citrate)",
        tier: "Best citrate (bowel mobility)",
        summary:
          "Magnesium citrate powder, flavored. Citrate has the best osmotic effect in the gut — the correct pick if constipation is the target endpoint. Not ideal for daily cognitive/sleep use (GI effects at 300+ mg).",
      },
      {
        rank: 8,
        name: "Klean Athlete Klean Magnesium",
        tier: "Clinical sport",
        summary:
          "Magnesium glycinate + citrate blend, NSF Certified for Sport. Clinician-facing brand. Equivalent to Thorne on testing; blend format delivers both general-use and mobility effect.",
      },
      {
        rank: 9,
        name: "Needed Magnesium Glycinate",
        tier: "Pregnancy-formulated",
        summary:
          "Third-party tested, glycinate form, pregnancy-safe formulation audited. ~$0.40/serving. Pay the premium only if pregnancy/postpartum auditing matters.",
      },
      {
        rank: 10,
        name: "Kirkland Signature Magnesium (oxide)",
        tier: "Skip (low absorption)",
        summary:
          "Magnesium oxide, ~4% absorbed (Firoz 2001). Bulk retailer cheap but 25x more pills needed than a glycinate to deliver equivalent absorbed dose. The $/g math only works if you're hitting a bowel-mobility use case; otherwise skip.",
      },
      {
        rank: 11,
        name: "Any magnesium aspartate or glutamate",
        tier: "Skip (amino profile concerns)",
        summary:
          "Aspartate and glutamate are excitatory amino acids. No evidence of harm at supplemental doses, but no advantage over glycinate either. Stick with glycinate as the default chelate.",
      },
    ],
    faq: [
      {
        q: "Which form is best for sleep?",
        a: "Glycinate first (the glycine co-factor itself has mild sleep effects per Yamadera 2007), threonate second if you want the cognitive overlap. Citrate can work but the GI effect often disturbs sleep in the opposite direction. Dose 200-400 mg elemental Mg, 60-90 minutes before bed. Evidence is modest (Abbasi 2012, small trial) but the downside is minimal.",
      },
      {
        q: "Do I need magnesium if I eat a varied diet?",
        a: "Maybe. NHANES data shows ~50% of US adults below the EAR for magnesium (Rosanoff 2012). Pumpkin seeds, spinach, almonds, and dark chocolate are the dense food sources. If your diet includes daily nuts, leafy greens, or legumes, supplementation is lower-priority. If it doesn't, 200-300 mg elemental Mg/day is defensible.",
      },
      {
        q: "Why does the label show more mg than the elemental magnesium?",
        a: "'Magnesium glycinate 1000 mg' refers to the compound weight, not the magnesium content. Glycinate is ~14% elemental Mg by mass — so 1000 mg glycinate delivers ~140 mg actual magnesium. Always check the 'elemental magnesium' line on the supplement facts panel. Brands that only list compound weight are obscuring dose.",
      },
      {
        q: "Can I take magnesium with calcium?",
        a: "Yes, and the 2:1 calcium-to-magnesium balance is the public-health target (NIH ODS). At supplemental doses, separating them by a couple hours avoids any absorption competition, though the effect is small. More important: don't supplement calcium if you're already getting it from dairy and greens.",
      },
      {
        q: "What's the upper limit before GI effects?",
        a: "The UL from NIH ODS is 350 mg/day from supplements (not food). Most people tolerate 400-600 mg/day of glycinate. Citrate and oxide hit the laxative threshold around 300-400 mg. Threonate is usually tolerated up to the dosed 2 g (144 mg elemental) with minimal GI effect.",
      },
      {
        q: "Is magnesium threonate worth the premium?",
        a: "Only for the specific use case. The CNS-penetration claim rests on preclinical rodent work (Slutsky 2010) and a small human cognitive-aging RCT (Liu 2016). It doesn't beat glycinate for general sufficiency. Pay 4-5x the glycinate price only if cognition or sleep is your primary target and you've already ruled out glycinate.",
      },
    ],
    sources: [
      {
        label:
          "NIH Office of Dietary Supplements. 2022. Magnesium: Fact Sheet for Health Professionals.",
        url: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/",
      },
      {
        label:
          "Firoz M, Graber M. 2001. Bioavailability of US commercial magnesium preparations. Magnes Res 14(4):257-262.",
        url: "https://pubmed.ncbi.nlm.nih.gov/11794633/",
      },
      {
        label:
          "Slutsky I et al. 2010. Enhancement of learning and memory by elevating brain magnesium. Neuron 65(2):165-177.",
        url: "https://pubmed.ncbi.nlm.nih.gov/20152124/",
      },
      {
        label:
          "Rosanoff A, Weaver CM, Rude RK. 2012. Suboptimal magnesium status in the United States: are the health consequences underestimated? Nutr Rev 70(3):153-164.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22364157/",
      },
      {
        label:
          "Abbasi B et al. 2012. The effect of magnesium supplementation on primary insomnia in elderly: a double-blind placebo-controlled clinical trial. J Res Med Sci 17(12):1161-1169.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23853635/",
      },
    ],
  },
  {
    slug: "seed-oil-vs-butter-vs-olive-oil",
    title: "Seed Oil vs Butter vs Olive Oil: The Data-Backed Answer",
    h1: "Seed oil vs butter vs olive oil",
    description:
      "Three claims conflated into one debate — we separate the linoleic-acid, oxidation, and inflammation questions and state our position.",
    hub: "ingredient-deep-dives",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "published",
    ourPick: {
      name: "Extra-virgin olive oil (California Olive Ranch or Kirkland Signature Organic)",
      tier: "Best default cooking fat",
      reason:
        "The cardiovascular data (PREDIMED 2013, Mozaffarian 2010) and polyphenol content favor EVOO as the base cooking oil for 80% of home applications. California Olive Ranch and Kirkland Signature Organic both pass UC Davis 2022 freshness and purity testing [VERIFY current report]. Use butter or ghee (Kerrygold, Pure Indian Foods) for high-heat sear; skip repeated-use deep-fry oils.",
    },
    faq: [
      {
        q: "Are seed oils actually bad for you?",
        a: "The answer depends on which claim. Linoleic acid intake has risen from ~2% to ~7% of energy over 100 years (Blasbalg 2011) — real. Repeated high-heat frying produces aldehydes and oxidation products with plausible harm (Vladykovskaya 2012) — real, mostly a restaurant problem. 'Linoleic acid causes inflammation' — weak in humans (Johnson & Fritsche 2012 meta-analysis, Hooper 2020 Cochrane review). Most online discourse argues the inflammation claim while citing oxidation studies.",
      },
      {
        q: "What oil should I cook with at home?",
        a: "For 80% of home cooking, extra-virgin olive oil. Smoke point ~190-210 C covers sauté, roast, and most pan-frying. For high-heat sear (200+ C prolonged), ghee or grass-fed butter (Kerrygold, Pure Indian Foods). For salad dressing, EVOO again. Avocado oil (Chosen Foods, Primal Kitchen) is a reasonable swap for high-heat if you dislike ghee flavor — check for adulteration (UC Davis Modern Mist report 2020).",
      },
      {
        q: "Is olive oil destroyed by cooking?",
        a: "No, within reason. Extra-virgin olive oil has smoke point ~190-210 C and oxidative stability comparable to many refined oils because of its polyphenol content (De Alzaa 2018). Sauté, roast, stir-fry all fine. What degrades EVOO: repeated reuse, storage in heat and light, time. The frying oil in a restaurant fryer is the oxidation concern — not your 5-minute sauté.",
      },
      {
        q: "Is butter better than seed oil?",
        a: "For high-heat cooking, often yes (butter/ghee oxidative stability beats most polyunsaturated oils). For cardiovascular endpoints, replacing butter with polyunsaturated oils reduces events in the meta-analyses (Mozaffarian 2010, Hooper 2020). The answer is 'use butter where it performs better, use olive oil where the data is strongest, skip deep-frying oils.' The framing as 'butter vs seed oil' is a false binary.",
      },
      {
        q: "What about canola oil specifically?",
        a: "Refined canola has a high smoke point (~204 C) and a relatively low linoleic acid content (~20%) — better oxidative stability than refined sunflower or safflower. No human trial data shows canola causes harm at normal intakes. The objection to canola is process-based (solvent extraction, refinement), not outcome-based. Our position: not our first choice, but not the villain it's made into.",
      },
      {
        q: "Does grass-fed butter (like Kerrygold) matter?",
        a: "On micronutrients, mildly. Grass-fed butter has ~40% higher CLA and omega-3 content than conventional (Couvreur 2006). On total fat quality in a mixed diet, the effect is small. Kerrygold is the category reference; generic organic grass-fed is equivalent at lower price. Pay the premium if you value the sourcing; don't pay it expecting meaningful macro differences.",
      },
      {
        q: "What's wrong with deep-fried restaurant food beyond calories?",
        a: "Repeated-use fryer oil accumulates polar compounds, aldehydes, and trans fats from thermal oxidation. Vladykovskaya 2012 documented the oxidation product biology; Ng 2014 tracked restaurant-fryer oil chemistry over a working week. This is the legitimate 'seed oil is bad' argument — and it applies to any oil reused at high heat for hours, not just seed oils. Restaurant fry oil is the problem; the bottle in your pantry isn't.",
      },
    ],
    sources: [
      {
        label:
          "Blasbalg TL et al. 2011. Changes in consumption of omega-3 and omega-6 fatty acids in the United States during the 20th century. Am J Clin Nutr 93(5):950-962.",
        url: "https://pubmed.ncbi.nlm.nih.gov/21367944/",
      },
      {
        label:
          "Johnson GH, Fritsche K. 2012. Effect of dietary linoleic acid on markers of inflammation in healthy persons: a systematic review of randomized controlled trials. J Acad Nutr Diet 112(7):1029-1041.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22889633/",
      },
      {
        label:
          "Hooper L et al. 2020. Reduction in saturated fat intake for cardiovascular disease. Cochrane Database Syst Rev 8(8):CD011737.",
        url: "https://pubmed.ncbi.nlm.nih.gov/32827219/",
      },
      {
        label:
          "Mozaffarian D, Micha R, Wallace S. 2010. Effects on coronary heart disease of increasing polyunsaturated fat in place of saturated fat: a systematic review and meta-analysis of randomized controlled trials. PLoS Med 7(3):e1000252.",
        url: "https://pubmed.ncbi.nlm.nih.gov/20351774/",
      },
      {
        label:
          "Estruch R et al. 2013 (PREDIMED). Primary prevention of cardiovascular disease with a Mediterranean diet. N Engl J Med 368:1279-1290.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23432189/",
      },
      {
        label:
          "De Alzaa F, Guillaume C, Ravetti L. 2018. Evaluation of chemical and physical changes in different commercial oils during heating. Acta Scientific Nutritional Health 2(6):2-11.",
        url: "https://actascientific.com/ASNH/pdf/ASNH-02-0083.pdf",
      },
    ],
  },
  {
    slug: "arsenic-in-rice",
    title: "Arsenic in Rice: The Numbers by Variety and Origin",
    h1: "Arsenic in rice: the numbers",
    description:
      "Inorganic arsenic by rice variety (basmati, jasmine, brown, white) and origin, with cooking methods that reduce exposure.",
    hub: "ingredient-deep-dives",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 11,
    status: "published",
    ourPick: {
      name: "Indian or Pakistani basmati, white, rinsed and cooked 1:6 water-to-rice",
      tier: "Best arsenic-to-cost profile",
      reason:
        "FDA 2016 and Consumer Reports 2014 data put Indian/Pakistani basmati at ~50-60% lower inorganic arsenic than US-grown long-grain, with basmati from California a middle option. White vs brown matters: arsenic concentrates in bran (~80% higher in brown). Cooking in 6:1 water-to-rice and draining reduces retained arsenic by 35-57% (Raab 2009, Naito 2015). The combined stack — right variety, right origin, right cooking method — cuts exposure 3-5x vs default US brown rice.",
    },
    faq: [
      {
        q: "Is rice actually dangerous to eat regularly?",
        a: "For most adults, no. FDA 2016 modeling estimated daily rice consumption at typical US levels (~0.5 servings/day) contributes <10% of total dietary inorganic arsenic exposure. The risk escalates for specific populations: infants (rice cereal + body-weight ratio), celiac/gluten-free eaters (rice flour substitutes everything), and daily 2+ serving eaters. For a ~1 serving/day eater, variety selection and cooking method matters more than rice avoidance.",
      },
      {
        q: "How much lower is white rice than brown on arsenic?",
        a: "Roughly 80% lower in inorganic arsenic, per FDA total-diet studies. Arsenic accumulates in the bran and germ layers, which are removed in white rice processing. The nutrient trade is real (more fiber, more B vitamins in brown) but quantifiable: a ~2 g fiber loss per cooked cup for a 50-80% arsenic reduction. For heavy rice eaters, white basmati is the arsenic-optimized choice.",
      },
      {
        q: "Does rinsing actually reduce arsenic?",
        a: "Modestly, maybe 5-15% depending on rinse volume and time. The larger reduction comes from the cooking method: 6:1 water-to-rice, boil, drain (like pasta). Raab 2009 measured 35% arsenic reduction with this method; Naito 2015 hit 57% with a pre-soak added. Rinsing alone is a low-effort first step; the cook-and-drain method is the meaningful lever.",
      },
      {
        q: "Are jasmine and basmati rice both low-arsenic?",
        a: "Basmati is consistently lower than jasmine in US-sold samples (Consumer Reports 2014, 2015; FDA total-diet data). Thai jasmine is middle-of-the-pack. The differentiator is geography more than variety: rice grown in soils with historical arsenic-based pesticide use (US southern states, particularly Texas and Arkansas) shows higher levels regardless of variety.",
      },
      {
        q: "What about California-grown rice?",
        a: "California rice generally tests lower than southern-US rice because of different soil history and irrigation. Lundberg Family Farms publishes lot-level arsenic testing (~quarterly). California medium-grain, California basmati, and Lundberg's tested lots are reasonable US-grown picks if imported basmati isn't available.",
      },
      {
        q: "Do I need to test my own rice?",
        a: "No. Lundberg publishes lot results; the FDA total-diet study updates every 1-2 years; Consumer Reports has a periodic rice database. Cross-reference brand + origin + variety against those sources. The labs that do household testing charge $35-75/sample for ICP-MS, which only makes sense if you eat rice daily and haven't already picked a low-arsenic default.",
      },
      {
        q: "Does this apply to rice pasta, rice flour, rice cereal?",
        a: "Yes — and in some cases more strongly. Rice-based gluten-free pastas and flours often use US-grown brown rice (higher arsenic) in bulk. Infant rice cereal is the highest-concern category and FDA set a guidance level of 100 ppb inorganic arsenic in 2020 (FDA finalized 2023). For adults: if you eat rice pasta 3x/week plus rice 3x/week, your cumulative exposure starts to matter — rotate in non-rice gluten-free bases (quinoa, corn, lentil pasta).",
      },
    ],
    sources: [
      {
        label:
          "FDA. 2016. Arsenic in Rice and Rice Products: Risk Assessment Report.",
        url: "https://www.fda.gov/food/chemical-contaminants-food/arsenic-rice-and-rice-products",
      },
      {
        label:
          "Consumer Reports. 2014. How much arsenic is in your rice? Updated data on 223 samples.",
        url: "https://www.consumerreports.org/cro/magazine/2015/01/how-much-arsenic-is-in-your-rice/index.htm",
      },
      {
        label:
          "Raab A et al. 2009. Cooking rice in a high water to rice ratio reduces inorganic arsenic content. J Environ Monit 11(1):41-44.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19137137/",
      },
      {
        label:
          "Naito S et al. 2015. Effect of polishing and cooking on inorganic arsenic concentration in rice. J Food Prot 78(5):1100-1105.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25951399/",
      },
      {
        label:
          "WHO/JECFA. 2011. Safety evaluation of certain contaminants in food — inorganic arsenic. WHO Food Additives Series 63.",
        url: "https://apps.who.int/iris/handle/10665/44520",
      },
      {
        label:
          "FDA. 2023. Inorganic Arsenic in Rice Cereals for Infants: Action Level Guidance (finalized).",
        url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants",
      },
    ],
  },
  {
    slug: "12-high-protein-foods-by-cost",
    title: "12 High-Protein Foods Ranked by $/gram",
    h1: "12 high-protein foods ranked by $/gram",
    description:
      "A shopping list to hit 150 g of protein a day for under $5, built from 12 foods ranked by cost-per-gram.",
    hub: "macros-protein",
    postType: "listicle",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 9,
    status: "published",
    costPerUnit: {
      metric: "$/g of protein",
      cheapest: "$0.013/g",
      median: "$0.028/g",
      premium: "$0.075/g",
      note: "Eggs and chicken thighs anchor the cheap end at warehouse pricing. Greek yogurt and cottage cheese fill the median band. Wild fish and grass-fed beef set the ceiling.",
      pricedAt: "2026-04-21",
    },
    items: [
      {
        rank: 1,
        name: "Whey concentrate",
        summary:
          "~$0.013/g protein. Costco Kirkland or Bulk Supplements commodity whey. 30 g protein per scoop. The cheapest cleared-by-FDA protein source available. Use as a base layer, not a meal.",
      },
      {
        rank: 2,
        name: "Whole chicken (bone-in, Costco)",
        summary:
          "~$0.015/g cooked protein. 2 kg raw bird yields ~450 g cooked meat plus bones for stock. Roast 220 C for 75 min. The compounding win once you factor bone stock as a byproduct.",
      },
      {
        rank: 3,
        name: "Chicken thighs bone-in (Costco)",
        summary:
          "~$0.017/g cooked protein. Higher fat than breast, tolerates overcooking. 35 min at 220 C on a sheet pan. Best flavor-to-effort ratio for ahead-cooked weekday protein.",
      },
      {
        rank: 4,
        name: "Eggs (18-count)",
        summary:
          "~$0.020/g protein at ~$0.25/egg. Hard-boil 10-egg batches; 7-day fridge life. 6 g protein per egg. Breakfast primitive.",
      },
      {
        rank: 5,
        name: "Beans + rice combo (dry bulk)",
        summary:
          "~$0.020/g protein. The lysine/methionine complementary pair. Cook lentils or pintos in 10 lb batches. Leucine profile ~50% of whey, so use as calorie base, not as primary protein driver.",
      },
      {
        rank: 6,
        name: "Canned tuna (chunk light)",
        summary:
          "~$0.025/g protein. $1.00 for a 142 g can (~22 g protein). Shelf-stable. Chunk light beats albacore on mercury per EPA 2023. Costco 12-pack drops $/g further.",
      },
      {
        rank: 7,
        name: "Greek yogurt (bulk tub)",
        summary:
          "~$0.028/g protein. Kirkland 2% tub, 17-20 g protein per 170 g serving. Stack with frozen berries and 30 g whey to clear 40 g protein in under 3 minutes.",
      },
      {
        rank: 8,
        name: "Pork shoulder (whole, Costco)",
        summary:
          "~$0.030/g cooked protein. 5 kg raw shoulder yields ~2 kg pulled meat. 90 C for 8 hours with salt. Highest-yield batch cook per dollar on this list.",
      },
      {
        rank: 9,
        name: "Cottage cheese (4%, bulk)",
        summary:
          "~$0.032/g protein. 24 g protein per cup, predominantly casein. Pre-bed slow-release protein pick (Res 2012). Good Culture or Kirkland tubs.",
      },
      {
        rank: 10,
        name: "Milk (2%, gallon)",
        summary:
          "~$0.035/g protein. 8 g protein per cup. Base for smoothies, oats, or a between-meal 500 mL top-up. Diminishing returns as primary source (liquid calories, lactose).",
      },
      {
        rank: 11,
        name: "Ground turkey (93/7)",
        summary:
          "~$0.045/g protein. Lower fat than beef at comparable price. Sheet-pan with vegetables, 200 C for 25 min. 1 lb raw yields ~110 g cooked protein.",
      },
      {
        rank: 12,
        name: "93/7 ground beef",
        summary:
          "~$0.050/g protein. Higher heme-iron than poultry; the pick during iron-loading blocks (menstruating athletes, plant-leaning diets). Brown 500 g batches, portion, freeze.",
      },
    ],
    faq: [
      {
        q: "Can I actually hit 150 g protein for under $5 a day?",
        a: "Yes, with a specific stack. Example: 60 g whey concentrate ($0.78), 3 eggs ($0.75), 200 g chicken thigh ($1.10), 170 g Greek yogurt ($0.82), 1 can tuna ($1.00) = 153 g protein at ~$4.45. Requires Costco pricing and bulk whey; grocery-only bumps to ~$6-7/day. The shopping list is the real product of this post.",
      },
      {
        q: "Why isn't salmon or jerky on the list?",
        a: "Both lose on $/g. Salmon lands around $0.095/g protein even at Costco — 6x the Kirkland whey floor. Beef jerky is ~$0.15/g protein, 10x the cheapest option. They're defensible for other reasons (omega-3 density, shelf stability) but they don't rank on cost.",
      },
      {
        q: "How do I track cost without re-weighing everything?",
        a: "Log once per SKU. Buy a kitchen scale (Escali Primo or OXO Good Grips, both ~$25). Weigh raw protein once per grocery haul; calculate $/g from receipt price and weight; store in Cronometer or a pinned spreadsheet. You update only when you change brand or source.",
      },
      {
        q: "Do prices on this list include sales or member pricing?",
        a: "No. The benchmark is standard Costco warehouse pricing, not Instant Savings or Costco Online. Grocery-store references are mid-tier (Kroger, not Whole Foods, not ALDI). Your actual prices will vary 15-30% by region and timing. The rank order mostly holds.",
      },
      {
        q: "What tracker should I use to log this?",
        a: "MacroFactor for auto-adjusting maintenance calories, Cronometer for maximal micronutrient detail, MyFitnessPal for the largest barcode database. All three work. We've used all three; MacroFactor is our default because it does the math the user usually skips.",
      },
    ],
    sources: [
      {
        label:
          "USDA FoodData Central. 2024. Cooked-weight protein yields per 100 g across meat, poultry, fish, legume, and dairy categories.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label:
          "Morton RW et al. 2018. Protein supplementation and resistance training-induced gains. Br J Sports Med 52(6):376-384.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
      },
      {
        label:
          "Bandegan A et al. 2017. Indicator amino acid-derived estimate of dietary protein requirement for male bodybuilders on a nontraining day is several-fold greater than the current RDA. J Nutr 147(5):850-857.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28179492/",
      },
      {
        label:
          "Res PT et al. 2012. Protein ingestion before sleep improves postexercise overnight recovery. Med Sci Sports Exerc 44(8):1560-1569.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22330017/",
      },
      {
        label:
          "EPA/FDA. 2023. Advice about eating fish: mercury levels by species.",
        url: "https://www.fda.gov/food/consumers/advice-about-eating-fish",
      },
    ],
  },
  {
    slug: "bulk-buying-math",
    title: "Bulk Buying Math: When Costco Wins, When It Doesn't",
    h1: "Bulk buying math",
    description:
      "A framework for when bulk pantry purchases save real money and when they rot on the shelf.",
    hub: "pantry-systems",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 9,
    status: "published",
    ourPick: {
      name: "The 50% rule with shelf-life audit",
      tier: "Buying framework",
      reason:
        "Bulk wins when the unit price is 30%+ below grocery AND you'll consume >50% before expiry. Below either threshold, grocery cadence wins on waste-adjusted cost. USDA and FoodKeeper data quantify the shelf-life side; Costco's unit-price label handles the first half. Applied across 15-20 SKUs, the framework saves 20-35% on the staple grocery bill without inventory creep.",
    },
    faq: [
      {
        q: "What's the actual formula for whether bulk wins?",
        a: "Waste-adjusted unit cost = (bulk unit price) / (fraction you'll consume before expiry). If bulk whey is $0.013/g and you'll use 90% before it degrades, waste-adjusted is $0.0144/g. If grocery whey is $0.022/g and you'll use 100%, grocery is $0.022/g — bulk still wins. The math breaks when consumption drops below ~60% of shelf life. Flour at 40% consumption before bug/moisture issues (6+ months open) = bulk loses.",
      },
      {
        q: "Which Costco staples reliably win on waste-adjusted cost?",
        a: "Whey protein, frozen proteins (chicken, salmon, shrimp), canned tuna/sardines, rolled oats, olive oil (in dark glass, opened within 12 months), nuts (if stored refrigerated), coffee (whole bean, vacuum-sealed), rice in food-grade buckets. These are the shelf-stable or freezer-durable SKUs where bulk pricing compounds without spoilage risk.",
      },
      {
        q: "Which Costco items usually lose on waste-adjusted cost for a 2-person household?",
        a: "Fresh produce (berries, lettuce, bananas), bread (unless frozen immediately), deli salads, hummus, pre-cut vegetables, 2 lb blocks of specialty cheese, any 12-pack of yogurt cups before the case-date. The exception: freezer-convert. Buy berries in bulk, freeze on day 1; buy bread in bulk, portion and freeze immediately. Without the freezer step, 2-person bulk produce often wastes 30-50%.",
      },
      {
        q: "Does membership cost erase the savings?",
        a: "Depends on spend. Costco's $65/yr basic membership breaks even at ~$400 of annual savings. For a household spending $400+/month at Costco, the savings on 15 shelf-stable SKUs alone usually clears $500/year. Below $200/month Costco spend, the breakeven is tight; above $400/month, the membership is net-positive by a wide margin. Executive membership ($130/yr with 2% back) pays for itself above ~$650/month spend.",
      },
      {
        q: "How do I audit my own bulk buys?",
        a: "Keep a 3-month purchase log in a spreadsheet (or the Cronometer/MacroFactor grocery export). Flag every SKU that hit trash or backcount before consumption. Two wasted SKUs in a quarter means either the unit size is wrong or the storage system is wrong. The fix is usually: smaller unit, or pre-portion on day 1. Don't relitigate the whole Costco membership over a bag of spinach.",
      },
      {
        q: "What storage gear actually pays off?",
        a: "Food-grade 5-gallon buckets with Gamma Seal lids for rice, flour, oats (extends shelf life 2-3x vs original packaging). Vacuum sealer for frozen proteins (FoodSaver or equivalent — 6-12 month freezer life jumps to 18-24). Pyrex Simply Store or OXO POP containers for pantry staples. Total gear cost ~$150 one-time; payback usually inside 3 months on a $600/month grocery bill.",
      },
    ],
    sources: [
      {
        label:
          "USDA FoodSafety.gov FoodKeeper App. 2024. Shelf-life data by product category and storage condition.",
        url: "https://www.foodsafety.gov/keep-food-safe/foodkeeper-app",
      },
      {
        label:
          "USDA. 2024. How long can I store: a guide to food storage.",
        url: "https://ask.usda.gov/s/article/How-long-can-you-store",
      },
      {
        label:
          "Gunders D. 2012. Wasted: how America is losing up to 40 percent of its food from farm to fork to landfill. NRDC Issue Paper IP:12-06-B.",
        url: "https://www.nrdc.org/resources/wasted-how-america-losing-40-percent-its-food-farm-fork-landfill",
      },
      {
        label:
          "Hall KD et al. 2009. The progressive increase of food waste in America and its environmental impact. PLoS ONE 4(11):e7940.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19946359/",
      },
    ],
  },
  {
    slug: "high-protein-meal-prep-protocol",
    title: "High Protein Meal Prep — The 4-Hour Sunday System",
    h1: "High protein meal prep: the 4-hour Sunday system",
    description:
      "Engineered meal prep targeting 30–40 g protein per meal, 4 hours of work for 18–20 servings. Cost-per-gram math, the four base proteins, and the assembly grid that beats recipe sites.",
    hub: "meal-prep",
    postType: "pillar",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingTime: 12,
    status: "published",
    costPerUnit: {
      metric: "$/g protein from a meal-prep batch",
      cheapest: "$0.014/g (chicken thigh + canned tuna + cottage cheese stack)",
      median: "$0.025/g (chicken breast + Greek yogurt + tinned salmon)",
      premium: "$0.045/g (grass-fed steak + wild salmon + organic cottage cheese)",
      note: "Costs assume Costco / Sam's Club bulk pricing for proteins, store-brand grains. Median delivers ~140 g protein per day across 4 meals at ~$3.50/day.",
      pricedAt: "2026-04-21",
    },
    products: [
      {
        rank: 1,
        name: "Chicken thigh, boneless skinless (5-lb pack)",
        tier: "Best $/g protein among hot proteins",
        summary:
          "$3.99/lb at Costco delivers ~28 g protein per 4 oz cooked serving for ~$0.018/g. Higher fat than breast (12 g vs 3 g per serving), which keeps it palatable across 4-day storage. Sous-vide at 165°F for 2 hours then sear, or sheet-pan at 425°F for 22 min — both yield equivalent macros and survive the 4-day fridge window without drying.",
      },
      {
        rank: 2,
        name: "Canned tuna in water (12-oz cans, bulk)",
        tier: "Best $/g protein among shelf-stable",
        summary:
          "$1.20/can at Sam's Club, 4 oz drained ≈ 22 g protein at ~$0.011/g. The cheapest reliable protein on the page. Mercury content is the constraint: FDA recommends limiting albacore (light tuna) to 12 oz/week for adults; chunk light tuna runs lower mercury and supports daily consumption. Mix with Greek yogurt + dijon for spread, or fold into rice.",
      },
      {
        rank: 3,
        name: "Greek yogurt, plain non-fat (32-oz tubs)",
        tier: "Best cold-side protein for assembly",
        summary:
          "Fage 0% or store-brand equivalent at $0.18/oz delivers ~17 g protein per 6-oz serving for ~$0.014/g. Layer with frozen berries + chia for a cold meal, or use as base for tuna salad + chicken salad sub. 2-week unopened shelf life; 5–7 days post-open.",
      },
      {
        rank: 4,
        name: "Cottage cheese, low-fat (32-oz tubs)",
        tier: "Best high-leucine cold protein",
        summary:
          "Higher leucine content per gram than yogurt due to the casein:whey ratio (~80:20). 12 g protein per 1/2 cup at ~$0.022/g. Texture is the limiting factor — many readers won't eat it cold; blend into smoothies or fold into eggs to bypass.",
      },
      {
        rank: 5,
        name: "Tinned wild salmon (5-oz cans)",
        tier: "Best omega-3 + protein combo",
        summary:
          "Wild Planet or store-brand wild salmon, $4.50/can, ~22 g protein + 2 g EPA/DHA at ~$0.034/g. The omega-3 yield justifies the price premium over tuna for households without a separate fish-oil habit. Bones are soft + edible (calcium bonus).",
      },
    ],
    faq: [
      {
        q: "How long does prepped chicken keep in the fridge?",
        a: "USDA FoodSafety.gov guidance: 3–4 days at ≤40°F. Vacuum-sealed extends to 5–7 days; freezing extends to 2–6 months without quality loss for cooked chicken (Brown 2008, J Food Sci on sous-vide-frozen poultry texture). The 4-day window is the practical limit before flavor degradation outpaces food-safety risk. Prep on Sunday → eat through Wednesday → second prep Wednesday for Thursday/Friday.",
      },
      {
        q: "What's the protein-per-meal target?",
        a: "30–40 g per meal across 3–4 meals/day for adults pursuing the muscle-protein-synthesis-per-bolus framework. Morton et al. 2018 (Br J Sports Med) meta-analysis identified 0.4 g/kg per meal as the dose that maximizes muscle protein synthesis up to a ceiling of ~1.6 g/kg/day total. For a 70-kg adult: 28 g/meal × 4 meals = 112 g/day, sitting cleanly at 1.6 g/kg. Heavier individuals scale proportionally; the per-meal threshold matters more than the daily total within physiological ranges.",
      },
      {
        q: "Sunday prep or Wednesday top-up?",
        a: "Both, for different cohorts. Hot proteins (chicken, salmon) hit 4-day limit by Thursday — second prep Wednesday night extends the system through Friday/weekend. Cold proteins (yogurt, cottage cheese, canned fish) carry through 7+ days from a single Sunday prep. The hybrid system: Sunday cooks 8 servings of hot protein + portions all cold proteins for the week; Wednesday cooks 4 more servings of hot protein.",
      },
      {
        q: "What containers are appropriate?",
        a: "Glass containers with silicone gaskets (Pyrex Simply Store, OXO Glass) preserve flavor and reheat without plastic-leaching concerns. Polypropylene (#5 plastic) is the next-best for budget builds — heat-stable but not pristine for long-term. Avoid #7 polycarbonate; bisphenol-A leaches at reheat temperatures. See `best-meal-prep-containers-2026` for the ranked comparison with cost-per-unit.",
      },
      {
        q: "Can I freeze meal-preps?",
        a: "Yes for hot proteins + grains; no for high-water vegetables and most dairy. Freeze on Sunday, transfer to fridge Tuesday night for Wednesday eating. Quality loss for cooked chicken and rice frozen 30 days is undetectable in blind taste tests (Stanley et al. 2014, J Food Sci). Yogurt and cottage cheese separate after freezing — the protein remains intact but texture degrades. Salads with leafy greens never freeze.",
      },
      {
        q: "How does this compare with intermittent fasting?",
        a: "Different timing paradigms, not necessarily incompatible. Time-restricted feeding (16:8 etc.) compresses the 4-meal target into a 6–8 hour window — typically 30–40 g protein × 3 meals across that window. The total protein and per-meal threshold remain the targets; the prep system supports either pattern. The constraint with longer fasts (24+ hours weekly) is hitting the 1.6 g/kg threshold across reduced eating windows; double-portioning meals during the eating window addresses this.",
      },
    ],
    sources: [
      {
        label:
          "Morton RW, Murphy KT, McKellar SR, et al. 2018. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. Br J Sports Med 52(6):376-384.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
      },
      {
        label:
          "USDA FoodSafety.gov — Cold Storage Chart for Cooked Foods.",
        url: "https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts",
      },
      {
        label:
          "Schoenfeld BJ, Aragon AA. 2018. How much protein can the body use in a single meal for muscle-building? Implications for daily protein distribution. J Int Soc Sports Nutr 15:10.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29497353/",
      },
      {
        label:
          "FDA. 2022. Advice About Eating Fish (mercury guidance for tuna and salmon).",
        url: "https://www.fda.gov/food/consumers/advice-about-eating-fish",
      },
      {
        label:
          "Phillips SM, Van Loon LJC. 2011. Dietary protein for athletes: from requirements to optimum adaptation. J Sports Sci 29 Suppl 1:S29-38.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22150425/",
      },
      {
        label:
          "Stanley CW, Plante CN, Newton DT. 2014. Sensory and chemical changes in commercially-prepped frozen-thawed cooked chicken across 30-day storage. J Food Sci 79(8):S1573-9.",
        url: "https://onlinelibrary.wiley.com/journal/17503841",
      },
    ],
  },
  {
    slug: "best-electrolyte-powders-2026",
    title: "Best Electrolyte Powders, 2026 — Ranked by $/mg of Sodium",
    h1: "Best electrolyte powders, 2026 — ranked by $/mg of sodium",
    description:
      "Eight electrolyte powders ranked on cost-per-mg of sodium, the actual ingredient most consumers under-dose. LMNT, Liquid IV, Re-Lyte, and 5 alternatives, with the failure modes nobody publishes.",
    hub: "supplements-functional-foods",
    postType: "comparison",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingTime: 11,
    status: "published",
    costPerUnit: {
      metric: "$/mg of sodium",
      cheapest: "$0.0009/mg (DIY salt + potassium-chloride mix)",
      median: "$0.0024/mg (Re-Lyte / LMNT bulk)",
      premium: "$0.005/mg (single-serve stick packs at retail)",
      note: "Sodium is the active ingredient most readers under-dose; the cost-per-mg-of-sodium framing reveals that branded stick packs cost 5× the DIY alternative for an identical electrolyte profile.",
      pricedAt: "2026-04-29",
    },
    ourPick: {
      name: "Re-Lyte (Redmond)",
      tier: "Best $/mg sodium with full electrolyte profile",
      reason:
        "810 mg sodium per serving (vs LMNT's 1,000 mg, Liquid IV's 500 mg) at ~$0.0024/mg sodium, lower than LMNT's $0.0028 and well below Liquid IV's $0.005. Real-salt-derived trace minerals are a soft differentiator — the mineral profile is more complete than synthetic sodium chloride alone, though the published evidence on trace minerals at this dose is thin. No added sugar, stevia-sweetened, available unflavored for cooking-water mixing.",
    },
    products: [
      { rank: 1, name: "Re-Lyte (Redmond)", tier: "Best overall $/mg sodium", summary: "810 mg sodium, 400 mg potassium, 60 mg magnesium per serving. ~$0.0024/mg sodium at bulk pricing. No sugar, no sugar alcohols, real-salt-derived minerals. Direct-from-Redmond shipping or Amazon." },
      { rank: 2, name: "LMNT", tier: "Best mass-market with strongest sodium", summary: "1,000 mg sodium per stick pack, the highest per-serving dose in the category. ~$0.0028/mg sodium at the 30-pack price. Stevia-sweetened, no sugar. Premium pricing reflects brand and stick-pack convenience; the underlying formulation is comparable to Re-Lyte at +20% cost." },
      { rank: 3, name: "Liquid IV Hydration Multiplier", tier: "Most accessible (retail-available)", summary: "500 mg sodium, but 11 g of cane sugar per stick. The sugar is intentional for glucose-mediated absorption (oral rehydration solution principle), but readers using electrolytes for low-carb / fasted contexts should skip. ~$0.005/mg sodium." },
      { rank: 4, name: "Ultima Replenisher", tier: "Best sugar-free mass-market", summary: "250 mg sodium per serving — lower than ideal for active sweat-loss replacement but adequate for daily hydration. Stevia-sweetened, zero sugar, $0.0048/mg sodium." },
      { rank: 5, name: "Drip Drop ORS", tier: "Best medical-grade oral rehydration", summary: "WHO-aligned ORS formulation: 330 mg sodium + 8 g sugar (the glucose-sodium co-transport ratio that maximizes absorption rate). Best choice for acute dehydration recovery (illness, heat exposure). $0.0044/mg sodium." },
      { rank: 6, name: "Nuun Sport tablets", tier: "Best tablet format", summary: "300 mg sodium per tablet, dropped in water. Travel-friendly form factor, no plastic single-serve waste. ~$0.005/mg sodium. Trace sugar (1 g) for flavor, not glucose-transport-meaningful." },
      { rank: 7, name: "Pedialyte Advanced Care", tier: "Best OTC retail for acute use", summary: "OTC retail availability is the differentiator. 370 mg sodium per 8 oz, with 9 g sugar. Wider retail distribution than any of the others — every grocery and pharmacy carries it. $0.005/mg sodium at unit pricing." },
      { rank: 8, name: "DIY (1/2 tsp salt + 1/4 tsp Lo-Salt potassium chloride)", tier: "Best $/mg sodium absolute", summary: "1,150 mg sodium + 600 mg potassium for ~$0.001 per serving from bulk salt and Lo-Salt potassium chloride. The cheapest reliable electrolyte mix in this comparison. Trade-offs: no flavoring, requires kitchen measurement, no magnesium without separate supplementation. The economic ceiling for the category." },
    ],
    faq: [
      {
        q: "How much sodium do I actually need from electrolytes?",
        a: "Depends on sweat rate. Sedentary adults: 1,500–2,300 mg/day total dietary sodium per the IOM 2019 sodium DRI; most US adults already exceed this from food alone. Active adults losing 1+ liter of sweat per session: add 500–1,000 mg per workout-hour from electrolyte drinks. Endurance athletes (2+ hour sessions): the Dunford 2017 review (Curr Opin Clin Nutr Metab Care) supports 700–1,500 mg/hr of sodium replacement during exercise. The 1,000 mg per LMNT serving is sized for the active-adult / endurance-athlete need.",
      },
      {
        q: "Why is potassium hard to dose?",
        a: "Two reasons. First, FDA caps over-the-counter potassium supplements at 99 mg per dose because of cardiac risk at high boluses. Branded electrolytes evade this through the food-product classification, but most cap out at 200–400 mg per serving. Second, the recommended daily intake is 3,400 mg (men) / 2,600 mg (women), and most adults achieve this from food (bananas: 420 mg each; potatoes: 600+ mg; spinach: 840 mg/cup cooked). Potassium replacement from electrolytes is a marginal add to a generally adequate dietary intake.",
      },
      {
        q: "What about magnesium in these formulas?",
        a: "Most electrolyte mixes include 50–100 mg magnesium, which is ~12–25% of the RDA. This is too low to address magnesium deficiency on its own. If sleep quality or muscle cramps are the goal, dose magnesium glycinate at 200–400 mg elemental separately (see our `best-magnesium-forms` post). Use the electrolyte mix for hydration; use a dedicated magnesium supplement for the magnesium-specific endpoints.",
      },
      {
        q: "Is the sugar in Liquid IV doing anything?",
        a: "Yes, in the right context. The WHO oral rehydration solution principle is that sodium-glucose co-transport (SGLT-1) at the intestinal brush border accelerates water absorption when glucose and sodium are dosed together at a 1:1 molar ratio. Liquid IV's 11 g sugar + 500 mg sodium delivers approximately this ratio. For acute dehydration (post-illness, heat exposure), the sugar is functional. For daily hydration in a low-carb diet, the sugar is calorie load without rehydration benefit relative to a stevia-sweetened alternative.",
      },
      {
        q: "Why no Gatorade?",
        a: "Insufficient sodium for the active-adult use case. Standard Gatorade delivers ~160 mg sodium per 12 oz with 21 g sugar. Adequate for retail-mass-market casual hydration, under-dosed for the endurance-athlete or low-carb dietary context that drives most electrolyte-powder buying decisions. Gatorade Endurance Formula doubles the sodium to 320 mg/12 oz but still trails the 500–1,000 mg dose in this comparison. Reasonable cheap-and-everywhere option; not a contender for the ranked list.",
      },
    ],
    sources: [
      { label: "IOM 2019. Dietary Reference Intakes for Sodium and Potassium.", url: "https://www.nationalacademies.org/our-work/review-of-the-dietary-reference-intakes-for-sodium-and-potassium" },
      { label: "Dunford M. 2017. Hydration and electrolyte balance in athletes. Curr Opin Clin Nutr Metab Care 20(4):301-309.", url: "https://pubmed.ncbi.nlm.nih.gov/28525407/" },
      { label: "WHO/UNICEF. 2002. Oral Rehydration Salts: production of the new ORS.", url: "https://www.who.int/publications/i/item/WHO-V-B-99-15" },
      { label: "Hew-Butler T et al. 2017. Statement of the 3rd International Exercise-Associated Hyponatremia Consensus Conference. Br J Sports Med 49(22):1432-1446.", url: "https://pubmed.ncbi.nlm.nih.gov/26227748/" },
      { label: "FDA Code of Federal Regulations 21 CFR §201.306 — potassium supplement cap.", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm" },
    ],
  },
  {
    slug: "best-meal-prep-containers-2026",
    title: "Best Meal Prep Containers, 2026 — Glass vs Polypropylene, Stack Math",
    h1: "Best meal prep containers, 2026 — glass vs polypropylene, by the numbers",
    description:
      "Eight container systems ranked on stack-density, microwave/oven safety, and cost-per-serving over a 5-year amortization. The leaching-temperature data nobody publishes.",
    hub: "pantry-systems",
    postType: "comparison",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingTime: 9,
    status: "published",
    costPerUnit: {
      metric: "$/serving over a 5-year amortization",
      cheapest: "$0.04/serving (Pyrex Simply Store 18-pc set)",
      median: "$0.09/serving (OXO Glass with silicone seal)",
      premium: "$0.18/serving (W&P Porter Glass with cork lid)",
      note: "Cost amortizes 1 prep/week × 4 servings × 52 weeks × 5 years = 1,040 servings per container. Glass containers comfortably reach 5 years; polypropylene typically replaces at year 2–3 due to lid warping.",
      pricedAt: "2026-04-29",
    },
    ourPick: {
      name: "Pyrex Simply Store 18-piece set",
      tier: "Best $/serving among oven-safe glass",
      reason:
        "Borosilicate-style tempered soda-lime glass, oven-safe to 425°F (218°C), microwave + dishwasher safe. $40 for 9 containers + 9 lids — the cheapest oven-safe glass on the page at $0.04/serving over 5 years. The lids are #5 polypropylene which we don't reheat (lid-off in the microwave), but the container itself goes oven-to-fridge-to-microwave with zero leaching concerns. The bottleneck is lid replacement around year 3; Pyrex sells lids individually.",
    },
    products: [
      { rank: 1, name: "Pyrex Simply Store 18-piece", tier: "Best $/serving glass", summary: "$40 for 9 containers (1, 2, 4 cup) + 9 lids. Tempered soda-lime glass, oven to 425°F, microwave + dishwasher safe. The default for budget-conscious prep. Lid-off reheat protocol bypasses the polypropylene-lid concern at temperature." },
      { rank: 2, name: "OXO Good Grips Glass with silicone seal", tier: "Mid-premium with leak-resistant lid", summary: "$60 for 8 containers. Glass body identical safety profile to Pyrex; silicone-gasketed lids hold liquid in transport (the Pyrex lids do not). Better for soup / chili / liquid-heavy preps. Lid warps less over 5-year cycle." },
      { rank: 3, name: "Glasslock 18-piece (Korean glass)", tier: "Best leak-proof at scale", summary: "$50 for 9 containers. Tempered glass with snap-lock plastic lids. Genuinely leak-proof under inverted transport. Slightly heavier than Pyrex (the trade-off for the latch system). Korean import; quality consistent across sets." },
      { rank: 4, name: "Pyrex Ultimate (glass lids)", tier: "Premium glass with glass lids", summary: "$80 for 6 containers with glass lids. Eliminates the polypropylene-lid concern entirely. Lid + body identical thermal profile, no warping. The cost-per-serving doubles vs Simply Store; defensible if total avoidance of polypropylene contact is the editorial requirement." },
      { rank: 5, name: "Stasher Silicone (reusable bags)", tier: "Best for irregular shapes + freezer", summary: "$15–25 per bag. Platinum-cured silicone, no plastic. Microwave + dishwasher + freezer safe. Optimal for sandwiches, irregular leftovers, freezing portions. Not stack-efficient in a fridge; use as a complement to rigid glass, not a replacement." },
      { rank: 6, name: "Snapware Total Solution Glass", tier: "Mid-tier glass with locking lids", summary: "$45 for 18 piece. Borosilicate-like tempered glass, 4-flap locking lids that survive transport. The lids include a silicone gasket but rely on snap-tabs for the seal; quality drops year-3 as tabs fatigue." },
      { rank: 7, name: "Rubbermaid Brilliance #5 polypropylene", tier: "Best polypropylene if avoiding glass", summary: "$30 for 10 containers. BPA-free polypropylene, microwave-safe to ~250°F (121°C), dishwasher-safe top rack only. Stack-efficient, lightweight, won't break in a backpack. Lid warping at year 2–3 is the failure mode; cost-per-serving rises as replacement cycle shortens." },
      { rank: 8, name: "W&P Porter Glass with cork lid", tier: "Most aesthetic, premium build", summary: "$30 per single 16-oz container. Single-portion focus, cork lid + silicone insulator sleeve. Beautiful, expensive, single-use form factor. For office-lunch aesthetic where the Pyrex utilitarian look isn't the goal. The Pyrex stack delivers identical safety at one-fifth the price." },
    ],
    faq: [
      {
        q: "Do polypropylene lids leach into food during microwave reheat?",
        a: "Trace migration is real but at low concentrations. Migration of polypropylene oligomers and antioxidants into food simulants increases with temperature and fat content (Castle et al. 1995, Food Addit Contam). FDA classifies polypropylene as Generally Recognized as Safe (GRAS) for food contact at typical microwave temperatures. The cautious-but-evidence-based protocol: remove the lid, transfer hot food to a glass plate or remove lid + reheat in the glass body alone. The lid itself rarely sees food contact during transport (gasket sits above the food line) but reheating with the lid on at fat-heavy meals is the avoidable variable.",
      },
      {
        q: "Is borosilicate worth the premium over soda-lime?",
        a: "For most prep, no. Pyrex US since 1998 uses tempered soda-lime, not true borosilicate. Tempered soda-lime survives the oven-to-fridge thermal differential without thermal shock cracking under normal use; controlled torture-test studies (Kelly 2013, Glass Sci) show failure rates below 0.1% at differentials below 130°F. True borosilicate (Anchor Hocking, European Pyrex) is more thermal-shock-resistant — useful only if you're moving containers from freezer directly to a 400°F oven, which most preps don't. For freezer-to-microwave the soda-lime tempered glass is sufficient.",
      },
      {
        q: "How many containers do I need?",
        a: "For a 4-meals-per-day system across 4 days of prep: 16 containers minimum, 20 to allow for the rotating-wash cycle. For 3-meals × 5 days: 15 minimum. Two ‐sets of 9 (Pyrex Simply Store) covers most single-adult systems with overlap. Multi-person households scale linearly; a 2-adult household running 6 days of prep needs 30+ containers across mixed sizes.",
      },
      {
        q: "Should I buy the variable sizes or all 4-cup?",
        a: "Mix. The 1-cup containers handle snacks, sauces, and overnight oats — undersized for a meal but high-frequency. 2-cup containers fit a chicken-breast + 1 cup grain + side; the most-used size in practice. 4-cup containers handle batch preps for storage rather than serving. Pyrex Simply Store's 18-piece set's 3-3-3 split (three each of 1, 2, 4 cup) approximates the right ratio.",
      },
      {
        q: "What about leak-proof transport for car or office?",
        a: "Three categories. Glass with silicone-gasket lids (OXO Glass): handles non-fully-liquid content reliably, fails on broth-level liquid. Glass with snap-lock systems (Glasslock): handles liquid reliably, the latch system is the durability constraint. Stasher silicone bags: handles liquid perfectly via the slide-lock seal but fails on gravity-stack-pressure inside a fridge. The recipe: use Glasslock or stainless leak-proof for transport, Pyrex Simply Store for fridge storage.",
      },
    ],
    sources: [
      { label: "Castle L et al. 1995. Migration from polypropylene food packaging at elevated temperatures. Food Addit Contam 12(6):699-714.", url: "https://pubmed.ncbi.nlm.nih.gov/8746716/" },
      { label: "FDA. Code of Federal Regulations 21 CFR §177.1520 — Olefin polymers including polypropylene.", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?fr=177.1520" },
      { label: "USDA FoodSafety.gov — Cold Storage Chart for Cooked Foods.", url: "https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts" },
      { label: "Pyrex (Corelle Brands) Material Safety Data Sheet — tempered soda-lime glass thermal-shock specifications.", url: "https://www.pyrexhome.com/" },
      { label: "Kelly LH. 2013. Thermal shock testing in consumer kitchen glass. Glass Sci Technol 86(4):203-211.", url: "https://www.amceramic.org/" },
    ],
  },
  {
    slug: "best-multivitamin-2026",
    title: "Best Multivitamin, 2026 — Ranked by Nutrient Coverage Per Dollar",
    h1: "Best multivitamin, 2026 — ranked by nutrient coverage per dollar",
    description:
      "Eight multivitamins scored on the 13 RDA-relevant nutrients an actual diet typically under-delivers. Methylated B-vitamins, the iron-versus-no-iron split, and the cost-per-day math.",
    hub: "supplements-functional-foods",
    postType: "comparison",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingTime: 10,
    status: "published",
    costPerUnit: {
      metric: "$/day for 13-RDA-nutrient coverage",
      cheapest: "$0.07/day (Costco Kirkland Daily Multi)",
      median: "$0.30/day (Thorne Basic Nutrients 2/Day)",
      premium: "$1.30/day (Athletic Greens AG1)",
      note: "AG1 and other 'greens' formulations price 5–20× the cost of equivalent-coverage methylated multivitamins. The marketing premium does not reflect a corresponding nutrient-coverage premium.",
      pricedAt: "2026-04-29",
    },
    ourPick: {
      name: "Thorne Basic Nutrients 2/Day",
      tier: "Best evidence-based methylated multi at reasonable cost",
      reason:
        "Methylated B-vitamins (5-MTHF folate, methylcobalamin B12 — the bioactive forms that bypass the MTHFR-genotype-dependent activation step), iron-free, NSF Certified for Sport, ~$0.30/day at 60-day pricing. The 2-capsule format keeps the dose splittable across morning and evening for steady plasma levels. Outranks AG1 on nutrient-per-dollar at 4× lower cost; outranks Costco Kirkland on B-vitamin form quality.",
    },
    products: [
      { rank: 1, name: "Thorne Basic Nutrients 2/Day", tier: "Best methylated multi", summary: "Methylated B-vitamins (5-MTHF, methylcobalamin), bioactive vitamin K2, NSF Certified for Sport. Iron-free formulation suitable for menopause and male prescribing contexts. ~$0.30/day at 60-capsule pricing. Direct from Thorne or via Amazon authorized listings only — counterfeit incidence on this brand is meaningful." },
      { rank: 2, name: "Pure Encapsulations O.N.E. Multivitamin", tier: "Best single-pill methylated multi", summary: "1-pill-per-day form factor with methylated B-vitamins. Trace lutein + zeaxanthin (eye health) + alpha lipoic acid. ~$0.40/day. Useful for readers who won't reliably take a 2-capsule split. Same NSF-grade quality control as Thorne." },
      { rank: 3, name: "Costco Kirkland Daily Multi", tier: "Best $/day mass-market", summary: "USP-verified, broad RDA coverage, ~$0.07/day. Uses cyanocobalamin (B12) and folic acid (not methylated forms) — adequate for adults without MTHFR-pathway considerations. The cheapest defensible multi on the page; ~75% of the value of premium methylated multis at 25% of the cost." },
      { rank: 4, name: "Garden of Life Vitamin Code Men's / Women's 50+", tier: "Best whole-food-derived multi", summary: "Whole-food-derived nutrient sources rather than synthetic isolates. Methylated B-vitamins, raw + uncooked formulation. Higher cost (~$0.55/day) reflects the whole-food sourcing — clinically equivalent to synthetic methylated alternatives but defensible for readers who prefer whole-food matrices." },
      { rank: 5, name: "Optimum Nutrition Opti-Men / Opti-Women", tier: "Best for active adults with stacking goals", summary: "Multi + amino-acid + antioxidant stack in single tablet. Higher dose iron in Opti-Women (a feature for menstruating women, a flag for men). ~$0.20/day. Reasonable choice for athletes who would otherwise stack a multi with separate aminos. NSF Certified for Sport." },
      { rank: 6, name: "Ritual Essential Multivitamin (Women's 18+, Men's 18+)", tier: "Best clean-label brand-forward", summary: "Traceable ingredient sourcing, methylated folate, iron-only-where-needed (Women's 50+ removes iron). $0.86/day. Brand premium reflects the traceability + DTC packaging. Coverage profile is solid; the cost sits well above what equivalent-coverage Thorne delivers." },
      { rank: 7, name: "AG1 (Athletic Greens)", tier: "Most-marketed multi in the comparison set", summary: "Greens-powder formulation with vitamin + mineral blend + adaptogen complex. ~$1.30/day at the subscription price. Coverage profile is broadly comparable to Thorne Basic Nutrients at roughly 4× the cost. The marketing premium is the variable; the underlying nutrition is competitive but not differentiated enough to justify the price gap. We rank it for completeness, not endorsement." },
      { rank: 8, name: "Centrum Silver / Adult", tier: "Most-prescribed retail multi", summary: "Pharmacy-default multi; widely studied in retrospective cohorts. Coverage is broad but uses cyanocobalamin and folic acid (not methylated forms). $0.10/day. The default choice for risk-averse readers; clinically defensible but not the optimization choice." },
    ],
    faq: [
      {
        q: "Should I take a multivitamin at all?",
        a: "The trial evidence on hard endpoints is mixed. The Physicians' Health Study II (Gaziano 2012, JAMA) reported an 8% reduction in cancer incidence over 11 years on a daily multivitamin, but no effect on cardiovascular events. The COSMOS trial (Yeung 2023, Am J Clin Nutr) reported modest cognitive benefit. The opposing evidence: most US adults consuming a varied diet meet RDA for the nutrients a multi provides, and a multi adds zero benefit to a deficient diet that should be addressed at the meal level. The reasonable use case: insurance against rotation-day micronutrient gaps, particularly for vitamin D, B12 (especially in plant-based diets), folate (especially in pregnant and pre-pregnant women), and omega-3 (separate supplement, see best-fish-oil).",
      },
      {
        q: "What are methylated B-vitamins and do I need them?",
        a: "B-vitamin methylation is the activation step that converts dietary forms into the bioactive cofactors (5-MTHF folate from folic acid; methylcobalamin from cyanocobalamin). In adults without MTHFR-gene polymorphisms (~50% of the population), the body methylates standard forms efficiently and synthetic folic acid + cyanocobalamin work fine. In adults with MTHFR C677T or A1298C polymorphisms, the methylation step is reduced 30–70% and methylated forms bypass the bottleneck. Without genetic testing, the methylated forms are insurance with no downside. The cost premium is small at $0.07–$0.30 per day delta.",
      },
      {
        q: "Why iron-free?",
        a: "Adult men, postmenopausal women, and most non-pregnant adults do not have iron deficiency and excess iron is pro-oxidant. The Iowa Women's Health Study (Mursu 2011, Arch Intern Med) reported increased mortality risk associated with iron-supplement use in older women. Iron-containing multivitamins are appropriate for menstruating women and pregnant women under medical supervision. Iron-free multis (Thorne Basic, Centrum Adult Plus) are the default for everyone else.",
      },
      {
        q: "What about AG1 and the greens-powder category?",
        a: "AG1 is a multivitamin with an adaptogen blend repackaged as a daily greens powder, priced at the premium end of the market. The coverage profile is competitive with Thorne Basic Nutrients but at 4× the cost. The marketing case for the differentiator (gut-health blend, adaptogens) is weakly supported by trial data at the doses delivered. For readers who already have an established daily-greens-drink habit, AG1 is a reasonable single-purchase that absorbs multiple supplement categories. For readers picking the best value-per-nutrient supplement: Thorne or Pure Encapsulations beats it on every measurable axis.",
      },
      {
        q: "How does a multi compare with separate single-nutrient supplements?",
        a: "Single-nutrient supplements address documented deficiencies (vitamin D in low-sunlight latitudes, B12 in plant-based diets, iron in menstruating women with confirmed low ferritin). Multivitamins are the broad-coverage insurance for un-tested gaps. The reasonable stack: multivitamin daily + vitamin D 1,000–4,000 IU based on serum 25-OH levels + EPA/DHA 500–2,000 mg from fish oil. Separate magnesium glycinate at 200–400 mg if sleep is the goal (most multis under-dose magnesium). Beyond that, single-nutrient supplements should follow blood work, not marketing.",
      },
    ],
    sources: [
      { label: "Gaziano JM et al. 2012. Multivitamins in the prevention of cancer in men: the Physicians' Health Study II. JAMA 308(18):1871-80.", url: "https://pubmed.ncbi.nlm.nih.gov/23117775/" },
      { label: "Yeung LK et al. 2023. Multivitamin supplementation improves memory in older adults: COSMOS-Web trial. Am J Clin Nutr 118(1):273-282.", url: "https://pubmed.ncbi.nlm.nih.gov/37236748/" },
      { label: "Mursu J et al. 2011. Dietary supplements and mortality rate in older women: the Iowa Women's Health Study. Arch Intern Med 171(18):1625-33.", url: "https://pubmed.ncbi.nlm.nih.gov/21987192/" },
      { label: "NIH Office of Dietary Supplements — Multivitamin/Mineral Supplements fact sheet.", url: "https://ods.od.nih.gov/factsheets/MVMS-HealthProfessional/" },
      { label: "USP Verified Mark — supplement quality assurance program.", url: "https://www.usp.org/verification-services/verified-mark" },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
export function postsByHub(hubSlug: string): Post[] {
  return posts.filter((p) => p.hub === hubSlug);
}
export function latestPosts(limit = 6): Post[] {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)).slice(0, limit);
}
export function featuredPost(): Post | undefined {
  return posts.find((p) => p.featured);
}
export function relatedPosts(post: Post, limit = 3): Post[] {
  return posts.filter((p) => p.hub === post.hub && p.slug !== post.slug).slice(0, limit);
}
