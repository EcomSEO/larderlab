import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";

/**
 * Self-hosted fonts via next/font.
 *
 * - Fraunces (variable, italic) — display, italic-friendly. opsz axis kept
 *   so the editorial cover headline can run at full optical-size 144.
 * - Inter — body sans, four weights.
 * - IBM Plex Mono — issue numbers, nutrition values, page-number markers.
 *
 * `display: "swap"` keeps text visible during font swap; LCP wins.
 * CSS variables expose the fonts to globals.css overrides without
 * disrupting the existing hand-written font-family strings.
 */

export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});
