import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Inter, Montserrat } from "../lib/next-shim";
import ScrollToTop from "../components/ui/ScrollToTop";
import ContactWidget from "../components/ui/ContactWidget";
import "./globals.css";

// Fonts Mock
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Scuba Hub Adventures | Netrani Island Scuba Diving",
  description:
    "Experience world-class scuba diving at Netrani Island with Scuba Hub Adventures. PADI certified courses, fun dives, and underwater exploration in Karnataka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.variable} ${montserrat.variable} font-sans antialiased min-h-screen flex flex-col bg-slate-950 text-slate-100 dark transition-colors duration-300`}
    >
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
      <ContactWidget />
    </div>
  );
}
