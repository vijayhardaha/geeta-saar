// Import fonts from the "next/font/google" package.
import {
  Courier_Prime as FontMono,
  Poppins as FontSans,
} from "next/font/google";

// Define and export the Font Sans configuration.
export const fontSans = FontSans({
  subsets: ["latin"], // Specify character subsets (e.g., "latin").
  weight: ["400", "500", "600", "700"], // Specify font weights.
  variable: "--font-sans", // Define a CSS variable for the font.
});

// Define and export the Font Mono configuration.
export const fontMono = FontMono({
  subsets: ["latin"], // Specify character subsets (e.g., "latin").
  weight: ["400", "700"], // Specify font weights.
  variable: "--font-mono", // Define a CSS variable for the font.
});
