import type { Metadata } from "next";
import { Geist, Geist_Mono, Grenze_Gotisch } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grenzeGotisch.variable} antialiased h-[200vh] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
