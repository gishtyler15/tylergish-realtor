import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2A4A",
          50: "#EEF2F6",
          100: "#D7E0E9",
          400: "#3F5A78",
          600: "#1A3A5C",
          700: "#0F2A4A",
          800: "#0B1F38",
          900: "#071526",
        },
        brass: {
          DEFAULT: "#A98B5D",
          50: "#F7F2EA",
          100: "#EDE2CC",
          400: "#C2A372",
          600: "#A98B5D",
          700: "#8C7048",
        },
        slate: {
          DEFAULT: "#5B6573",
          50: "#F4F5F7",
          100: "#E9EBEE",
          200: "#D3D7DD",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "map-lines": "url('/images/nw-ohio-map-line.svg')",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "draw-line": "drawLine 1.8s ease-in-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
