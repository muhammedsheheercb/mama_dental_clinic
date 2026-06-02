import React from "react";
import Image from "next/image";
import { CheckCircle, Award, HeartHandshake } from "lucide-react";

export default function Assurance() {
  const points = [
    {
      title: "Customised Treatment Plans",
      description: "At MAMA Dental Clinic, we design clear aligner treatments that are personalised to your unique dental needs. Every step of the process is customised, from the initial consultation to the final retainer, ensuring your teeth are aligned safely and effectively.",
      icon: <Award size={20} />,
    },
    {
      title: "Patient-Centered Approach",
      description: "Your comfort and satisfaction are our top priorities. We make sure that every aligner fits perfectly and that your treatment stays on track with regular check-ins. We are here to support you at every stage, ensuring a smooth, stress-free experience.",
      icon: <HeartHandshake size={20} />,
    },
    {
      title: "Guaranteed Results",
      description: "With the latest orthodontic technologies and high-quality materials, we guarantee you’ll see noticeable results. Our commitment to excellence ensures your treatment is completed on time, with long-lasting results you can be proud of.",
      icon: <CheckCircle size={20} />,
    },
  ];

  return (
    <section className="section section-bg-primary" id="assurance">
      <div className="container assurance-split">
        {/* Left Column - Assurance List */}
        <div className="assurance-content">
          <div className="subtitle-badge" style={{ backgroundColor: "rgba(46, 196, 182, 0.15)", color: "var(--secondary)", border: "1px solid rgba(46, 196, 182, 0.3)" }}>
            <span>MAMA Dental Assurance</span>
          </div>
          <h2 className="section-title" style={{ textAlign: "left", margin: "0 0 24px 0" }}>
            Tailored care, <span>lasting results.</span>
          </h2>
          <p className="section-description" style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "40px" }}>
            We combine orthodontic artistry with state-of-the-art materials to ensure you get the absolute best outcomes for your investment.
          </p>

          <div className="assurance-list" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {points.map((point, index) => (
              <div key={index} className="assurance-item">
                <div className="assurance-badge">
                  {point.icon}
                </div>
                <div className="assurance-text">
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="assurance-visual">
          <div className="assurance-image-container">
            <Image
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
              alt="Experienced, welcoming dental professional at MAMA Dental Clinic"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
