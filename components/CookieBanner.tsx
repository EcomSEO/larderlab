"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ll:cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  function accept(choice: "accept" | "reject") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 bg-paper border border-ink/25 rounded-sm shadow-spec"
    >
      <div className="px-4 py-2 bg-ink text-paper border-b-2 border-copper">
        <span className="caps-label !text-paper">Cookies</span>
      </div>
      <div className="p-4">
        <p className="text-[13.5px] text-charcoal/90 leading-relaxed">
          We use a small set of cookies for analytics and session continuity.
          No advertising cookies. See our{" "}
          <a href="/privacy" className="underline text-copper">
            Privacy Policy
          </a>
          .
        </p>
        <div className="mt-3 flex gap-2 justify-end">
          <button
            onClick={() => accept("reject")}
            className="caps-label text-steel hover:text-ink px-2 py-2"
          >
            Reject
          </button>
          <button
            onClick={() => accept("accept")}
            className="btn-primary !py-2 !px-3 !text-[11px]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
