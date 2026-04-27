import { defineRouting } from "next-intl/routing";

/**
 * Locale routing for larderlab.com.
 *
 * Twelve locales — English (default, root path) + DE, FR, IT, ES, NL, PL,
 * SV, PT (PT-PT), RO, CS, NO. Each ships its own dictionary in
 * `i18n/dictionaries/<code>.json` written in the magazine register —
 * editorial, warm, sentence-level translation work, not machine output.
 *
 * Slugs stay in English for phase one. Translated slugs come later.
 */
export const locales = [
  "en",
  "de",
  "fr",
  "it",
  "es",
  "nl",
  "pl",
  "sv",
  "pt",
  "ro",
  "cs",
  "no",
] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});
