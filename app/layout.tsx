import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lintang Rafi - Developer Portfolio",
  description: "Portfolio website of Lintang Rafi Endrian Darmawan - Computer Science student specializing in Fullstack Mobile Programming and Machine Learning",
  keywords: ["developer", "portfolio", "fullstack", "mobile developer", "flutter", "machine learning", "web development", "Lintang Rafi"],
  authors: [{ name: "Lintang Rafi Endrian Darmawan" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lintangrafi.dev",
    title: "Lintang Rafi - Developer Portfolio",
    description: "Computer Science student specializing in Fullstack Mobile Programming and Machine Learning",
    siteName: "Lintang Rafi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lintang Rafi - Developer Portfolio",
    description: "Computer Science student specializing in Fullstack Mobile Programming and Machine Learning",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
