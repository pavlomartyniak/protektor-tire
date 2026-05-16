import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        display: ["var(--font-geist-sans)"], // для великих заголовків
      },
      colors: {
        bg: {
          DEFAULT: "#0A0A0A",
          elevated: "#111111",
          card: "#1A1A1A",
        },
        accent: {
          red: "#C4001A",
          redDark: "#9F0015",
          glow: "#FF2A3D",
        },
        neutral: {
          silver: "#CCCCCC",
          gray: "#666666",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#AAAAAA",
          muted: "#777777",
        },
      },
      backgroundImage: {
        "hero-tire":
          "linear-gradient(rgba(10,10,10,0.85), rgba(10,10,10,0.95)), url('/images/hero-tire.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
