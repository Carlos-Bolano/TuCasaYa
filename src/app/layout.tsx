import type { Metadata } from "next";
import { Amaranth, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section/Section";

const amaranth = Amaranth({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-amaranth",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open_sans",
});

export const metadata: Metadata = {
  title: "TuCasaYa!",
  description: "El mejor sitio en magangue para encontrar tu mejor sitio!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${amaranth.variable} ${open_sans.variable}`}>
        <main className="relative">
          <Navbar />
          <Section>{children}</Section>
        </main>
      </body>
    </html>
  );
}
