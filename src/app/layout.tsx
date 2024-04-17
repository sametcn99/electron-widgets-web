import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electron Widgets",
  description:
    "The application allows users to create and manage widgets on their desktops.",
  applicationName: "Electron Widgets",
  keywords: [
    "Electron",
    "Widgets",
    "Desktop",
    "widget management",
    "Electron.js",
    "Electron widgets",
  ],
  openGraph: {
    title: "Electron Widgets",
    description:
      "The application allows users to create and manage widgets on their desktops.",
    type: "website",
    url: "https://sametcc.me/electron-widgets",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
  height: "device-height",
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className={`${montSerrat.className} heropattern antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
