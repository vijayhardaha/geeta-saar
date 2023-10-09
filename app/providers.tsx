// Import necessary modules and components
"use client"; // Note: "use client" directive is specific to Next.js

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

// Define the ProvidersProps interface
export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

// Define the Providers component
export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    // Wrap the children with NextUIProvider and NextThemesProvider
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
