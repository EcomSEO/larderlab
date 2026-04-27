import Link from "next/link";

export type CategoryTile = {
  href: string;
  eyebrow: string;
  title: string;
  dek: string;
  count: number;
  /** Two hex colors for the soft-olive gradient placeholder. */
  gradient: [string, string];
};

/**
 * CategoryTileGrid — clean-medical departments grid. 4 → 2 → 1 cols.
 * White cards lift on hover. Inter sans throughout. Olive eyebrow.
 */
export function CategoryTileGrid({
  tiles,
  eyebrow,
  heading,
  dek,
  id,
}: {
  tiles: CategoryTile[];
  eyebrow: string;
  heading: string;
  dek?: string;
  id?: string;
}) {
  return (
    <section id={id} className="border-b border-rule bg-white">
      <div className="mx-auto max-w-container px-6 py-16 md:py-20">
        <div className="max-w-2xl mb-10">
          <div className="eyebrow mb-3">{eyebrow}</div>
          <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-ink tracking-tight">
            {heading}
          </h2>
          {dek && (
            <p className="mt-3 text-[16px] text-ink-muted leading-relaxed">
              {dek}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((t) => (
            <Link key={t.href + t.title} href={t.href} className="cat-tile">
              <div
                className="tile-photo"
                style={{
                  background: `linear-gradient(135deg, ${t.gradient[0]} 0%, ${t.gradient[1]} 100%)`,
                }}
                aria-hidden
              />
              <div className="tile-body">
                <div className="tile-eyebrow">{t.eyebrow}</div>
                <h3>{t.title}</h3>
                <p className="tile-dek">{t.dek}</p>
                <div className="tile-count">
                  {String(t.count).padStart(2, "0")} recipes & guides
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
