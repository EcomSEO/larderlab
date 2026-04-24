import { SITE } from "@/lib/content/site";

function todayStamp() {
  const d = new Date();
  // ISO-like: 2026-04-24. The engineering-log format — not "April 24, 2026."
  return d.toISOString().slice(0, 10);
}

/**
 * Spec-revision-log dateline. Rendered in the masthead strip + the top of
 * every article.
 *
 *   Spec 01 · Rev. 01 · 2026-04-24 · larderlab.com
 *
 * Monospace, all-caps tracking, steel.
 */
export function Dateline({
  className = "",
  stamp,
}: {
  className?: string;
  stamp?: string;
}) {
  return (
    <div className={`dateline flex items-center gap-3 flex-wrap ${className}`}>
      <span>{SITE.specVolume}</span>
      <span aria-hidden className="text-copper/70">·</span>
      <span>{SITE.specRevision}</span>
      <span aria-hidden className="text-copper/70">·</span>
      <span className="tnum">{stamp ?? todayStamp()}</span>
      <span aria-hidden className="text-copper/70">·</span>
      <span>{SITE.url.replace(/^https?:\/\//, "")}</span>
    </div>
  );
}
