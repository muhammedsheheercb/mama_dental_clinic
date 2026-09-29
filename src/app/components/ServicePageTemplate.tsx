"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Landmark, UserCheck, Feather, ArrowUpRight, X } from "lucide-react";
import Header from "./Header";
import HomeCTA from "./HomeCTA";
import Footer from "./Footer";

interface DetailItem {
  title: string;
  desc: string;
  img?: string;
}

interface CardData {
  tag: string;
  title: string;
  image: string;
  details: DetailItem[];
}

interface ServicePageProps {
  title: string;
  heroImage: string;
  heroAlt?: string;
  cards: CardData[];
}

const serviceGuides: Record<string, { slug: string; overview: string; suitableFor: string; process: string[]; faqs: { question: string; answer: string }[] }> = {
  "Smile Design": { slug: "smile-design", overview: "Smile design is a personalised approach to improving the appearance and harmony of a smile. It may combine carefully selected cosmetic, restorative, gum or orthodontic treatments after an assessment of your teeth, gums, bite and goals.", suitableFor: "It may help people concerned about tooth shape, colour, small gaps, uneven edges or the overall balance of their smile. A consultation is needed to decide whether any treatment is appropriate.", process: ["Discuss your goals and examine your teeth, gums and bite.", "Collect relevant photographs, scans or records to plan possible changes.", "Review suitable treatment options, timing and aftercare before you decide."], faqs: [{ question: "Is smile design one treatment?", answer: "Not always. It is a plan that can bring together one or more suitable treatments." }, { question: "Can I preview proposed changes?", answer: "Planning records can help explain possible changes before treatment begins." }] },
  "Clear Aligners": { slug: "clear-aligners", overview: "Clear aligners are removable, custom-made trays that can gradually guide teeth into planned positions. They are an orthodontic option for suitable cases and require consistent wear and review visits.", suitableFor: "They may suit adults and teens who want a discreet, removable orthodontic option. The dentist or orthodontist will assess your bite, teeth and oral health first.", process: ["Assessment, records and a discussion of your goals.", "A digital treatment plan and custom aligner sequence.", "Wear aligners as advised and attend progress reviews; retainers are usually needed after treatment."], faqs: [{ question: "Are clear aligners removable?", answer: "Yes. They are usually removed for meals and oral hygiene, then worn as directed to keep treatment on track." }, { question: "Will I need retainers?", answer: "Retainers are commonly recommended after orthodontic treatment to help maintain the result." }] },
  "Veneers": { slug: "veneers", overview: "Veneers are thin, custom cosmetic restorations bonded to the front surface of selected teeth. They can be considered for specific concerns with colour, shape, minor spacing or surface appearance.", suitableFor: "Veneers may be an option for healthy teeth with cosmetic concerns. Your dentist will discuss alternatives and whether a conservative approach is suitable for you.", process: ["Examination and discussion of the desired appearance and alternatives.", "Planning, shade selection and any preparation needed for the chosen material.", "Fabrication, fitting and bonding, followed by care guidance and reviews."], faqs: [{ question: "Do veneers require special care?", answer: "They need the same careful brushing, flossing and regular dental reviews as natural teeth." }, { question: "Are veneers right for every smile?", answer: "No. Suitability depends on your teeth, gums, bite and goals, which are assessed during a consultation." }] },
  "Dental Implants": { slug: "dental-implants", overview: "A dental implant is a carefully placed foundation used to support a replacement tooth, bridge or other restoration. Treatment is planned around your oral health, bone, bite and the number of missing teeth.", suitableFor: "Implants may be considered for one or more missing teeth. A detailed consultation determines whether they are appropriate and whether any preparatory care is needed.", process: ["Assess oral health and take the records needed for treatment planning.", "Place the implant when appropriate and allow the planned healing period.", "Fit a custom restoration and provide ongoing hygiene and review guidance."], faqs: [{ question: "How long does implant treatment take?", answer: "Timing varies with the treatment plan, healing needs and the type of restoration. Your clinician can explain the expected stages." }, { question: "How are implants maintained?", answer: "Daily cleaning and regular professional reviews are important for the long-term health of the implant area." }] },
  "Dental Jewellery": { slug: "dental-jewellery", overview: "Dental jewellery is a small decorative piece professionally attached to a suitable tooth surface. It is an elective cosmetic choice and should only be placed after the tooth and gums have been assessed.", suitableFor: "It may suit people seeking a subtle, temporary smile accent on a healthy tooth. Placement is not appropriate for every tooth or bite.", process: ["Check the selected tooth and discuss placement and material.", "Clean and prepare the surface using a dental bonding process.", "Place the jewellery precisely and provide aftercare guidance."], faqs: [{ question: "Does dental jewellery involve drilling?", answer: "For suitable cases, it can be bonded without drilling; the dentist will explain the method recommended for you." }, { question: "Can it be removed?", answer: "If you want it removed, ask the dental team to assess and remove it professionally." }] },
};

