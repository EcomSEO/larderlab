import { Inter, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";

/**
 * Self-hosted fonts via next/font for the healthline-grade clean-medical redesign.
 *
 * - Inter — body sans, variable, dominant. Used for everything UI.
 * - Source Serif 4 — editorial accent for H1 only. Weight 600. NOT italic.
 *   Replaces the previous Fraunces italic display family.
 * - IBM Plex Mono — nutrition values, total time, yield only.
 *
 * `display: "swap"` keeps text visible during font load — critical for LCP.
 *
 * NOTE: The export name `fraunces` is kept for backwards-compatibility with
 * any legacy imports while we migrate; it now points to Source Serif 4.
 */

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

// Legacy alias — points to Source Serif 4 now. Anything that imported
// `fraunces` from this file still resolves; the variable name on <html>
// is also kept (--font-fraunces) so /globals.css isn't broken mid-pivot.
export const fraunces = sourceSerif;

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});
