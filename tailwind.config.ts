import type { Config } from "tailwindcss";

/**
 * Larderlab — Healthline-grade clean-medical design system.
 *
 * Locked tokens. Body bg is white (#FFFFFF). Olive (#5C6F3C) is the
 * brand primary on white — keeps larderlab botanically distinct from
 * injectcompass's medical teal. Tomato is sparingly secondary.
 *
 * Type: Inter for body/UI, Source Serif 4 for editorial H1, Plex Mono
 * for nutrition values. NO Fraunces. NO italic display.
 *
 * Legacy magazine class aliases (cream, ink, tomato, etc.) are kept so
 * the components/_legacy/ folder still compiles after the redesign.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // -------- Clean-medical surface --------
        ink: {
          DEFAULT: "#1A1F2E",
          muted: "#5A6573",
          soft: "#8A92A1",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F7F9FB",
          warm: "#EEF2E8",
        },
        rule: {
          DEFAULT: "#E5E9EE",
          strong: "#CDD3DA",
        },

        // -------- Brand accents --------
        olive: {
          50: "#EEF2E8",
          100: "#DCE4CC",
          200: "#B8C99B",
          500: "#5C6F3C",
          600: "#445129",
          700: "#3F4D27",
          900: "#2A3419",
          DEFAULT: "#5C6F3C",
        },
        tomato: {
          50: "#FBEDEA",
          500: "#C4452D",
          600: "#A8371F",
          DEFAULT: "#C4452D",
        },
        reviewed: {
          bg: "#EEF2E8",
          text: "#445129",
        },
        success: "#10A26A",
        warn: "#B8782F",
        danger: "#C8463C",

        // -------- Legacy aliases (kept so older imports still compile) --------
        cream: "#FFFFFF",
        "cream-deep": "#F7F9FB",
        "cream-soft": "#F7F9FB",
        "cream-lighter": "#F7F9FB",
        "olive-deep": "#445129",
        "tomato-deep": "#A8371F",
        ledger: "#F7F9FB",
        ash: "#5A6573",
        "ink-soft": "#5A6573",
        "ink-deep": "#1A1F2E",
        sage: "#5C6F3C",
        forest: "#3F4D27",
        terracotta: "#C4452D",
        copper: "#5C6F3C",
        "copper-deep": "#445129",
        steel: "#5A6573",
        "steel-light": "#8A92A1",
        charcoal: "#1A1F2E",
        paper: "#FFFFFF",
        "paper-deep": "#F7F9FB",
        stone: "#5A6573",
      },
      fontFamily: {
        // Body sans — Inter variable. Default everywhere.
        sans: ['"Inter"', "Inter", "system-ui", "-apple-system", "sans-serif"],
        // Editorial accent serif — Source Serif 4. NOT italic. Used on H1.
        serif: ['"Source Serif 4"', '"Source Serif Pro"', "Georgia", "serif"],
        display: ['"Source Serif 4"', '"Source Serif Pro"', "Georgia", "serif"],
        // Mono — Plex Mono for nutrition values, total time, yield.
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
        // Legacy aliases kept so the magazine _legacy folder still compiles
        script: ['"Inter"', "system-ui", "sans-serif"],
        condensed: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "720px",
        reading: "720px",
        container: "1200px",
        rail: "280px",
        // Legacy aliases
        wiki: "1200px",
        spread: "1200px",
      },
      letterSpacing: {
        tightest: "-0.02em",
        eyebrow: "0.05em",
        masthead: "0.18em",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
        pill: "999px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgb(0 0 0 / 0.04)",
        card: "0 4px 12px rgb(0 0 0 / 0.06)",
        cardHover: "0 8px 24px rgb(0 0 0 / 0.08)",
        soft: "0 1px 2px rgb(0 0 0 / 0.04), 0 4px 12px rgb(0 0 0 / 0.06)",
        plate: "0 8px 24px rgb(0 0 0 / 0.08)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
