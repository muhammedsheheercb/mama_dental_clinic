"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function HomeStrengths() {
  const baseSlides = [
    {
      title: "Personalized Care",
      description: "Tailored treatment for your unique-smile experience dental care like never before.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Relax, Just Like in a Cafe",
      description: "Enjoy dental care in cafe like comfort and warmth.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Latest Technology",
      description: "Innovative dental solutions for exceptional results.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  // Double the slides to create a smooth looping effect
  const slides = [...baseSlides, ...baseSlides];

  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= baseSlides.length) {
          // If we reach the end of first set, schedule a silent jump back to index 0 after transition completes
          setTimeout(() => {
            setTransitionEnabled(false);
            setActiveIndex(0);
          }, 800); // match transition duration
          setTransitionEnabled(true);
          return nextIndex;
        }
        setTransitionEnabled(true);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [baseSlides.length]);

  return (
    <section className="section" id="strengths" style={{ backgroundColor: "var(--white)", padding: "80px 0", width: "100%", maxWidth: "100%", overflow: "hidden" }}>
      <div style={{ width: "100%" }}>
        
        {/* Title Block */}
        <div className="section-title-wrapper" style={{ marginBottom: "40px", textAlign: "center", padding: "0 20px" }}>
          <div className="subtitle-badge" style={{ margin: "0 auto 12px auto" }}>
            <Sparkles size={16} />
            <span>Clinic Philosophy</span>
          </div>
          <h2 className="section-title">
            Redefining the <span>dental experience.</span>
          </h2>
          <p className="section-description">
            Experience our specialized cafe-style patient lounge and cutting-edge intraoral diagnostic clinic settings.
          </p>
        </div>

        {/* Carousel container */}
        <div className="strengths-carousel-container">
          {/* Slide list wrapper */}
          <div 
            className="strengths-carousel-track"
            style={{
              transition: transitionEnabled ? "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
              // Pass the active index directly to the track
              // @ts-ignore
              "--active-index": activeIndex,
            }}
          >
            {slides.map((slide, index) => {
              const displayIndex = index % baseSlides.length;
              const isActive = activeIndex % baseSlides.length === displayIndex;
              return (
                <div
                  key={index}
                  className="strengths-slide"
                  style={{
                    opacity: isActive ? 1 : 0.5,
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 70vw"
                  />
                  {/* Dark text overlay */}
                  <div className="service-banner-overlay-dark" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)" }} />
                  
                  {/* Caption */}
                  <div className="strengths-caption">
                    <h3 style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: "700",
                      color: "#ffffff",
                    }}>
                      {slide.title}
                    </h3>
                    <p style={{
                      lineHeight: "1.5",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}>
                      {slide.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="carousel-dots" style={{ marginTop: "24px" }}>
          {baseSlides.map((_, index) => (
            <span
              key={index}
              onClick={() => {
                setTransitionEnabled(true);
                setActiveIndex(index);
              }}
              className={`carousel-dot ${activeIndex % baseSlides.length === index ? "active" : ""}`}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
