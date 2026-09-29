import type { Metadata } from "next";
import SmileDesignPage from "../../smile-design/page";
import { breadcrumbSchema, pageMetadata } from "../../seo";
export const metadata: Metadata = pageMetadata({ title: "Smile Design in Pazhanji | MAMA Dental Clinic", description: "Learn about personalised smile design at MAMA Dental Clinic & Orthodontic Centre in Pazhanji, Thrissur.", path: "/services/smile-design" });
export default function Page() { const jsonLd = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Smile Design", path: "/services/smile-design" }]); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SmileDesignPage /></>; }
