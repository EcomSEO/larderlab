/**
 * PeptideContextCallout
 *
 * Light-touch reframe block that sits at the top of the article body —
 * after the byline strip, before the prose. Names how the post applies
 * in peptide context (e.g. magnesium glycinate for GLP-1 nausea + sleep)
 * without rewriting the underlying analysis.
 *
 * Olive-50 background, ink text, small-caps eyebrow. Educational tone —
 * never prescriptive. Pairs with the global EducationalBanner that
 * already advises prescriber consultation.
 */
export function PeptideContextCallout({ context }: { context: string }) {
  return (
    <aside
      role="note"
      aria-label="Peptide context"
      className="mt-6 mb-2 border-l-4 border-olive-deep bg-olive/10 px-5 py-4 rounded-sm"
    >
      <div className="caps-label text-olive-deep mb-1.5 text-[0.72rem] tracking-[0.14em]">
        Peptide context
      </div>
      <p className="text-[14.5px] text-ink leading-relaxed max-w-[62ch]">
        {context}
      </p>
    </aside>
  );
}
