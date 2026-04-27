"use client";

import { useState } from "react";

/**
 * NewsletterInline — clean white panel, olive border, headline +
 * dek + email input + olive Subscribe pill.
 */
export function NewsletterInline({
  heading = "Get evidence-based pantry guidance, every Sunday.",
  body = "One short letter, one tested recipe, one nutritionist-reviewed pantry pick. Sundays only. No diet hype.",
  cta = "Subscribe",
}: {
  heading?: string;
  body?: string;
  cta?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <div className="nl-inline">
      <h4>{heading}</h4>
      <p>{body}</p>
      {done ? (
        <p style={{ color: "var(--color-olive-deep)", fontWeight: 600, margin: 0 }}>
          Thanks. The next Sunday letter is on its way.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.includes("@")) setDone(true);
          }}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button type="submit" className="btn-pill">
            {cta}
          </button>
        </form>
      )}
    </div>
  );
}
