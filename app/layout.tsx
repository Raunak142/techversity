import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Techversity",
  description: "Global Academic Recognition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body
        className="font-sans antialiased bg-gray-50"
        suppressHydrationWarning
      >
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
