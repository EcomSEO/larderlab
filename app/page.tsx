import { Hero } from "@/components/Hero";
import { CategoryTileGrid } from "@/components/CategoryTileGrid";
import { FeaturedRecipeCarousel } from "@/components/FeaturedRecipeCarousel";
import { TableOfContents as MagazineToc } from "@/components/magazine/TableOfContents";
import { EditorsNote } from "@/components/magazine/EditorsNote";
import { PullQuote } from "@/components/magazine/PullQuote";
import { NewsletterInline } from "@/components/NewsletterInline";
import { recipes, getRecipe, featuredRecipeSlug } from "@/lib/content/recipes";
import { useTranslations } from "next-intl";
import Link from "next/link";

const tiles = [
  {
    href: "/recipes",
    eyebrow: "Department",
    title: "Pantry suppers",
    dek: "Recipes a stocked pantry already wants to make.",
    count: 12,
    gradient: ["#E8DCC8", "#A8884E"] as [string, string],
  },
  {
    href: "/recipes",
    eyebrow: "Department",
    title: "Pantry projects",
    dek: "One afternoon, half a year of dinners. Confit, ferment, preserve.",
    count: 7,
    gradient: ["#F0D8B0", "#C4452D"] as [string, string],
  },
  {
    href: "/guides/ingredient-deep-dives",
    eyebrow: "Department",
    title: "Ingredient deep-dives",
    dek: "Olive oil, beans, salt, the literature behind a good shelf.",
    count: 9,
    gradient: ["#E0D0B5", "#5C6F3C"] as [string, string],
  },
  {
    href: "/guides/pantry-systems",
    eyebrow: "Department",
    title: "Pantry systems",
    dek: "Storage science, shelf-life math, the way a kitchen feeds itself.",
    count: 8,
    gradient: ["#D8B89A", "#3F4D27"] as [string, string],
  },
];

export default function HomePage() {
  const tToc = useTranslations("toc");
  const tNewsletter = useTranslations("newsletter");

  const featured = getRecipe(featuredRecipeSlug)!;

  const tocSections = [
    {
      label: tToc("section1"),
      entries: [
        {
          href: "/guides/pantry-systems",
          title: "The pantry, redrawn",
          dek: "Storage science, shelf life, and the twelve sauces every shelf earns.",
          page: "04",
        },
        {
          href: "/guides/ingredient-deep-dives",
          title: "Olive oil, ageing in the bottle",
          dek: "Oxidation, dating, and what the literature actually says.",
          page: "12",
        },
        {
          href: "/guides/meal-prep",
          title: "A field guide to fermentation",
          dek: "Salt, time, temperature — the three rules that govern every jar.",
          page: "18",
        },
      ],
    },
    {
      label: tToc("section3"),
      entries: recipes.slice(0, 3).map((r, i) => ({
        href: `/${r.slug}`,
        title: r.title,
        dek: r.dek,
        page: String(32 + i * 4).padStart(2, "0"),
      })),
    },
    {
      label: tToc("section4"),
      entries: [
        {
          href: "/methodology",
          title: "How we cook",
          dek: "Three cooks, two cookware setups, the test-kitchen rubric.",
          page: "40",
        },
        {
          href: "/pipeline",
          title: "What's cooking",
          dek: "An open log of features and recipes already in the pipeline.",
          page: "42",
        },
      ],
    },
  ];

  return (
    <main>
      <Hero
        featured={featured}
        h1Lead="A food magazine,"
        h1Italic="well-tested."
        h1Tail="for the cook who already runs the kitchen."
        dek="Forty-two pages on pantry architecture, ingredient deep-dives, and a recipe card we cooked seven times before we let it leave the test kitchen."
      />

      <CategoryTileGrid
        tiles={tiles}
        eyebrow="Departments"
        heading="Pick a shelf."
        dek="Four ways into the issue. Pantry suppers, slower projects, ingredient deep-dives, and the pantry systems that feed all three."
      />

      <FeaturedRecipeCarousel
        recipes={recipes}
        eyebrow="The recipes"
        heading="Five things to cook this weekend."
        dek="Short list. No theatrics. Recipes a stocked pantry quietly wants to make."
      />

      <section className="border-b border-[--color-border-subtle] bg-[--color-cream-soft]">
        <div className="mx-auto max-w-spread px-6 py-14 md:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <EditorsNote />
          </div>
          <div className="lg:col-span-7">
            <PullQuote
              body="A good pantry is not a stockpile. It's a system that quietly cooks dinner before you've decided what dinner is."
              attrib="The opening note, Issue 04"
            />
          </div>
        </div>
      </section>

      <MagazineToc sections={tocSections} />

      <section className="border-b border-[--color-border-subtle]">
        <div className="mx-auto max-w-spread px-6 py-14 md:py-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="dept-label">{tNewsletter("eyebrow")}</div>
            <h2 className="font-display italic font-medium text-3xl md:text-[2.6rem] leading-[1.06] mt-3">
              {tNewsletter("heading")}
            </h2>
            <p className="dek mt-4 max-w-[52ch]">{tNewsletter("body")}</p>
          </div>
          <div className="lg:col-span-5">
            <NewsletterInline cta={tNewsletter("submit")} />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-spread px-6 py-12 md:py-14 text-center">
          <Link href="/about" className="dept-label">
            Read the masthead →
          </Link>
        </div>
      </section>
    </main>
  );
}
