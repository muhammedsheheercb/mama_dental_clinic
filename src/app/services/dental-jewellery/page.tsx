import type { Metadata } from "next";
import DentalJewelleryPage from "../../dental-jewellery/page";
import { breadcrumbSchema, pageMetadata } from "../../seo";
export const metadata: Metadata = pageMetadata({ title: "Dental Jewellery in Pazhanji | MAMA Dental Clinic", description: "Learn about professionally applied dental jewellery at MAMA Dental Clinic & Orthodontic Centre in Pazhanji, Thrissur.", path: "/services/dental-jewellery" });
export default function Page() { const jsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Dental Jewellery", path: "/services/dental-jewellery" }]); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><DentalJewelleryPage /></>; }
