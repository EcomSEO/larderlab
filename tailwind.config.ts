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

        // -------- Brand accents — full olive scale --------
        olive: {
          50: "#EEF2E8",
          100: "#DCE4CC",
          200: "#B8C99B",
          300: "#8FA56B",
          400: "#73894F",
          500: "#5C6F3C",
          600: "#445129",
          700: "#3F4D27",
          800: "#33401F",
          900: "#2A3419",
          DEFAULT: "#5C6F3C",
        },
        tomato: {
          50: "#FBEDEA",
          100: "#F5D5CD",
          200: "#E89D8B",
          500: "#C4452D",
          600: "#A8371F",
          DEFAULT: "#C4452D",
        },
        // -------- Evidence-tier system (Lab Notebook signature) --------
        // Tier 1 (RCT / meta): olive — strongest, brand-aligned
        // Tier 2 (cohort / observational): steel — neutral, evidence-but-careful
        // Tier 3 (mechanistic / animal): warn-amber — context only
        // Tier 4 (anecdotal / n=1): danger-tomato — flag, do not extrapolate
        tier: {
          "1-bg": "#EEF2E8",
          "1-text": "#3F4D27",
          "1-border": "#B8C99B",
          "2-bg": "#EEF1F5",
          "2-text": "#374557",
          "2-border": "#C2CCD9",
          "3-bg": "#FBF3E2",
          "3-text": "#7A5418",
          "3-border": "#E5C98A",
          "4-bg": "#FBEDEA",
          "4-text": "#A8371F",
          "4-border": "#E89D8B",
        },
        reviewed: {
          bg: "#EEF2E8",
          text: "#445129",
        },
        success: "#0F8B5C",
        warn: "#B8782F",
        danger: "#C4452D",

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
        // Editorial elevation — softer, cooler, with a faint olive cast
        // so cards feel "set into" the page rather than floating above it.
        notebook: "0 1px 0 0 rgb(229 233 238 / 1), 0 6px 18px -8px rgb(45 56 70 / 0.08)",
        "notebook-hover": "0 1px 0 0 rgb(184 201 155 / 1), 0 12px 32px -10px rgb(45 56 70 / 0.12)",
        "olive-glow": "0 0 0 4px rgb(184 201 155 / 0.35)",
        "focus-olive": "0 0 0 3px rgb(92 111 60 / 0.4)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.2, 0.7, 0.2, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "220ms",
        slow: "320ms",
      },
      fontSize: {
        // Editorial type ramp — Source Serif 4 for displays, Inter for
        // everything else, IBM Plex Mono for numerics. Use these named
        // sizes; do not compose with separate leading/tracking/weight
        // unless you mean to override one axis.
        "display-xl": ["clamp(3rem, 6vw, 4.75rem)", { lineHeight: "1.04", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg": ["clamp(2.5rem, 4.5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.018em", fontWeight: "600" }],
        "display-md": ["clamp(1.875rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.014em", fontWeight: "600" }],
        h1: ["clamp(2.125rem, 3.5vw, 2.875rem)", { lineHeight: "1.12", letterSpacing: "-0.014em", fontWeight: "600" }],
        h2: ["clamp(1.625rem, 2.5vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        h3: ["1.375rem", { lineHeight: "1.3", letterSpacing: "-0.005em", fontWeight: "600" }],
        h4: ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }],
        eyebrow: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "600" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.55" }],
        caption: ["0.8125rem", { lineHeight: "1.45" }],
        // Mono numerics — first-class on this site. tabular-nums applied
        // via the .num utility (defined in globals.css).
        "num-xl": ["clamp(2rem, 3.5vw, 2.75rem)", { lineHeight: "1.0", letterSpacing: "-0.01em", fontWeight: "500" }],
        "num-lg": ["1.625rem", { lineHeight: "1.1", fontWeight: "500" }],
        "num-md": ["1.125rem", { lineHeight: "1.15", fontWeight: "500" }],
        "num-sm": ["0.9375rem", { lineHeight: "1.2", fontWeight: "500" }],
      },
      ringColor: {
        focus: "#5C6F3C",
      },
      ringWidth: {
        focus: "3px",
      },
      ringOffsetColor: {
        paper: "#FFFFFF",
      },
      zIndex: {
        base: "0",
        raised: "10",
        sticky: "20",
        overlay: "30",
        modal: "40",
        nav: "50",
        toast: "60",
      },
      gridTemplateColumns: {
        // Editorial grid — 12-col with optional sticky rail for TOC / data
        notebook: "minmax(0, 1fr) 280px",
      },
    },
  },
  plugins: [],
};

export default config;
