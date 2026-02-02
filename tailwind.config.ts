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
        "primary-light": "#FF4D94",
        background: "#FAFAFA",
        "background-alt": "#F5F5F7",
        success: "#00D9A3",
        text: {
          primary: "#1A1A1A",
          secondary: "#6B6B6B",
        },
      },
      fontFamily: {
        coolvetica: ["var(--font-coolvetica)"],
        "days-one": ["var(--font-days-one)"],
        navigo: ["var(--font-navigo)"],
      },
    },
  },
  plugins: [],
};

export default config;
