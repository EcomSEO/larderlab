"use client";

import Link from "next/link";
import { useState } from "react";
import { hubs } from "@/lib/content/hubs";
import { Wordmark } from "./editorial/Wordmark";
import { Dateline } from "./editorial/Dateline";

/**
 * Engineering-wiki masthead: spec-revision-log strip on top, wordmark +
 * hover-dropdown navigation in the main bar. Copper underline hover on
 * every nav link.
 */
export function Header() {
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-paper/95 backdrop-blur sticky top-0 z-40 border-b border-ink/10">
      {/* Masthead strip — revision-log cue */}
      <div className="border-b border-ink/10 hidden md:block bg-ink text-paper">
        <div className="mx-auto max-w-wiki px-6 py-1.5 flex items-center justify-between">
          <Dateline className="!text-paper/80" />
          <div className="flex items-center gap-5 text-[11px] tracking-[0.14em] uppercase text-paper/75 font-mono">
            <Link href="/methodology" className="hover:text-copper transition">
              Methodology
            </Link>
            <span aria-hidden className="text-copper/60">·</span>
            <Link href="/editorial-standards" className="hover:text-copper transition">
              Editorial standards
            </Link>
            <span aria-hidden className="text-copper/60">·</span>
            <Link href="/about" className="hover:text-copper transition">
              About
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto max-w-wiki px-6 py-4 md:py-5 flex items-center justify-between gap-6">
        <Wordmark size="md" />

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <div
            className="relative"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button
              onClick={() => setGuidesOpen((v) => !v)}
              className="nav-link flex items-center gap-1"
              aria-expanded={guidesOpen}
              aria-haspopup="menu"
            >
              Guides
              <span aria-hidden className="text-copper">▾</span>
            </button>
            {guidesOpen && (
              <div
                role="menu"
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-paper border border-ink/20 rounded-sm shadow-spec p-3"
              >
                <div className="caps-label text-steel px-3 pb-2 border-b border-ink/10 mb-2">
                  The five hubs
                </div>
                {hubs.map((hub, i) => (
                  <Link
                    key={hub.slug}
                    href={`/guides/${hub.slug}`}
                    role="menuitem"
                    className="flex items-start gap-3 px-3 py-2.5 hover:bg-copper/[0.07] rounded-sm group"
                  >
                    <span className="font-mono text-[0.72rem] text-copper shrink-0 mt-1 tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-ink font-medium leading-tight">
                        {hub.name}
                      </div>
                      <div className="text-xs text-steel mt-0.5 leading-tight">
                        {hub.oneLiner}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/macro-calculator" className="nav-link">
            Calculator
          </Link>
          <Link href="/methodology" className="nav-link">
            Methodology
          </Link>
          <Link href="/newsletter" className="nav-link">
            Newsletter
          </Link>
          <Link href="/newsletter" className="btn-primary !py-2 !px-3.5">
            Get the planner →
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-ink"
          aria-label="Open menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-paper md:hidden overflow-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
            <Wordmark size="sm" />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-ink"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1">
            <div className="caps-label text-steel mb-2">The five hubs</div>
            {hubs.map((hub, i) => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-lg text-ink flex items-center gap-3 border-b border-ink/8"
              >
                <span className="font-mono text-sm text-copper tnum shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {hub.name}
              </Link>
            ))}
            <div className="caps-label text-steel mt-6 mb-2">Tools</div>
            <Link
              href="/macro-calculator"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-lg text-ink"
            >
              Macro Calculator
            </Link>
            <div className="caps-label text-steel mt-6 mb-2">The masthead</div>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="py-2 text-lg text-ink">
              About
            </Link>
            <Link href="/methodology" onClick={() => setMobileOpen(false)} className="py-2 text-lg text-ink">
              Methodology
            </Link>
            <Link href="/editorial-standards" onClick={() => setMobileOpen(false)} className="py-2 text-lg text-ink">
              Editorial standards
            </Link>
            <Link href="/newsletter" onClick={() => setMobileOpen(false)} className="py-2 text-lg text-ink">
              Newsletter
            </Link>
            <div className="mt-6">
              <Link
                href="/newsletter"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Get the planner →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
