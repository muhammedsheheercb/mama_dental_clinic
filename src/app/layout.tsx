import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mamadentalclinic.com"),
  title: {
    default: "MAMA Dental Clinic & Orthodontic Centre | Pazhanji, Kerala",
    template: "%s | MAMA Dental Clinic"
  },
  icons: {
    icon: "/images/logo.webp",
    shortcut: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
  description: "MAMA Dental Clinic and Orthodontic Centre by Orthodontist Dr. Minu offers advanced orthodontic braces, clear aligners, implants & smile design in Pazhanji, Kerala.",
  keywords: "MAMA Dental Clinic, Dr. Minu, orthodontic treatment, clear aligners, braces, smile correction, cosmetic dentistry, root canal treatment, kids dentistry, oral surgery, dental implants, dentures, dental bridges, digital X-rays, oral scanning, dental clinic Pazhanji, Thrissur Kerala",
  authors: [{ name: "MAMA Dental Clinic and Orthodontic Centre" }],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "MAMA Dental Clinic & Orthodontic Centre | Pazhanji, Kerala",
    description: "MAMA Dental Clinic and Orthodontic Centre by Dr. Minu offers braces, clear aligners, smile designing, and dental implants in Pazhanji, Kerala.",
    url: "https://mamadentalclinic.com",
    siteName: "MAMA Dental Clinic and Orthodontic Centre",
    images: [
      {
        url: "/images/logo.webp",
        width: 500,
        height: 500,
        alt: "MAMA Dental Clinic Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAMA Dental Clinic & Orthodontic Centre",
    description: "Experience advanced and comfortable dental care at MAMA Dental Clinic in Pazhanji, Kerala.",
    images: ["/images/logo.webp"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "MAMA Dental Clinic & Orthodontic Centre",
    "alternateName": "MAMA Dental Clinic",
    "image": "https://mamadentalclinic.com/images/logo.webp",
    "@id": "https://mamadentalclinic.com/#dentist",
    "url": "https://mamadentalclinic.com",
    "telephone": "+919048054405",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road, Pazhanji",
      "addressLocality": "Pazhanji, Kunnamkulam, Thrissur",
      "addressRegion": "Kerala",
      "postalCode": "680542",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.6865,
      "longitude": 76.1264
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:30",
        "closes": "18:30"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/1NkR8Fjkc6/",
      "https://www.instagram.com/mamadentalclinic?igsh=MWFrMzJhank2NDBtNw=="
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Minu",
      "jobTitle": "Orthodontist"
    }
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
