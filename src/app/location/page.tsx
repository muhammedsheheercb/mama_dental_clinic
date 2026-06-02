import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Location | MAMA Dental Clinic & Orthodontic Centre | Pazhanji, Kerala",
  description: "Find MAMA Dental Clinic and Orthodontic Centre near you. Visit our state-of-the-art clinic in Pazhanji, Kerala. Led by Orthodontist Dr. Minu.",
};

export default function LocationPage() {
  return (
    <>
      <Header />
      
      <main style={{ flex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden", backgroundColor: "#ffffff" }}>
        
        {/* Section 1: Title and Branch Cards Grid */}
        <section className="location-hero-section" style={{ padding: "140px 0 60px 0", backgroundColor: "#ffffff" }}>
          <div className="service-container">
            
            <h1 className="location-hero-title" style={{ fontSize: "3.6rem", fontWeight: "800", color: "#1e3a44", textAlign: "center", marginBottom: "60px", fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}>
              Find a Branch Near You
            </h1>

            {/* 2-Column Branches Card Grid */}
            {/* Single Branch Card centered */}
            <div className="location-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px", marginBottom: "80px", maxWidth: "800px", margin: "0 auto 80px auto" }}>
              
              {/* Branch 1: Pazhanji, Kerala */}
              <div 
                className="location-card" 
                style={{ 
                  position: "relative", 
                  height: "480px", 
                  borderRadius: "24px", 
                  overflow: "hidden", 
                  boxShadow: "0 15px 35px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end"
                }}
              >
                {/* Background Image */}
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                  alt="MAMA Dental Clinic & Orthodontic Centre Pazhanji"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                
                {/* Gradient Overlay for Legibility */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)", zIndex: 1 }} />

                {/* Text Content Overlay */}
                <div style={{ position: "relative", zIndex: 2, padding: "40px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#ffffff", margin: 0, fontFamily: "var(--font-serif)" }}>
                    Pazhanji, Kerala
                  </h2>
                  <p style={{ fontSize: "1rem", color: "#e2e8f0", margin: 0, lineHeight: "1.5", maxWidth: "520px" }}>
                    M3P3+X23, Main Road, Pazhanji, Kerala 680542
                  </p>
                  <a 
                    href="https://share.google/IYBJ7i53KJ7Tmw4lS" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="location-link"
                    style={{ 
                      fontSize: "1.1rem", 
                      fontWeight: "700", 
                      color: "#00acee", 
                      textDecoration: "none", 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: "6px",
                      marginTop: "5px",
                      transition: "color 0.2s ease"
                    }}
                  >
                    Get directions <ArrowRight size={18} />
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom Banner Section matching mockup exactly */}
            <div 
              className="location-banner"
              style={{
                width: "100%",
                backgroundColor: "#00acee",
                borderRadius: "24px",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                alignItems: "center",
                boxShadow: "0 15px 35px rgba(0, 172, 238, 0.2)",
                marginBottom: "60px",
                position: "relative"
              }}
            >
              {/* Left Column Content */}
              <div style={{ padding: "60px", display: "flex", flexDirection: "column", gap: "28px", zIndex: 2 }}>
                <h2 style={{ fontSize: "3rem", fontWeight: "800", color: "#ffffff", lineHeight: "1.2", margin: 0 }}>
                  Experience the Difference in Dental Care
                </h2>
                
                <div>
                  <Link 
                    href="/contact" 
                    className="btn-pill-white-cta"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#00acee",
                      borderRadius: "100px",
                      padding: "14px 40px",
                      fontWeight: "800",
                      fontSize: "1.05rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              {/* Right Column Image */}
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "360px", display: "flex", justifyContent: "flex-end", overflow: "hidden" }}>
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                  alt="Smiling Patient at Dental Clinic"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
