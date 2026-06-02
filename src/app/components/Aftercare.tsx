import React from "react";
import { ShieldAlert, Droplets, CalendarCheck } from "lucide-react";

export default function Aftercare() {
  const cares = [
    {
      title: "Retainer Use",
      description: "After completing your treatment, you’ll need to wear a retainer to maintain the new position of your teeth. Retainers are custom-made and may need to be worn full-time initially, and then transitioned to nighttime wear. This step is crucial to prevent your teeth from shifting back to their original position.",
      icon: <ShieldAlert size={28} />,
    },
    {
      title: "Hygiene Maintenance",
      description: "Just like the aligners, retainers should be cleaned regularly to maintain oral hygiene. Brush your retainers gently with a soft toothbrush and rinse them with lukewarm water to keep them free from bacteria or buildup. Continue your normal oral hygiene routine of brushing and flossing.",
      icon: <Droplets size={28} />,
    },
    {
      title: "Regular Checkups",
      description: "Even after treatment, it’s important to schedule regular dental visits to monitor your oral health and ensure your teeth stay in their new position. Your dentist will guide you on how to best maintain your smile post-treatment, ensuring your results last a lifetime.",
      icon: <CalendarCheck size={28} />,
    },
  ];

  return (
    <section className="section section-bg-light" id="aftercare">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="subtitle-badge">
            <span>Aftercare Treatment</span>
          </div>
          <h2 className="section-title">
            Retain your results with <span>simple care.</span>
          </h2>
          <p className="section-description">
            Your journey doesn&apos;t end when you remove your final aligners. Protect your beautiful smile with these essential retention habits.
          </p>
        </div>

        <div className="aftercare-grid">
          {cares.map((care, index) => (
            <div key={index} className="aftercare-card">
              <div className="aftercare-icon">
                {care.icon}
              </div>
              <h3>{care.title}</h3>
              <p>{care.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
