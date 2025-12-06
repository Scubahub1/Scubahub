import React from "react";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";
import ContactWidget from "../components/ui/ContactWidget";
import SchemaMarkup from "../components/SEO/SchemaMarkup";
import CanonicalUrl from "../components/SEO/CanonicalUrl";
import "./globals.css";

// Load Google Fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Scuba Hub Adventures | Netrani Island Scuba Diving",
  description:
    "Experience world-class scuba diving at Netrani Island with Scuba Hub Adventures. PADI certified courses, fun dives, and underwater exploration in Karnataka, India.",
  keywords: ["scuba diving", "Netrani Island", "PADI certification", "diving courses", "Karnataka"],
  authors: [{ name: "Scuba Hub Adventures" }],
  openGraph: {
    type: "website",
    url: "https://scubahub.com",
    title: "Scuba Hub Adventures | Netrani Island Scuba Diving",
    description: "Experience world-class scuba diving at Netrani Island with Scuba Hub Adventures. PADI certified courses, fun dives, and underwater exploration in Karnataka, India.",
    siteName: "Scuba Hub Adventures",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scuba Hub Adventures | Netrani Island Scuba Diving",
    description: "Experience world-class scuba diving at Netrani Island with Scuba Hub Adventures. PADI certified courses, fun dives, and underwater exploration in Karnataka, India.",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="canonical" href="https://scubahub.com" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-slate-950 text-slate-100 dark transition-colors duration-300">
        <SchemaMarkup type="LocalBusiness" />
        <CanonicalUrl />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
        <ContactWidget />
      </body>
    </html>
  );
}
