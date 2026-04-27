/**
 * LastTestedLine — small "Last tested {date}" line, 14px secondary.
 * Mirrors injectcompass LastReviewedLine. The friendly date format is
 * derived once on the server.
 */
export function LastTestedLine({ date }: { date: string }) {
  const d = new Date(date);
  const fmt = isNaN(d.valueOf())
    ? date
    : d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
  return <span className="last-tested">Last tested {fmt}</span>;
}
