"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

/**
 * Magazine paper-bar header. Cream paper, italic serif wordmark on the
 * left, thin uppercase tracked nav across the middle, and a small italic
 * issue indicator on the right. No dark bar, no rounded search field —
 * this is the inside front cover of a printed magazine.
 */
export function Header() {
  const t = useTranslations("header");
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { href: "/guides/macros-protein", label: t("navLarder") },
    { href: "/guides/pantry-systems", label: t("navPantry") },
    { href: "/guides/ingredient-deep-dives", label: t("navRecipes") },
    { href: "/guides/meal-prep", label: t("navFeatures") },
    { href: "/methodology", label: t("navMethodology") },
    { href: "/pipeline", label: t("navPipeline") },
  ];

  return (
    <header className="bg-cream/95 backdrop-blur sticky top-0 z-40 border-b border-ink/15">
      <div className="mx-auto max-w-spread px-6 py-4 md:py-5 flex items-center justify-between gap-6">
        {/* Wordmark — italic serif. */}
        <Link href="/" aria-label={t("logoAria")} className="group">
          <span className="font-display italic text-2xl md:text-[1.7rem] text-ink leading-none tracking-tight group-hover:text-tomato transition">
            Larderlab
          </span>
          <span className="sr-only">— {t("issue")}</span>
        </Link>

        {/* Centre nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {nav.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right indicator */}
        <div className="hidden md:flex items-center gap-4">
          <span className="byline-italic text-ink-soft hidden xl:inline">
            {t("issue")}
          </span>
          <span className="dept-label tnum">{t("issueDate")}</span>
        </div>

        {/* Mobile open button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-ink"
          aria-label={t("logoAria")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-cream lg:hidden overflow-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-ink/15">
            <span className="font-display italic text-2xl text-ink leading-none">
              Larderlab
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close"
              className="text-ink"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1">
            <div className="dept-label mb-3">{t("issue")} · {t("issueDate")}</div>
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-xl font-display text-ink border-b border-ink/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
