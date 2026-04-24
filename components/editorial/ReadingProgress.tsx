"use client";

import { useEffect, useState } from "react";

/**
 * A thin copper reading-progress bar anchored to the top of the masthead,
 * paired with a tiny monospace readout of the current scroll percent.
 * Engineering-instrument feel — a telemetry gauge, not a spinner.
 *
 * Respects prefers-reduced-motion via CSS; the scroll listener is passive.
 */
export function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function update() {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const p = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
      setPct(Math.max(0, Math.min(100, p)));
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="flex items-center gap-3 w-full">
      <div
        className="relative flex-1 h-[2px] bg-paper/20 overflow-hidden"
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div
          className="reading-progress-bar"
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>
      <span
        className="font-mono text-[10px] tnum text-copper tracking-[0.08em] shrink-0 w-8 text-right"
        suppressHydrationWarning
      >
        {String(Math.round(pct)).padStart(2, "0")}%
      </span>
    </div>
  );
}
