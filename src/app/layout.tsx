import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Clean Aligners | Thrissur | Firstooth Dental Studio",
  description: "Achieve your perfect smile discreetly with Firstooth Dental Studio's custom clear aligners. Medical-grade, invisible orthodontic braces in Thrissur, Kerala. Start your journey with personalized care today!",
  keywords: "clear aligners, invisible braces, teeth straightening, cosmetic dentistry, Firstooth Thrissur, orthodontic treatment, Invisalign Kerala, dental clinic Kerala, dental studio, cosmetic smile correction",
  authors: [{ name: "Firstooth Dental Studio" }],
  openGraph: {
    title: "Premium Clean Aligners | Firstooth Dental Studio",
    description: "Get the smile you've always wanted without the metal braces. Discover custom-made, invisible clear aligners crafted with precision technology at Firstooth Dental Studio in Thrissur.",
    url: "https://firstooth.com/clean-aligners/",
    siteName: "Firstooth Dental Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Clean Aligners | Firstooth Dental Studio",
    description: "Experience modern teeth straightening with clear, comfortable, and invisible orthodontic aligners from Firstooth Dental Studio.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
