import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mamadentalclinic.com"),
  title: {
    default: "MAMA Dental Clinic & Orthodontic Centre | Pazhanji, Thrissur",
    template: "%s | MAMA Dental Clinic"
  },
  description: "MAMA Dental Clinic & Orthodontic Centre in Pazhanji, Thrissur offers comprehensive dental and orthodontic care including smile design, clear aligners, veneers and dental implants.",
  authors: [{ name: "MAMA Dental Clinic and Orthodontic Centre" }],
  alternates: {
    canonical: "/",
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
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road, Pazhanji",
      "addressLocality": "Pazhanji, Kunnamkulam, Thrissur",
      "addressRegion": "Kerala",
      "postalCode": "680542",
      "addressCountry": "IN"
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
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/1NkR8Fjkc6/",
      "https://www.instagram.com/mamadentalclinic?igsh=MWFrMzJhank2NDBtNw=="
    ]
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
