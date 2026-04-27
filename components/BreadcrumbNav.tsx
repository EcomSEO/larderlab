import Link from "next/link";
import { BreadcrumbJsonLd } from "./schema/BreadcrumbJsonLd";

export type Crumb = { label: string; href?: string };

/**
 * BreadcrumbNav — Home › Recipes › Soups › Anti-inflammatory chicken soup.
 * Renders inline JSON-LD BreadcrumbList alongside the visible nav.
 */
export function BreadcrumbNav({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <nav className="bcrumb" aria-label="Breadcrumb">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <span key={i} className="contents">
              {c.href && !last ? (
                <Link href={c.href}>{c.label}</Link>
              ) : (
                <span className="current">{c.label}</span>
              )}
              {!last && <span className="sep" aria-hidden="true">›</span>}
            </span>
          );
        })}
      </nav>
      <BreadcrumbJsonLd crumbs={crumbs} />
    </>
  );
}
