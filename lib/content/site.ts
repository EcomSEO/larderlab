import type { Locale } from "@/i18n/routing";

export const SITE = {
  name: "Larderlab",
  url: "https://larderlab.com",
  tagline: "An engineered pantry for peptide users.",
  description:
    "Pantry architecture, supplement stacks, and food systems built for people on peptide therapy. Real-cost math. Cited research. No vendor sponsorships. The Examine.com-meets-Wirecutter for the peptide-supportive kitchen.",
  author: "The Larderlab Editorial Team",
  email: "hello@larderlab.com",
  launched: true,
  // Repositioning flag — peptide-user pantry/stack support.
  peptideContext: true,
  // Magazine masthead — surfaces in cover, footer imprint, etc.
  specRevision: "Issue 04",
  specVolume: "Vol. 1",
  specCode: "LL-2026-04",
  issueNumber: "04",
  issueDate: "April 2026",
} as const;

const TAGLINES: Partial<Record<Locale, string>> = {
  en: "An engineered pantry for peptide users.",
  de: "Eine durchdachte Vorratskammer für Peptid-Anwender.",
  fr: "Un garde-manger pensé pour les utilisateurs de peptides.",
  it: "Una dispensa progettata per chi usa peptidi.",
  es: "Una despensa diseñada para usuarios de péptidos.",
  nl: "Een doordachte voorraadkast voor peptide-gebruikers.",
  pl: "Przemyślana spiżarnia dla osób stosujących peptydy.",
  sv: "Ett genomtänkt skafferi för peptidanvändare.",
  pt: "Uma despensa pensada para utilizadores de péptidos.",
  ro: "O cămară gândită pentru utilizatorii de peptide.",
  cs: "Promyšlená spižírna pro uživatele peptidů.",
  no: "Et gjennomtenkt spiskammer for peptidbrukere.",
};

const DESCRIPTIONS: Partial<Record<Locale, string>> = {
  en: SITE.description,
  de: "Vorratskammer-Architektur, Supplement-Stacks und Ernährungssysteme für Menschen in einer Peptid-Therapie. Echte Kostenrechnung. Belegte Forschung. Keine bezahlten Empfehlungen.",
  fr: "Architecture du garde-manger, piles de compléments et systèmes alimentaires pensés pour les personnes en thérapie peptidique. Coûts réels. Recherche citée. Aucune sponsorisation.",
  it: "Architettura della dispensa, stack di integratori e sistemi alimentari pensati per chi segue una terapia con peptidi. Costi reali. Ricerca citata. Zero sponsorizzazioni.",
  es: "Arquitectura de despensa, stacks de suplementos y sistemas alimentarios pensados para personas en terapia con péptidos. Costes reales. Investigación citada. Sin patrocinios.",
  nl: "Voorraadkast-architectuur, supplement-stacks en voedingssystemen voor mensen op peptide-therapie. Echte kostenberekening. Onderbouwd onderzoek. Geen sponsoring.",
  pl: "Architektura spiżarni, stosy suplementów i systemy żywieniowe dla osób stosujących terapię peptydami. Realna matematyka kosztów. Cytowane badania. Bez sponsoringu.",
  sv: "Skafferi-arkitektur, kosttillskott-stackar och matsystem för människor i peptidterapi. Verklig kostnad. Citerad forskning. Inga sponsorer.",
  pt: "Arquitetura de despensa, stacks de suplementos e sistemas alimentares para quem está em terapia com péptidos. Cálculo real de custos. Investigação citada. Sem patrocínios.",
  ro: "Arhitectura cămării, stack-uri de suplimente și sisteme alimentare pentru persoanele în terapie cu peptide. Calcule reale de cost. Cercetare citată. Fără sponsorizări.",
  cs: "Architektura spižírny, stacky doplňků a potravinové systémy pro lidi na peptidové terapii. Reálná matematika nákladů. Citovaný výzkum. Žádné sponzorské vazby.",
  no: "Spiskammer-arkitektur, kosttilskudd-stacker og matsystemer for folk på peptidterapi. Reell kostnadsmatte. Sitert forskning. Ingen sponsing.",
};

export function siteTagline(locale: Locale): string {
  return TAGLINES[locale] ?? SITE.tagline;
}

export function siteDescription(locale: Locale): string {
  return DESCRIPTIONS[locale] ?? SITE.description;
}
