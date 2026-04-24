import type { ReactNode } from "react";

/**
 * "What would change our mind" — the site's credibility tell. Inverts the
 * usual influencer frame: we name the counter-evidence that would flip our
 * ranking, up front. Copper left-rail + monospace caps label.
 */
export function WhatWouldChangeOurMind({ children }: { children: ReactNode }) {
  return (
    <section className="my-12 relative">
      <div className="flex items-center gap-3 mb-3">
        <span className="h-1.5 w-1.5 rounded-sm bg-copper" />
        <span className="caps-label text-copper">
          What would change our mind
        </span>
      </div>
      <div className="pl-5 border-l-2 border-copper/60 max-w-prose text-[15.5px] text-charcoal/90 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
