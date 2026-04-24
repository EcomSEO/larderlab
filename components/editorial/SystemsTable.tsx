"use client";

import { useMemo, useState } from "react";

/**
 * SystemsTable — the hero data component for larderlab.
 *
 * A dense, sortable comparison table built for Mark: sticky header,
 * tnum monospace numerics, confidence pill per row, copper accent line on
 * the header row. This is the primary ranking display on ComparisonTemplate —
 * replaces the big stack of "product cards" seen on plasticfreelab.
 *
 * Columns are declared; sorting is client-side, no dependencies.
 */

export type Confidence = "high" | "medium" | "low";

export type SystemsColumn<R> = {
  key: string;
  label: string;
  /** Render the cell. */
  render: (row: R) => React.ReactNode;
  /** Sort key — if omitted, column is not sortable. */
  sortValue?: (row: R) => number | string;
  /** Right-align numeric columns in monospace. */
  numeric?: boolean;
  /** Optional width hint. */
  widthClass?: string;
};

export type SystemsRow = {
  id: string;
  name: string;
  subline?: string;
  confidence?: Confidence;
  /** Free-form extras used by render functions in caller-supplied columns. */
  [key: string]: unknown;
};

export function SystemsTable<R extends SystemsRow>({
  columns,
  rows,
  caption,
  defaultSort,
  className = "",
}: {
  columns: SystemsColumn<R>[];
  rows: R[];
  caption?: string;
  defaultSort?: { key: string; dir: "asc" | "desc" };
  className?: string;
}) {
  const [sortKey, setSortKey] = useState<string | null>(
    defaultSort?.key ?? null
  );
  const [sortDir, setSortDir] = useState<"asc" | "desc">(
    defaultSort?.dir ?? "asc"
  );

  const sortedRows = useMemo(() => {
    if (!sortKey) return rows;
    const col = columns.find((c) => c.key === sortKey);
    if (!col?.sortValue) return rows;
    const getter = col.sortValue;
    const sign = sortDir === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const va = getter(a);
      const vb = getter(b);
      if (typeof va === "number" && typeof vb === "number")
        return (va - vb) * sign;
      return String(va).localeCompare(String(vb)) * sign;
    });
  }, [rows, sortKey, sortDir, columns]);

  function onHeaderClick(key: string) {
    const col = columns.find((c) => c.key === key);
    if (!col?.sortValue) return;
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  return (
    <figure className={`my-8 ${className}`}>
      {caption && (
        <figcaption className="mb-3 flex items-baseline justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="caps-label text-copper">Systems table</span>
            <span className="text-[15px] text-ink font-medium">{caption}</span>
          </div>
          <span className="caps-label text-steel tnum">
            {rows.length} rows · click a ▲ header to sort
          </span>
        </figcaption>
      )}

      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th className="num" style={{ width: "3rem" }}>
                #
              </th>
              {columns.map((col) => {
                const isSorted = sortKey === col.key;
                const sortable = Boolean(col.sortValue);
                return (
                  <th
                    key={col.key}
                    scope="col"
                    aria-sort={
                      isSorted
                        ? sortDir === "asc"
                          ? "ascending"
                          : "descending"
                        : undefined
                    }
                    className={`${col.numeric ? "num" : ""} ${col.widthClass ?? ""}`}
                  >
                    {sortable ? (
                      <button
                        type="button"
                        onClick={() => onHeaderClick(col.key)}
                        aria-label={
                          isSorted
                            ? `Sort by ${col.label}, currently ${sortDir === "asc" ? "ascending" : "descending"}. Click to reverse.`
                            : `Sort by ${col.label}`
                        }
                        className="inline-flex items-center gap-1.5 cursor-pointer hover:text-copper transition focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
                      >
                        <span>{col.label}</span>
                        <span aria-hidden className="text-copper text-[0.55rem]">
                          {isSorted ? (sortDir === "asc" ? "▲" : "▼") : "▲▼"}
                        </span>
                      </button>
                    ) : (
                      col.label
                    )}
                  </th>
                );
              })}
              <th style={{ width: "7.5rem" }}>Confidence</th>
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, i) => (
              <tr key={row.id}>
                <td className="num caps-label text-steel tnum">
                  {String(i + 1).padStart(2, "0")}
                </td>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={col.numeric ? "num" : ""}
                  >
                    {col.render(row)}
                  </td>
                ))}
                <td>
                  <ConfidencePill level={row.confidence ?? "medium"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export function ConfidencePill({ level }: { level: Confidence }) {
  const cls =
    level === "high"
      ? "conf-pill conf-high"
      : level === "low"
      ? "conf-pill conf-low"
      : "conf-pill conf-med";
  const label = level === "high" ? "High" : level === "low" ? "Low" : "Medium";
  return <span className={cls}>{label}</span>;
}

/* ---------------- Preset builder for Comparison posts ---------------- */

/**
 * Convert a `post.products` array into a SystemsTable with default columns:
 *   # · Product · Tier · Notes · Confidence
 */
export function ProductsSystemsTable({
  products,
  caption,
}: {
  products: Array<{
    rank: number;
    name: string;
    tier: string;
    summary: string;
  }>;
  caption?: string;
}) {
  type Row = SystemsRow & {
    rank: number;
    tier: string;
    summary: string;
  };

  const rows: Row[] = products.map((p, i) => ({
    id: `p-${i}`,
    rank: p.rank,
    name: p.name,
    tier: p.tier,
    summary: p.summary,
    confidence:
      p.tier.toLowerCase().includes("skip")
        ? "low"
        : p.rank <= 3
        ? "high"
        : "medium",
  }));

  const columns: SystemsColumn<Row>[] = [
    {
      key: "name",
      label: "Product",
      sortValue: (r) => r.name.toLowerCase(),
      render: (r) => (
        <div>
          <div className="cell-name">{r.name}</div>
        </div>
      ),
    },
    {
      key: "tier",
      label: "Tier",
      sortValue: (r) => r.tier.toLowerCase(),
      render: (r) => (
        <span className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-copper-deep">
          {r.tier}
        </span>
      ),
      widthClass: "min-w-[9rem]",
    },
    {
      key: "rank",
      label: "Rank",
      numeric: true,
      sortValue: (r) => r.rank,
      render: (r) => (
        <span className="tnum text-ink">
          {String(r.rank).padStart(2, "0")}
        </span>
      ),
      widthClass: "w-20",
    },
    {
      key: "summary",
      label: "Notes",
      render: (r) => (
        <p className="text-[14px] text-charcoal/85 leading-snug line-clamp-3 max-w-[40rem]">
          {r.summary}
        </p>
      ),
    },
  ];

  return (
    <SystemsTable
      columns={columns}
      rows={rows}
      caption={caption ?? "Ranked by default methodology (see §4 above)"}
      defaultSort={{ key: "rank", dir: "asc" }}
    />
  );
}
