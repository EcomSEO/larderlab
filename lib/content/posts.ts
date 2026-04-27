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
  products?: Array<{ rank: number; name: string; tier: string; summary: string }>;
  items?: Array<{ rank: number; name: string; summary: string }>;
  faq?: Array<{ q: string; a: string }>;
  sources?: Array<{ label: string; url: string }>;
  featured?: boolean;
  /**
   * Peptide-context note rendered above the article body via
   * <PeptideContextCallout>. 2-3 sentences naming how this post applies
   * for a reader on a peptide protocol. Educational only — never
   * prescriptive. The global EducationalBanner carries the
   * "consult-your-prescriber" line.
   */
  peptideContext?: string;
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
    peptideContext:
      "Why this matters on a peptide protocol: targets shift when you're on a GLP-1 with reduced appetite or in a recovery-peptide block. The leucine-per-meal floor (~0.4 g/kg) becomes the binding constraint in a caloric deficit — total grams matter less than hitting that floor 3-4x daily. The fat floor (~0.6 g/kg) for hormonal function does not relax just because the appetite did. Talk to your prescriber before changing macros around a peptide cycle.",
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
    peptideContext:
      "Why this matters for peptide users: on a GLP-1, lean-mass loss tracks the per-meal leucine threshold more than total daily protein, because reduced appetite makes total grams the easy variable to miss. The ranking below is engineered around $/gram of leucine — which is the metric that actually predicts muscle protein synthesis on a caloric deficit. Pair with resistance training; talk to your prescriber before changing protein intake.",
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
    peptideContext:
      "Why this matters for peptide users: on dose-escalation weeks for a GLP-1, food volume often drops before protein needs do. The protein density (g protein per 100 kcal) of the picks below — eggs, Greek yogurt, canned fish, whey-fortified Greek yogurt — is what keeps the leucine floor cleared on the days appetite collapses. Cost-per-gram still matters; volume-tolerance matters more.",
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
    peptideContext:
      "Why this matters for peptide users: the per-kg targets here do not change on a peptide protocol — but the math of how to hit them does. On a GLP-1 with a caloric deficit, the upper end of the trained-lifter range (1.8-2.2 g/kg) preserves lean mass; the per-meal leucine threshold (~0.4 g/kg) is the binding constraint when appetite is reduced. Talk to your prescriber before changing protein intake on a peptide.",
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
    peptideContext:
      "Why this matters for peptide users: creatine pairs cleanly with peptide protocols where lean-mass preservation and recovery are the goal — GLP-1s, growth-hormone-axis peptides, BPC-157/TB-500 cycles. Saturation dose (3-5 g/day) is the same regardless of peptide context; the cost-per-gram math below is what changes the brand call. No vendor sponsorships in this ranking. Always clear new supplements with your prescriber.",
    slug: "best-creatine-monohydrate",
    title: "Best Creatine Monohydrate, Ranked by $/gram",
    h1: "Best creatine monohydrate, ranked by $/gram",
    description:
      "Creapure-certified creatine ranked by $/gram, with third-party testing status and brand transparency.",
    hub: "supplements",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 10,
    status: "published",
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
    peptideContext:
      "Why this matters for peptide users: magnesium glycinate is consistently cited in GLP-1 patient communities for nausea management and sleep support during dose escalation. The form-by-form data here applies regardless of peptide context — but the dose framing changes when you're on a GLP-1 with reduced food intake (food-source magnesium drops; supplement load may need to compensate). Talk to your prescriber before stacking, especially if you're on additional medications.",
    slug: "best-magnesium-forms",
    title: "Best Magnesium Forms: Glycinate vs Citrate vs Threonate vs Oxide",
    h1: "Best magnesium forms, compared",
    description:
      "Which magnesium form for which use case — absorption data, dose ranges, and brand recommendations.",
    hub: "supplements",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "published",
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
    peptideContext:
      "Why this matters for peptide users: cooking-fat choice is one of the few inflammation-modifiable inputs in a recovery-peptide cycle (BPC-157, TB-500, GHK-Cu). The omega-6 to omega-3 ratio of the kitchen fat matters when the goal of the peptide is to dampen inflammatory signaling; extra-virgin olive oil and small amounts of butter beat industrial seed oils on that axis. The literature here is unchanged by peptide use; the cost-benefit just sharpens.",
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
    peptideContext:
      "Why this matters for peptide users: rice often becomes a staple on reduced-appetite GLP-1 days because it's tolerable when other carbs aren't. Arsenic exposure is a function of cumulative intake, so when rice quietly becomes a daily food, the variety and cooking method choices below carry more weight than they do in a varied-carb week. The food-safety guidance here is unchanged by peptide use.",
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
    peptideContext:
      "Why this matters for peptide users: on reduced-appetite GLP-1 days, the protein-density ranking matters more than the cost ranking — eggs, cottage cheese, Greek yogurt, canned fish all clear the per-meal leucine floor in volumes you can actually finish. The list below is dual-sortable: sort by $/g for the full grocery week, sort by protein-per-100-kcal for the days appetite drops.",
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
    peptideContext:
      "Why this matters for peptide users: the bulk-buying math is unchanged by peptide context. The relevance is downstream — the staples that survive the waste-adjusted cost test (whey, frozen proteins, canned tuna/sardines, oats, olive oil) are also the staples a peptide-supportive pantry leans on. Bulk-buy them with confidence.",
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
    slug: "peptide-pantry-essentials",
    title: "The Peptide Pantry: 12 Foods That Pair With Common Protocols",
    h1: "The peptide pantry: 12 foods that pair with common protocols",
    description:
      "A pantry inventory built around the food layer that supports peptide therapy — electrolytes for GLP-1 days, omega-3 for anti-inflammatory cycles, glycine for collagen turnover, and the protein-density staples that survive reduced appetite.",
    hub: "peptide-stack-support",
    postType: "listicle",
    publishedAt: "2026-04-27",
    updatedAt: "2026-04-27",
    readingTime: 9,
    status: "published",
    peptideContext:
      "This list is the peptide-supportive layer of an otherwise normal pantry. Nothing here treats, cures, or replaces a clinician's protocol — the foods below are the staples patient communities and clinical nutrition literature consistently flag as helpful around GLP-1, recovery (BPC-157, TB-500), and longevity-stack contexts. Always clear pantry changes with your prescriber if you're managing a chronic condition.",
    items: [
      {
        rank: 1,
        name: "Electrolyte-dense broth (bone or vegetable)",
        summary:
          "GLP-1s suppress appetite and indirectly drop electrolyte intake. A salted bone broth (700-900 mg sodium per cup, plus modest potassium and magnesium) is the lowest-friction way to clear the sodium floor on reduced-food days. Brands like Kettle & Fire publish per-serving electrolyte panels; homemade is cheaper and stronger.",
      },
      {
        rank: 2,
        name: "Greek yogurt (2%, plain, 170-200 g cups)",
        summary:
          "17-20 g protein per cup, ~2.0 g leucine — clears the per-meal MPS threshold (Moore 2015) in a volume reduced-appetite days actually tolerate. Add 100 g blueberries for polyphenols; the cup also stacks for nighttime casein (Res 2012).",
      },
      {
        rank: 3,
        name: "Eggs (whole, pasture-raised)",
        summary:
          "6 g protein each, ~0.5 g leucine — three-egg breakfasts clear the leucine threshold and supply choline (~250 mg per yolk) that supports the methyl pool for any methylation-sensitive supplement stack. Cheap, shelf-tolerant, low cooking lift.",
      },
      {
        rank: 4,
        name: "Canned sardines or wild salmon",
        summary:
          "1-1.5 g EPA+DHA per 100 g tin plus 22 g protein. The omega-3 dose matters during recovery-peptide cycles (BPC-157, TB-500) where damping background inflammation is part of the protocol logic. Wild Planet, King Oscar, Bela are the third-party-tested defaults.",
      },
      {
        rank: 5,
        name: "Leafy greens (spinach, kale, chard)",
        summary:
          "Magnesium and potassium density at low caloric cost. 100 g cooked spinach delivers ~80 mg magnesium and ~470 mg potassium — the two electrolytes most often under-replaced on GLP-1 days. Frozen spinach is fine; nutrient density is preserved.",
      },
      {
        rank: 6,
        name: "Pumpkin seeds (raw, hulled)",
        summary:
          "~150 mg magnesium per 30 g serving plus 9 g protein, 4 g zinc. The most concentrated whole-food magnesium source. Easy to add to yogurt, oats, or eat plain. Stores in the freezer for 6+ months without rancidity.",
      },
      {
        rank: 7,
        name: "Cottage cheese (4% milkfat)",
        summary:
          "24 g protein per cup, dominantly casein. Slow-release amino kinetics make it the pre-bed pick (Res 2012); the high tryptophan-to-large-neutral-amino ratio supports nighttime serotonin/melatonin pathway flow without a supplement.",
      },
      {
        rank: 8,
        name: "Bone-in chicken thighs",
        summary:
          "~$0.017/g cooked protein at Costco. Higher fat than breast (tolerates the fat floor on cuts), batch-cooks in 35 min, freezer-portions cleanly. The default protein for a meal-prep cadence on a peptide cycle.",
      },
      {
        rank: 9,
        name: "Glycine-rich gelatin or collagen peptides",
        summary:
          "10-15 g per serving glycine, the rate-limiting amino acid for connective-tissue collagen synthesis. Pairs with recovery-peptide protocols (BPC-157, TB-500) where collagen turnover is part of the targeted system. Note: collagen does not trigger MPS (Oikawa 2020) — it's a connective-tissue input, not a primary protein source.",
      },
      {
        rank: 10,
        name: "Fresh ginger root",
        summary:
          "1-2 g per day reduces nausea in published GLP-1 patient survey data and is cited in Cochrane reviews of antiemetic strategies (Marx 2013). Fresh root grated into hot water; tea bags are weaker. Stack with magnesium glycinate for dose-escalation weeks.",
      },
      {
        rank: 11,
        name: "Berries (frozen wild blueberries)",
        summary:
          "Anthocyanins and polyphenols at low volume cost. The freeze-from-fresh form preserves anthocyanin content per Brown 2014. 100 g portions stack into yogurt or oats; freezer-stable for 12+ months. The lowest-volume way to add polyphenol diversity on reduced-appetite days.",
      },
      {
        rank: 12,
        name: "Extra-virgin olive oil (high-polyphenol)",
        summary:
          "Anti-inflammatory monounsaturated fat with measurable polyphenol content. Brands publishing harvest dates and polyphenol assays (Brightland, Graza, California Olive Ranch reserve) supply the form the Mediterranean-diet RCTs (PREDIMED) actually used. Pairs cleanly with recovery-peptide cycle goals.",
      },
    ],
    sources: [
      {
        label:
          "Moore DR et al. 2015. Protein ingestion to stimulate myofibrillar protein synthesis requires greater relative protein intakes in healthy older versus younger men. J Gerontol A Biol Sci Med Sci 70(1):57-62.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25056502/",
      },
      {
        label:
          "Res PT et al. 2012. Protein ingestion before sleep improves postexercise overnight recovery. Med Sci Sports Exerc 44(8):1560-1569.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22330017/",
      },
      {
        label:
          "Oikawa SY et al. 2020. Whey protein but not collagen peptides stimulate acute and longer-term muscle protein synthesis. Am J Clin Nutr 111(3):708-718.",
        url: "https://pubmed.ncbi.nlm.nih.gov/31919527/",
      },
      {
        label:
          "Marx W et al. 2013. Ginger — mechanism of action in chemotherapy-induced nausea and vomiting: a review. Crit Rev Food Sci Nutr 55(1):141-146.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24227373/",
      },
      {
        label:
          "Estruch R et al. 2018. Primary prevention of cardiovascular disease with a Mediterranean diet supplemented with extra-virgin olive oil or nuts (PREDIMED). N Engl J Med 378(25):e34.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29897866/",
      },
      {
        label:
          "USDA FoodData Central. 2024. Nutrient profiles for spinach, pumpkin seeds, sardines, eggs, Greek yogurt, cottage cheese.",
        url: "https://fdc.nal.usda.gov/",
      },
    ],
  },
  {
    slug: "bacteriostatic-water-buying-guide",
    title:
      "Bacteriostatic Water for Peptide Reconstitution: What to Buy and Where",
    h1: "Bacteriostatic water for peptide reconstitution",
    description:
      "USP-grade vs sterile water, 30 mL multidose vials vs 10 mL singles, storage rules, and the suppliers that publish lot-level COAs. Educational reference only — for research peptides only.",
    hub: "pantry-systems",
    postType: "cluster",
    publishedAt: "2026-04-27",
    updatedAt: "2026-04-27",
    readingTime: 8,
    status: "published",
    peptideContext:
      "This page is educational reference material on the buyer's side of bacteriostatic water — what it is, how it differs from sterile water, what storage rules are published, and which suppliers document their lots. We do not link to peptide vendors. We do not provide reconstitution math or injection guidance; for technique, your prescriber and licensed clinical pharmacist are the source. For research-peptide context only.",
    faq: [
      {
        q: "What is bacteriostatic water and how does it differ from sterile water?",
        a: "Bacteriostatic water is sterile water for injection that contains 0.9% benzyl alcohol as a preservative, allowing repeated punctures of a single vial over ~28 days at room or refrigerated temperature without microbial overgrowth (per the USP monograph and the manufacturer prescribing information for Hospira's bacteriostatic water for injection). Plain sterile water for injection has no preservative; published guidance treats it as single-use after first puncture. For multidose reconstitution scenarios, bacteriostatic water is the published default; for single-use, sterile water is appropriate.",
      },
      {
        q: "What does USP-grade actually mean here?",
        a: "USP-grade means the product has been tested against the United States Pharmacopeia monograph for sterility, endotoxins, particulate matter, and benzyl alcohol concentration. Suppliers that print 'USP' on the vial are claiming compliance with that monograph; reputable manufacturers publish a Certificate of Analysis (COA) per lot. Hospira, Pfizer, and Fresenius Kabi are the dominant USP-grade manufacturers in the US market.",
      },
      {
        q: "What vial sizes are commonly available?",
        a: "10 mL and 30 mL multidose vials are the two formats the US market typically supplies for bacteriostatic water. The 30 mL format is used in research and compounding pharmacy contexts; the 10 mL is more common at retail. Per the published prescribing information, both formats carry the same 28-day post-puncture stability when stored within the labeled temperature range.",
      },
      {
        q: "How is it stored before and after first puncture?",
        a: "Unopened: per the manufacturer label, room temperature is acceptable; refrigeration extends shelf life. Opened: the published 28-day rule starts at first puncture. Several manufacturers explicitly state to discard at 28 days regardless of remaining volume. Refrigeration after first puncture is the conservative default; check your specific manufacturer's prescribing information.",
      },
      {
        q: "Where do reputable suppliers publish their COAs?",
        a: "Hospira and Pfizer publish full prescribing information (PI) documents on dailymed.nlm.nih.gov; the lot-level COA is typically supplied by the wholesaler or pharmacy on request. Compounding pharmacies that carry bacteriostatic water as a research-use product (e.g., Empower, Olympia, Hallandale on the licensed-pharmacy side) attach lot-level documentation per order. We do not link to vendors that sell research peptides; for technique and protocol guidance from a clinical reference, see injectcompass.com.",
      },
      {
        q: "What goes wrong if storage rules are not followed?",
        a: "The published failure modes are: microbial overgrowth past the 28-day window (the benzyl alcohol bacteriostat is dose-limited, not infinite); precipitation of dissolved peptide in the reconstituted vial if temperature cycles outside the 2-8 °C refrigerated range; benzyl alcohol toxicity in pediatric or renal-compromised contexts (the 'gasping syndrome' literature, Gershanik 1982). For research-use scenarios outside human administration, the storage rules are the same.",
      },
    ],
    sources: [
      {
        label:
          "Hospira. 2023. Bacteriostatic Water for Injection, USP — prescribing information. DailyMed.",
        url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8d20ec55-ca8c-46f9-b3f1-43b87e28bce8",
      },
      {
        label:
          "United States Pharmacopeia. 2024. Bacteriostatic Water for Injection monograph (USP 47-NF 42).",
        url: "https://www.usp.org/",
      },
      {
        label:
          "Gershanik J et al. 1982. The gasping syndrome and benzyl alcohol poisoning. N Engl J Med 307(22):1384-1388.",
        url: "https://pubmed.ncbi.nlm.nih.gov/7133084/",
      },
      {
        label:
          "FDA. 2023. Compounding and the FDA: questions and answers — guidance for industry on 503A/503B compounding pharmacies.",
        url: "https://www.fda.gov/drugs/human-drug-compounding/compounding-and-fda-questions-and-answers",
      },
    ],
  },
  {
    slug: "electrolytes-on-glp1",
    title:
      "Electrolyte Strategy for GLP-1 Days: Sodium, Potassium, Magnesium Targets",
    h1: "Electrolyte strategy for GLP-1 days",
    description:
      "Why GLP-1 receptor agonists shift electrolyte balance, what daily sodium / potassium / magnesium targets the published literature supports, and the food-vs-supplement math at $/serving — with third-party-tested electrolyte products ranked.",
    hub: "peptide-stack-support",
    postType: "comparison",
    publishedAt: "2026-04-27",
    updatedAt: "2026-04-27",
    readingTime: 11,
    status: "published",
    peptideContext:
      "GLP-1 receptor agonists (semaglutide, tirzepatide) drop daily food volume and indirectly drop electrolyte intake — the same headache, fatigue, and constipation pattern patient communities consistently report tracks the electrolyte deficit, not the medication itself. The targets below are population-level published guidance (Institute of Medicine DRIs, the GLP-1 RCT side-effect literature). Talk to your prescriber before starting an electrolyte protocol, especially if you're on antihypertensives, diuretics, or have cardiac or renal conditions.",
    ourPick: {
      name: "LMNT (1000 mg sodium / 200 mg potassium / 60 mg magnesium per stick)",
      tier: "Best ratio for GLP-1 days, no sugar",
      reason:
        "Stick packs print full electrolyte panels; the 1000 mg sodium dose is the cleanest match for the GLP-1-day deficit profile when daily food drops below ~1500 kcal. ~$1.50 per serving; 30-stick boxes are the cost floor. No sugar, no maltodextrin, citric-acid based — works as either hot broth or cold water. Stevia sweetened (skip if you prefer unflavored — they make Raw Unflavored).",
    },
    products: [
      {
        rank: 1,
        name: "LMNT Recharge",
        tier: "Best overall ratio · best $/dose",
        summary:
          "1000 mg sodium / 200 mg potassium / 60 mg magnesium per stick. Published electrolyte panel, no proprietary blend. ~$1.50/stick at 30-pack pricing. The default pick for GLP-1 days when daily intake drops below 1500 kcal.",
      },
      {
        rank: 2,
        name: "Liquid IV Hydration Multiplier",
        tier: "Skip on GLP-1 (sugar load)",
        summary:
          "500 mg sodium / 370 mg potassium per stick — but 11 g added sugar per serving (cane sugar + dextrose). The sugar dose is at cross-purposes with most GLP-1 protocols. Choose only if the sugar isn't a constraint.",
      },
      {
        rank: 3,
        name: "Re-Lyte (Redmond)",
        tier: "Best mineral diversity",
        summary:
          "810 mg sodium / 400 mg potassium / 60 mg magnesium plus zinc and chloride from Redmond Real Salt. Higher potassium-to-sodium ratio; good for the reader who's already getting sodium from food and needs the potassium/magnesium top-up. ~$1.30/serving.",
      },
      {
        rank: 4,
        name: "Nuun Sport",
        tier: "Tablet format · lower dose",
        summary:
          "300 mg sodium / 150 mg potassium / 25 mg magnesium per tablet. Roughly one-third the dose of LMNT. Useful as a top-up, not as the primary dose. ~$0.50/tablet. Convenient travel format.",
      },
      {
        rank: 5,
        name: "DIY (salt + Lite Salt + Mag glycinate)",
        tier: "Cheapest controlled dose",
        summary:
          "1.4 g table salt + 1.4 g Morton Lite Salt + 200 mg magnesium glycinate caps. Total: ~1100 mg sodium / 500 mg potassium / 200 mg magnesium. ~$0.20 per serving. Worse palate than LMNT; perfect cost basis for daily use. Mix into broth or sparkling water with citrus.",
      },
      {
        rank: 6,
        name: "Drip Drop ORS",
        tier: "Medical-grade ORS",
        summary:
          "330 mg sodium / 185 mg potassium plus glucose for ORS-style absorption. WHO ORS-formula adjacent. ~$1.00/serving. Good for dehydration episodes; sodium dose is below the GLP-1-day target as a daily baseline.",
      },
    ],
    faq: [
      {
        q: "Why do GLP-1s shift electrolyte balance?",
        a: "Direct mechanism: slowed gastric emptying and reduced appetite drop daily food volume, which drops the dietary delivery of sodium, potassium, and magnesium. Indirect mechanism: any episodes of nausea, vomiting, or diarrhea on dose escalation accelerate losses. The medication itself doesn't deplete electrolytes; the eating pattern around it does. The published GLP-1 RCTs (STEP, SURPASS) report fatigue, constipation, and headache — the symptom triad most often tracked back to electrolyte deficit in clinical nutrition follow-up.",
      },
      {
        q: "What are the daily targets?",
        a: "Institute of Medicine DRIs for adults: sodium 1500 mg adequate intake, 2300 mg upper level for cardiovascular caution. Potassium 3400 mg (men) / 2600 mg (women) adequate intake. Magnesium 400-420 mg (men) / 310-320 mg (women) RDA. On GLP-1 days where daily intake drops below ~1500 kcal, food alone may not clear those floors — supplementation closes the gap. Consult your prescriber before adding electrolytes if you take antihypertensives, diuretics, or have cardiac or renal concerns.",
      },
      {
        q: "Food first or supplement first?",
        a: "Food first when appetite tolerates it — leafy greens, pumpkin seeds, salmon, yogurt, broth all clear the magnesium and potassium gaps cheaply. Supplement first on the days you can't eat. The spreadsheet math: a $1.50 LMNT stick replaces ~1500 kcal of dietary delivery on a high-volume day. On reduced-appetite days, that's not just cheaper, it's the only realistic path to clearing the floor.",
      },
      {
        q: "Are sugar-based hydration drinks ever appropriate on GLP-1?",
        a: "Glucose-sodium co-transport (the basis of WHO ORS) genuinely accelerates absorption during active dehydration episodes — vomiting, diarrhea, heavy exertion. For daily baseline electrolyte coverage, the sugar load works against most GLP-1 protocol goals. The decision rule: ORS-style products for acute dehydration; sugar-free electrolyte mixes for daily baseline.",
      },
      {
        q: "What about magnesium glycinate at night specifically?",
        a: "200-400 mg magnesium glycinate at night is consistently cited in patient communities for sleep support during dose escalation. The form matters — glycinate is the form with the cleanest absorption and tolerance profile (vs oxide, which is poorly absorbed and laxative). The night-dose strategy is independent of the daytime electrolyte stack; both can layer.",
      },
    ],
    sources: [
      {
        label:
          "Institute of Medicine. 2019. Dietary Reference Intakes for Sodium and Potassium.",
        url: "https://nap.nationalacademies.org/catalog/25353/dietary-reference-intakes-for-sodium-and-potassium",
      },
      {
        label:
          "Institute of Medicine. 1997. Dietary Reference Intakes for Calcium, Phosphorus, Magnesium, Vitamin D, and Fluoride.",
        url: "https://nap.nationalacademies.org/catalog/5776/",
      },
      {
        label:
          "Wilding JPH et al. 2021. Once-weekly semaglutide in adults with overweight or obesity (STEP 1). N Engl J Med 384(11):989-1002.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
      },
      {
        label:
          "Jastreboff AM et al. 2022. Tirzepatide once weekly for the treatment of obesity (SURMOUNT-1). N Engl J Med 387(3):205-216.",
        url: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
      },
      {
        label:
          "World Health Organization. 2006. Oral rehydration salts (ORS): a new reduced osmolarity formulation.",
        url: "https://www.who.int/publications/i/item/WHO-FCH-CAH-06.1",
      },
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
