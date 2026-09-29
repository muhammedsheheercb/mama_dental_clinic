import type { Metadata } from "next";
import DentalImplantsPage from "../../dental-implants/page";
import { breadcrumbSchema, pageMetadata } from "../../seo";
export const metadata: Metadata = pageMetadata({ title: "Dental Implants in Pazhanji | MAMA Dental Clinic", description: "Learn about dental implant assessment, treatment planning and aftercare at MAMA Dental Clinic in Pazhanji, Thrissur.", path: "/services/dental-implants" });
export default function Page() { const jsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Dental Implants", path: "/services/dental-implants" }]); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><DentalImplantsPage /></>; }
