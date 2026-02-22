import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Bohan Huang | Machine Learning Engineer";
const siteDescription =
  "Portfolio introducing my tech stack, selected projects, and how I build practical software products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://MinorityA.github.io/PersonalPortfolio"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://MinorityA.github.io/PersonalPortfolio",
    siteName: "Bohan Huang Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio social preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
