/**
 * Thin olive-tinted strip that sits above article and recipe bodies.
 *
 * Sits ABOVE the publisher disclaimer in the footer — it does not
 * replace it. Larderlab register: educational, not medical.
 */
export function EducationalBanner() {
  return (
    <div
      role="note"
      aria-label="Educational use disclaimer"
      className="border-l-4 border-olive-deep bg-olive/10 text-ink px-4 py-3 text-sm leading-relaxed mb-6 rounded-sm"
    >
      <strong className="font-semibold text-olive-deep">Educational use only.</strong>{" "}
      Larderlab content is educational. Pantry, macro, and supplement
      guidance is not a substitute for medical advice. Consult your
      prescriber before starting, stopping, or stacking any supplement
      alongside peptide therapy.
    </div>
  );
}
