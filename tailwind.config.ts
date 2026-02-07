import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0084",
        "primary-light": "#FF4DA6",
        "primary-dark": "#CC006A",
        background: "var(--background)",
        "background-alt": "var(--background-alt)",
        surface: "var(--surface)",
        "surface-light": "var(--surface-light)",
        success: "#00D9A3",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        coolvetica: ["var(--font-coolvetica)"],
        "days-one": ["var(--font-days-one)"],
        navigo: ["var(--font-navigo)"],
      },
      boxShadow: {
        'glow-pink': '0 0 20px rgba(255, 0, 132, 0.3)',
        'glow-pink-lg': '0 0 40px rgba(255, 0, 132, 0.4)',
      },
      // ДОБАВЬ ЭТО:
      keyframes: {
        'pulse-border': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(255, 0, 132, 0.7)',
            border: '2px solid rgba(255, 0, 132, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 0 8px rgba(255, 0, 132, 0)',
            border: '2px solid rgba(255, 0, 132, 1)',
          },
        },
      },
      animation: {
        'pulse-border': 'pulse-border 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
