import Link from "next/link";
import type { Hub } from "@/lib/content/hubs";

export function HubCard({ hub, index }: { hub: Hub; index?: number }) {
  return (
    <Link
      href={`/guides/${hub.slug}`}
      className="group block p-6 bg-paper border border-ink/15 rounded-sm hover:border-copper/60 transition h-full"
    >
      {typeof index === "number" && (
        <div className="font-mono text-[0.72rem] text-copper tnum uppercase tracking-[0.12em] mb-2">
          H{String(index + 1).padStart(2, "0")}
        </div>
      )}
      <h3 className="font-sans font-semibold text-lg text-ink mb-2 tracking-tight">
        {hub.name}
      </h3>
      <p className="text-[13.5px] text-charcoal/75 leading-relaxed">
        {hub.oneLiner}
      </p>
      <span className="mt-4 inline-block text-copper text-[11px] font-mono uppercase tracking-[0.14em] group-hover:text-ink">
        Open hub →
      </span>
    </Link>
  );
}
