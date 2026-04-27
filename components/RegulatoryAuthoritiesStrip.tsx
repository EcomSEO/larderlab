import { getLocale } from "next-intl/server";
import { AUTHORITIES_BY_LOCALE } from "@/lib/compliance/authorities";
import type { Locale } from "@/i18n/routing";

/**
 * Small footer block listing the country's food-safety + data
 * protection authorities. Signals regulatory awareness; sourced
 * from `lib/compliance/authorities.ts`. Falls back to the EFSA
 * generic line for locales without a dedicated entry.
 */
export async function RegulatoryAuthoritiesStrip() {
  const locale = (await getLocale()) as Locale;
  const items = AUTHORITIES_BY_LOCALE[locale] ?? AUTHORITIES_BY_LOCALE.en;
  return (
    <div className="py-6 border-t border-rule">
      <h3 className="eyebrow mb-2">Regulatory authorities</h3>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-ink-muted">
        {items.map((a) => (
          <li key={a.url}>
            <a
              href={a.url}
              target="_blank"
              rel="noopener"
              className="hover:text-olive-deep underline-offset-2 hover:underline"
            >
              {a.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
