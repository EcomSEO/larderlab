import Link from "next/link";

export type CategoryTile = {
  href: string;
  eyebrow: string;
  title: string;
  dek: string;
  count: number;
  /** Two hex colors for the warm gradient placeholder. */
  gradient: [string, string];
};

/**
 * CategoryTileGrid — the home departments grid. 4 → 2 → 1 cols.
 * Each tile lifts on hover, has a 16:10 plate placeholder, eyebrow,
 * Fraunces H3, two-line dek, recipe count.
 */
export function CategoryTileGrid({
  tiles,
  eyebrow,
  heading,
  dek,
}: {
  tiles: CategoryTile[];
  eyebrow: string;
  heading: string;
  dek?: string;
}) {
  return (
    <section className="border-b border-[--color-border-subtle] bg-[--color-cream-lighter]">
      <div className="mx-auto max-w-spread px-6 py-14 md:py-16">
        <div className="mb-8">
          <div className="dept-label mb-3">{eyebrow}</div>
          <h2 className="font-display italic font-medium text-3xl md:text-[2.4rem] leading-[1.1]">
            {heading}
          </h2>
          {dek && <p className="dek mt-3 max-w-[58ch]">{dek}</p>}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiles.map((t) => (
            <Link key={t.href} href={t.href} className="cat-tile">
              <div
                className="tile-photo"
                style={{
                  background: `linear-gradient(135deg, ${t.gradient[0]} 0%, ${t.gradient[1]} 100%)`,
                }}
                aria-hidden="true"
              />
              <div className="tile-body">
                <div className="tile-eyebrow">{t.eyebrow}</div>
                <h3>{t.title}</h3>
                <p className="tile-dek">{t.dek}</p>
                <div className="tile-count">
                  {String(t.count).padStart(2, "0")} recipes &amp; features
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
