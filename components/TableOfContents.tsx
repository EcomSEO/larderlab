"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

/**
 * TableOfContents — sticky right-rail TOC for recipe pages with
 * IntersectionObserver scroll-spy. Mobile users get a top accordion.
 */
export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0% -55% 0%", threshold: [0, 0.3, 0.6, 1] },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [items]);

  return (
    <nav className="toc-sticky" aria-label="Table of contents">
      <h4>On this page</h4>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              aria-current={active === i.id ? "true" : undefined}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
