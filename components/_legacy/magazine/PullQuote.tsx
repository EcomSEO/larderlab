/**
 * Magazine pull quote. Big italic serif. On large screens the block
 * hangs slightly into the left margin — the way it would in print.
 */
export function PullQuote({ body, attrib }: { body: string; attrib?: string }) {
  return (
    <blockquote className="pull-quote">
      <span>“{body}”</span>
      {attrib && <span className="pull-quote-attrib">— {attrib}</span>}
    </blockquote>
  );
}
