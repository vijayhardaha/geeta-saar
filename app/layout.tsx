// Import necessary modules and components
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import { cx } from "@/lib/utils";

// Define the 'metadata' object with page metadata
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        suppressHydrationWarning
        className={cx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-5xl py-4 px-4 flex-grow">
              {children}
            </main>
            <footer className="container mx-auto max-w-5xl flex-grow px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-1 py-4 border-t">
                {/* Render footer links */}
                <Link
                  isExternal
                  className="flex items-center gap-1 text-sm"
                  href={siteConfig.links?.twitter}
                  aria-label="Vijay Hardaha"
                >
                  <span className="text-default-600">
                    All rights reserved &copy; 2023,
                  </span>
                  <p className="text-primary">Vijay Hardaha</p>
                </Link>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-sm"
                  href={siteConfig.links?.github}
                  aria-label="Github"
                >
                  Source Code on Github
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
