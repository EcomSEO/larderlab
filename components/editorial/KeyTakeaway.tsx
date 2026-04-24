import type { ReactNode } from "react";

type Variant = "key-takeaway" | "watch-out" | "method" | "our-take";

const config: Record<
  Variant,
  { label: string; border: string; bg: string; dot: string; tone: string }
> = {
  "key-takeaway": {
    label: "Key takeaway",
    border: "border-copper",
    bg: "bg-copper/[0.06]",
    dot: "bg-copper",
    tone: "text-copper-deep",
  },
  "watch-out": {
    label: "Watch out",
    border: "border-steel",
    bg: "bg-steel/[0.08]",
    dot: "bg-steel",
    tone: "text-steel",
  },
  method: {
    label: "Method note",
    border: "border-ink",
    bg: "bg-ink/[0.04]",
    dot: "bg-ink",
    tone: "text-ink",
  },
  "our-take": {
    label: "Our take",
    border: "border-copper",
    bg: "bg-paper-deep/60",
    dot: "bg-copper",
    tone: "text-ink",
  },
};

/**
 * Inline callout — engineering "note" block. Left-bar + monospace caps label.
 * The only inline "decoration" we allow in article bodies.
 */
export function KeyTakeaway({
  variant = "key-takeaway",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  const c = config[variant];
  return (
    <aside
      className={`my-8 border-l-[3px] ${c.border} ${c.bg} pl-5 pr-5 py-5`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`h-1.5 w-1.5 rounded-sm ${c.dot}`} />
        <span className={`caps-label ${c.tone}`}>{title ?? c.label}</span>
      </div>
      <div className="text-[15.5px] text-charcoal/90 leading-relaxed">
        {children}
      </div>
    </aside>
  );
}
