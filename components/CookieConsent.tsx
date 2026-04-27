"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "cookieConsent";
export const CONSENT_VERSION = 1;
const THIRTEEN_MONTHS_MS = 13 * 30 * 24 * 60 * 60 * 1000;
const OPEN_PREFS_EVENT = "open-cookie-prefs";

export type CookieConsent = {
  ts: number;
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (typeof parsed.ts !== "number") return null;
    if (Date.now() - parsed.ts > THIRTEEN_MONTHS_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(c: CookieConsent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  } catch {
    // ignore quota / disabled storage
  }
}

/**
 * Public hook returning the current consent state (or null if not yet given).
 * Reactive to consent changes via storage events and the open-prefs event.
 */
export function useCookieConsent(): CookieConsent | null {
  const [state, setState] = useState<CookieConsent | null>(null);

  useEffect(() => {
    setState(readConsent());
    const onChange = () => setState(readConsent());
    window.addEventListener("storage", onChange);
    window.addEventListener(OPEN_PREFS_EVENT, onChange);
    return () => {
      window.removeEventListener("storage", onChange);
      window.removeEventListener(OPEN_PREFS_EVENT, onChange);
    };
  }, []);

  return state;
}

/**
 * GDPR-grade granular cookie consent banner.
 *
 * Bottom-anchored, mobile full-width. Three buttons of equal prominence
 * (Reject all / Customize / Accept all). Granular categories: Necessary
 * (locked), Analytics, Marketing. Persists to `localStorage.cookieConsent`,
 * 13-month re-prompt. Reopen via `window.dispatchEvent(new Event('open-cookie-prefs'))`.
 *
 * English-only copy for now — larderlab routes are not yet under [locale]/.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
    const onOpen = () => {
      setShowCustomize(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_PREFS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_PREFS_EVENT, onOpen);
  }, []);

  const persist = useCallback((next: CookieConsent) => {
    writeConsent(next);
    window.dispatchEvent(new Event("storage"));
    setVisible(false);
    setShowCustomize(false);
  }, []);

  const acceptAll = () =>
    persist({ ts: Date.now(), version: CONSENT_VERSION, necessary: true, analytics: true, marketing: true });
  const rejectAll = () =>
    persist({ ts: Date.now(), version: CONSENT_VERSION, necessary: true, analytics: false, marketing: false });
  const saveCustom = () =>
    persist({ ts: Date.now(), version: CONSENT_VERSION, necessary: true, analytics, marketing });

  if (!visible) return null;

  // Equal-prominence buttons. Reject and Accept share the same size and
  // weight — required by the EU compliance audit.
  const buttonBase =
    "min-h-[44px] px-4 py-2 rounded-sm text-sm font-semibold cursor-pointer transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-deep focus-visible:ring-offset-2";
  const primary = `${buttonBase} bg-olive-deep text-paper hover:bg-olive`;
  const secondary = `${buttonBase} bg-paper text-olive-deep border border-olive-deep hover:bg-olive/10`;
  const tertiary = `${buttonBase} bg-paper text-ink/80 border border-ink/30 hover:bg-ink/5`;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-surface-alt shadow-2xl"
    >
      <div className="mx-auto max-w-container px-6 py-5">
        {!showCustomize ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="md:max-w-[60%]">
              <h2 className="font-display text-lg text-olive-deep">
                We use cookies on larderlab.com
              </h2>
              <p className="mt-2 text-sm text-ink/85 leading-relaxed">
                Necessary cookies keep the site working. Analytics and
                marketing cookies are optional — they help us understand which
                content readers actually use. You can accept all, reject all,
                or pick category by category.{" "}
                <Link href="/cookies" className="underline text-olive-deep">
                  Read the full cookie policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
              <button type="button" onClick={rejectAll} className={secondary}>
                Reject all
              </button>
              <button type="button" onClick={() => setShowCustomize(true)} className={tertiary}>
                Customize
              </button>
              <button type="button" onClick={acceptAll} className={primary}>
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-display text-lg text-olive-deep">
              Cookie preferences
            </h2>
            <p className="mt-2 text-sm text-ink/85">
              Choose which cookie categories you allow. You can change this
              choice at any time from the footer.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  aria-label="Strictly necessary cookies (always on)"
                  className="mt-1 accent-olive-deep"
                />
                <span>
                  <strong className="text-olive-deep">Strictly necessary</strong>
                  <span className="block text-ink/75">
                    Required for the site to function — session continuity and
                    your saved cookie choice. Cannot be turned off.
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input
                  id="cc-analytics"
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 accent-olive-deep"
                />
                <label htmlFor="cc-analytics">
                  <strong className="text-olive-deep">Analytics</strong>
                  <span className="block text-ink/75">
                    Anonymised pageviews and reading patterns. Helps us improve
                    which recipes and guides we publish.
                  </span>
                </label>
              </li>
              <li className="flex items-start gap-3">
                <input
                  id="cc-marketing"
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 accent-olive-deep"
                />
                <label htmlFor="cc-marketing">
                  <strong className="text-olive-deep">Marketing</strong>
                  <span className="block text-ink/75">
                    Affiliate-link attribution and newsletter campaign
                    measurement. Not used currently.
                  </span>
                </label>
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
              <button type="button" onClick={rejectAll} className={secondary}>
                Reject all
              </button>
              <button type="button" onClick={saveCustom} className={tertiary}>
                Save choices
              </button>
              <button type="button" onClick={acceptAll} className={primary}>
                Accept all
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/** Convenience helper for callers that want to open the prefs panel. */
export function openCookiePrefs() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_PREFS_EVENT));
  }
}
