import React from "react";
import Image from "next/image";
import { Percent, Star, Shield } from "lucide-react";

export default function HomeStudent() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 0 60px 0", width: "100%", maxWidth: "100%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
        
        {/* Pink Offer Tag */}
        <div style={{ marginBottom: "24px" }}>
          <span style={{
            backgroundColor: "#ff5a79",
            color: "#ffffff",
            fontSize: "0.75rem",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            padding: "6px 16px",
            borderRadius: "100px",
            display: "inline-block",
          }}>
            FOR STUDENTS
          </span>
        </div>

        {/* Center Banner Row with Circular Images */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          marginBottom: "32px",
          flexWrap: "wrap",
        }}>
          {/* Left Circular Image */}
          <div style={{
            position: "relative",
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            flexShrink: 0,
          }}>
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=200"
              alt="Clear Aligner student treatment"
              fill
              style={{ objectFit: "cover" }}
              sizes="110px"
            />
          </div>

          {/* Center Blue Speech/Banner Container */}
          <div style={{
            backgroundColor: "#00acee",
            color: "#ffffff",
            fontSize: "1.6rem",
            fontWeight: "700",
            padding: "24px 44px",
            borderRadius: "24px",
            boxShadow: "0 10px 25px rgba(0, 172, 238, 0.25)",
            maxWidth: "500px",
            textAlign: "center",
            lineHeight: "1.3",
          }}>
            Book Smile Transformation for Students
          </div>

          {/* Right Circular Image */}
          <div style={{
            position: "relative",
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            flexShrink: 0,
          }}>
            <Image
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=200"
              alt="Intraoral scan precision alignment"
              fill
              style={{ objectFit: "cover" }}
              sizes="110px"
            />
          </div>
        </div>

        {/* Benefits Row 1 */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "16px",
        }}>
          <div style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "100px",
            padding: "10px 24px",
            fontSize: "0.9rem",
            fontWeight: "600",
            color: "#2c3e4c",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
          }}>
            <span style={{ color: "#2ec4b6", fontWeight: "700" }}>%</span>
            With Education Savings
          </div>

          <div style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "100px",
            padding: "10px 24px",
            fontSize: "0.9rem",
            fontWeight: "600",
            color: "#2c3e4c",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
          }}>
            <span style={{ color: "#e5ba73" }}>☆</span>
            Get Transform With Latest Technology
          </div>
        </div>

        {/* Benefits Row 2 */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "28px",
        }}>
          <div style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "100px",
            padding: "10px 24px",
            fontSize: "0.9rem",
            fontWeight: "600",
            color: "#2c3e4c",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
          }}>
            <Shield size={16} style={{ color: "#ff5a79" }} />
            Most Comfort With Your Convenience
          </div>
        </div>

        {/* Sub-brand Location Tag */}
        <div style={{ marginBottom: "20px" }}>
          <span style={{
            backgroundColor: "#f0f3f5",
            color: "#4a5568",
            fontSize: "0.75rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            padding: "6px 18px",
            borderRadius: "100px",
            display: "inline-block",
          }}>
            AT FIRSTOOTH
          </span>
        </div>

        {/* Register Button */}
        <div>
          <a href="#book" className="btn-pill-blue" style={{ fontSize: "1.05rem", padding: "14px 44px" }}>
            Register Now
          </a>
        </div>

      </div>
    </section>
  );
}
