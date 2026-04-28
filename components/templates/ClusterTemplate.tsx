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
import { ArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, SpecRule } from "../editorial/DotRule";
import { KeyTakeaway } from "../editorial/KeyTakeaway";
import { Dateline } from "../editorial/Dateline";
import { EvidencePill } from "../EvidencePill";
import { MacroCalculatorTeaser } from "../MacroCalculatorTeaser";

export function ClusterTemplate({ post }: { post: Post }) {
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

      <ArticleShell>
        <Breadcrumbs crumbs={crumbs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="copper">Explainer</Eyebrow>
          {hub && (
            <span className="caps-label text-steel">· {hub.shortName}</span>
          )}
        </div>

        <h1 className="display-headline mt-4 text-[2rem] md:text-[2.6rem] leading-[1.05]">
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

        <p className="drop-cap mt-9 text-[1.06rem] leading-[1.7] text-charcoal/90 max-w-[62ch]">
          {post.description}
        </p>

        <KeyTakeaway variant="key-takeaway" title="The short answer">
          The TL;DR sits here for readers who need the answer now. The rest of
          the page earns that answer — with sources, the real-world dose, and
          the layer of the literature that&apos;s actually being argued.
        </KeyTakeaway>

        {post.faq && post.faq.length > 0 && (
          <section className="mt-12">
            <Eyebrow tone="copper">Questions</Eyebrow>
            <h2 className="font-sans text-[1.65rem] text-ink mt-2 mb-5 leading-tight tracking-tight">
              What people ask us next.
            </h2>
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              {post.faq.map((f, i) => (
                <div key={i} className="grid md:grid-cols-[3rem_1fr] gap-4 py-5 first:pt-4 last:pb-4">
                  <span className="font-mono text-[0.72rem] text-copper tnum uppercase tracking-[0.12em] pt-1.5">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <dt className="font-sans font-medium text-[17px] text-ink leading-snug mb-2 tracking-tight">
                      {f.q}
                    </dt>
                    <dd className="text-[15px] text-charcoal/85 leading-relaxed">
                      {f.a}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </section>
        )}

        <DotRule className="my-12" />

        <SourcesList sources={post.sources ?? []} />
        <AuthorBio />
        {post.hub === "macros-protein" && <MacroCalculatorTeaser />}
        <RelatedPosts posts={related} />

        <div className="mt-12">
          <EmailCapture variant="end-of-article" />
        </div>
      </ArticleShell>
    </>
  );
}
