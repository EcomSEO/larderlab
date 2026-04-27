"use client";

import { useState } from "react";

/**
 * NewsletterInline — magazine-flavoured Sunday Larder block.
 * Inline form, no JS round-trip required for layout.
 */
export function NewsletterInline({
  heading = "Get the Sunday Larder, weekly.",
  body = "One short editorial letter, one tested recipe card, one well-edited pantry pick. Sundays only.",
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
        <p style={{ color: "var(--color-olive-deep)", fontWeight: 600 }}>
          Thanks. The next Sunday Larder is on its way.
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
