#!/usr/bin/env node
/**
 * Forbidden-claims audit for larderlab.com.
 *
 * Scans editorial content for medicinal / disease-claim language and
 * EFSA-closed-list off-list claims (detox, anti-ageing, fat-burning,
 * superfood, etc.) prohibited under EU Regulation 1924/2006 and the
 * country-specific overlays documented in lib/compliance/forbidden-claims.ts.
 *
 * Exits 1 if any violation is found — suitable for pre-commit / CI.
 *
 * Add the comment `audit-claims:allow` on a line to allowlist that line
 * plus the next 8 lines (e.g. for legitimate quotes inside legal pages
 * that intentionally reference the forbidden vocabulary).
 */

import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

// Inline copy of the forbidden patterns (kept in sync with
// lib/compliance/forbidden-claims.ts). We inline them rather than
// import the .ts source to keep this script dependency-free.
const FORBIDDEN = [
  // English
  { locale: "en", pattern: "treats" },
  { locale: "en", pattern: "cures" },
  { locale: "en", pattern: "heals" },
  { locale: "en", pattern: "prevents disease" },
  { locale: "en", pattern: "prevents cancer" },
  { locale: "en", pattern: "boosts immunity" },
  { locale: "en", pattern: "supports immune function" },
  { locale: "en", pattern: "anti-inflammatory" },
  { locale: "en", pattern: "detox" },
  { locale: "en", pattern: "detoxifying" },
  { locale: "en", pattern: "cleanse" },
  { locale: "en", pattern: "miracle cure" },
  { locale: "en", pattern: "miracle food" },
  { locale: "en", pattern: "superfood" },
  { locale: "en", pattern: "fat-burning" },
  { locale: "en", pattern: "fat burning" },
  { locale: "en", pattern: "burns calories" },
  { locale: "en", pattern: "weight-loss guaranteed" },
  { locale: "en", pattern: "boosts metabolism" },
  { locale: "en", pattern: "anti-aging" },
  { locale: "en", pattern: "anti-ageing" },
  { locale: "en", pattern: "lowers cholesterol" },
  // German
  { locale: "de", pattern: "behandelt" },
  { locale: "de", pattern: "heilt" },
  { locale: "de", pattern: "verhindert krankheit" },
  { locale: "de", pattern: "stärkt das immunsystem" },
  { locale: "de", pattern: "entgiftet" },
  { locale: "de", pattern: "detox" },
  { locale: "de", pattern: "fettverbrennend" },
  { locale: "de", pattern: "anti-aging" },
  { locale: "de", pattern: "wundermittel" },
  // French
  { locale: "fr", pattern: "traite" },
  { locale: "fr", pattern: "guérit" },
  { locale: "fr", pattern: "prévient la maladie" },
  { locale: "fr", pattern: "booste l'immunité" },
  { locale: "fr", pattern: "détoxifie" },
  { locale: "fr", pattern: "antioxydant miraculeux" },
  { locale: "fr", pattern: "anti-âge" },
  { locale: "fr", pattern: "brûle-graisses" },
  // Italian
  { locale: "it", pattern: "cura" },
  { locale: "it", pattern: "guarisce" },
  { locale: "it", pattern: "previene la malattia" },
  { locale: "it", pattern: "rafforza il sistema immunitario" },
  { locale: "it", pattern: "disintossica" },
  { locale: "it", pattern: "detox" },
  { locale: "it", pattern: "bruciagrassi" },
  { locale: "it", pattern: "anti-età" },
  // Spanish
  { locale: "es", pattern: "trata" },
  { locale: "es", pattern: "cura" },
  { locale: "es", pattern: "previene la enfermedad" },
  { locale: "es", pattern: "refuerza el sistema inmunológico" },
  { locale: "es", pattern: "desintoxica" },
  { locale: "es", pattern: "quemagrasas" },
  { locale: "es", pattern: "antienvejecimiento" },
  // Dutch
  { locale: "nl", pattern: "geneest" },
  { locale: "nl", pattern: "behandelt ziekte" },
  { locale: "nl", pattern: "versterkt het immuunsysteem" },
  { locale: "nl", pattern: "ontgift" },
  { locale: "nl", pattern: "detox" },
  { locale: "nl", pattern: "vetverbrandend" },
  { locale: "nl", pattern: "anti-aging" },
  // Polish
  { locale: "pl", pattern: "leczy" },
  { locale: "pl", pattern: "zapobiega chorobie" },
  { locale: "pl", pattern: "wzmacnia odporność" },
  { locale: "pl", pattern: "oczyszcza organizm" },
  { locale: "pl", pattern: "detoks" },
  { locale: "pl", pattern: "spalanie tłuszczu" },
  { locale: "pl", pattern: "anti-aging" },
  // Swedish
  { locale: "sv", pattern: "botar" },
  { locale: "sv", pattern: "förebygger sjukdom" },
  { locale: "sv", pattern: "stärker immunförsvaret" },
  { locale: "sv", pattern: "avgiftande" },
  { locale: "sv", pattern: "detox" },
  { locale: "sv", pattern: "fettförbrännande" },
  // Portuguese
  { locale: "pt", pattern: "trata" },
  { locale: "pt", pattern: "cura" },
  { locale: "pt", pattern: "previne a doença" },
  { locale: "pt", pattern: "reforça o sistema imunitário" },
  { locale: "pt", pattern: "desintoxica" },
  { locale: "pt", pattern: "anti-envelhecimento" },
  { locale: "pt", pattern: "queima gordura" },
  // Romanian
  { locale: "ro", pattern: "tratează" },
  { locale: "ro", pattern: "vindecă" },
  { locale: "ro", pattern: "previne boala" },
  { locale: "ro", pattern: "stimulează imunitatea" },
  { locale: "ro", pattern: "detoxifiază" },
  { locale: "ro", pattern: "anti-îmbătrânire" },
  // Czech
  { locale: "cs", pattern: "léčí" },
  { locale: "cs", pattern: "vyléčí" },
  { locale: "cs", pattern: "předchází nemoci" },
  { locale: "cs", pattern: "posiluje imunitu" },
  { locale: "cs", pattern: "detoxikuje" },
  { locale: "cs", pattern: "spaluje tuky" },
  { locale: "cs", pattern: "proti stárnutí" },
  // Norwegian
  { locale: "no", pattern: "helbreder" },
  { locale: "no", pattern: "forebygger sykdom" },
  { locale: "no", pattern: "styrker immunforsvaret" },
  { locale: "no", pattern: "detoks" },
  { locale: "no", pattern: "fettforbrennende" },
];

