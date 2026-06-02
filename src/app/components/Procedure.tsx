import React from "react";
import Image from "next/image";

export default function Procedure() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "The process begins with a comprehensive consultation where the dentist evaluates your teeth and bite. Advanced digital scans or impressions are taken to create a 3D model of your teeth. This model is used to plan the movements required to straighten your teeth and design your custom aligners.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
    },
    {
      number: "02",
      title: "Custom Aligners",
      description: "You will receive a series of custom-made aligners, each one slightly different to gradually move your teeth into the desired position. You’ll typically wear each set of aligners for 1-2 weeks before moving on to the next set, as guided by your treatment plan. Every aligner is designed to fit perfectly and apply gentle pressure to shift your teeth.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
    },
    {
      number: "03",
      title: "Progress Monitoring",
      description: "Regular checkups with your dentist ensure that your treatment is progressing as planned. Adjustments to your aligners or timeline may be made based on your progress. On average, treatment lasts between 6 to 18 months, depending on the complexity of your case.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section className="section section-bg-light" id="procedure">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="subtitle-badge">
            <span>Procedure Overview</span>
          </div>
          <h2 className="section-title">
            A step-by-step path to <span>your perfect smile.</span>
          </h2>
          <p className="section-description">
            Your transformation is carefully mapped out using advanced digital planning, ensuring a smooth and predictable path to straight teeth.
          </p>
        </div>

        <div className="procedure-steps">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              {/* Content Panel */}
              <div className="step-content">
                <span className="step-number" style={{ display: "none" }}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {/* Central Number Circle */}
              <div className="step-number-container">
                <div className="step-number">
                  {step.number}
                </div>
              </div>

              {/* Visual Panel */}
              <div className="step-image-container">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
