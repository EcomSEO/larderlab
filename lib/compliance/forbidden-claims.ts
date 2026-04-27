/**
 * Forbidden health-claim patterns under the EU Health Claims
 * Regulation (EC) No 1924/2006, EFSA closed-list system, and
 * country-specific overlays documented in the April 2026 EU
 * compliance audit.
 *
 * Larderlab is a nutrition / pantry / recipes publisher. The list
 * below is adapted from the medical-content version: it keeps the
 * disease/treatment baseline and adds the food-specific tells —
 * "miracle cure", "detox", "fat-burning", "anti-aging", "boosts
 * immunity", etc. — that off-list nutrition copy reaches for.
 *
 * The audit script (scripts/audit-claims.mjs) consumes this list.
 * Patterns are matched as whole-ish words against rendered content.
 */

export type ForbiddenClaim = {
  /** Locale this pattern applies to. "*" applies everywhere. */
  locale: "*" | "en" | "de" | "fr" | "it" | "es" | "nl" | "pl" | "sv" | "pt" | "ro" | "cs" | "no";
  /** Word/phrase fragment, lowercased. Match is `\b<pattern>\b`-like. */
  pattern: string;
  /** Free-form description for audit output. */
  reason: string;
};

export const FORBIDDEN_CLAIMS: ForbiddenClaim[] = [
  // ─── English baseline ──────────────────────────────────────────
  // Disease/treatment language (universal across EU)
  { locale: "en", pattern: "treats", reason: "Medicinal claim ('treats <disease>') prohibited under Reg. 1924/2006." },
  { locale: "en", pattern: "cures", reason: "Medicinal claim ('cures') prohibited." },
  { locale: "en", pattern: "heals", reason: "Medicinal claim ('heals') prohibited." },
  { locale: "en", pattern: "prevents disease", reason: "Disease-prevention claim prohibited." },
  { locale: "en", pattern: "prevents cancer", reason: "Disease-prevention claim prohibited." },
  // Food-specific off-list claims
  { locale: "en", pattern: "boosts immunity", reason: "Off-list immunity claim — only specific EFSA wording allowed." },
  { locale: "en", pattern: "supports immune function", reason: "Off-list immunity claim — only specific EFSA wording allowed." },
  { locale: "en", pattern: "anti-inflammatory", reason: "Off-list claim for most foods (Reg. 1924/2006)." },
  { locale: "en", pattern: "detox", reason: "Off-list claim — Portugal and UK enforcement targets." },
  { locale: "en", pattern: "detoxifying", reason: "Off-list 'detox' family." },
  { locale: "en", pattern: "cleanse", reason: "Off-list 'detox' family." },
  { locale: "en", pattern: "miracle cure", reason: "Misleading commercial practice (UCPD)." },
  { locale: "en", pattern: "miracle food", reason: "No legal definition; misleading commercial practice." },
  { locale: "en", pattern: "superfood", reason: "No legal definition under Reg. 1924/2006; targeted in PT and UK." },
  { locale: "en", pattern: "fat-burning", reason: "Off-list weight-loss claim." },
  { locale: "en", pattern: "fat burning", reason: "Off-list weight-loss claim." },
  { locale: "en", pattern: "burns calories", reason: "Off-list weight-loss claim." },
  { locale: "en", pattern: "weight-loss guaranteed", reason: "Misleading commercial practice." },
  { locale: "en", pattern: "boosts metabolism", reason: "Off-list metabolic claim." },
  { locale: "en", pattern: "anti-aging", reason: "Off-list claim; targeted in PT (LifeVantage 2026)." },
  { locale: "en", pattern: "anti-ageing", reason: "Off-list claim; targeted in PT (LifeVantage 2026)." },
  { locale: "en", pattern: "lowers cholesterol", reason: "Only allowed for specific oat beta-glucan / phytosterol claims at EFSA-specified doses." },

  // ─── German ────────────────────────────────────────────────────
  { locale: "de", pattern: "behandelt", reason: "Heilbehauptung ('behandelt') unzulässig (HWG / Reg. 1924/2006)." },
  { locale: "de", pattern: "heilt", reason: "Heilbehauptung ('heilt') unzulässig." },
  { locale: "de", pattern: "verhindert krankheit", reason: "Krankheitsverhütungsangabe unzulässig." },
  { locale: "de", pattern: "stärkt das immunsystem", reason: "Off-list Immunangabe — nur EFSA-Wortlaut zulässig." },
  { locale: "de", pattern: "entgiftet", reason: "Off-list 'Detox'-Angabe." },
  { locale: "de", pattern: "detox", reason: "Off-list 'Detox'-Angabe." },
  { locale: "de", pattern: "fettverbrennend", reason: "Off-list Schlankheitsangabe." },
  { locale: "de", pattern: "anti-aging", reason: "Off-list Anti-Aging-Angabe." },
  { locale: "de", pattern: "wundermittel", reason: "Irreführende geschäftliche Handlung (UWG)." },

  // ─── French ────────────────────────────────────────────────────
  { locale: "fr", pattern: "traite", reason: "Allégation thérapeutique interdite (CJUE / Reg. 1924/2006)." },
  { locale: "fr", pattern: "guérit", reason: "Allégation thérapeutique interdite." },
  { locale: "fr", pattern: "prévient la maladie", reason: "Allégation de prévention de maladie interdite." },
  { locale: "fr", pattern: "booste l'immunité", reason: "Allégation hors-liste — seul le libellé EFSA est admis." },
  { locale: "fr", pattern: "détoxifie", reason: "Allégation 'détox' hors-liste." },
  { locale: "fr", pattern: "antioxydant miraculeux", reason: "Pratique commerciale trompeuse." },
  { locale: "fr", pattern: "anti-âge", reason: "Allégation hors-liste anti-âge." },
  { locale: "fr", pattern: "brûle-graisses", reason: "Allégation amaigrissante hors-liste." },

  // ─── Italian ───────────────────────────────────────────────────
  { locale: "it", pattern: "cura", reason: "Indicazione terapeutica vietata (Reg. 1924/2006 / Codice del Consumo)." },
  { locale: "it", pattern: "guarisce", reason: "Indicazione terapeutica vietata." },
  { locale: "it", pattern: "previene la malattia", reason: "Affermazione di prevenzione della malattia vietata." },
  { locale: "it", pattern: "rafforza il sistema immunitario", reason: "Indicazione fuori lista EFSA." },
  { locale: "it", pattern: "disintossica", reason: "Indicazione 'detox' fuori lista." },
  { locale: "it", pattern: "detox", reason: "Indicazione 'detox' fuori lista." },
  { locale: "it", pattern: "bruciagrassi", reason: "Indicazione dimagrante fuori lista." },
  { locale: "it", pattern: "anti-età", reason: "Indicazione anti-età fuori lista." },

  // ─── Spanish ───────────────────────────────────────────────────
  { locale: "es", pattern: "trata", reason: "Reivindicación terapéutica prohibida (Reg. 1924/2006)." },
  { locale: "es", pattern: "cura", reason: "Reivindicación terapéutica prohibida." },
  { locale: "es", pattern: "previene la enfermedad", reason: "Reivindicación de prevención de enfermedad prohibida." },
  { locale: "es", pattern: "refuerza el sistema inmunológico", reason: "Declaración fuera de la lista EFSA." },
  { locale: "es", pattern: "desintoxica", reason: "Declaración 'detox' fuera de lista." },
  { locale: "es", pattern: "quemagrasas", reason: "Declaración adelgazante fuera de lista." },
  { locale: "es", pattern: "antienvejecimiento", reason: "Declaración antienvejecimiento fuera de lista." },

  // ─── Dutch ─────────────────────────────────────────────────────
  { locale: "nl", pattern: "geneest", reason: "Medische claim ('geneest') verboden (Reg. 1924/2006)." },
  { locale: "nl", pattern: "behandelt ziekte", reason: "Medische claim verboden." },
  { locale: "nl", pattern: "versterkt het immuunsysteem", reason: "Off-list immuunclaim — enkel EFSA-bewoording toegestaan." },
  { locale: "nl", pattern: "ontgift", reason: "Off-list 'detox'-claim." },
  { locale: "nl", pattern: "detox", reason: "Off-list 'detox'-claim." },
  { locale: "nl", pattern: "vetverbrandend", reason: "Off-list afslankclaim." },
  { locale: "nl", pattern: "anti-aging", reason: "Off-list anti-aging claim." },

  // ─── Polish ────────────────────────────────────────────────────
  { locale: "pl", pattern: "leczy", reason: "Niedozwolone oświadczenie lecznicze (Rozp. 1924/2006)." },
  { locale: "pl", pattern: "zapobiega chorobie", reason: "Niedozwolone oświadczenie o zapobieganiu chorobie." },
  { locale: "pl", pattern: "wzmacnia odporność", reason: "Oświadczenie spoza listy EFSA." },
  { locale: "pl", pattern: "oczyszcza organizm", reason: "Oświadczenie 'detox' spoza listy." },
  { locale: "pl", pattern: "detoks", reason: "Oświadczenie 'detox' spoza listy." },
  { locale: "pl", pattern: "spalanie tłuszczu", reason: "Oświadczenie odchudzające spoza listy." },
  { locale: "pl", pattern: "anti-aging", reason: "Oświadczenie anti-aging spoza listy." },

  // ─── Swedish ───────────────────────────────────────────────────
  { locale: "sv", pattern: "botar", reason: "Otillåtet hälsopåstående (Förordning 1924/2006)." },
  { locale: "sv", pattern: "förebygger sjukdom", reason: "Otillåtet hälsopåstående om sjukdomsförebyggande." },
  { locale: "sv", pattern: "stärker immunförsvaret", reason: "Påstående utanför EFSA-listan." },
  { locale: "sv", pattern: "avgiftande", reason: "'Detox'-påstående utanför listan." },
  { locale: "sv", pattern: "detox", reason: "'Detox'-påstående utanför listan." },
  { locale: "sv", pattern: "fettförbrännande", reason: "Viktminskningspåstående utanför listan." },

  // ─── Portuguese ────────────────────────────────────────────────
  { locale: "pt", pattern: "trata", reason: "Alegação terapêutica proibida (Reg. 1924/2006)." },
  { locale: "pt", pattern: "cura", reason: "Alegação terapêutica proibida." },
  { locale: "pt", pattern: "previne a doença", reason: "Alegação de prevenção de doença proibida." },
  { locale: "pt", pattern: "reforça o sistema imunitário", reason: "Alegação fora da lista EFSA." },
  { locale: "pt", pattern: "desintoxica", reason: "Alegação 'detox' fora da lista." },
  { locale: "pt", pattern: "anti-envelhecimento", reason: "Alegação anti-envelhecimento explicitamente proibida (PT)." },
  { locale: "pt", pattern: "queima gordura", reason: "Alegação emagrecedora fora da lista." },

  // ─── Romanian ──────────────────────────────────────────────────
  { locale: "ro", pattern: "tratează", reason: "Mențiune terapeutică interzisă (Reg. 1924/2006)." },
  { locale: "ro", pattern: "vindecă", reason: "Mențiune terapeutică interzisă." },
  { locale: "ro", pattern: "previne boala", reason: "Mențiune privind prevenirea bolii interzisă." },
  { locale: "ro", pattern: "stimulează imunitatea", reason: "Afirmație în afara listei EFSA." },
  { locale: "ro", pattern: "detoxifiază", reason: "Afirmație 'detox' în afara listei." },
  { locale: "ro", pattern: "anti-îmbătrânire", reason: "Afirmație anti-îmbătrânire în afara listei." },

  // ─── Czech ─────────────────────────────────────────────────────
  { locale: "cs", pattern: "léčí", reason: "Léčebné tvrzení zakázáno (nařízení 1924/2006)." },
  { locale: "cs", pattern: "vyléčí", reason: "Léčebné tvrzení zakázáno." },
  { locale: "cs", pattern: "předchází nemoci", reason: "Tvrzení o prevenci nemoci zakázáno." },
  { locale: "cs", pattern: "posiluje imunitu", reason: "Tvrzení mimo seznam EFSA." },
  { locale: "cs", pattern: "detoxikuje", reason: "'Detox' tvrzení mimo seznam." },
  { locale: "cs", pattern: "spaluje tuky", reason: "Tvrzení o hubnutí mimo seznam." },
  { locale: "cs", pattern: "proti stárnutí", reason: "Tvrzení anti-aging mimo seznam." },

  // ─── Norwegian ─────────────────────────────────────────────────
  { locale: "no", pattern: "helbreder", reason: "Helsepåstand om helbredelse forbudt (forordning 1924/2006)." },
  { locale: "no", pattern: "forebygger sykdom", reason: "Helsepåstand om sykdomsforebygging forbudt." },
  { locale: "no", pattern: "styrker immunforsvaret", reason: "Påstand utenfor EFSA-listen." },
  { locale: "no", pattern: "detoks", reason: "'Detox'-påstand utenfor listen." },
  { locale: "no", pattern: "fettforbrennende", reason: "Slankepåstand utenfor listen." },
];

/**
 * Returns the regex used by the audit script. Boundary handling is
 * lenient (Unicode word characters around the pattern) so that
 * accented forms still match.
 */
export function buildClaimRegex(pattern: string): RegExp {
  const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}([^\\p{L}\\p{N}]|$)`, "iu");
}
