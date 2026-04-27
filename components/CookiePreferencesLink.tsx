"use client";

import { openCookiePrefs } from "./CookieConsent";

/**
 * Small "Cookie preferences" text link for the footer. Fires the
 * `open-cookie-prefs` event so CookieConsent re-opens its customize
 * panel.
 */
export function CookiePreferencesLink({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openCookiePrefs}
      className={`hover:text-olive-deep ${className}`}
      aria-label="Cookie preferences"
    >
      Cookie preferences
    </button>
  );
}
