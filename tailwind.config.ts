import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm magazine palette — cream paper, olive, tomato, ink
        cream: "#F4EAD5",
        "cream-deep": "#EADBBE",
        "cream-soft": "#F8F1E1",
        olive: "#5C6F3C",
        "olive-deep": "#3F4D27",
        tomato: "#C4452D",
        "tomato-deep": "#9C2F1C",
        ink: "#2A1A12",
        "ink-soft": "#4A3A2E",
        ash: "#8A7A6E",
        ledger: "#FCF6E9",

        // Legacy aliases so any older shared template classes still resolve
        // during the redesign — all map to the new warm palette.
        sage: "#5C6F3C",
        forest: "#3F4D27",
        terracotta: "#C4452D",
        copper: "#C4452D",
        "copper-deep": "#9C2F1C",
        steel: "#8A7A6E",
        "steel-light": "#A89687",
        charcoal: "#2A1A12",
        paper: "#F4EAD5",
        "paper-deep": "#EADBBE",
        "ink-deep": "#1B1009",
        stone: "#8A7A6E",
      },
      fontFamily: {
        // Editorial serif (display) — Fraunces variable, used at large sizes
        // for cover titles, feature heads, and italic pull quotes.
        serif: ['"Fraunces"', '"Tiempos Display"', "Georgia", "serif"],
        display: ['"Fraunces"', '"Tiempos Display"', "Georgia", "serif"],
        // Clean grotesque sans for body, byline, captions, masthead nav.
        sans: ['"Inter Tight"', "Inter", "system-ui", "sans-serif"],
        // Handwritten / script for editor's note + magazine flourishes.
        script: ['"Caveat"', '"Homemade Apple"', "cursive"],
        // Mono kept for time, page numbers and small ledger numerics.
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "62ch",
        reading: "40rem",
        wiki: "82rem",
        spread: "88rem",
      },
      boxShadow: {
        card: "0 1px 0 rgba(42, 26, 18, 0.05), 0 8px 28px rgba(42, 26, 18, 0.08)",
        plate: "0 2px 0 rgba(42, 26, 18, 0.06), 0 30px 60px rgba(42, 26, 18, 0.12)",
      },
      letterSpacing: {
        masthead: "0.32em",
      },
    },
  },
  plugins: [],
};

export default config;
