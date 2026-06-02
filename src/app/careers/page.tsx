import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Careers | Join Firstooth Dental Studio | Thrissur",
  description: "Discover your place at Firstooth Dental Studio. Explore dental job opportunities, associate dentist positions, and healthcare careers in Thrissur, Kerala.",
};

export default function CareersPage() {
  return (
    <>
      <Header />

      <main style={{ flex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden", backgroundColor: "#ffffff" }}>

        {/* Section 1: Careers Hero Header */}
        <section className="careers-hero-section" style={{ padding: "140px 0 80px 0", backgroundColor: "#ffffff" }}>
          <div className="service-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

            <h1 className="careers-hero-title" style={{ fontSize: "3.8rem", fontWeight: "800", color: "#1e3a44", margin: "0 0 16px 0", fontFamily: "var(--font-serif)", letterSpacing: "-0.02em", maxWidth: "800px", lineHeight: "1.15" }}>
              Discover Your Place at Firstooth
            </h1>

            <p className="careers-hero-slogan" style={{ fontSize: "1.2rem", color: "#64748b", margin: "0 auto 32px auto", maxWidth: "680px", lineHeight: "1.6" }}>
              We foster a vibrant and innovative environment where creativity knows no bounds, and every idea has the power to make an impact.
            </p>



            {/* Giant Collaborative Team Image with Rounded Corners */}
            <div className="careers-hero-image-wrapper" style={{ position: "relative", width: "100%", height: "580px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 45px rgba(0,0,0,0.06)" }}>
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Firstooth collaborative clinical and healthcare team laughing and planning"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center 25%" }}
                sizes="100vw"
              />
            </div>

          </div>
        </section>

        {/* Section 2: Why Work With Us (Dark Sleek Background matching Screenshot 2) */}
        <section id="why" className="careers-why-section" style={{ padding: "100px 0", backgroundColor: "#111827" }}>
          <div className="service-container">

            <h2 className="careers-why-title" style={{ fontSize: "3rem", fontWeight: "800", color: "#ffffff", textAlign: "center", marginBottom: "60px", fontFamily: "var(--font-serif)" }}>
              Why Work With Us
            </h2>

            {/* 3-Column Cards Grid */}
            <div className="careers-why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>

              {/* Column 1: Life at Firstooth */}
              <div className="careers-why-card" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
                    alt="Life at Firstooth - Dentist collaboration"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    Life at Firstooth
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#9ca3af", lineHeight: "1.6", margin: 0 }}>
                    <strong style={{ color: "#ffffff" }}>We Welcome You.</strong> Creating connection and belonging in the world begins with a workplace where you're welcomed and empowered to be your authentic self, so you can deliver your best work. We're committed to ensuring FIRSTOOTH is a place where people of all backgrounds, identities, and experiences can thrive.
                  </p>
                </div>
              </div>

              {/* Column 2: Join at Firstooth */}
              <div className="careers-why-card" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1643660526741-094639fbe53a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Join at Firstooth - Clinical interaction"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    Join at Firstooth
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#9ca3af", lineHeight: "1.6", margin: 0 }}>
                    <strong style={{ color: "#ffffff" }}>Make an Impact.</strong> Join our creative community, where passion and collaboration drive innovation to make services that impact the world. Work alongside talented people and be part of our vibrant community, encompassing people from all walks of life.
                  </p>
                </div>
              </div>

              {/* Column 3: Grow and Thrive Firstooth */}
              <div className="careers-why-card" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Grow and Thrive at Firstooth - Stacking hands"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    Grow and Thrive Firstooth
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#9ca3af", lineHeight: "1.6", margin: 0 }}>
                    <strong style={{ color: "#ffffff" }}>Learn and Succeed.</strong> Become part of our dynamic community, where curiosity fuels growth and collaboration fosters knowledge. Work alongside passionate individuals and elevate your skills in an inclusive environment that embraces diverse perspectives and backgrounds.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
