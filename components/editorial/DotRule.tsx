/**
 * Three rule variants used through the site:
 *  - DotRule       — subtle centered copper dots for end-of-section
 *  - ThinRule      — hairline divider
 *  - SpecRule      — copper-over-steel engineering hairline (hero / hub masthead)
 */

export function DotRule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`flex items-center gap-3 text-copper/40 ${className}`}
    >
      <span className="h-px flex-1 bg-ink/15" />
      <span className="h-1 w-1 rounded-sm bg-copper" />
      <span className="h-1 w-1 rounded-sm bg-copper/60" />
      <span className="h-1 w-1 rounded-sm bg-copper" />
      <span className="h-px flex-1 bg-ink/15" />
    </div>
  );
}

export function ThinRule({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`h-px w-full bg-ink/10 ${className}`} />;
}

/**
 * Copper-segment-over-steel-hairline. Reads as "start of spec sheet."
 * Use at the top of every hub masthead + major section break.
 */
export function SpecRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative h-[3px] w-full ${className}`}>
      <span className="absolute inset-y-0 left-0 w-12 bg-copper" />
      <span className="absolute inset-y-[1px] left-12 right-0 bg-ink/15" />
    </div>
  );
}
