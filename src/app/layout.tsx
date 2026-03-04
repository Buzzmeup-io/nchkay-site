import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display, Atkinson_Hyperlegible_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const atkinsonMono = Atkinson_Hyperlegible_Mono({
  variable: "--font-atkinson",
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capilano River RV Park | Nch'ḵay̓",
  description: "The best and only RV park in Vancouver, West Vancouver, or North Vancouver. A park with a purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} ${atkinsonMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
