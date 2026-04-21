"use client";

import { FormEvent, useState } from "react";

export function EmailCapture({
  headline = "Get the Larderlab Macro Planner.",
  subhead = "A Google Sheet (or Notion template) that calculates your protein target, splits it across 3-5 meals, and ranks 20 protein sources by $/gram. Free.",
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
      ? "my-12 p-8 rounded-lg bg-copper/10 border border-copper/20 text-center"
      : "my-12 p-8 rounded-lg bg-white/70 border border-ink/10 text-center";

  return (
    <section id="email-capture" className={wrapper}>
      <h2 className="font-serif text-2xl text-ink mb-2">{headline}</h2>
      <p className="text-charcoal/80 max-w-xl mx-auto">{subhead}</p>
      {status === "ok" ? (
        <p className="mt-6 text-ink">Thanks — check your inbox.</p>
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
            className="flex-1 rounded-md border border-ink/20 px-4 py-3 bg-white"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-md bg-ink px-6 py-3 text-paper hover:bg-copper transition disabled:opacity-50"
          >
            {status === "loading" ? "Sending…" : buttonLabel}
          </button>
        </form>
      )}
      <p className="mt-4 text-xs text-charcoal/50 max-w-md mx-auto">
        By subscribing, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.
        One useful email a week. Unsubscribe anytime.
      </p>
    </section>
  );
}
