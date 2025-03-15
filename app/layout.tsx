import type { Metadata } from "next";
import { Geist_Mono, Grenze_Gotisch, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({
  weight: ["300", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const grenzeGotisch = Grenze_Gotisch({
  variable: "--font-grenze-gotisch",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DanantaraV2",
  description: "Danantara landing page with my own taste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grenzeGotisch.variable} antialiased h-[200vh] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
