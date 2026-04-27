import Link from "next/link";
import { BreadcrumbJsonLd } from "./schema/BreadcrumbJsonLd";

export type Crumb = { label: string; href?: string };

/**
 * BreadcrumbNav — clean breadcrumb with inline JSON-LD BreadcrumbList.
 * Home › Recipes › Anti-inflammatory › Chicken Soup.
 */
export function BreadcrumbNav({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="bcrumb">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <span key={i} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href}>{c.label}</Link>
              ) : (
                <span className={last ? "current" : undefined}>{c.label}</span>
              )}
              {!last && <span className="sep" aria-hidden>›</span>}
            </span>
          );
        })}
      </nav>
      <BreadcrumbJsonLd crumbs={crumbs} />
    </>
  );
}
