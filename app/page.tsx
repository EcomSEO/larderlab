import Link from "next/link";
import { hubs, getHub } from "@/lib/content/hubs";
import { featuredPost, latestPosts, posts } from "@/lib/content/posts";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule, SpecRule } from "@/components/editorial/DotRule";
import { RankNumeral } from "@/components/editorial/RankNumeral";
import { ProductsSystemsTable } from "@/components/editorial/SystemsTable";
import { Reveal } from "@/components/editorial/Reveal";
import { EmailCapture } from "@/components/EmailCapture";
import { SITE } from "@/lib/content/site";

const typeLabel: Record<string, string> = {
  pillar: "Guide",
  comparison: "Comparison",
  cluster: "Explainer",
  listicle: "Listicle",
};

export default function HomePage() {
  const featured = featuredPost();
  const recent = latestPosts(6);
  const comparisons = posts
    .filter((p) => p.postType === "comparison")
    .slice(0, 4);
  const explainers = posts.filter((p) => p.postType === "cluster").slice(0, 3);

  // Source the SystemsTable from the first comparison that has products.
  const tableFeature = comparisons.find((c) => c.products && c.products.length) ?? null;
  const tableRows = (tableFeature?.products ?? []).slice(0, 8);

  return (
    <main>
      {/* === HERO: This issue's spec === */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-wiki px-6 pt-12 md:pt-16 pb-14 md:pb-20">
          <div className="mb-8 fade-up">
            <SpecRule />
          </div>
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4 flex-wrap fade-up-delay-1">
                <Eyebrow tone="copper">
                  This issue&apos;s spec
                </Eyebrow>
                <span className="caps-label text-steel tnum">
                  {SITE.specCode} · {SITE.specRevision}
                </span>
              </div>
              <h1 className="display-headline mt-5 text-[2.75rem] sm:text-5xl md:text-[4rem] leading-[1.02] fade-up-delay-2">
                The operating manual <br className="hidden md:inline" />
                for the{" "}
                <span className="font-accent italic text-copper">modern</span>{" "}
                larder.
              </h1>
              <p className="mt-7 text-lg md:text-xl text-charcoal/85 max-w-2xl leading-[1.55] fade-up-delay-3">
                Macro calculators, pantry architecture, ingredient deep-dives,
                and supplement comparisons — cited, priced, and engineered.
                No recipes. No grandmothers. Just the data.
              </p>
              <div className="mt-9 flex flex-wrap gap-3 fade-up-delay-4">
                <Link href="/macro-calculator" className="btn-primary">
                  Open the Macro Calculator →
                </Link>
                <Link href="#hub-index" className="btn-secondary">
                  Browse the guides
                </Link>
              </div>
            </div>

            {/* Spec sheet sidebar — "Revision log" reveal. */}
            <aside className="md:col-span-4 md:pl-8 md:border-l md:border-ink/15 fade-up-delay-5">
              <div className="caps-label text-copper mb-4">In this revision</div>
              <dl className="divide-y divide-ink/10 text-[13.5px]">
                <div className="flex justify-between py-2.5 first:pt-0">
                  <dt className="text-steel">Posts live</dt>
                  <dd className="text-ink tnum font-mono">
                    {String(posts.length).padStart(3, "0")}
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-steel">Hubs</dt>
                  <dd className="text-ink tnum font-mono">
                    {String(hubs.length).padStart(3, "0")}
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-steel">Calculators</dt>
                  <dd className="text-ink tnum font-mono">001</dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-steel">Planned (wave 1)</dt>
                  <dd className="text-ink tnum font-mono">010</dd>
                </div>
                <div className="flex justify-between py-2.5 last:pb-0">
                  <dt className="text-steel">Rev. published</dt>
                  <dd className="text-ink tnum font-mono">
                    {new Date().toISOString().slice(0, 10)}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* === FEATURED SPEC: SystemsTable hero === */}
      {tableFeature && tableRows.length > 0 && (
        <Reveal className="fade-up-delay-6">
        <section className="border-b border-ink/10 bg-paper-deep/40">
          <div className="mx-auto max-w-wiki px-6 py-14 md:py-20">
            <div className="grid md:grid-cols-12 gap-8 items-end mb-8">
              <div className="md:col-span-7">
                <Eyebrow tone="copper">Featured spec · ranked</Eyebrow>
                <h2 className="font-sans text-3xl md:text-[2.35rem] text-ink mt-3 leading-[1.1] tracking-tight">
                  {tableFeature.h1}
                </h2>
                <p className="mt-4 text-charcoal/80 text-[15.5px] leading-relaxed max-w-[58ch]">
                  {tableFeature.description}
                </p>
              </div>
              <div className="md:col-span-5 md:pl-6 md:border-l md:border-ink/10">
                <dl className="grid grid-cols-2 gap-4 text-[13px]">
                  <div>
                    <dt className="caps-label text-steel mb-1">Products</dt>
                    <dd className="font-mono text-ink tnum text-lg">
                      {String(tableFeature.products?.length ?? 0).padStart(2, "0")}
                    </dd>
                  </div>
                  <div>
                    <dt className="caps-label text-steel mb-1">Sources cited</dt>
                    <dd className="font-mono text-ink tnum text-lg">
                      {String(tableFeature.sources?.length ?? 0).padStart(2, "0")}
                    </dd>
                  </div>
                  <div>
                    <dt className="caps-label text-steel mb-1">Sort key</dt>
                    <dd className="font-mono text-copper text-[13px]">$/g · leucine</dd>
                  </div>
                  <div>
                    <dt className="caps-label text-steel mb-1">Prices checked</dt>
                    <dd className="font-mono text-ink tnum text-[13px]">
                      {tableFeature.updatedAt}
                    </dd>
                  </div>
                </dl>
                <Link
                  href={`/${tableFeature.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-copper hover:text-ink text-sm font-mono uppercase tracking-[0.1em]"
                >
                  Read the full comparison →
                </Link>
              </div>
            </div>

            <ProductsSystemsTable
              products={tableRows}
              caption="Top 8 — full ranking continues on the comparison page"
            />
          </div>
        </section>
        </Reveal>
      )}

      {/* === HUB INDEX === */}
      <Reveal>
      <section id="hub-index" className="border-b border-ink/10">
        <div className="mx-auto max-w-wiki px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <Eyebrow tone="copper">Hub index</Eyebrow>
              <h2 className="font-sans text-3xl md:text-[2.3rem] text-ink mt-3 leading-tight tracking-tight">
                Five hubs. One hundred and fifty posts on spec.
              </h2>
            </div>
            <Link
              href="/about"
              className="text-copper hover:text-ink text-sm font-mono uppercase tracking-[0.1em]"
            >
              Why we built it this way →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-ink/15">
            {hubs.map((hub, i) => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                className="copper-hairline group relative flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-ink/10 last:border-r-0 hover:bg-paper-deep/50 transition"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <RankNumeral n={i + 1} />
                  <span className="caps-label text-steel tnum">
                    H{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-ink leading-tight mb-2 tracking-tight">
                  {hub.name}
                </h3>
                <p className="text-[13.5px] text-charcoal/75 leading-relaxed flex-1">
                  {hub.oneLiner}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-copper group-hover:text-ink text-[11px] font-mono uppercase tracking-[0.14em]">
                  Open hub →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* === LATEST — engineering log === */}
      <Reveal>
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-wiki px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow tone="copper">Latest revisions</Eyebrow>
              <h2 className="font-sans text-3xl md:text-[2.3rem] text-ink mt-3 leading-tight tracking-tight">
                Freshly cited, freshly priced.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10">
            {recent[0] && (
              <article className="md:col-span-7">
                <Link href={`/${recent[0].slug}`} className="group block">
                  <div className="aspect-[16/9] bg-ink border border-ink/20 mb-5 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-[0.1]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #B87333 1px, transparent 1px), linear-gradient(to bottom, #B87333 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="absolute top-5 left-5">
                      <span className="caps-label !text-copper bg-ink/80 px-2 py-1">
                        {typeLabel[recent[0].postType]}
                      </span>
                    </div>
                    <div className="relative z-10 text-copper font-mono text-xs uppercase tracking-[0.2em]">
                      FIG. 01 · {recent[0].updatedAt}
                    </div>
                  </div>
                  <h3 className="font-sans font-semibold text-2xl md:text-[1.85rem] text-ink leading-[1.12] group-hover:text-copper transition tracking-tight">
                    {recent[0].title}
                  </h3>
                  <p className="mt-3 text-charcoal/80 text-[15.5px] leading-relaxed line-clamp-3">
                    {recent[0].description}
                  </p>
                  <div className="mt-4 caps-label text-steel">
                    {getHub(recent[0].hub)?.shortName} ·{" "}
                    {recent[0].readingTime} min · updated {recent[0].updatedAt}
                  </div>
                </Link>
              </article>
            )}

            <div className="md:col-span-5">
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {recent.slice(1, 6).map((p, i) => (
                  <li key={p.slug} className="py-4 first:pt-3 last:pb-3">
                    <Link href={`/${p.slug}`} className="group grid grid-cols-[auto_1fr] gap-4">
                      <span className="font-mono text-[0.72rem] text-copper tnum mt-1.5">
                        {String(i + 2).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="caps-label text-steel mb-1">
                          {typeLabel[p.postType]} · {getHub(p.hub)?.shortName}
                        </div>
                        <h3 className="font-sans font-semibold text-[17px] text-ink leading-snug group-hover:text-copper transition tracking-tight">
                          {p.title}
                        </h3>
                        <p className="mt-1.5 text-[13.5px] text-charcoal/70 leading-snug line-clamp-2">
                          {p.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      </Reveal>

      {/* === HOW WE SPEC — credo, inverted on ink === */}
      <Reveal>
      <section className="border-b border-ink/10 bg-ink text-paper grid-bg">
        <div className="mx-auto max-w-wiki px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <Eyebrow tone="copper" className="!text-copper">How we spec</Eyebrow>
            <h2 className="font-sans text-3xl md:text-[2.5rem] mt-4 leading-[1.1] tracking-tight text-paper">
              Every recommendation on this site ships with a{" "}
              <span className="font-accent italic text-copper">
                protocol, a price, and a confidence level.
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-6 mt-14 border-t border-paper/15 pt-10">
            <div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-copper text-[0.72rem] tracking-[0.14em] uppercase tnum">01</span>
                <span className="caps-label !text-paper/60">Protocols, tested</span>
              </div>
              <p className="text-paper/85 text-[14.5px] leading-relaxed">
                Every method is stated before the finding. No black-box
                rankings. If we can&apos;t describe how we ranked, we don&apos;t rank.
                Methodology pages carry their own URL and their own change log.
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-copper text-[0.72rem] tracking-[0.14em] uppercase tnum">02</span>
                <span className="caps-label !text-paper/60">Cost-basis, dated</span>
              </div>
              <p className="text-paper/85 text-[14.5px] leading-relaxed">
                Every product shows the price we observed, the retailer, and
                the date. Re-checked quarterly. When the price drifts
                &gt;&nbsp;15%, the post gets a dated revision note.
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-copper text-[0.72rem] tracking-[0.14em] uppercase tnum">03</span>
                <span className="caps-label !text-paper/60">Confidence, declared</span>
              </div>
              <p className="text-paper/85 text-[14.5px] leading-relaxed">
                Every ranking carries a confidence level — high, medium, low.
                When the literature is mixed we say so, name the dissenters,
                and state the layer of disagreement.
              </p>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-paper/15 flex flex-wrap gap-6 items-center justify-between">
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-copper hover:text-paper text-sm font-mono uppercase tracking-[0.1em]"
            >
              Read the full methodology →
            </Link>
            <span className="caps-label !text-paper/50 tnum">
              § 4 · larderlab.com/methodology
            </span>
          </div>
        </div>
      </section>
      </Reveal>

      {/* === EXPLAINERS === */}
      {explainers.length > 0 && (
        <Reveal>
        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-wiki px-6 py-16 md:py-20">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div>
                <Eyebrow tone="copper">Explainers</Eyebrow>
                <h2 className="font-sans text-3xl text-ink mt-3 leading-tight tracking-tight">
                  The terms people Google, answered once.
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-0 border-t border-ink/15">
              {explainers.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="copper-hairline group p-6 border-b md:border-b-0 md:border-r border-ink/10 last:border-r-0 hover:bg-paper-deep/40 transition"
                >
                  <RankNumeral n={i + 1} />
                  <h3 className="font-sans font-semibold text-lg text-ink leading-tight mt-3 group-hover:text-copper transition tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-[13.5px] text-charcoal/75 mt-2 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        </Reveal>
      )}

      {/* === DISPATCH === */}
      <Reveal>
      <section className="bg-paper-deep/60 border-b border-ink/10">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="text-center mb-8">
            <Eyebrow tone="copper">The Dispatch</Eyebrow>
            <h2 className="font-sans text-3xl md:text-[2.25rem] text-ink mt-3 leading-[1.1] max-w-2xl mx-auto tracking-tight">
              One cited number, every Tuesday morning.
            </h2>
            <p className="mt-5 text-charcoal/80 text-[15.5px] max-w-xl mx-auto leading-relaxed">
              No promotions. No daily fire-hose. One thing we verified, or
              changed our mind about — with a source. Subscribe and the free
              Macro Planner lands in your inbox.
            </p>
          </div>
          <EmailCapture />
        </div>
      </section>
      </Reveal>

      {/* === CLOSING DATELINE === */}
      <section>
        <div className="mx-auto max-w-wiki px-6 py-10">
          <DotRule />
          <p className="text-center caps-label text-steel mt-6 tnum">
            {SITE.specVolume} · {SITE.specRevision} · Last updated{" "}
            {new Date().toISOString().slice(0, 10)}
          </p>
        </div>
      </section>
    </main>
  );
}
