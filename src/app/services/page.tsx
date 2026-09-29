import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Dental Services in Pazhanji, Thrissur | MAMA Dental Clinic",
  description: "Explore dental and orthodontic services at MAMA Dental Clinic & Orthodontic Centre in Pazhanji, Thrissur, from clear aligners and implants to braces, restorative and children's dentistry.",
  path: "/services",
});

const services = [
  { name: "Smile Design", description: "A personalised plan for a balanced, natural-looking smile.", href: "/services/smile-design", image: "/images/smile/1.webp", alt: "Digital smile design consultation" },
  { name: "Clear Aligners", description: "A discreet orthodontic option for suitable smiles.", href: "/services/clear-aligners", image: "/images/aligner/medical.webp", alt: "Clear aligner treatment trays" },
  { name: "Veneers", description: "Custom cosmetic restorations for selected tooth-shape and colour concerns.", href: "/services/veneers", image: "/images/veneers/main.webp", alt: "Dental veneer shade consultation" },
  { name: "Dental Implants", description: "Thoughtfully planned replacement options for missing teeth.", href: "/services/dental-implants", image: "/images/implants/1.webp", alt: "Dental implant treatment consultation" },
  { name: "Dental Jewellery", description: "Professionally assessed tooth jewellery for a personal smile accent.", href: "/services/dental-jewellery", image: "/images/dental/1.webp", alt: "Dental jewellery smile enhancement" },
  { name: "Braces", description: "Orthodontic treatment options planned around your bite, teeth and goals.", href: "/braces", image: "/images/braces/expert.webp", alt: "Orthodontic braces treatment" },
  { name: "Crowns & Bridges", description: "Custom restorations to protect teeth or replace missing teeth where appropriate.", href: "/crowns-bridges", image: "/images/crown/main.webp", alt: "Dental crown restoration" },
  { name: "Teeth Whitening", description: "Professional options to discuss when you would like a brighter smile.", href: "/teeth-whitening", image: "/images/teeth.webp", alt: "Teeth whitening consultation" },
  { name: "Gum Contouring", description: "Carefully planned gum reshaping for suitable smile and gum-line concerns.", href: "/gum-contouring", image: "/images/gum/main.webp", alt: "Gum contouring treatment" },
  { name: "Bonding & Fillings", description: "Restorative care for selected chipped, worn or decayed teeth.", href: "/bonding-fillings", image: "/images/fill/main.webp", alt: "Dental bonding and filling treatment" },
  { name: "Pediatric Dentistry", description: "Gentle dental care focused on children’s developing smiles.", href: "/pediatric-dentistry", image: "/images/pediatric/1.webp", alt: "Pediatric dental care" },
];

export default function ServicesPage() {
  return <><Header /><main style={{ flex: 1, background: "#fff", padding: "140px 20px 90px" }}>
    <div className="service-container"><p style={{ color: "#00acee", fontWeight: 700, margin: "0 0 12px", letterSpacing: "0.08em" }}>MAMA DENTAL CLINIC</p>
      <h1 className="service-page-title" style={{ fontSize: "3.4rem", color: "#1e3a44", margin: "0 0 18px" }}>Dental services in Pazhanji</h1>
      <p style={{ maxWidth: 720, color: "#64748b", lineHeight: 1.7, fontSize: "1.1rem", marginBottom: 42 }}>Explore patient-focused dental and orthodontic care at MAMA Dental Clinic &amp; Orthodontic Centre in Pazhanji, Thrissur. A consultation helps determine the treatment that is appropriate for your needs.</p>
      <div className="service-strengths-grid">{services.map((service) => <article key={service.href} style={{ border: "1px solid #e9ecef", borderRadius: 20, overflow: "hidden", background: "#fff", boxShadow: "0 10px 28px rgba(15, 23, 42, 0.04)", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "relative", height: 190, overflow: "hidden" }}><Image src={service.image} alt={service.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: "cover" }} /></div>
        <div style={{ padding: 26, display: "flex", flex: 1, flexDirection: "column" }}><h2 style={{ color: "#1e3a44", margin: "0 0 12px", fontSize: "1.35rem" }}>{service.name}</h2><p style={{ color: "#64748b", lineHeight: 1.65, margin: 0 }}>{service.description}</p><Link href={service.href} className="btn btn-primary" style={{ alignSelf: "flex-start", display: "inline-block", marginTop: "auto", paddingTop: 10 }}>Learn more</Link></div>
      </article>)}</div>
    </div>
  </main><Footer /></>;
}
