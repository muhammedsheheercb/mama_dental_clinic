"use client";

import React, { useState, useEffect } from "react";

export default function HomeTestimonials() {
  const baseTestimonials = [
    {
      name: "Megha S",
      review: "For my big day, I chose the Glam the Glow package, and I couldn't be happier! The whitening treatment brightened my smile instantly. The doctors were incredibly friendly, and the process was so easy and comfortable.",
    },
    {
      name: "Rahul",
      review: "I was hesitant about aligners, but MAMA Dental Clinic made everything simple. The consultation was informative, and I got to choose the best plan for me. No unnecessary costs, just honest advice. The aligners are comfortable, and my smile is already transforming!",
    },
    {
      name: "Sneha",
      review: "My teeth have never looked this bright! The whitening session at MAMA Dental Clinic was quick, painless, and super effective. Dr. Minu and the team made sure I was comfortable throughout. The results are amazing, and I left with a confident smile!",
    },
    {
      name: "Nikhil P",
      review: "Getting braces at MAMA Dental Clinic was one of the best decisions I've made! The process was easy, and the team made every visit comfortable. The doctor was always reassuring, and I'm loving how my teeth are shaping up!",
    },
    {
      name: "Hari Prasad",
      review: "I always wanted a perfect smile, and MAMA Dental Clinic made it possible with veneers. Dr. Minu explained everything clearly, without pressure to choose expensive treatments. They provided all options, and I chose what suited me best. Love the results!",
    },
    {
      name: "Sandhya Nair",
      review: "The cosmetic teeth shaping treatment was absolutely amazing! The staff was incredibly patient and kept checking on my comfort. My smile feels much more balanced now, and the costs were exactly as discussed.",
    },
    {
      name: "Jithin Mathew",
      review: "Highly professional dental clinic in Pazhanji. The advanced intraoral scanning technology they use is impressive. No messy molds, just instant digital maps. Fast, clean, and extremely comfortable clear aligner treatment.",
    },
    {
      name: "Anupama Kurian",
      review: "Wonderful service and cafe-like patient lounge! I felt relaxed the moment I walked in. The whitening treatment exceeded my expectations. I will definitely be returning for my routine checkups.",
    },
  ];

  // Clone array to support seamless infinite loop
  const testimonials = [...baseTestimonials, ...baseTestimonials];

  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitionEnabled(true);
      setActiveIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Use a precise useEffect timer callback to reset seamlessly and eliminate blank space forever!
  useEffect(() => {
    if (activeIndex >= baseTestimonials.length) {
      const resetTimeout = setTimeout(() => {
        setTransitionEnabled(false);
        setActiveIndex(0);
      }, 800); // match transition speed precisely
      return () => clearTimeout(resetTimeout);
    }
  }, [activeIndex, baseTestimonials.length]);

  return (
    <section className="section" id="testimonials" style={{ backgroundColor: "#fafbfc", padding: "80px 0", width: "100%", maxWidth: "100%", overflowX: "hidden" }}>
      <div style={{ width: "100%", padding: "0 10px" }}> {/* Exact px-10 side padding */}
        
        {/* Header Block matching Screenshot 11 */}
        <div style={{ marginBottom: "50px", textAlign: "center" }}>
          <div style={{ marginBottom: "16px" }}>
            <span style={{
              backgroundColor: "transparent",
              color: "#00acee",
              border: "1px solid rgba(0, 172, 238, 0.4)",
              borderRadius: "100px",
              padding: "6px 20px",
              fontSize: "0.8rem",
              fontWeight: "600",
              display: "inline-block",
            }}>
              Testimonial
            </span>
          </div>
          <h2 style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            color: "#0f172a",
            margin: "0 0 16px 0",
            fontFamily: "var(--font-serif)",
          }}>
            Experiences Shared by Our Clients
          </h2>
        </div>

        {/* Carousel Viewport spanning 100% of screen offset by 10px */}
        <div style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}>
          {/* Slider Track */}
          <div 
            style={{
              display: "flex",
              transform: `translateX(calc(-${activeIndex} * (25vw - 5px)))`, // Bulletproof translate relative to viewport
              transition: transitionEnabled ? "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
              width: "max-content",
            }}
            className="testimonial-slider-track"
          >
            {testimonials.map((test, index) => (
              <div
                key={index}
                style={{
                  width: "calc(25vw - 29px)", // Width calculated based on viewport width to show 4 reviews on screen
                  marginRight: "24px",
                  boxSizing: "border-box",
                }}
                className="testimonial-carousel-card"
              >
                <div style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #f1f3f5",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.02)",
                  borderRadius: "20px",
                  padding: "36px",
                  minHeight: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                  {/* Card Content */}
                  <div>
                    {/* Tiny quote icon */}
                    <div style={{ marginBottom: "20px" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h4c0 4-2 6-5 7" />
                        <path d="M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2-.75-2 2v4c0 1.25.75 2 2 2h4c0 4-2 6-5 7" />
                      </svg>
                    </div>

                    {/* Review Text */}
                    <p style={{
                      fontSize: "0.95rem",
                      color: "#64748b",
                      lineHeight: "1.7",
                      margin: 0,
                      fontWeight: "400",
                    }}>
                      {test.review}
                    </p>
                  </div>

                  {/* Reviewer Name */}
                  <div style={{ marginTop: "24px" }}>
                    <h4 style={{
                      fontSize: "1.05rem",
                      fontWeight: "700",
                      color: "#0f172a",
                      margin: 0,
                    }}>
                      {test.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Indicator Dots (Matched dynamically to testimonials length) */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "36px",
        }}>
          {baseTestimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => {
                setTransitionEnabled(true);
                setActiveIndex(index);
              }}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: (activeIndex % baseTestimonials.length) === index ? "#00acee" : "#cbd5e1",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>

      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .testimonial-slider-track {
            transform: translateX(calc(-${activeIndex} * (33.33vw - 2px))) !important;
          }
          .testimonial-carousel-card {
            width: calc(33.33vw - 26px) !important;
          }
        }
        @media (max-width: 768px) {
          .testimonial-slider-track {
            transform: translateX(calc(-${activeIndex} * (50vw + 2px))) !important;
          }
          .testimonial-carousel-card {
            width: calc(50vw - 22px) !important;
          }
        }
        @media (max-width: 480px) {
          .testimonial-slider-track {
            transform: translateX(calc(-${activeIndex} * (100vw - 20px))) !important;
          }
          .testimonial-carousel-card {
            width: calc(100vw - 44px) !important;
          }
        }
      `}</style>
    </section>
  );
}
