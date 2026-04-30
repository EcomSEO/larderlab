import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing, defaultLocale } from "./routing";

/**
 * Locale resolution. The app/ tree is flat (no [locale] segment) and
 * we run no next-intl middleware, so locale must be resolved here:
 *
 *   1. NEXT_LOCALE cookie (set by the LocaleSwitcher when the reader
 *      picks a language)
 *   2. Accept-Language header (best-match against our supported set)
 *   3. defaultLocale (en)
 *
 * Every public URL stays canonical (no /de or /fr duplicates), so SEO
 * gets one indexable copy per slug; the cookie persists the reader's
 * choice across requests.
 */
export default getRequestConfig(async () => {
  const cookieLocale = cookies().get("NEXT_LOCALE")?.value;
  if (cookieLocale && hasLocale(routing.locales, cookieLocale)) {
    return loadLocale(cookieLocale);
  }

  const accept = headers().get("accept-language") ?? "";
  const headerLocale = pickBestMatch(accept, routing.locales);
  if (headerLocale) {
    return loadLocale(headerLocale);
  }

  return loadLocale(defaultLocale);
});

async function loadLocale(locale: string) {
  return {
    locale,
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  };
}

function pickBestMatch(accept: string, supported: readonly string[]): string | null {
  // Parse Accept-Language e.g. "fr-CH, fr;q=0.9, en;q=0.8, *;q=0.5"
  const parts = accept
    .split(",")
    .map((p) => {
      const [tag, ...rest] = p.trim().split(";");
      const qPart = rest.find((r) => r.trim().startsWith("q="));
      const q = qPart ? parseFloat(qPart.split("=")[1]) : 1;
      return { tag: tag.toLowerCase().split("-")[0], q };
    })
    .sort((a, b) => b.q - a.q);
  for (const { tag } of parts) {
    if (supported.includes(tag as never)) return tag;
  }
  return null;
}
