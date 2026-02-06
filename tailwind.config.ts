import type { Config } from "tailwindcss";

const config: Config = {
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
        background: "#1A1A1E",
        "background-alt": "#252529",
        surface: "#2A2A2F",
        "surface-light": "#333337",
        success: "#00D9A3",
        text: {
          primary: "#FFFFFF",
          secondary: "#B4B4B8",
          tertiary: "#808087",
        },
        border: "#333337",
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
    },
  },
  plugins: [],
};

export default config;
