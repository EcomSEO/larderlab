import Link from "next/link";
import Image from "next/image";
import { TestKitchenStamp } from "./TestKitchenStamp";
import { DietitianReviewedBadge } from "./DietitianReviewedBadge";
import type { Recipe } from "@/lib/content/recipes";

const HERO_IMAGE = "/images/hero/featured-recipe.jpg";

/**
 * Larderlab — clean-medical home Hero.
 *
 * 12-col grid, mirrors injectcompass:
 *  · cols 1-7: eyebrow → H1 (Source Serif 4 weight 600, NOT italic) → dek
 *    → primary olive CTA + secondary outline CTA → trust-signal row
 *  · cols 8-12: featured-recipe card with photo placeholder, dietitian
 *    badge over photo, title, dek, author + reading time
 *  · Below: 3 trending links across the bottom
 *
 * No magazine masthead. No issue strip. No italic display.
 */

type Trending = {
  category: string;
  title: string;
  href: string;
};

export function Hero({
  featured,
  trending = [],
  reviewedBy = "Dr. Maya Rao",
  reviewerCredentials = "RDN",
  eyebrow = "Evidence-based pantry & nutrition",
  headline,
  dek,
  ctaPrimary = "Browse the recipes",
  ctaSecondary = "Open the macro calculator",
  trendingLabel = "Trending now",
}: {
  featured: Recipe;
  trending?: Trending[];
  reviewedBy?: string;
  reviewerCredentials?: string;
  eyebrow?: string;
  headline?: string;
  dek?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  trendingLabel?: string;
}) {
  const h1 = headline ?? "Cook from the pantry. Eat by the evidence.";
  const sub =
    dek ??
    "A nutrition and pantry information site for cooks who want what's on the plate to actually be the right thing. Each recipe tested in our test kitchen and reviewed by a registered dietitian.";

  return (
    <section className="border-b border-rule bg-white">
      <div className="mx-auto max-w-container px-6 pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Left — headline */}
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">{eyebrow}</div>
            <h1 className="h1-display text-[40px] md:text-[48px] leading-[1.1] tracking-tightest text-ink max-w-[18ch]">
              {h1}
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.55] text-ink-muted max-w-[58ch]">
              {sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/recipes"
                className="inline-flex items-center h-12 px-6 rounded-pill bg-olive text-white text-[15px] font-semibold hover:bg-olive-deep transition-colors"
              >
                {ctaPrimary}
              </Link>
              <Link
                href="/macro-calculator"
                className="inline-flex items-center h-12 px-6 rounded-pill border border-rule-strong text-ink text-[15px] font-semibold hover:border-olive hover:text-olive-deep transition-colors"
              >
                {ctaSecondary}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-ink-muted">
              <span className="inline-flex items-center gap-1.5 text-reviewed-text">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M8 1.5 2.5 3.5v4c0 3 2.3 5.7 5.5 7 3.2-1.3 5.5-4 5.5-7v-4L8 1.5Z" />
                  <path d="m5.5 8 2 2 3.5-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Reviewed by registered dietitians
              </span>
              <span aria-hidden>·</span>
              <span>Cited to USDA FoodData Central + peer-reviewed literature</span>
            </div>
          </div>

          {/* Right — featured */}
          <div className="md:col-span-5">
            <div className="block rounded-md overflow-hidden bg-white border border-rule hover:shadow-cardHover hover:border-rule-strong transition-all duration-200 group">
              <Link
                href={`/${featured.slug}`}
                aria-label={`Read: ${featured.title}`}
                className="block"
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Image
                    src={HERO_IMAGE}
                    alt={`${featured.title} — photographed in the test kitchen`}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    priority
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill bg-white/95 text-reviewed-text text-[12px] font-semibold">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="m4 8 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Dietitian-reviewed
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="eyebrow mb-2">{featured.department}</div>
                <h2 className="text-[22px] md:text-[24px] leading-snug font-semibold text-ink group-hover:text-olive-deep transition-colors">
                  <Link href={`/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted line-clamp-3">
                  {featured.dek}
                </p>
                <div className="mt-4 flex items-center gap-3 text-[13px] text-ink-muted flex-wrap">
                  <span>
                    By {featured.developer.name}
                    <span className="text-ink-soft">, {featured.developer.credential}</span>
                  </span>
                  <span aria-hidden>·</span>
                  <span>Total {featured.totalTime}</span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <TestKitchenStamp testCount={featured.testCount} />
                </div>
                <div className="mt-3">
                  <DietitianReviewedBadge
                    reviewerName={reviewedBy}
                    credentials={reviewerCredentials}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trending strip */}
        {trending.length > 0 && (
          <div className="mt-12 pt-6 border-t border-rule">
            <div className="flex items-center gap-3 mb-4">
              <span className="eyebrow">{trendingLabel}</span>
              <span className="h-px flex-1 bg-rule" />
            </div>
            <ul className="grid md:grid-cols-3 gap-x-8 gap-y-4">
              {trending.slice(0, 3).map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="group block">
                    <div className="eyebrow mb-1.5">{t.category}</div>
                    <span className="text-[16px] font-semibold text-ink group-hover:text-olive-deep transition-colors leading-snug">
                      {t.title}{" "}
                      <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
