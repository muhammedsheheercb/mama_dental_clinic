import type { Metadata } from "next";
import VeneersPage from "../../veneers/page";
import { breadcrumbSchema, pageMetadata } from "../../seo";
export const metadata: Metadata = pageMetadata({ title: "Dental Veneers in Pazhanji | MAMA Dental Clinic", description: "Understand veneer consultations, treatment planning and care at MAMA Dental Clinic in Pazhanji, Thrissur.", path: "/services/veneers" });
export default function Page() { const jsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Veneers", path: "/services/veneers" }]); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><VeneersPage /></>; }
