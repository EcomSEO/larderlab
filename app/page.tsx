import { MagazineCover } from "@/components/magazine/MagazineCover";
import { TableOfContents } from "@/components/magazine/TableOfContents";
import { Department } from "@/components/magazine/Department";
import { RecipeCard } from "@/components/magazine/RecipeCard";
import { PullQuote } from "@/components/magazine/PullQuote";
import { EditorsNote } from "@/components/magazine/EditorsNote";
import { EmailCapture } from "@/components/EmailCapture";
import { useTranslations } from "next-intl";
import Link from "next/link";

/**
 * Home — the issue. Magazine cover, table of contents, editor's note,
 * a recipe card pulled from the cover dish, two department spreads and
 * the dispatch sign-up. Reads like the inside of a printed magazine,
 * not a content grid.
 */
export default function HomePage() {
  const tToc = useTranslations("toc");
  const tDept = useTranslations("departments");
  const tNewsletter = useTranslations("newsletter");

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
          dek: "What the literature says about oxidation, dating, and what to keep on the counter.",
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
      label: tToc("section2"),
      entries: [
        {
          href: "/macro-calculator",
          title: "The macro calculator, redrawn",
          dek: "Targets, protein cost-per-gram, and the math we use ourselves.",
          page: "24",
        },
        {
          href: "/guides/supplements",
          title: "What we keep on the shelf",
          dek: "Five jars worth their footprint — with the math on why.",
          page: "28",
        },
      ],
    },
    {
      label: tToc("section3"),
      entries: [
        {
          href: "#recipe",
          title: "The one-pan beans",
          dek: "Slow-cooked white beans, garlic confit, a bay leaf or three. The cover dish.",
          page: "32",
        },
        {
          href: "/guides/meal-prep",
          title: "Tomato confit, twelve ways",
          dek: "One pan, one afternoon, half a year of dinners.",
          page: "36",
        },
      ],
    },
    {
      label: tToc("section4"),
      entries: [
        {
          href: "/methodology",
          title: "Editorial standards",
          dek: "How we test, how we cite, and what we won't print.",
          page: "40",
        },
        {
          href: "/pipeline",
          title: "What's cooking",
          dek: "The features, departments, and recipes already in the pipeline.",
          page: "42",
        },
      ],
    },
  ];

  const weekendItems = [
    {
      href: "/guides/meal-prep",
      title: "Brothy beans, every other Sunday",
      dek: "A pot you start before lunch and eat from for half a week.",
    },
    {
      href: "/guides/pantry-systems",
      title: "Roast a tray of alliums",
      dek: "Onions, leeks, fennel — sweet enough to keep on the counter under a cloche.",
    },
    {
      href: "/guides/ingredient-deep-dives",
      title: "A loaf, started Friday night",
      dek: "Long, cold ferment. Tuesday morning toast.",
    },
    {
      href: "/guides/meal-prep",
      title: "Vinegar your shallots",
      dek: "Three jars, six weeks, the small joy of a forkful of pink rings.",
    },
    {
      href: "/guides/ingredient-deep-dives",
      title: "Brown butter the freezer",
      dek: "An afternoon's noisette, frozen in tablespoons, weeks of small upgrades.",
    },
  ];

  const pantryItems = [
    {
      href: "/guides/pantry-systems",
      title: "A bottle of decent Sicilian",
      dek: "Single-estate, harvest-dated, opened slowly.",
    },
    {
      href: "/guides/ingredient-deep-dives",
      title: "A jar of preserved lemons",
      dek: "Salt, time, the rind only.",
    },
    {
      href: "/guides/pantry-systems",
      title: "Rancho Gordo runner beans",
      dek: "Older year, longer cook, more flavour.",
    },
    {
      href: "/guides/ingredient-deep-dives",
      title: "A tin of oil-cured anchovies",
      dek: "Six grams of seasoning per fillet, kept on the bottom shelf.",
    },
    {
      href: "/guides/pantry-systems",
      title: "A wide bowl of flaky salt",
      dek: "Within reach of the cutting board, never measured.",
    },
  ];

  return (
    <main>
      <MagazineCover />

      <section className="border-b border-ink/15 bg-cream-soft">
        <div className="mx-auto max-w-spread px-6 py-14 md:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <EditorsNote />
          </div>
          <div className="lg:col-span-7">
            <PullQuote
              body="A magazine for the cook who already runs the kitchen — not a recipe a day, not a diet, not a hack. A pantry, a stove, a few cited paragraphs."
              attrib="The opening note, Issue 04"
            />
          </div>
        </div>
      </section>

      <TableOfContents sections={tocSections} />

      <section className="border-b border-ink/15">
        <div className="mx-auto max-w-spread px-6 py-16 md:py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7" id="recipe">
            <RecipeCard />
          </div>
          <aside className="lg:col-span-5 lg:pl-6">
            <div className="dept-label">From the cover</div>
            <h2 className="font-display italic font-normal text-3xl md:text-4xl text-ink mt-3 leading-[1.06]">
              The dish on the cover.
            </h2>
            <p className="dek mt-4 max-w-[44ch]">
              A pan of slow-cooked white beans — garlic, bay, a finishing
              spoon of olive oil. Plenty for four; better the next day.
            </p>
            <div className="mt-6 plate aspect-[4/3] w-full rounded-sm" aria-hidden="true" />
            <p className="plate-caption">
              Photographed in the test kitchen, late afternoon.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-b border-ink/15 bg-cream-soft">
        <div className="mx-auto max-w-spread px-6 py-16 md:py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Department
              eyebrow={tDept("weekendHeading").toUpperCase()}
              heading={tDept("weekendHeading")}
              dek={tDept("weekendDek")}
              items={weekendItems}
            />
          </div>
          <div className="lg:col-span-6">
            <Department
              eyebrow={tDept("pantryHeading").toUpperCase()}
              heading={tDept("pantryHeading")}
              dek={tDept("pantryDek")}
              items={pantryItems}
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-spread px-6 py-16 md:py-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="dept-label !text-tomato">{tNewsletter("eyebrow")}</div>
            <h2 className="font-display italic font-normal text-4xl md:text-[3.2rem] text-cream mt-4 leading-[1.04]">
              {tNewsletter("heading")}
            </h2>
            <p className="mt-5 text-cream/80 text-[15.5px] leading-relaxed max-w-[52ch]">
              {tNewsletter("body")}
            </p>
          </div>
          <div className="lg:col-span-5">
            <EmailCapture />
            <p className="mt-4 byline-italic text-cream/65">
              Sunday morning, eleven o'clock. One short editorial letter — that's all.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-spread px-6 py-12 md:py-16 text-center">
          <Link href="/about" className="dept-label">
            Read the masthead →
          </Link>
        </div>
      </section>
    </main>
  );
}
