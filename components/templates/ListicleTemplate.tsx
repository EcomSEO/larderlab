import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { Breadcrumbs } from "../Breadcrumbs";
import { EducationalBanner } from "../EducationalBanner";
import { PeptideContextCallout } from "../PeptideContextCallout";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { ItemListJsonLd } from "../schema/ItemListJsonLd";
import { ArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, SpecRule } from "../editorial/DotRule";
import { RankNumeral } from "../editorial/RankNumeral";
import { Dateline } from "../editorial/Dateline";

export function ListicleTemplate({ post }: { post: Post }) {
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
      {post.items && (
        <ItemListJsonLd
          items={post.items.map((i) => ({ rank: i.rank, name: i.name }))}
        />
      )}

      <ArticleShell>
        <Breadcrumbs crumbs={crumbs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="copper">Listicle · engineered</Eyebrow>
          {hub && (
            <span className="caps-label text-steel">· {hub.shortName}</span>
          )}
        </div>

        <h1 className="display-headline mt-4 text-[2rem] md:text-[2.7rem] leading-[1.05]">
          {post.h1}
        </h1>

        <Dateline className="mt-5" stamp={post.updatedAt} />

        {post.peptideContext && (
          <PeptideContextCallout context={post.peptideContext} />
        )}

        <div className="mt-6">
          <EducationalBanner />
        </div>

        <div className="mt-2">
          <SpecRule />
        </div>

        <p className="mt-8 text-[1.06rem] md:text-[1.12rem] leading-[1.65] text-charcoal/90 max-w-[60ch]">
          {post.description}
        </p>

        {post.items && post.items.length > 0 && (
          <ol className="mt-12 space-y-0 border-t border-ink/15">
            {post.items.map((item) => (
              <li
                key={item.rank}
                className="group grid grid-cols-[auto_1fr] gap-5 md:gap-7 py-6 border-b border-ink/10"
              >
                <div className="pt-1">
                  <RankNumeral n={item.rank} />
                </div>
                <div>
                  <h2 className="font-sans font-semibold text-[1.3rem] md:text-[1.45rem] text-ink leading-tight tracking-tight group-hover:text-copper transition">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-[15px] text-charcoal/85 leading-relaxed max-w-[62ch]">
                    {item.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}

        <DotRule className="my-14" />

        <SourcesList sources={post.sources ?? []} />
        <AuthorBio />
        <RelatedPosts posts={related} />

        <div className="mt-14">
          <EmailCapture variant="end-of-article" />
        </div>
      </ArticleShell>
    </>
  );
}
