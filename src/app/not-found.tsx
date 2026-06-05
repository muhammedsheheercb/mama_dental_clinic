import React from "react";
import Link from "next/link";
import { Smile, Home, Calendar, ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "404 - Page Not Found | MAMA Dental Clinic",
  description: "The page you are looking for does not exist. Return to MAMA Dental Clinic & Orthodontic Centre home page or contact us.",
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main style={{ flex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden", backgroundColor: "#ffffff" }}>
        
        <section 
          className="notfound-section" 
          style={{ 
            padding: "160px 0 100px 0", 
            backgroundColor: "#ffffff", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            minHeight: "75vh"
          }}
        >
          <div className="container" style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto" }}>
            
            {/* Visual Icon Badge */}
            <div 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center", 
                width: "90px", 
                height: "90px", 
                borderRadius: "50%", 
                backgroundColor: "var(--primary-light)", 
                color: "var(--primary)", 
                marginBottom: "30px",
                boxShadow: "0 10px 25px rgba(15, 76, 92, 0.08)"
              }}
            >
              <Smile size={48} strokeWidth={1.5} />
            </div>

            {/* Subtitle Badge */}
            <div>
              <span 
                className="subtitle-badge" 
                style={{ 
                  backgroundColor: "rgba(46, 196, 182, 0.08)", 
                  color: "var(--secondary)", 
                  border: "1px solid rgba(46, 196, 182, 0.2)",
                  fontSize: "0.85rem",
                  fontWeight: "700"
                }}
              >
                Error Code: 404
              </span>
            </div>

            {/* Main Title */}
            <h1 
              style={{ 
                fontSize: "3.2rem", 
                fontWeight: "800", 
                color: "var(--primary)", 
                marginTop: "10px", 
                marginBottom: "20px", 
                fontFamily: "var(--font-serif)", 
                letterSpacing: "-0.02em",
                lineHeight: "1.2"
              }}
            >
              Don't Lose Your <span>Smile</span>
            </h1>

            {/* Description */}
            <p 
              style={{ 
                fontSize: "1.125rem", 
                color: "var(--dark-light)", 
                lineHeight: "1.65", 
                marginBottom: "40px",
                fontWeight: "400"
              }}
            >
              We couldn't find the page you are looking for. It might have been moved, deleted, or the URL might be incorrect. Let's get you back on track.
            </p>

            {/* CTA Buttons */}
            <div 
              style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                justifyContent: "center", 
                gap: "16px" 
              }}
            >
              <Link 
                href="/" 
                className="btn btn-primary" 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "8px",
                  padding: "14px 28px",
                  fontWeight: "600",
                  textDecoration: "none"
                }}
              >
                <Home size={18} />
                Return Home
              </Link>
              
              <Link 
                href="/contact" 
                className="btn btn-secondary" 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "8px",
                  padding: "14px 28px",
                  fontWeight: "600",
                  textDecoration: "none"
                }}
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
            </div>

            {/* Direct contact link */}
            <div style={{ marginTop: "40px" }}>
              <Link 
                href="/contact" 
                style={{ 
                  fontSize: "0.95rem", 
                  fontWeight: "600", 
                  color: "var(--secondary)", 
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                Need immediate help? Contact support <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
