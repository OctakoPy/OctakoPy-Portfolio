import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B5CF6",
          foreground: "#F8F9FA",
        },
        secondary: {
          DEFAULT: "#00fff9",
          foreground: "#0F1116",
        },
        accent: {
          DEFAULT: "#FF10F0",
          foreground: "#F8F9FA",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#1A1F2C",
          foreground: "#F8F9FA",
        },
      },
      keyframes: {
        "glow": {
          "0%, 100%": { textShadow: "0 0 4px #8B5CF6, 0 0 11px #8B5CF6, 0 0 19px #8B5CF6" },
          "50%": { textShadow: "0 0 4px #00fff9, 0 0 11px #00fff9, 0 0 19px #00fff9" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "glow": "glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;