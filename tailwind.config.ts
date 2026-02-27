import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#092d60",
        "primary-dark": "#051a3a",
        "primary-light": "#0d3d7a",
        accent: "#37a8b1",
        "accent-light": "#4dc3ce",
        "accent-dark": "#2a8490",
        background: "#eff0ef",
        "hex-paper": "#f5f0e8",
        "hex-ink": "#0a0a0a",
        "hex-gold": "#c9a84c",
        "hex-rust": "#8b3a1e",
        "hex-slate": "#2a2a35",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        dm: ["var(--font-dm-mono)", "monospace"],
        cormorant: ["var(--font-cormorant)", "serif"],
        display: ["var(--font-libre-baskerville)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
