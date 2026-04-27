import Link from "next/link";
import { TestKitchenStamp } from "./TestKitchenStamp";
import type { Recipe } from "@/lib/content/recipes";
import { SITE } from "@/lib/content/site";

/**
 * Hero — editorial home hero.
 *
 *  · Magazine masthead strip top (LARDERLAB · ISSUE 04 · APRIL 2026)
 *  · 12-col grid below: H1 Fraunces 56-64px italic + dek (left, 7 cols)
 *  · Featured-recipe card right (5 cols): plate placeholder +
 *    TestKitchenStamp + title + dek + author byline
 */
export function Hero({
  featured,
  h1Lead,
  h1Italic,
  h1Tail,
  dek,
}: {
  featured: Recipe;
  h1Lead: string;
  h1Italic: string;
  h1Tail: string;
  dek: string;
}) {
  return (
    <section className="home-hero">
      <div className="mx-auto max-w-spread px-6">
        <div className="masthead-strip">
          <span>
            {SITE.name} · {SITE.specRevision} · {SITE.issueDate}
          </span>
          <span className="right hidden sm:inline">A food magazine, well-tested.</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start py-12 md:py-16">
          {/* Headline column */}
          <div className="lg:col-span-7">
            <div className="dept-label">The {SITE.specRevision.toLowerCase()}</div>
            <h1 className="cover-headline mt-5 text-[3.2rem] sm:text-[4rem] md:text-[4.6rem] lg:text-[4.8rem]">
              {h1Lead} <span className="italic">{h1Italic}</span> {h1Tail}
            </h1>
            <p className="dek mt-6 max-w-[44ch]">{dek}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/${featured.slug}`} className="btn-primary">
                Read the cover recipe
              </Link>
              <Link href="#contents" className="btn-secondary">
                Browse the issue
              </Link>
            </div>
          </div>

          {/* Featured-recipe panel */}
          <aside className="lg:col-span-5">
            <Link
              href={`/${featured.slug}`}
              className="block rcard"
              aria-label={`Read: ${featured.title}`}
            >
              <div
                className="rcard-photo plate-warm"
                style={{
                  aspectRatio: "4 / 3.4",
                  background: `radial-gradient(ellipse at 30% 30%, #F8E5C8 0%, ${featured.plateColor} 55%, #A8884E 100%)`,
                }}
                aria-hidden="true"
              />
              <div className="rcard-body" style={{ padding: "1.25rem 1.4rem 1.4rem" }}>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="rcard-eyebrow">{featured.department}</div>
                  <TestKitchenStamp testCount={featured.testCount} />
                </div>
                <h3 style={{ fontSize: "1.55rem", lineHeight: 1.18 }}>{featured.title}</h3>
                <div className="rcard-dek">{featured.dek}</div>
                <div className="rcard-meta">
                  <span>
                    By <strong>{featured.developer.name.split(" ")[0]}</strong>
                  </span>
                  <span>
                    Total · <strong>{featured.totalTime}</strong>
                  </span>
                  <span>{featured.difficulty}</span>
                </div>
              </div>
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
