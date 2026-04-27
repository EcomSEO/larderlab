/**
 * LastTestedLine — small secondary text that anchors the recipe to a date.
 * "Last tested April 26, 2026 · Independent test kitchen · No brand sponsorships."
 */
export function LastTestedLine({ date }: { date: string }) {
  const d = new Date(date);
  const fmt = d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <p className="last-tested">
      Last tested {fmt} · Independent test kitchen · No brand sponsorships.
    </p>
  );
}
