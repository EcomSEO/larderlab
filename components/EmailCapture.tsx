"use client";

import { FormEvent, useState } from "react";

export function EmailCapture({
  headline = "Get the Larderlab Macro Planner.",
  subhead = "A Google Sheet that calculates your protein target, splits it across 3-5 meals, and ranks 20 protein sources by $/gram. Free. Copy-and-modify your own version.",
  variant = "inline",
  buttonLabel = "Send me the planner",
}: {
  headline?: string;
  subhead?: string;
  variant?: "inline" | "end-of-article";
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 400));
    setStatus("ok");
  }

  const wrapper =
    variant === "end-of-article"
      ? "my-12 border border-copper/50 bg-copper/[0.05]"
      : "my-12 border border-ink/20 bg-paper";

  return (
    <section id="email-capture" className={wrapper}>
      <div className="px-5 py-2 bg-ink text-paper border-b-2 border-copper flex items-center justify-between flex-wrap gap-3">
        <span className="caps-label !text-paper">Dispatch · lead magnet</span>
        <span className="caps-label !text-paper/60 tnum">~ 1 email / week</span>
      </div>
      <div className="px-6 md:px-8 py-7 md:py-9 text-center">
        <h2 className="font-sans text-2xl md:text-[1.7rem] text-ink tracking-tight">
          {headline}
        </h2>
        <p className="mt-3 text-charcoal/80 max-w-xl mx-auto text-[15px] leading-relaxed">
          {subhead}
        </p>
        {status === "ok" ? (
          <p
            role="status"
            aria-live="polite"
            className="mt-6 font-mono text-ink text-sm uppercase tracking-[0.1em] inline-flex items-center gap-2 justify-center"
          >
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
              className="text-copper-deep"
            >
              <polyline points="4 12 10 18 20 6" />
            </svg>
            Thanks — check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-6 flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto"
          >
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input flex-1"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary disabled:opacity-50"
            >
              {status === "loading" ? "Sending…" : buttonLabel}
            </button>
          </form>
        )}
        <p className="mt-4 caps-label text-steel max-w-md mx-auto">
          By subscribing, you agree to our{" "}
          <a href="/privacy" className="underline hover:text-copper">
            Privacy Policy
          </a>
          . Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
