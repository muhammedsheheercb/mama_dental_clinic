import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAMA Dental Clinic & Orthodontic Centre | Pazhanji, Kerala",
  icons: {
    icon: "/images/logo.webp",
    shortcut: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
  description: "MAMA Dental Clinic and Orthodontic Centre by Dr. Minu offers comprehensive and advanced dental care in Pazhanji, Kerala. Specializing in orthodontic treatment, braces, clear aligners, smile designing, and dental implants.",
  keywords: "MAMA Dental Clinic, Dr. Minu, orthodontic treatment, clear aligners, braces, smile correction, cosmetic dentistry, root canal treatment, kids dentistry, oral surgery, dental implants, dentures, dental bridges, digital X-rays, oral scanning, dental clinic Pazhanji, Thrissur Kerala",
  authors: [{ name: "MAMA Dental Clinic and Orthodontic Centre" }],
  openGraph: {
    title: "MAMA Dental Clinic & Orthodontic Centre by Dr. Minu",
    description: "Experience comprehensive and advanced dental care for all age groups at MAMA Dental Clinic in Pazhanji, Kerala. Led by Orthodontist Dr. Minu.",
    url: "https://mamadentalclinic.com",
    siteName: "MAMA Dental Clinic and Orthodontic Centre",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAMA Dental Clinic & Orthodontic Centre",
    description: "Experience modern, comfortable, and pain-free dental care at MAMA Dental Clinic in Pazhanji, Kerala.",
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
