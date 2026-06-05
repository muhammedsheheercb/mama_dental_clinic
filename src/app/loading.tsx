import React from "react";

export default function Loading() {
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        width: "100%",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* CSS Animation Keyframes injected locally */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes dash {
          0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
          }
        }
        @keyframes pulse-soft {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.85;
          }
        }
        .animate-spin-custom {
          animation: rotate 2s linear infinite;
        }
        .animate-dash-custom {
          stroke-linecap: round;
          animation: dash 1.5s ease-in-out infinite;
        }
        .animate-pulse-custom {
          animation: pulse-soft 2s ease-in-out infinite;
        }
      `}} />

      {/* Decorative background elements for premium feel */}
      <div 
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46, 196, 182, 0.05) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />
      <div 
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(15, 76, 92, 0.04) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      {/* Loader Container */}
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          zIndex: 2
        }}
      >
        {/* Animated Loader Circle */}
        <div style={{ position: "relative", width: "80px", height: "80px" }}>
          {/* External Spinning Ring */}
          <svg 
            className="animate-spin-custom" 
            viewBox="0 0 50 50" 
            style={{ width: "100%", height: "100%" }}
          >
            <circle 
              className="animate-dash-custom"
              cx="25" 
              cy="25" 
              r="20" 
              fill="none" 
              stroke="url(#loaderGradient)" 
              strokeWidth="3.5" 
            />
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0f4c5c" />
                <stop offset="100%" stopColor="#2ec4b6" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Internal Pulsing Icon (Stylized sparkle/tooth shape in center) */}
          <div 
            className="animate-pulse-custom"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#2ec4b6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* Sparkle Icon */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
            </svg>
          </div>
        </div>

        {/* Branding & text */}
        <div style={{ textAlign: "center" }}>
          <h2 
            style={{ 
              fontSize: "1.45rem", 
              fontWeight: "800", 
              color: "#0f4c5c",
              margin: "0 0 6px 0",
              letterSpacing: "-0.01em",
              fontFamily: "var(--font-sans)"
            }}
          >
            MAMA DENTAL<span style={{ color: "#2ec4b6" }}>.</span>
          </h2>
          <p 
            style={{ 
              fontSize: "0.85rem", 
              fontWeight: "600", 
              textTransform: "uppercase", 
              letterSpacing: "0.15em", 
              color: "#64748b",
              margin: 0
            }}
          >
            Loading Experience
          </p>
        </div>
      </div>
    </div>
  );
}
