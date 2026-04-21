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
    status: "stub",
    featured: true,
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
    status: "stub",
    ourPick: {
      name: "TODO: Editor's pick",
      tier: "Best $/g leucine",
      reason: "TODO: two-sentence reason from the brief.",
    },
    products: [
      { rank: 1, name: "TODO: Best overall", tier: "Best overall", summary: "TODO" },
      { rank: 2, name: "TODO: Best budget", tier: "Best budget", summary: "TODO" },
      { rank: 3, name: "TODO: Best isolate", tier: "Best isolate", summary: "TODO" },
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
    status: "stub",
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
    status: "stub",
  },
  {
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
    status: "stub",
  },
  {
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
    status: "stub",
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
    status: "stub",
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
    status: "stub",
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
    status: "stub",
    items: [
      { rank: 1, name: "Whey concentrate", summary: "TODO" },
      { rank: 2, name: "Whole chicken", summary: "TODO" },
      { rank: 3, name: "Eggs", summary: "TODO" },
      { rank: 4, name: "Canned tuna or sardines", summary: "TODO" },
      { rank: 5, name: "Chicken thighs bone-in", summary: "TODO" },
      { rank: 6, name: "Greek yogurt bulk", summary: "TODO" },
      { rank: 7, name: "Cottage cheese", summary: "TODO" },
      { rank: 8, name: "Milk", summary: "TODO" },
      { rank: 9, name: "Ground turkey", summary: "TODO" },
      { rank: 10, name: "93/7 ground beef", summary: "TODO" },
      { rank: 11, name: "Beans + rice combo", summary: "TODO" },
      { rank: 12, name: "Pork shoulder", summary: "TODO" },
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
    status: "stub",
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
