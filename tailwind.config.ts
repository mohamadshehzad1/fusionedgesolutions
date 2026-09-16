import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f4f8f6",
          100: "#e4eee9",
          200: "#c9ded5",
          300: "#a5c6ba",
          400: "#7aa89a",
          500: "#56897b",
          600: "#416e62",
          700: "#35594f",
          800: "#2b4a41",
          900: "#16322b",
        },
        gold: {
          50: "#fbf7ee",
          100: "#f6eeda",
          200: "#ecdaba",
          300: "#e0c493",
          400: "#cdac67",
          500: "#b58332",
          600: "#99672b",
          700: "#7d5425",
          800: "#644321",
          900: "#52381d",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
