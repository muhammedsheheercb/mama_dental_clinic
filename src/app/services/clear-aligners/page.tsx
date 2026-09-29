import type { Metadata } from "next";
import ClearAlignersPage from "../../clean-aligners/page";
import { breadcrumbSchema, pageMetadata } from "../../seo";
export const metadata: Metadata = pageMetadata({ title: "Clear Aligners in Pazhanji | MAMA Dental Clinic", description: "Explore clear-aligner treatment planning at MAMA Dental Clinic & Orthodontic Centre in Pazhanji, Thrissur.", path: "/services/clear-aligners" });
export default function Page() { const jsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Clear Aligners", path: "/services/clear-aligners" }]); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><ClearAlignersPage /></>; }
