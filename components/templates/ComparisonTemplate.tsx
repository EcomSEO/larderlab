import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { Breadcrumbs } from "../Breadcrumbs";
import { EducationalBanner } from "../EducationalBanner";
import { AffiliateDisclosure } from "../AffiliateDisclosure";
import { CostPerUnitCallout } from "../CostPerUnitCallout";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { ItemListJsonLd } from "../schema/ItemListJsonLd";
import { WideArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, SpecRule } from "../editorial/DotRule";
import { MethodologyBlock } from "../editorial/MethodologyBlock";
import { WhatWouldChangeOurMind } from "../editorial/WhatWouldChangeOurMind";
import { ProductsSystemsTable } from "../editorial/SystemsTable";
import { Dateline } from "../editorial/Dateline";
import { EvidencePill } from "../EvidencePill";
import { MacroCalculatorTeaser } from "../MacroCalculatorTeaser";

export function ComparisonTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#hub-index" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

  const skips = (post.products ?? []).filter((p) =>
    p.tier.toLowerCase().includes("skip")
  );
  const picks = (post.products ?? []).filter(
    (p) => !p.tier.toLowerCase().includes("skip")
  );

  return (
    <>
      <ArticleJsonLd
        path={`/${post.slug}`}
        headline={post.h1}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      {post.faq && <FaqJsonLd faq={post.faq} />}
      {post.products && (
        <ItemListJsonLd
          items={post.products.map((p) => ({ rank: p.rank, name: p.name }))}
        />
      )}

      <WideArticleShell
        aside={
          <nav className="space-y-6">
            <div>
              <Eyebrow tone="steel">On this spec</Eyebrow>
              <ul className="mt-3 space-y-2 text-[14px]">
                {post.ourPick && (
                  <li><a href="#our-pick" className="text-ink hover:text-copper">§ 1. Editor&apos;s pick</a></li>
                )}
                <li><a href="#systems-table" className="text-ink hover:text-copper">§ 2. Systems table</a></li>
                {skips.length > 0 && (
                  <li><a href="#skips" className="text-ink hover:text-copper">§ 3. Skips</a></li>
                )}
                <li><a href="#methodology" className="text-ink hover:text-copper">§ 4. Methodology</a></li>
                {post.faq && post.faq.length > 0 && (
                  <li><a href="#faq" className="text-ink hover:text-copper">§ 5. Questions</a></li>
                )}
                <li><a href="#change-mind" className="text-ink hover:text-copper">§ 6. What would change our mind</a></li>
                <li><a href="#sources" className="text-ink hover:text-copper">§ 7. Sources</a></li>
              </ul>
            </div>

            <div className="pt-6 border-t border-ink/15">
              <Eyebrow tone="steel">Revision log</Eyebrow>
              <dl className="mt-3 divide-y divide-ink/10 text-[13px]">
                <div className="flex justify-between py-2 first:pt-0">
                  <dt className="text-steel">Products measured</dt>
                  <dd className="text-ink tnum font-mono">
                    {String(picks.length).padStart(2, "0")}
                  </dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-steel">Sources cited</dt>
                  <dd className="text-ink tnum font-mono">
                    {String((post.sources ?? []).length).padStart(2, "0")}
                  </dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-steel">Read time</dt>
                  <dd className="text-ink tnum font-mono">
                    {String(post.readingTime).padStart(2, "0")} min
                  </dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-steel">Prices checked</dt>
                  <dd className="text-copper tnum font-mono">{post.updatedAt}</dd>
                </div>
                <div className="flex justify-between py-2 last:pb-0">
                  <dt className="text-steel">Re-check</dt>
                  <dd className="text-ink tnum font-mono">Quarterly</dd>
                </div>
              </dl>
            </div>
          </nav>
        }
      >
        <Breadcrumbs crumbs={crumbs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="copper">Comparison · ranked</Eyebrow>
          {hub && (
            <span className="caps-label text-steel">· {hub.shortName}</span>
          )}
        </div>

        <h1 className="display-headline mt-4 text-[2.1rem] md:text-[2.9rem] leading-[1.03]">
          {post.h1}
        </h1>

        <EvidencePill sourceCount={(post.sources ?? []).length} />

        <p className="mt-5 text-lg md:text-[1.2rem] text-charcoal/85 max-w-[60ch] leading-[1.5]">
          {post.description}
        </p>

        <Dateline className="mt-5" stamp={post.updatedAt} />

        <div className="mt-4">
          <EducationalBanner />
        </div>

        <div className="mt-4">
          <AffiliateDisclosure />
        </div>

        <div className="mt-8">
          <SpecRule />
        </div>

        {post.costPerUnit && (
          <CostPerUnitCallout
            metric={post.costPerUnit.metric}
            cheapest={post.costPerUnit.cheapest}
            median={post.costPerUnit.median}
            premium={post.costPerUnit.premium}
            note={post.costPerUnit.note}
            pricedAt={post.costPerUnit.pricedAt}
          />
        )}

        {/* Editor's pick — the hero callout */}
        {post.ourPick && (
          <section id="our-pick" className="mt-10">
            <div className="relative border border-copper/50 bg-paper">
              <div className="px-5 py-2 bg-copper/10 border-b-2 border-copper flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-sm bg-copper" />
                  <span className="caps-label text-copper-deep">
                    § 1 · Editor&apos;s pick — {post.ourPick.tier}
                  </span>
                </div>
                <span className="caps-label text-steel tnum">
                  Confidence: High
                </span>
              </div>
              <div className="px-6 md:px-8 py-6 md:py-8">
                <h2 className="font-sans text-[1.8rem] md:text-[2.1rem] text-ink leading-[1.08] tracking-tight">
                  {post.ourPick.name}
                </h2>
                <p className="mt-4 text-[16px] text-charcoal/90 leading-relaxed max-w-[62ch]">
                  {post.ourPick.reason}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Systems table — the data-dense ranking (primary display) */}
        {picks.length > 0 && (
          <section id="systems-table" className="mt-14">
            <div className="flex items-end justify-between flex-wrap gap-3 mb-3">
              <div>
                <Eyebrow tone="copper">§ 2 · Systems table</Eyebrow>
                <h2 className="font-sans text-[1.75rem] text-ink mt-2 leading-tight tracking-tight">
                  Every product, ranked.
                </h2>
              </div>
              <span className="caps-label text-steel tnum">
                {picks.length} rows · click to sort
              </span>
            </div>
            <ProductsSystemsTable
              products={picks}
              caption="Default sort: rank (editorial). Click any column header to re-sort."
            />
          </section>
        )}

        {/* Skips — named, not hinted at */}
        {skips.length > 0 && (
          <section id="skips" className="mt-14">
            <div className="border border-ink/20 bg-ink/[0.03]">
              <div className="px-5 py-2 bg-ink text-paper border-b-2 border-copper">
                <span className="caps-label !text-paper">
                  § 3 · What we&apos;d skip
                </span>
              </div>
              <div className="px-6 md:px-8 py-6 md:py-7">
                <h2 className="font-sans text-xl text-ink mb-5 leading-tight tracking-tight">
                  Named, with the reason.
                </h2>
                <div className="space-y-5">
                  {skips.map((p) => (
                    <div
                      key={p.rank}
                      className="pl-5 border-l-2 border-copper/60"
                    >
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="font-sans font-medium text-[17px] text-ink tracking-tight">
                          {p.name}
                        </h3>
                        <span className="tier-badge tier-badge-skip">
                          {p.tier}
                        </span>
                      </div>
                      <p className="text-[14.5px] text-charcoal/85 leading-relaxed">
                        {p.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Methodology */}
        <div id="methodology">
          <MethodologyBlock />
        </div>

        {/* FAQ */}
        {post.faq && post.faq.length > 0 && (
          <section id="faq" className="mt-14">
            <Eyebrow tone="copper">§ 5 · Questions</Eyebrow>
            <h2 className="font-sans text-[1.75rem] text-ink mt-2 mb-6 leading-tight tracking-tight">
              What people ask us most.
            </h2>
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              {post.faq.map((f, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-[3rem_1fr_2fr] gap-4 md:gap-6 py-5 first:pt-4 last:pb-4"
                >
                  <span className="font-mono text-[0.72rem] text-copper tnum uppercase tracking-[0.12em] pt-1.5">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <dt className="font-sans font-medium text-[17px] text-ink leading-snug">
                    {f.q}
                  </dt>
                  <dd className="text-[15px] text-charcoal/85 leading-relaxed">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* What would change our mind */}
        <div id="change-mind">
          <WhatWouldChangeOurMind>
            <p>
              A published Certificate of Analysis from a ranked brand that
              contradicts the label claim we scored against. An independent
              lab result (Clean Label, ConsumerLab) finding heavy-metal or
              amino-spiking failures on a current top pick. A peer-reviewed
              meta-analysis that shifts the leucine-per-dose threshold. Any
              of those triggers a dated revision within a week.
            </p>
          </WhatWouldChangeOurMind>
        </div>

        <DotRule className="my-14" />

        {/* Sources */}
        <div id="sources">
          <SourcesList sources={post.sources ?? []} />
        </div>

        <AuthorBio />
        {post.hub === "macros-protein" && <MacroCalculatorTeaser />}
        <RelatedPosts posts={related} />

        <div className="mt-14">
          <EmailCapture variant="end-of-article" />
        </div>
      </WideArticleShell>
    </>
  );
}
