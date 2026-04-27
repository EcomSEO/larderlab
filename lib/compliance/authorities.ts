/**
 * National food-safety authorities + data protection authorities per
 * locale, used by the Footer's "Regulatory authorities" strip.
 *
 * For larderlab (nutrition / pantry / recipes) we list the food-safety
 * agency (not the medicines agency) plus the national DPA, as defined
 * by the April 2026 EU compliance audit.
 */

import type { Locale } from "@/i18n/routing";

export type Authority = { name: string; url: string };

export const AUTHORITIES_BY_LOCALE: Record<Locale, Authority[]> = {
  en: [{ name: "Food safety: contact your national food agency", url: "https://www.efsa.europa.eu/" }],
  de: [
    { name: "BVL (food safety)", url: "https://www.bvl.bund.de" },
    { name: "BfDI (data protection)", url: "https://www.bfdi.bund.de" },
  ],
  fr: [
    { name: "ANSES (sécurité sanitaire)", url: "https://www.anses.fr" },
    { name: "DGCCRF (consommation)", url: "https://www.economie.gouv.fr/dgccrf" },
    { name: "CNIL (données personnelles)", url: "https://www.cnil.fr" },
  ],
  it: [
    { name: "Ministero della Salute", url: "https://www.salute.gov.it" },
    { name: "Garante (privacy)", url: "https://www.garanteprivacy.it" },
  ],
  es: [
    { name: "AESAN (seguridad alimentaria)", url: "https://www.aesan.gob.es" },
    { name: "AEPD (protección de datos)", url: "https://www.aepd.es" },
  ],
  nl: [
    { name: "NVWA (voedselveiligheid)", url: "https://www.nvwa.nl" },
    { name: "AP (gegevensbescherming)", url: "https://www.autoriteitpersoonsgegevens.nl" },
  ],
  pl: [
    { name: "GIS (Inspekcja Sanitarna)", url: "https://www.gov.pl/web/gis" },
    { name: "UODO (ochrona danych)", url: "https://www.uodo.gov.pl" },
  ],
  sv: [
    { name: "Livsmedelsverket", url: "https://www.livsmedelsverket.se" },
    { name: "IMY (dataskydd)", url: "https://www.imy.se" },
  ],
  pt: [
    { name: "ASAE (segurança alimentar)", url: "https://www.asae.gov.pt" },
    { name: "CNPD (proteção de dados)", url: "https://www.cnpd.pt" },
  ],
  ro: [
    { name: "ANSVSA (siguranța alimentară)", url: "https://www.ansvsa.ro" },
    { name: "ANSPDCP (protecția datelor)", url: "https://www.dataprotection.ro" },
  ],
  cs: [
    { name: "SZPI (potravinářská inspekce)", url: "https://www.szpi.gov.cz" },
    { name: "ÚOOÚ (ochrana údajů)", url: "https://www.uoou.cz" },
  ],
  no: [
    { name: "Mattilsynet (mattrygghet)", url: "https://www.mattilsynet.no" },
    { name: "Datatilsynet (personvern)", url: "https://www.datatilsynet.no" },
  ],
};
