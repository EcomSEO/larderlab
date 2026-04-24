"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/content/site";

/**
 * Live masthead timestamp — "Spec 01 · Rev. 01 · 2026-04-24 · 14:32".
 *
 * Renders a static placeholder on the server (matching the first line of
 * the engineering-log format) and upgrades on mount to tick every 60s.
 * The visual identity: monospace, caps-tracked, steel — like a status
 * line in a working engineering document.
 */
export function SpecRevisionClock({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    function format() {
      const d = new Date();
      const date = d.toISOString().slice(0, 10);
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      return `${date} · ${hh}:${mm}`;
    }
    setNow(format());
    const id = setInterval(() => setNow(format()), 60_000);
    return () => clearInterval(id);
  }, []);

  // Static fallback for SSR / pre-hydration — dateline-style, no time.
  const fallback = new Date().toISOString().slice(0, 10);

  return (
    <span
      className={`dateline flex items-center gap-2.5 tnum ${className}`}
      aria-live="off"
      suppressHydrationWarning
    >
      <span>{SITE.specVolume}</span>
      <span aria-hidden className="text-copper/70">·</span>
      <span>{SITE.specRevision}</span>
      <span aria-hidden className="text-copper/70">·</span>
      <span>{now ?? fallback}</span>
    </span>
  );
}