export default function ServicePageTemplate({
  title,
  heroImage,
  heroAlt = title,
  cards,
}: ServicePageProps) {
  const [activeCardIdx, setActiveCardIdx] = useState<number | null>(null);
  const guide = serviceGuides[title];
  const faqSchema = guide && { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: guide.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  
  // Custom strengths for "Why MAMA Dental is the Best" (matching Screenshot 3)
  const strengths = [
    {
      icon: <Heart size={24} style={{ color: "#00acee" }} />,
      title: "Personalized Care",
      description: "Tailored treatments designed for your unique dental needs.",
    },
    {
      icon: <Landmark size={24} style={{ color: "#00acee" }} />,
      title: "Advanced Technology & Materials",
      description: "Cutting-edge equipment and high-quality materials for the best results.",
    },
    {
      icon: <UserCheck size={24} style={{ color: "#00acee" }} />,
      title: "Friendly & Expert Professionals",
      description: "Skilled dentists and staff providing compassionate care.",
    },
    {
      icon: <Feather size={24} style={{ color: "#00acee" }} />,
      title: "Calm Atmosphere",
      description: "A soothing environment for a stress-free dental experience.",
    },
  ];

  return (
    <>
      <Header />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      
      <main style={{ flex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden", backgroundColor: "#ffffff" }}>
        
        {/* Section 1: Hero Header Block */}
        <section className="service-hero-section" style={{ padding: "120px 0 60px 0" }}>
          <div className="service-container">
            {guide && <nav aria-label="Breadcrumb" style={{ marginBottom: "24px", fontSize: "0.9rem" }}><Link href="/" style={{ color: "#64748b" }}>Home</Link><span style={{ margin: "0 8px", color: "#94a3b8" }}>›</span><Link href="/services" style={{ color: "#64748b" }}>Services</Link><span style={{ margin: "0 8px", color: "#94a3b8" }}>›</span><span style={{ color: "#1e3a44" }}>{title}</span></nav>}
            {/* Header Title Row */}
            <div className="service-hero-title-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "30px", flexWrap: "wrap", gap: "20px" }}>
              <h1 className="service-page-title" style={{ fontSize: "3.8rem", fontWeight: "800", color: "#1e3a44", margin: 0, fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}>
                {title}
              </h1>
              <p className="service-page-slogan" style={{ fontSize: "1.1rem", fontWeight: "600", color: "#495057", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Because Your Smile Matters
              </p>
            </div>

            {/* Giant Hero Image with Rounded Corners */}
            <div className="service-hero-image-wrapper" style={{ position: "relative", width: "100%", height: "520px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 15px 40px rgba(0,0,0,0.06)" }}>
              <Image
                src={heroImage}
                alt={heroAlt}
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center 40%" }}
                sizes="100vw"
              />
            </div>
          </div>
        </section>

        {guide && <section style={{ padding: "40px 0 70px", backgroundColor: "#f8f9fa" }}>
          <div className="service-container service-guide-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 0.8fr)", gap: "48px" }}>
            <div><h2 className="service-section-title" style={{ color: "#1e3a44" }}>Understanding {title}</h2><p style={{ color: "#64748b", lineHeight: 1.75 }}>{guide.overview}</p><h3 style={{ color: "#1e3a44", marginTop: 28 }}>Who may benefit?</h3><p style={{ color: "#64748b", lineHeight: 1.75 }}>{guide.suitableFor}</p><h3 style={{ color: "#1e3a44", marginTop: 28 }}>Your treatment process</h3><ol style={{ color: "#64748b", lineHeight: 1.8, paddingLeft: 22 }}>{guide.process.map((step) => <li key={step}>{step}</li>)}</ol></div>
            <aside style={{ background: "#fff", borderRadius: 20, padding: 30, alignSelf: "start", border: "1px solid #e9ecef" }}><h2 style={{ color: "#1e3a44", marginTop: 0 }}>Questions about {title}?</h2>{guide.faqs.map((faq) => <div key={faq.question} style={{ marginBottom: 20 }}><h3 style={{ fontSize: "1rem", color: "#1e3a44", marginBottom: 6 }}>{faq.question}</h3><p style={{ color: "#64748b", lineHeight: 1.65, margin: 0 }}>{faq.answer}</p></div>)}<Link href="/contact" className="btn btn-primary" style={{ display: "inline-block", marginTop: 8 }}>Book a consultation</Link></aside>
          </div>
        </section>}

        {/* Section 2: Get to Know Section (4 Image-Background Cards) */}
        <section className="service-know-section" style={{ padding: "60px 0", backgroundColor: "#ffffff" }}>
          <div className="service-container">
            <h2 className="service-section-title" style={{ fontSize: "2.4rem", fontWeight: "700", color: "#1e3a44", marginBottom: "40px", fontFamily: "var(--font-serif)" }}>
              Get to Know {title}
            </h2>

            {/* 4 Cards Grid */}
            <div className="service-know-grid">
              {cards.map((card, idx) => (
                <div 
                  key={idx} 
                  className="service-know-card"
                  onClick={() => setActiveCardIdx(idx)}
                  style={{
                    position: "relative",
                    height: "480px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                    cursor: "pointer",
                  }}
                >
                  {/* Image Background */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Dark Top Gradient Overlay for perfect readability */}
                  <div 
                    style={{ 
                      position: "absolute", 
                      inset: 0, 
                      background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0) 100%)",
                      zIndex: 1 
                    }} 
                  />

                  {/* Top Content */}
                  <div style={{ position: "absolute", top: "24px", left: "24px", right: "24px", zIndex: 2, color: "#ffffff" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", color: "rgba(255, 255, 255, 0.8)", margin: "0 0 6px 0" }}>
                      {card.tag}
                    </p>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: "700", lineHeight: "1.3", margin: 0, color: "#ffffff" }}>
                      {card.title}
                    </h3>
                  </div>

                  {/* Bottom Right Icon matching Screenshot 2 */}
                  <div style={{
                    position: "absolute",
                    bottom: "24px",
                    right: "24px",
                    zIndex: 2,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    transition: "transform 0.2s ease",
                  }}
                  className="know-card-arrow"
                  >
                    <ArrowUpRight size={18} style={{ color: "#ffffff" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Why MAMA Dental is the Best */}
        <section className="service-best-section" style={{ padding: "60px 0 100px 0", backgroundColor: "#ffffff" }}>
          <div className="service-container">
            <h2 className="service-section-title" style={{ fontSize: "2.4rem", fontWeight: "700", color: "#1e3a44", marginBottom: "40px", fontFamily: "var(--font-serif)" }}>
              Why MAMA Dental is the Best
            </h2>

            {/* Strengths Cards Grid */}
            <div className="service-strengths-grid">
              {strengths.map((item, idx) => (
                <div 
                  key={idx}
                  className="service-strength-card"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #f1f3f5",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                    borderRadius: "20px",
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div className="strength-icon-wrapper" style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(0, 172, 238, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#0f172a", margin: 0 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: HomeCTA */}
        <HomeCTA />

      </main>

      {/* Details Dialog Modal (Matching Screenshot 2 layout) */}
      {activeCardIdx !== null && (
        <div 
          className="service-modal-overlay"
          onClick={() => setActiveCardIdx(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(4px)",
            zIndex: 3000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          <div 
            className="service-modal-box"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "680px",
              maxHeight: "85vh",
              overflowY: "auto",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              padding: "40px",
              position: "relative",
              animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveCardIdx(null)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#64748b",
                padding: "4px",
                borderRadius: "50%",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f1f5f9"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
            >
              <X size={24} />
            </button>

            {/* Modal Titles */}
            <div style={{ marginBottom: "32px", paddingRight: "40px" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#1e3a44", margin: 0, fontFamily: "var(--font-serif)" }}>
                {cards[activeCardIdx].tag}
              </h2>
            </div>

            {/* Detailed Info List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {cards[activeCardIdx].details.map((detail, dIdx) => (
                <div 
                  key={dIdx} 
                  style={{ 
                    borderBottom: dIdx === cards[activeCardIdx].details.length - 1 ? "none" : "1px solid #f1f5f9",
                    paddingBottom: dIdx === cards[activeCardIdx].details.length - 1 ? "0" : "24px"
                  }}
                >
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>
                    {detail.title}
                  </h3>
                  <p style={{ fontSize: "1rem", color: "#475569", lineHeight: "1.6", margin: 0 }}>
                    {detail.desc}
                  </p>
                  
                  {/* Subtle placeholder icon line to match visual in screenshot */}
                  <div style={{ 
                    width: "32px", 
                    height: "2px", 
                    backgroundColor: "rgba(0, 172, 238, 0.15)", 
                    marginTop: "16px",
                    borderRadius: "20px" 
                  }} />
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
