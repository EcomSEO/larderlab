import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { Breadcrumbs } from "../Breadcrumbs";
import { EducationalBanner } from "../EducationalBanner";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { WideArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, SpecRule } from "../editorial/DotRule";
import { KeyTakeaway } from "../editorial/KeyTakeaway";
import { Dateline } from "../editorial/Dateline";
import { MethodologyBlock } from "../editorial/MethodologyBlock";
import { EvidencePill } from "../EvidencePill";
import { MacroCalculatorTeaser } from "../MacroCalculatorTeaser";

export function PillarTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#hub-index" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

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

      <WideArticleShell
        aside={
          <nav className="space-y-6">
            <div>
              <Eyebrow tone="steel">On this spec</Eyebrow>
              <ul className="mt-3 space-y-2 text-[14px]">
                <li>
                  <a href="#lede" className="text-ink hover:text-copper">
                    § 1. The short answer
                  </a>
                </li>
                {post.faq && post.faq.length > 0 && (
                  <li>
                    <a href="#faq" className="text-ink hover:text-copper">
                      § 2. Questions
                    </a>
                  </li>
                )}
                <li>
                  <a href="#sources" className="text-ink hover:text-copper">
                    § 3. Sources
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-ink/15">
              <Eyebrow tone="steel">Revision log</Eyebrow>
              <dl className="mt-3 divide-y divide-ink/10 text-[13px]">
                <div className="flex justify-between py-2 first:pt-0">
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
                  <dt className="text-steel">First published</dt>
                  <dd className="text-ink tnum font-mono">{post.publishedAt}</dd>
                </div>
                <div className="flex justify-between py-2 last:pb-0">
                  <dt className="text-steel">Last revised</dt>
                  <dd className="text-copper tnum font-mono">{post.updatedAt}</dd>
                </div>
              </dl>
            </div>
          </nav>
        }
      >
        <Breadcrumbs crumbs={crumbs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="copper">Guide · pillar</Eyebrow>
          {hub && (
            <span className="caps-label text-steel">· {hub.shortName}</span>
          )}
        </div>

        <h1
          id="lede"
          className="display-headline mt-4 text-[2.35rem] md:text-[3.1rem] leading-[1.03]"
        >
          {post.h1}
        </h1>

        <EvidencePill sourceCount={(post.sources ?? []).length} />

        <Dateline className="mt-5" stamp={post.updatedAt} />

        <div className="mt-6">
          <EducationalBanner />
        </div>

        <div className="mt-2">
          <SpecRule />
        </div>

        <p className="drop-cap mt-10 text-[1.08rem] md:text-[1.12rem] leading-[1.7] text-charcoal/90 max-w-[62ch]">
          {post.description}
        </p>

        <KeyTakeaway variant="key-takeaway" title="What this guide covers">
          The best available evidence, the target ranges the literature
          actually supports, and the cost-basis math for hitting them — all
          cited with a DOI or publication year per claim.
        </KeyTakeaway>

        {post.ourPick && (
          <section className="my-10 border border-copper/40 bg-copper/[0.05]">
            <div className="px-5 py-2 bg-copper/10 border-b border-copper/30">
              <span className="caps-label text-copper-deep">
                Editor&apos;s pick · {post.ourPick.tier}
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-sans text-xl text-ink tracking-tight">
                {post.ourPick.name}
              </h2>
              <p className="mt-3 text-[15px] text-charcoal/90 leading-relaxed">
                {post.ourPick.reason}
              </p>
            </div>
          </section>
        )}

        {post.faq && post.faq.length > 0 && (
          <section id="faq" className="mt-14">
            <Eyebrow tone="copper">§ 2 · Questions</Eyebrow>
            <h2 className="font-sans text-[1.75rem] text-ink mt-2 mb-6 leading-tight tracking-tight">
              The questions people actually bring us.
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

        <DotRule className="my-14" />

        <MethodologyBlock />

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
