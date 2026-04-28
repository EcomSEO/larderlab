import { SITE } from "@/lib/content/site";
import { canonical } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export function ArticleJsonLd({
  path,
  headline,
  description,
  datePublished,
  dateModified,
}: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical(path) },
        datePublished,
        dateModified,
        author: { "@id": `${SITE.url}#author-team` },
        reviewedBy: { "@id": `${SITE.url}#reviewer-rao` },
        publisher: { "@id": `${SITE.url}#org` },
      }}
    />
  );
}
