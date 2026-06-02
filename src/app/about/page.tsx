import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us | Firstooth Dental Studio | Thrissur",
  description: "Learn more about Firstooth Dental Studio. Founded in 2020, we are a cosmetic dental studio focused on transforming smiles with personalised care.",
};

export default function AboutPage() {
  const stats = [
    {
      id: 1,
      value: "1K+",
      label: "Smiles transformed at FIRSTOOTH",
      date: "As of Dec 30, 2024",
    },
    {
      id: 2,
      value: "20+",
      label: "Cosmetic dental treatments offered",
      date: "As of Dec 30, 2024",
    },
    {
      id: 3,
      value: "1K+",
      label: "Happy clients each year",
      date: "As of Dec 30, 2024",
    },
    {
      id: 4,
      value: "98%",
      label: "Client satisfaction rate",
      date: "As of Dec 30, 2024",
    },
  ];

  return (
    <>
      <Header />

      <main style={{ flex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden", backgroundColor: "#ffffff" }}>

        {/* Section 1: Hero Image Banner */}
        <section className="about-hero-section" style={{ padding: "120px 0 40px 0", backgroundColor: "#ffffff" }}>
          <div className="service-container">
            <div
              className="about-hero-image-wrapper"
              style={{
                position: "relative",
                width: "100%",
                height: "560px",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.05)"
              }}
            >
              <Image
                src="/images/about.webp"
                alt="Firstooth Dental Studio Collaborating Team"
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
          </div>
        </section>

        {/* Section 2: About Description */}
        <section style={{ padding: "10px 0 60px 0", backgroundColor: "#ffffff" }}>
          <div className="service-container">
            <div style={{ maxWidth: "1200px" }}>
              <h1
                className="about-title"
                style={{
                  fontSize: "3.2rem",
                  fontWeight: "800",
                  color: "#1e3a44",
                  margin: "0 0 20px 0",
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "-0.01em"
                }}
              >
                About Us
              </h1>

              <p
                className="about-description"
                style={{
                  fontSize: "1.2rem",
                  color: "#334155",
                  lineHeight: "1.8",
                  margin: 0,
                  maxWidth: "1000px"
                }}
              >
                FIRSTOOTH was born in 2020, a cosmetic dental studio focused on transforming smiles with personalised care.
                Combining technology and artistry, we offer innovative treatments designed to enhance your natural beauty and boost
                confidence. At FIRSTOOTH, every smile is special, and we're here to help you shine – Because smile matters.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Fast Facts (Light slate-gray background) */}
        <section style={{ padding: "80px 0 100px 0", backgroundColor: "#f8fafc" }}>
          <div className="service-container">

            <h2
              className="about-subtitle"
              style={{
                fontSize: "2.4rem",
                fontWeight: "800",
                color: "#1e3a44",
                margin: "0 0 40px 0",
                fontFamily: "var(--font-serif)"
              }}
            >
              Fast Facts
            </h2>

            <div className="about-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="about-stat-card"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    padding: "32px 24px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
                    border: "1px solid #f1f5f9",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "180px"
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span
                      style={{
                        fontSize: "3.2rem",
                        fontWeight: "900",
                        color: "#1e3a44",
                        lineHeight: 1,
                        fontFamily: "var(--font-serif)"
                      }}
                    >
                      {stat.value}
                    </span>
                    <span style={{ fontSize: "1rem", fontWeight: "600", color: "#475569", lineHeight: "1.4" }}>
                      {stat.label}
                    </span>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "16px" }}>
                    {stat.date}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
