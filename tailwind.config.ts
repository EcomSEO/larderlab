import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Larderlab brand tokens
        ink: "#1A2332",
        paper: "#F5F2EB",
        copper: "#B87333",
        steel: "#6B7A8A",
        charcoal: "#202020",
        // Legacy aliases so shared template classes still resolve
        sage: "#B87333",
        cream: "#F5F2EB",
        forest: "#1A2332",
        terracotta: "#B87333",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ['"Inter Tight"', "Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
