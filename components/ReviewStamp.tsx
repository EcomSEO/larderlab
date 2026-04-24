/**
 * Review stamp — engineering-log line under an H1. Monospace,
 * all-caps, steel. "Rev. · YYYY-MM-DD · N min · author."
 */
export function ReviewStamp({
  updatedAt,
  readingTime,
  author = "The Larderlab Team",
}: {
  updatedAt: string;
  readingTime: number;
  author?: string;
}) {
  return (
    <p className="caps-label text-steel tnum">
      Rev. · {updatedAt} · {String(readingTime).padStart(2, "0")} min ·{" "}
      <span className="text-ink">{author}</span>
    </p>
  );
}
