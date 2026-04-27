import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

/**
 * Country-appropriate affiliate-disclosure label, rendered as a small
 * pill placed adjacent to (or wrapping) a commercial link.
 *
 * Per the EU compliance audit, the label MUST be in the local language
 * — English fallbacks are not acceptable in DE/FR/IT/ES/NL/PL/SE/PT/
 * RO/CZ/NO. Locale derived from the active request locale by default;
 * can be overridden via the `locale` prop.
 */
export const affiliateLabelByLocale: Record<Locale, string> = {
  en: "Sponsored",
  de: "Werbung",
  fr: "Publicité",
  it: "Pubblicità",
  es: "Publicidad",
  nl: "Advertentie",
  pl: "Reklama",
  sv: "Annons",
  pt: "Publicidade",
  ro: "Publicitate",
  cs: "Reklama",
  no: "Annonse",
};

export async function AffiliateLabel({ locale: localeProp }: { locale?: Locale } = {}) {
  const locale = (localeProp ?? ((await getLocale()) as Locale)) as Locale;
  const label = affiliateLabelByLocale[locale] ?? affiliateLabelByLocale.en;
  return (
    <span
      className="inline-flex items-center align-middle rounded-sm bg-amber-100 text-amber-900 border border-amber-300 px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide"
      aria-label={label}
      data-affiliate-label
    >
      {label}
    </span>
  );
}

/** Sync, client-safe variant: requires the caller to pass locale. */
export function AffiliateLabelClient({ locale }: { locale: Locale }) {
  const label = affiliateLabelByLocale[locale] ?? affiliateLabelByLocale.en;
  return (
    <span
      className="inline-flex items-center align-middle rounded-sm bg-amber-100 text-amber-900 border border-amber-300 px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide"
      aria-label={label}
      data-affiliate-label
    >
      {label}
    </span>
  );
}
