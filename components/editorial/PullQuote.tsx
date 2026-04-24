import type { ReactNode } from "react";

/**
 * Accent pull-quote — used sparingly. Fraunces italic is the *only* place
 * we let the voice soften. Copper hairline on the left edge, monospace
 * attribution, no decorative quote glyph.
 */
export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="my-10 md:my-12 border-l-2 border-copper pl-5 md:pl-7 max-w-2xl">
      <blockquote className="font-accent italic text-xl md:text-2xl leading-snug text-ink">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 caps-label">— {attribution}</figcaption>
      )}
    </figure>
  );
}
