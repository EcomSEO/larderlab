"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * IntersectionObserver-backed reveal wrapper. Paired with the `.reveal`
 * class in globals.css. On entering the viewport the wrapper flips to
 * data-reveal="on"; CSS fades/translates it into place.
 *
 * Resilience: the server-rendered state has no data-reveal attribute,
 * so pre-hydration / no-JS visitors see content at full opacity. The
 * client flips to data-reveal="off" only after hydration, then runs the
 * IO. Reduced-motion users skip the animation entirely.
 */
export function Reveal({
  children,
  className = "",
  delayMs = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<"none" | "off" | "on">("none");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setState("on");
      return;
    }

    // Pre-seed: element off-screen gets hidden; on-screen stays visible
    // so the initial viewport doesn't flash.
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) {
      setState("on");
      return;
    }
    setState("off");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              window.setTimeout(() => setState("on"), delayMs);
            } else {
              setState("on");
            }
            if (once) io.disconnect();
          } else if (!once) {
            setState("off");
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delayMs, once]);

  return (
    <div
      ref={ref}
      data-reveal={state === "none" ? undefined : state}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}
