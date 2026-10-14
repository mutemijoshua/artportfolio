import type { Metadata } from "next";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource-variable/public-sans";
import "./globals.css";

import { site } from "@/content/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

// Default <title>, description and link-preview info for every page.
// Individual pages can override parts of this.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s — ${site.name}`, // e.g. "Red Soil — Your Name"
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
  },
};

// The root layout wraps every page. Whatever is in here (header, footer)
// appears on all pages; `children` is the page being visited.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-palette picks the colour scheme defined in globals.css
    <html lang="en" data-palette={site.palette}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-wall focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
