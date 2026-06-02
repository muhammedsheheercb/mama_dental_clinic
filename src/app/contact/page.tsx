import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | MAMA Dental Clinic & Orthodontic Centre | Pazhanji, Kerala",
  description: "Get in touch with MAMA Dental Clinic and Orthodontic Centre in Pazhanji, Kerala. Reach out to schedule a consultation or ask Dr. Minu and our orthodontics team any questions.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main style={{ flex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden", backgroundColor: "#ffffff" }}>

        {/* Section 1: Hero Header */}
        <section className="contact-hero-section" style={{ padding: "140px 0 50px 0", backgroundColor: "#ffffff", textAlign: "center" }}>
          <div className="service-container">
            <h1 className="contact-hero-title" style={{ fontSize: "3.6rem", fontWeight: "800", color: "#1e3a44", margin: "0 0 16px 0", fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}>
              Contact Us
            </h1>
            <p style={{ fontSize: "1.15rem", color: "#64748b", margin: "0 auto", maxWidth: "600px", lineHeight: "1.6" }}>
              We'd love to hear from you. Reach out to schedule a consultation or ask our specialists any questions.
            </p>
          </div>
        </section>

        {/* Section 2: Contact Details & Image Grid */}
        <section style={{ padding: "30px 0 100px 0", backgroundColor: "#ffffff" }}>
          <div className="service-container">

            <div className="contact-layout-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" }}>

              {/* Left Column: Beautiful Clinic Image */}
              <div
                className="contact-image-wrapper"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "560px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 45px rgba(0, 0, 0, 0.06)"
                }}
              >
                <Image
                  src="/images/contact.webp"
                  alt="MAMA Dental Clinic & Orthodontic Centre Lounge"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Right Column: Info Panel & Google Maps */}
              <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

                {/* Details Section */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }} className="contact-details-box">
                  <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#1e3a44", margin: 0, fontFamily: "var(--font-serif)" }}>
                    Get In Touch
                  </h2>

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                      <div style={{ backgroundColor: "#f0fdf4", color: "#00acee", padding: "10px", borderRadius: "12px" }}>
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "0.95rem", fontWeight: "700", color: "#1e293b", margin: "0 0 4px 0" }}>Location</h4>
                        <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0, lineHeight: "1.5" }}>
                          M3P3+X23, Main Road,<br />Pazhanji, Kerala 680542
                        </p>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                      <div style={{ backgroundColor: "#f0fdf4", color: "#00acee", padding: "10px", borderRadius: "12px" }}>
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "0.95rem", fontWeight: "700", color: "#1e293b", margin: "0 0 4px 0" }}>Phone Number</h4>
                        <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}>
                          <a href="tel:+919048054405" style={{ color: "#64748b", textDecoration: "none" }}>+91 90480 54405</a>
                        </p>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                      <div style={{ backgroundColor: "#f0fdf4", color: "#00acee", padding: "10px", borderRadius: "12px" }}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "0.95rem", fontWeight: "700", color: "#1e293b", margin: "0 0 4px 0" }}>Email Address</h4>
                        <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}>
                          <a href="mailto:mamapazhanji@gmail.com" style={{ color: "#64748b", textDecoration: "none" }}>mamapazhanji@gmail.com</a>
                        </p>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                      <div style={{ backgroundColor: "#f0fdf4", color: "#00acee", padding: "10px", borderRadius: "12px" }}>
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "0.95rem", fontWeight: "700", color: "#1e293b", margin: "0 0 4px 0" }}>Office Hours</h4>
                        <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0, lineHeight: "1.5" }}>
                          Mon - Sat: 8:00 AM - 8:00 PM<br />Sunday: Closed
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Google Maps Iframe wrapper */}
                <div
                  className="contact-map-wrapper"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                    border: "1px solid #f1f5f9"
                  }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=MAMA%20Dental%20Clinic%20and%20Orthodontic%20Centre,%20Pazhanji,%20Kerala&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
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
