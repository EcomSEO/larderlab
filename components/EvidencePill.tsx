/**
 * EvidencePill — a Healthline-style "Evidence Based" trust pill that
 * sits just below the H1 on every article. Differentiates Larderlab
 * articles from the brand-and-promo-padded reviews dominating the SERP.
 *
 * Single visual element, no copy bloat. Per the brand book: numbers or
 * nothing. We surface the source count + reviewer credentials inline.
 */
export function EvidencePill({
  sourceCount,
  reviewer = "Dr. Soraya Khan, RDN",
}: {
  sourceCount: number;
  reviewer?: string;
}) {
  return (
    <div
      role="note"
      aria-label="Evidence and review status"
      className="mt-5 inline-flex items-center gap-3 px-3 py-1.5 border border-olive-deep/40 bg-olive/[0.06] text-olive-deep text-[12px] caps-label tnum"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-olive-deep" />
      <span>Evidence reviewed</span>
      <span className="text-olive-deep/60">·</span>
      <span className="text-olive-deep/85 normal-case font-mono">
        {String(sourceCount).padStart(2, "0")} sources cited
      </span>
      <span className="text-olive-deep/60">·</span>
      <span className="text-olive-deep/85 normal-case">{reviewer}</span>
    </div>
  );
}
