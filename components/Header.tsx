"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { MegaMenu, type MegaMenuColumn } from "./MegaMenu";

/**
 * Larderlab — healthline-grade publisher header.
 *
 * Sticky white bar, h-16. Olive wordmark "larderlab" left (Source Serif 4
 * weight 600 — NOT italic), MegaMenu nav center, 320px rounded
 * olive-bordered search, "Newsletter" olive-pill right, 1px subtle
 * border-bottom.
 *
 * Mobile: hamburger drawer + collapsed search icon.
 */

type SimpleNav = { href: string; label: string };
type MegaNav = {
  label: string;
  megaMenu: MegaMenuColumn[];
  featured?: { eyebrow: string; title: string; href: string; dek: string };
};
type NavItem = SimpleNav | MegaNav;

function isMega(item: NavItem): item is MegaNav {
  return (item as MegaNav).megaMenu !== undefined;
}

const NAV: NavItem[] = [
  {
    label: "Pantry",
    megaMenu: [
      {
        title: "Pantry essentials",
        items: [
          { label: "Olive oil", href: "/guides/ingredient-deep-dives" },
          { label: "Beans & legumes", href: "/guides/ingredient-deep-dives" },
          { label: "Salt & seasoning", href: "/guides/ingredient-deep-dives" },
        ],
      },
      {
        title: "Storage & systems",
        items: [
          { label: "Pantry architecture", href: "/guides/pantry-systems" },
          { label: "Shelf-life math", href: "/guides/pantry-systems" },
          { label: "Fermentation rules", href: "/guides/meal-prep" },
        ],
      },
      {
        title: "Sourcing",
        items: [
          { label: "What we buy", href: "/guides/ingredient-deep-dives" },
          { label: "Affiliate disclosure", href: "/affiliate-disclosure" },
          { label: "Methodology", href: "/methodology" },
        ],
      },
    ],
    featured: {
      eyebrow: "Trending",
      title: "Why olive oil ages in the bottle — and how to slow it",
      href: "/guides/ingredient-deep-dives",
      dek: "Oxidation, dating, and what the literature actually says.",
    },
  },
  {
    label: "Recipes",
    megaMenu: [
      {
        title: "By time",
        items: [
          { label: "30-minute pantry suppers", href: "/recipes" },
          { label: "Weekend projects", href: "/recipes" },
          { label: "Confit & preserve", href: "/recipes" },
        ],
      },
      {
        title: "By style",
        items: [
          { label: "Anti-inflammatory", href: "/recipes" },
          { label: "Mediterranean", href: "/recipes" },
          { label: "One-pan dinners", href: "/recipes" },
        ],
      },
      {
        title: "By ingredient",
        items: [
          { label: "Beans", href: "/recipes" },
          { label: "Tomatoes", href: "/recipes" },
          { label: "Olive oil", href: "/recipes" },
        ],
      },
    ],
  },
  {
    label: "Nutrition",
    megaMenu: [
      {
        title: "Macronutrients",
        items: [
          { label: "Protein essentials", href: "/macro-calculator" },
          { label: "Carb quality guide", href: "/macro-calculator" },
          { label: "Healthy fats", href: "/guides/ingredient-deep-dives" },
        ],
      },
      {
        title: "Micronutrients",
        items: [
          { label: "Magnesium-rich foods", href: "/guides/ingredient-deep-dives" },
          { label: "Iron & B12 sources", href: "/guides/ingredient-deep-dives" },
          { label: "Fiber primer", href: "/guides/pantry-systems" },
        ],
      },
      {
        title: "Eating patterns",
        items: [
          { label: "Mediterranean", href: "/guides/meal-prep" },
          { label: "Anti-inflammatory", href: "/guides/meal-prep" },
          { label: "Gut health", href: "/guides/meal-prep" },
        ],
      },
    ],
  },
  {
    label: "Tools",
    megaMenu: [
      {
        title: "Calculators",
        items: [
          { label: "Macro Calculator", href: "/macro-calculator" },
        ],
      },
      {
        title: "Reference",
        items: [
          { label: "Methodology v1.2", href: "/methodology/v1-2" },
          { label: "Editorial standards", href: "/editorial-standards" },
          { label: "Pipeline", href: "/pipeline" },
        ],
      },
    ],
  },
  { href: "/newsletter", label: "Newsletter" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t = useTranslations("header");

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMega = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMega(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMega(null), 120);
  };

  const activeItem = activeMega
    ? NAV.find((n) => isMega(n) && n.label === activeMega)
    : null;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-rule">
      <div className="mx-auto max-w-container px-6 h-16 flex items-center gap-4">
        <Link
          href="/"
          aria-label={(() => { try { return t("logoAria"); } catch { return "Larderlab — home"; } })()}
          className="flex items-center gap-2.5 group shrink-0 focus-visible:outline-none focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm"
        >
          <LarderMark />
          <span className="font-display text-[19px] font-semibold tracking-tight text-olive-700 group-hover:text-olive transition-colors duration-fast">
            larderlab
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-0.5 flex-1 min-w-0"
          aria-label="Primary"
          onMouseLeave={scheduleClose}
        >
          {NAV.map((item) => {
            if (isMega(item)) {
              const isOpen = activeMega === item.label;
              return (
                <div
                  key={item.label}
                  className="relative shrink-0"
                  onMouseEnter={() => openMega(item.label)}
                  onFocus={() => openMega(item.label)}
                >
                  <button
                    type="button"
                    className={`whitespace-nowrap px-3 py-2 text-[14px] font-medium rounded-md transition-colors duration-fast focus-visible:outline-none focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                      isOpen ? "text-olive-700 bg-olive-50" : "text-ink hover:text-olive-700 hover:bg-olive-50"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                  >
                    {item.label}
                  </button>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap shrink-0 px-3 py-2 text-[14px] font-medium text-ink hover:text-olive-700 hover:bg-olive-50 transition-colors duration-fast rounded-md focus-visible:outline-none focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/newsletter"
            className="hidden md:inline-flex items-center h-9 px-4 rounded-pill bg-olive text-white text-[14px] font-semibold hover:bg-olive-600 active:bg-olive-700 transition-colors duration-fast focus-visible:outline-none focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Newsletter
          </Link>

          <button
            type="button"
            aria-label="Search"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-ink rounded-md"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-ink rounded-md"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      {activeItem && isMega(activeItem) && (
        <div
          className="absolute left-0 right-0 bg-white border-b border-rule shadow-notebook-hover"
          onMouseEnter={() => openMega(activeItem.label)}
          onMouseLeave={scheduleClose}
        >
          <MegaMenu columns={activeItem.megaMenu} featured={activeItem.featured} />
        </div>
      )}

      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 bg-white overflow-auto lg:hidden"
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-rule">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
              <LarderMark />
              <span className="font-display text-[18px] font-semibold text-olive-deep">larderlab</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <form role="search" action="/recipes" className="flex items-center w-full h-12 px-4 rounded-pill bg-white border border-olive-100 mb-6">
              <SearchIcon className="w-5 h-5 text-ink-muted shrink-0" />
              <input
                type="search"
                name="q"
                placeholder="Search recipes, ingredients…"
                className="ml-3 bg-transparent w-full text-[15px] outline-none"
                aria-label="Search the site"
              />
            </form>
            <nav className="flex flex-col">
              {NAV.map((item) => {
                if (isMega(item)) {
                  return (
                    <details key={item.label} className="border-b border-rule">
                      <summary className="cursor-pointer flex items-center justify-between py-4 text-[18px] font-semibold text-ink list-none">
                        {item.label}
                        <ChevronDown />
                      </summary>
                      <div className="pb-4 pl-2">
                        {item.megaMenu.map((col) => (
                          <div key={col.title} className="mb-3">
                            <div className="eyebrow mb-2">{col.title}</div>
                            <ul className="space-y-2">
                              {col.items.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[15px] text-ink hover:text-olive-deep"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </details>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-4 text-[18px] font-semibold text-ink border-b border-rule"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/newsletter"
              onClick={() => setMobileOpen(false)}
              className="mt-8 inline-flex w-full items-center justify-center h-12 px-4 rounded-pill bg-olive text-white text-[15px] font-semibold"
            >
              Newsletter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function LarderMark() {
  // Olive leaf-circle. Botanical, distinct from injectcompass compass.
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="12" stroke="#5C6F3C" strokeWidth="1.6" />
      <path
        d="M14 6c-3 2.5-3 7 0 12 3-5 3-9.5 0-12z"
        fill="#5C6F3C"
      />
      <path
        d="M14 18c0-2 0-4 0-6"
        stroke="#FFFFFF"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="9" cy="9" r="6" />
      <line x1="13.5" y1="13.5" x2="17.5" y2="17.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <polyline points="3,6 8,11 13,6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
