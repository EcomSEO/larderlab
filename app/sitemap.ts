import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content/site";
import { hubs } from "@/lib/content/hubs";
import { posts } from "@/lib/content/posts";
import { locales, defaultLocale } from "@/i18n/routing";
import { localeUrl } from "@/lib/seo";

/** Build hreflang `alternates.languages` for a given path. */
function alternatesFor(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of locales) out[l] = localeUrl(l, path);
  out["x-default"] = localeUrl(defaultLocale, path);
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const trustPages = [
    "/about",
    "/editorial-standards",
    "/privacy",
    "/terms",
    "/affiliate-disclosure",
    "/contact",
    "/newsletter",
    "/methodology",
    "/methodology/v1-2",
    "/pipeline",
  ];

  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: alternatesFor("/") },
    },
    ...hubs.map((h) => ({
      url: `${SITE.url}/guides/${h.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: { languages: alternatesFor(`/guides/${h.slug}`) },
    })),
    ...posts.map((p) => ({
      url: `${SITE.url}/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: "monthly" as const,
      priority: p.postType === "pillar" || p.postType === "comparison" ? 0.9 : 0.7,
      alternates: { languages: alternatesFor(`/${p.slug}`) },
    })),
    ...trustPages.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: { languages: alternatesFor(path) },
    })),
  ];
  return entries;
}
