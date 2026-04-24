import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Larderlab brand tokens — ink + copper + paper engineering-notebook palette
        ink: "#1A2332",
        "ink-deep": "#0F1724",
        paper: "#F5F2EB",
        "paper-deep": "#EBE5D5",
        copper: "#B87333",
        "copper-deep": "#96551E",
        steel: "#6B7A8A",
        "steel-light": "#9BA8B4",
        charcoal: "#202020",

        // Legacy aliases so any shared classnames still resolve during the
        // redesign. Prefer the tokens above for new work.
        sage: "#B87333",
        cream: "#F5F2EB",
        "cream-deep": "#EBE5D5",
        forest: "#1A2332",
        "forest-deep": "#0F1724",
        terracotta: "#B87333",
        stone: "#6B7A8A",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ['"Inter Tight"', "Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
        reading: "42rem",
        wiki: "80rem",
      },
      boxShadow: {
        spec: "0 1px 0 rgba(26, 35, 50, 0.06), 0 6px 28px rgba(26, 35, 50, 0.06)",
        card: "0 1px 0 rgba(26, 35, 50, 0.04), 0 2px 12px rgba(26, 35, 50, 0.05)",
      },
      letterSpacing: {
        spec: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
