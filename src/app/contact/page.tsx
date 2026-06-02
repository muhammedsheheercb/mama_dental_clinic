import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | Firstooth Dental Studio | Thrissur",
  description: "Get in touch with Firstooth Dental Studio. Reach out to schedule a consultation or ask our specialists any questions. Safa Tower, Punkunnam, Thrissur, Kerala.",
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
                  alt="Firstooth Dental Studio Clinic Lounge"
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
                          Second Floor, Safa Tower, Guruvayur Rd,<br />Punkunnam, Thrissur, Kerala 680002
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
                          <a href="tel:+918089099990" style={{ color: "#64748b", textDecoration: "none" }}>+91 80890 99990</a>
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
                          <a href="mailto:firstoothaesthetics@gmail.com" style={{ color: "#64748b", textDecoration: "none" }}>firstoothaesthetics@gmail.com</a>
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
                          Mon - Sat: 9:30 AM - 7:30 PM<br />Sunday: By Appointment Only
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.3789498275525!2d76.20015947596008!3d10.549429789589887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee46d03cf819%3A0xe54d4f82664972be!2sFirstooth%20Dental%20Studio!5e0!3m2!1sen!2sin!4v1717316000000!5m2!1sen!2sin"
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
