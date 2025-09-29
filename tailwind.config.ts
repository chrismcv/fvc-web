import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        // Primary - Navy Blue
        primary: "#1B4965",
        "primary-dark": "#0f2d42",
        "primary-light": "#2d5a7a",

        // Secondary - Turquoise/Teal
        secondary: "#62B6CB",
        "secondary-dark": "#4ea3b8",
        "secondary-light": "#7bc4d4",

        // Background - Warm Cream
        background: "#FFF5E2",
        "background-warm": "#fef7e8",
        "background-light": "#fffbf0",

        // Accent Orange
        accent: "#FFB703",
        "accent-light": "#ffc436",
        "accent-dark": "#e6a400",

        // Lime Green
        "accent-green": "#A5BE00",
        "accent-green-light": "#b8d133",
        "accent-green-dark": "#8ca600",

        // Text colors
        "text-primary": "#1B4965",
        "text-light": "#2d5a7a",
        "text-muted": "#4ea3b8",
        "warm-gray": "#f0f4f8",
        "light-gray": "#e1e8f0",

        // shadcn/ui compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #FFF5E2 0%, rgba(165, 190, 0, 0.05) 30%, rgba(98, 182, 203, 0.15) 70%, rgba(255, 183, 3, 0.08) 100%)",
      },
      fontFamily: {
        headline: ["Bitter", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gentle-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(1deg)" },
          "66%": { transform: "translateY(-5px) rotate(-1deg)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(-1deg)" },
          "66%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gentle-bounce": "gentle-bounce 3s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        "float-delayed": "float-delayed 10s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
