/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Fraunces'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"]
      },
      colors: {
        paper: "#faf7f0",
        ink: "#1e2749",
        slate: {
          950: "#0b0e1a"
        },
        brand: {
          50: "#eef0fb",
          100: "#d7dcf3",
          200: "#b0b9e8",
          300: "#8996db",
          400: "#5d6cc9",
          500: "#3d4bb0",
          600: "#2e3a8f",
          700: "#242f70",
          800: "#1e2749",
          900: "#161c37"
        },
        mark: {
          400: "#f0a94e",
          500: "#e0922e",
          600: "#c4791d"
        }
      },
      boxShadow: {
        card: "0 1px 2px rgba(30,39,73,0.06), 0 8px 24px -8px rgba(30,39,73,0.15)",
        glow: "0 0 0 3px rgba(224,146,46,0.35)"
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(30,39,73,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,39,73,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
