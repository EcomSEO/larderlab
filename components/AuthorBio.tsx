export function AuthorBio() {
  return (
    <section className="mt-12 border border-ink/15 bg-paper-deep/40">
      <div className="px-5 py-2 bg-ink text-paper border-b-2 border-copper">
        <span className="caps-label !text-paper">
          The Larderlab Team · byline
        </span>
      </div>
      <div className="px-6 py-5">
        <p className="text-charcoal/85 leading-relaxed text-[14.5px]">
          The Larderlab Team builds evidence-led frameworks for eating,
          lifting, and stocking a kitchen. We cite every claim. We publish the
          spreadsheet when possible. We buy what we review at retail price.
          When new data lands, we revise with a dated note.
        </p>
      </div>
    </section>
  );
}
