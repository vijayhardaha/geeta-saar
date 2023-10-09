import { nextui } from "@nextui-org/theme";

/**
 * This is the Tailwind CSS configuration file.
 * It defines various settings for the Tailwind CSS framework.
 */
module.exports = {
  // Specify the files to process for CSS generation.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  // Define custom styles and theme extensions.
  theme: {
    extend: {
      fontFamily: {
        // Define custom font families.
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.25" }],
        sm: ["0.875rem", { lineHeight: "1.35" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.5rem", { lineHeight: "1.5" }],
        "3xl": ["1.875rem", { lineHeight: "1.5" }],
        "4xl": ["2.25rem", { lineHeight: "1.5" }],
        "5xl": ["3rem", { lineHeight: "1.5" }],
        "6xl": ["3.75rem", { lineHeight: "1.5" }],
        "7xl": ["4.5rem", { lineHeight: "1.5" }],
        "8xl": ["6rem", { lineHeight: "1.5" }],
        "9xl": ["8rem", { lineHeight: "1.5" }],
      },
    },
  },

  // Enable dark mode based on class.
  darkMode: "class",

  // Specify the plugins to be used, including NextUI and typography.
  plugins: [nextui(), require("@tailwindcss/typography")],
};
