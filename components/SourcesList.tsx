export function SourcesList({
  sources,
}: {
  sources: Array<{ label: string; url: string }>;
}) {
  if (!sources || sources.length === 0) return null;
  return (
    <section className="mt-12 pt-8 border-t border-ink/15">
      <div className="flex items-baseline justify-between mb-5 flex-wrap gap-2">
        <div>
          <div className="caps-label text-copper">Sources</div>
          <h2 className="font-sans text-xl text-ink mt-1 tracking-tight">
            Every claim, cited.
          </h2>
        </div>
        <span className="caps-label text-steel tnum">
          {String(sources.length).padStart(2, "0")} refs
        </span>
      </div>
      <ol className="divide-y divide-ink/10 border-y border-ink/10">
        {sources.map((s, i) => (
          <li
            key={i}
            className="grid grid-cols-[3rem_1fr] gap-4 py-3 first:pt-3 last:pb-3"
          >
            <span className="font-mono text-[0.72rem] text-copper tnum uppercase tracking-[0.12em] pt-1">
              [{String(i + 1).padStart(2, "0")}]
            </span>
            <a
              href={s.url}
              rel="noopener"
              target="_blank"
              className="text-[14px] text-ink hover:text-copper transition leading-snug"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
