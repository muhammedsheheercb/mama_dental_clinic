"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home, MessageSquare } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function ErrorPage({
  error,
  reset,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
  unstable_retry?: () => void;
}) {
  useEffect(() => {
    // Log the error to console or error reporter
    console.error("Runtime error caught:", error);
  }, [error]);

  const handleRetry = () => {
    // Call unstable_retry if available, otherwise fallback to reset, or window reload
    if (unstable_retry) {
      unstable_retry();
    } else if (reset) {
      reset();
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <Header />

      <main style={{ flex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden", backgroundColor: "#ffffff" }}>
        
        <section 
          className="error-section" 
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
                backgroundColor: "rgba(229, 186, 115, 0.1)", 
                color: "var(--accent)", 
                marginBottom: "30px",
                boxShadow: "0 10px 25px rgba(225, 186, 115, 0.08)"
              }}
            >
              <AlertCircle size={48} strokeWidth={1.5} />
            </div>

            {/* Subtitle Badge */}
            <div>
              <span 
                className="subtitle-badge" 
                style={{ 
                  backgroundColor: "rgba(229, 186, 115, 0.08)", 
                  color: "#d97706", 
                  border: "1px solid rgba(229, 186, 115, 0.2)",
                  fontSize: "0.85rem",
                  fontWeight: "700"
                }}
              >
                Unexpected Error
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
              Let's Try <span>Again</span>
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
              We encountered a temporary technical glitch while displaying this page. Try refreshing the page or navigating back home to resume booking your appointment.
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
              <button 
                onClick={handleRetry}
                className="btn btn-primary" 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "8px",
                  padding: "14px 28px",
                  fontWeight: "600",
                  cursor: "pointer",
                  border: "none"
                }}
              >
                <RotateCcw size={18} />
                Try Refreshing
              </button>
              
              <Link 
                href="/" 
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
                <Home size={18} />
                Return Home
              </Link>
            </div>

            {/* Error digest code for support */}
            {error.digest && (
              <div style={{ marginTop: "40px", fontSize: "0.8rem", color: "#94a3b8" }}>
                Error Reference ID: <span style={{ fontFamily: "monospace", padding: "3px 6px", backgroundColor: "#f1f5f9", borderRadius: "4px" }}>{error.digest}</span>
              </div>
            )}

            {/* Direct support link */}
            <div style={{ marginTop: "30px" }}>
              <Link 
                href="/contact" 
                style={{ 
                  fontSize: "0.95rem", 
                  fontWeight: "600", 
                  color: "var(--secondary)", 
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <MessageSquare size={16} /> Contact Support
              </Link>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
