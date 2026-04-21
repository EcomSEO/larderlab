import type { Metadata } from "next";
import Link from "next/link";
import { MacroCalculator } from "@/components/MacroCalculator";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "The Larderlab Macro Calculator",
  description:
    "Calculate daily protein, fat, and carb targets using 4 expert-recommended ranges (IOM RDA, Phillips 2017, Morton 2018, ISSN). Per-meal split + $/gram protein cost chart. Free.",
  path: "/macro-calculator",
});

export default function MacroCalculatorPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Tools" },
    { label: "Macro Calculator" },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <Breadcrumbs crumbs={crumbs} />

        <h1 className="font-serif text-4xl md:text-5xl text-ink mt-4 leading-tight">
          The Larderlab Macro Calculator
        </h1>
        <p className="mt-4 text-lg text-charcoal/85 max-w-2xl leading-relaxed">
          Enter your bodyweight, activity level, and goal. The calculator returns
          four expert-recommended protein targets (IOM RDA floor, Phillips 2017,
          Morton 2018, ISSN ceiling), your per-meal split, and a ranked cost
          chart for twelve common protein sources.
        </p>

        <MacroCalculator />

        <section className="mt-12">
          <h2 className="font-serif text-2xl text-ink mb-4">
            Where the 1.6g/kg target comes from
          </h2>
          <p className="text-charcoal/90 leading-relaxed">
            The most-cited target for adults who resistance-train — 1.6 grams of
            protein per kilogram of bodyweight per day — comes from Morton et
            al. 2018 (Br J Sports Med), a meta-analysis of 49 studies covering
            1,863 participants. The meta-analysis measured protein intake
            against lean mass gains across a wide range of training protocols
            and found the dose-response curve flattens at approximately 1.6
            g/kg/day. Higher intakes (up to 2.2 g/kg) showed diminishing
            returns; lower intakes (≤1.2 g/kg) consistently underperformed on
            lean mass retention.
          </p>
          <p className="mt-4 text-charcoal/90 leading-relaxed">
            For an 80kg (176 lb) lifter, 1.6 g/kg = 128 grams of protein per
            day. Split across three meals, that&apos;s ~43g per meal — about 150g
            of cooked chicken breast, or 300g of Greek yogurt, or two scoops of
            whey.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-ink mb-4">
            Why four ranges, not one
          </h2>
          <p className="text-charcoal/90 leading-relaxed">
            The spread between the RDA (0.8 g/kg) and the ISSN ceiling (2.0
            g/kg) is 2.5×. That isn&apos;t confusion in the literature — it&apos;s
            different populations answering different questions. The RDA is the
            minimum to prevent deficiency in sedentary adults. Phillips 2017 is
            the target for senior adults preserving muscle. Morton 2018 is the
            target for resistance-trained adults building or maintaining lean
            mass. ISSN 2.0 g/kg is the upper practical limit during aggressive
            cutting phases. All four are correct — for different readers.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-ink mb-4">
            How to hit the target economically
          </h2>
          <p className="text-charcoal/90 leading-relaxed">
            The cost chart above sorts 12 protein sources by $/gram. Whey
            concentrate wins on a pure $/g basis (~$0.015-0.020/g) but nobody
            wants to get 100% of their protein from powder. The practical stack
            for hitting 150g of protein at $5/day: 1 scoop whey + 3 whole eggs +
            200g chicken thighs + 2 cups Greek yogurt. That&apos;s ~130g of protein
            at ~$4.20, with the remaining 20g covered by milk and incidental
            protein in carb sources.
          </p>
          <p className="mt-4 text-charcoal/90 leading-relaxed">
            For budget-constrained readers, this is the path. For
            taste-maximizing readers, shift the budget toward chicken thighs,
            salmon, and grass-fed beef, which are 2-4× the cost per gram but
            dominate on the palatability side of the trade.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-ink mb-4">
            What the calculator assumes
          </h2>
          <ul className="list-disc pl-6 text-charcoal/90 leading-relaxed space-y-2">
            <li>
              BMR is estimated at 22 kcal/kg of bodyweight — a simplified
              stand-in for Mifflin-St Jeor when age and sex aren&apos;t provided. For
              precision to ±100 kcal, use a full Mifflin-St Jeor calculator and
              take our fat/carb split off that TDEE.
            </li>
            <li>
              Cut deficit is 500 kcal/day (~1 lb/week). Cuts under ~15% body fat
              require smaller deficits to preserve muscle; cuts above 20% body
              fat tolerate larger deficits.
            </li>
            <li>
              Fat floor is 0.9 g/kg to support hormonal health (Volek 1997; ISSN
              position on dietary fat). Below 0.6 g/kg for extended periods
              correlates with lower testosterone in men.
            </li>
            <li>
              Carbs fill the remainder after protein and fat. For readers doing
              high-volume endurance work, lean toward the top of the carb
              range; for sedentary readers, lean lower.
            </li>
          </ul>
        </section>

        <section className="mt-10 pt-10 border-t border-ink/10">
          <h2 className="font-serif text-2xl text-ink mb-4">Related reading</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/how-much-protein-per-day" className="text-copper underline">
                How much protein per day, by bodyweight
              </Link>
            </li>
            <li>
              <Link href="/best-protein-powders" className="text-copper underline">
                Best protein powders, ranked by $/gram of leucine
              </Link>
            </li>
            <li>
              <Link href="/best-whole-food-protein-sources" className="text-copper underline">
                Best whole-food protein sources, ranked by $/gram
              </Link>
            </li>
            <li>
              <Link href="/12-high-protein-foods-by-cost" className="text-copper underline">
                12 high-protein foods ranked by $/gram
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
