"use client";

import React, { useState } from "react";
import Image from "next/image";
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

export default function ServicePageTemplate({
  title,
  heroImage,
  heroAlt = title,
  cards,
}: ServicePageProps) {
  const [activeCardIdx, setActiveCardIdx] = useState<number | null>(null);
  
  // Custom strengths for "Why Firstooth is the Best" (matching Screenshot 3)
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
      
      <main style={{ flex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden", backgroundColor: "#ffffff" }}>
        
        {/* Section 1: Hero Header Block */}
        <section className="service-hero-section" style={{ padding: "120px 0 60px 0" }}>
          <div className="service-container">
            {/* Header Title Row */}
            <div className="service-hero-title-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "30px", flexWrap: "wrap", gap: "20px" }}>
              <h1 className="service-page-title" style={{ fontSize: "3.8rem", fontWeight: "800", color: "#1e3a44", margin: 0, fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}>
                {title}
              </h1>
              <p className="service-page-slogan" style={{ fontSize: "1.1rem", fontWeight: "600", color: "#495057", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Because Smile Matters
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

        {/* Section 3: Why Firstooth is the Best */}
        <section className="service-best-section" style={{ padding: "60px 0 100px 0", backgroundColor: "#ffffff" }}>
          <div className="service-container">
            <h2 className="service-section-title" style={{ fontSize: "2.4rem", fontWeight: "700", color: "#1e3a44", marginBottom: "40px", fontFamily: "var(--font-serif)" }}>
              Why Firstooth is the Best
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
              <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "#64748b", margin: "0 0 4px 0" }}>
                Straighten Your Smile Without The Metal.
              </p>
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
