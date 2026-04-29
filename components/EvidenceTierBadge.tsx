"use client";

import { useState } from "react";
import {
  EVIDENCE_TIER_DESCRIPTIONS,
  getEvidenceTier,
  type EvidenceTier,
} from "@/lib/content/evidence-tiers";

/**
 * EvidenceTierBadge — A/B/C/D/F letter tier with popover rationale.
 *
 * Used on supplement-review posts. Reads from
 * lib/content/evidence-tiers.ts so the tier, rationale, and primary
 * sources are versioned alongside the post body.
 *
 * Visual: square letter badge (~24×24 px), tier-coloured. Click toggles
 * a popover with the published rationale + primary-source links. The
 * methodology page must state that affiliate revenue does not influence
 * tier — the badge is the same colour whether the brand is an
 * affiliate partner or not.
 */
const TIER_COLOR: Record<EvidenceTier, { bg: string; fg: string; ring: string }> = {
  A: { bg: "bg-emerald-700", fg: "text-white", ring: "ring-emerald-700/40" },
  B: { bg: "bg-emerald-500", fg: "text-white", ring: "ring-emerald-500/40" },
  C: { bg: "bg-amber-500", fg: "text-white", ring: "ring-amber-500/40" },
  D: { bg: "bg-orange-600", fg: "text-white", ring: "ring-orange-600/40" },
  F: { bg: "bg-rose-700", fg: "text-white", ring: "ring-rose-700/40" },
};

export function EvidenceTierBadge({
  slug,
  inline = false,
}: {
  /** Slug into lib/content/evidence-tiers.ts EVIDENCE_TIERS. */
  slug: string;
  /** When inline, render as a compact badge with no label suffix. */
  inline?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const entry = getEvidenceTier(slug);
  if (!entry) return null;
  const c = TIER_COLOR[entry.tier];
  const tierLabel = EVIDENCE_TIER_DESCRIPTIONS[entry.tier];

  return (
    <span className="relative inline-flex items-center gap-2 align-middle">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center justify-center w-6 h-6 rounded-sm font-mono font-semibold text-[12px] ring-1 ${c.bg} ${c.fg} ${c.ring} hover:ring-2 transition focus-visible:outline-2 focus-visible:outline-copper`}
        aria-expanded={open}
        aria-controls={`evidence-tier-pop-${slug}`}
        aria-label={`Evidence tier ${entry.tier} for ${entry.name}. Click for rationale.`}
      >
        {entry.tier}
      </button>
      {!inline && (
        <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-muted">
          Tier {entry.tier} evidence
        </span>
      )}

      {open && (
        <span
          id={`evidence-tier-pop-${slug}`}
          role="dialog"
          className="absolute z-20 top-full left-0 mt-2 w-[320px] max-w-[90vw] p-4 rounded-sm border border-ink/15 bg-paper shadow-lg text-[13px] leading-relaxed text-ink"
        >
          <span className="block font-mono uppercase tracking-[0.14em] text-[10px] text-copper mb-1">
            Tier {entry.tier} · {entry.name}
          </span>
          <span className="block text-ink/80 mb-2 italic">{tierLabel}</span>
          <span className="block">{entry.rationale}</span>
          {entry.primarySources.length > 0 && (
            <span className="block mt-3 pt-2 border-t border-ink/10">
              <span className="block font-mono uppercase tracking-[0.14em] text-[10px] text-ink-muted mb-1">
                Primary sources
              </span>
              <ul className="list-disc pl-4 space-y-0.5">
                {entry.primarySources.map((url) => (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-copper hover:text-ink underline decoration-copper/40 hover:decoration-ink"
                    >
                      {new URL(url).hostname.replace("www.", "")}
                    </a>
                  </li>
                ))}
              </ul>
            </span>
          )}
          <span className="block mt-3 pt-2 border-t border-ink/10 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
            Last reviewed {entry.lastReviewed}
          </span>
        </span>
      )}
    </span>
  );
}
