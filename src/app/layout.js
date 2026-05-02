import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zrigou | M.ZRIGOU - Web & Mobile Developer",
  description: "Professional portfolio of M.ZRIGOU, a skilled web & mobile developer specializing in high-quality, modern applications using Next.js, Plasmo, and React Native.",
  keywords: "web developer, mobile developer, portfolio, React, React Native, Next.js, Plasmo, Chrome Extensions, frontend, backend",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Zrigou | M.ZRIGOU",
    description: "Modern web and mobile applications tailored for business success.",
    type: "website",
    siteName: "M.ZRIGOU Portfolio",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
