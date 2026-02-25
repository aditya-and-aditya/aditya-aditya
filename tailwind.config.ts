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
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