function buildRegex(pattern) {
  const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}([^\\p{L}\\p{N}]|$)`, "iu");
}

const TARGETS = [
  "lib/content/posts.ts",
  "lib/content/recipes.ts",
  "lib/content/hubs.ts",
];

// Walk app/**/page.tsx (larderlab is on root routing, not [locale]/).
function walk(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.isFile() && entry.name.endsWith(".tsx")) out.push(p);
  }
}
const tsxPages = [];
walk(path.join(repoRoot, "app"), tsxPages);
TARGETS.push(...tsxPages.map((p) => path.relative(repoRoot, p)));

// Per-locale dictionary files (if they exist).
const dictDir = path.join(repoRoot, "i18n", "dictionaries");
if (fs.existsSync(dictDir)) {
  for (const f of fs.readdirSync(dictDir)) {
    if (f.endsWith(".json")) TARGETS.push(`i18n/dictionaries/${f}`);
  }
}

// Files we explicitly skip — they are *about* the forbidden vocabulary
// (legal pages, compliance config, the audit script itself).
const SKIP = new Set(
  [
    "lib/compliance/forbidden-claims.ts",
    "lib/compliance/authorities.ts",
    "scripts/audit-claims.mjs",
    "lib/content/privacy-policy.ts",
    "lib/content/terms.ts",
    "lib/content/cookie-policy.ts",
    "lib/content/affiliate-disclosure.ts",
    "lib/content/impressum.ts",
    "app/privacy/page.tsx",
    "app/terms/page.tsx",
    "app/cookies/page.tsx",
    "app/impressum/page.tsx",
    "app/affiliate-disclosure/page.tsx",
    "app/editorial-standards/page.tsx",
  ].map((p) => path.normalize(p))
);

let violations = 0;
for (const rel of TARGETS) {
  if (SKIP.has(path.normalize(rel))) continue;
  const full = path.join(repoRoot, rel);
  if (!fs.existsSync(full)) continue;
  const text = fs.readFileSync(full, "utf8");

  let locales;
  const dictMatch = rel.match(/^i18n\/dictionaries\/([a-z]{2})\.json$/);
  if (dictMatch) locales = new Set([dictMatch[1]]);
  else locales = new Set(["en"]);

  const lines = text.split(/\r?\n/);
  // Allowlist: a line containing `audit-claims:allow` allowlists itself
  // plus the next 8 lines.
  const allow = new Array(lines.length).fill(false);
  for (let i = 0; i < lines.length; i++) {
    if (/audit-claims:allow/.test(lines[i])) {
      const end = Math.min(lines.length - 1, i + 8);
      for (let j = i; j <= end; j++) allow[j] = true;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (allow[i]) continue;
    for (const f of FORBIDDEN) {
      if (!locales.has(f.locale)) continue;
      const re = buildRegex(f.pattern);
      if (re.test(line)) {
        // Lines that explicitly enumerate forbidden vocabulary for
        // awareness (style guide, disclaimer copy, editorial-standards
        // "things we don't do" lists) are suppressed.
        if (
          /forbidden|prohibited|verboten|interdit|vietat|prohibido|verboden|zakazany|förbjuden|proibido|interzis|zakázán|forbudt|disclaimer|claim|under our masthead|things we (do not|don't|never)|we (never|don't) (use|publish|sell|accept)|nicht verwenden|n'utilisons pas|non usiamo|no usamos|niet gebruiken|wörter wie|benutzen|usare «|usar «|gebruik geen|użyj słów|använd ord/iu.test(
            line
          )
        ) {
          continue;
        }
        // Narrowly-scoped non-medicinal usages.
        if (f.pattern === "heals" && /bruise|wound|skin|bone|cut/i.test(line)) continue;
        if (
          f.pattern === "cura" &&
          f.locale === "it" &&
          /a cura di|cura della|cura di sé/i.test(line)
        )
          continue;
        if (f.pattern === "trata" && /trata-se|trata de|maltrata/i.test(line)) continue;
        // "Anti-inflammatory" used as a category tag for foods is a
        // descriptive recipe / ingredient classifier, not a medical
        // claim. The pattern still flags free-text usage like
        // "this herb is anti-inflammatory and treats pain".
        if (f.pattern === "anti-inflammatory" && /category|tag|filter|"Anti-inflammatory"/i.test(line)) continue;

        violations++;
        const trimmed = line.trim().slice(0, 160);
        console.log(
          `[${f.locale}] ${rel}:${i + 1}  pattern="${f.pattern}"  → ${trimmed}`
        );
      }
    }
  }
}

if (violations > 0) {
  console.error(`\nFAIL: ${violations} forbidden-claim match(es) found.`);
  process.exit(1);
} else {
  console.log("OK: no forbidden-claim patterns detected.");
}
