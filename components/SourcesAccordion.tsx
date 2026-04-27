import type { Source } from "@/lib/content/recipes";

const TAG_CLASS: Record<NonNullable<Source["tag"]>, string> = {
  USDA: "usda",
  "Peer-reviewed": "peer",
  Gov: "gov",
  Editorial: "ed",
};

/**
 * SourcesAccordion — collapsible numbered references at the foot of a
 * recipe or feature. USDA / peer-reviewed / gov entries get a tag pill.
 */
export function SourcesAccordion({ sources }: { sources: Source[] }) {
  if (!sources.length) return null;
  return (
    <details className="sources-wrap" id="sources">
      <summary>
        <span>Sources &amp; further reading ({sources.length})</span>
      </summary>
      <ol className="sources-list">
        {sources.map((s, i) => (
          <li key={i}>
            <a href={s.url} className="src-link" target="_blank" rel="noopener">
              {s.label}
            </a>
            {s.tag ? (
              <span className={`src-tag ${TAG_CLASS[s.tag]}`}>{s.tag}</span>
            ) : (
              <span />
            )}
          </li>
        ))}
      </ol>
    </details>
  );
}
