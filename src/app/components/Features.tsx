import React from "react";
import { EyeOff, HeartHandshake, Smile } from "lucide-react";

export default function Features() {
  const benefits = [
    {
      title: "Invisible Correction",
      description: "Clear aligners offer a discreet way to straighten your teeth, eliminating the need for metal braces. These aligners are nearly invisible, allowing you to go about your day confidently, knowing that your orthodontic treatment is practically undetectable.",
      icon: <EyeOff size={28} />,
    },
    {
      title: "Comfortable Fit",
      description: "Made from smooth, flexible plastic, clear aligners are comfortable to wear, with no sharp edges or wires. They are custom-made to fit snugly over your teeth, ensuring a comfortable experience throughout your treatment. Unlike traditional braces, clear aligners won’t irritate your gums or cheeks.",
      icon: <HeartHandshake size={28} />,
    },
    {
      title: "Removable Convenience",
      description: "Clear aligners can be easily removed for eating, drinking, brushing, and flossing, making it easier to maintain your oral hygiene during treatment. You can continue to enjoy your favourite foods without restrictions. Simply pop them back in after meals to stay on track with your treatment plan.",
      icon: <Smile size={28} />,
    },
  ];

  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="subtitle-badge">
            <span>Features & Benefits</span>
          </div>
          <h2 className="section-title">
            Straighten your smile <span>without the metal.</span>
          </h2>
          <p className="section-description">
            Discover why millions of patients are choosing transparent aligners over traditional metal braces for their orthodontic journey.
          </p>
        </div>

        <div className="features-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
