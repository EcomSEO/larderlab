import type { Locale } from "@/i18n/routing";

export const SITE = {
  name: "Larderlab",
  url: "https://larderlab.com",
  tagline: "An engineered larder for the modern cook.",
  description:
    "Larderlab is a quietly thoughtful food magazine. Pantry architecture, ingredient deep-dives, recipe cards, and the slow craft of stocking a kitchen well. Independent, cited, never paid for placement.",
  author: "The Larderlab Editorial Team",
  email: "hello@larderlab.com",
  launched: true,
  // Magazine masthead — surfaces in cover, footer imprint, etc.
  specRevision: "Issue 04",
  specVolume: "Vol. 1",
  specCode: "LL-2026-04",
  issueNumber: "04",
  issueDate: "April 2026",
} as const;

const TAGLINES: Partial<Record<Locale, string>> = {
  en: "An engineered larder for the modern cook.",
  de: "Eine durchdachte Vorratskammer für die moderne Küche.",
  fr: "Un garde-manger pensé pour la cuisine moderne.",
  it: "Una dispensa ben pensata per la cucina di oggi.",
  es: "Una despensa bien pensada para la cocina de hoy.",
  nl: "Een doordachte voorraadkast voor de moderne keuken.",
  pl: "Mądrze pomyślana spiżarnia dla nowoczesnej kuchni.",
  sv: "Ett genomtänkt skafferi för det moderna köket.",
  pt: "Uma despensa bem pensada para a cozinha de hoje.",
  ro: "O cămară gândită pentru bucătăria de azi.",
  cs: "Promyšlená spižírna pro dnešní kuchyni.",
  no: "Et gjennomtenkt spiskammer for det moderne kjøkkenet.",
};

const DESCRIPTIONS: Partial<Record<Locale, string>> = {
  en: SITE.description,
  de: "Larderlab ist ein leises, durchdachtes Food-Magazin. Vorratskammer-Architektur, Zutaten-Reportagen, Rezeptkarten und das langsame Handwerk, eine Küche gut zu bestücken.",
  fr: "Larderlab est une revue culinaire posée. Architecture du garde-manger, enquêtes sur les ingrédients, fiches-recettes et l'artisanat lent qui consiste à bien tenir une cuisine.",
  it: "Larderlab è una rivista di cucina pacata. Architettura della dispensa, approfondimenti sugli ingredienti, schede-ricetta e l'artigianato lento di tenere bene una cucina.",
  es: "Larderlab es una revista de cocina serena. Arquitectura de la despensa, enquêtes de ingredientes, fichas de recetas y el oficio lento de tener bien una cocina.",
  nl: "Larderlab is een rustig, doordacht food-magazine. Voorraadkast-architectuur, ingredient-reportages, receptkaarten en het langzame ambacht van een goed gevulde keuken.",
  pl: "Larderlab to spokojne, przemyślane pismo kulinarne. Architektura spiżarni, reportaże o składnikach, karty przepisów i powolne rzemiosło dobrze prowadzonej kuchni.",
  sv: "Larderlab är en lågmäld matcultur-tidskrift. Skafferi-arkitektur, råvaru-reportage, receptkort och det långsamma hantverket att hålla ett kök väl.",
  pt: "A Larderlab é uma revista de cozinha pausada. Arquitetura da despensa, reportagens sobre ingredientes, fichas de receitas e o ofício lento de manter uma cozinha bem provida.",
  ro: "Larderlab este o revistă de bucătărie cu tonalitate calmă. Arhitectura cămării, reportaje despre ingrediente, fișe de rețete și meșteșugul lent al unei bucătării bine ținute.",
  cs: "Larderlab je tichý, promyšlený kulinářský časopis. Architektura spižírny, reportáže o surovinách, karty receptů a pomalé řemeslo dobře vedené kuchyně.",
  no: "Larderlab er et lavmælt, gjennomtenkt matmagasin. Spiskammer-arkitektur, råvare-reportasjer, oppskriftskort og det langsomme håndverket å holde et kjøkken godt.",
};

export function siteTagline(locale: Locale): string {
  return TAGLINES[locale] ?? SITE.tagline;
}

export function siteDescription(locale: Locale): string {
  return DESCRIPTIONS[locale] ?? SITE.description;
}
