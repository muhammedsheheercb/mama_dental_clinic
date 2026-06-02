import React from "react";
import Image from "next/image";
import { ShieldCheck, Cpu, Activity } from "lucide-react";

export default function Materials() {
  const items = [
    {
      title: "Medical-Grade Plastic",
      description: "Clear aligners are made from BPA-free, medical-grade thermoplastic, designed specifically for comfort and durability. This material is smooth, transparent, and strong, ensuring the aligners are both safe and effective for long-term wear.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Precision-Fit Technology",
      description: "The aligners are crafted using 3D printing and precision technology, ensuring a perfect fit. Brands like Invisalign and ClearCorrect use cutting-edge techniques to map out each stage of your treatment, guaranteeing an accurate and comfortable experience.",
      icon: <Cpu size={24} />,
    },
    {
      title: "Durability",
      description: "The high-quality plastic used in clear aligners is durable enough to withstand daily wear while maintaining its transparency. With proper care, aligners remain clear and effective throughout the treatment process, offering a seamless experience.",
      icon: <Activity size={24} />,
    },
  ];

  return (
    <section className="section" id="materials">
      <div className="container materials-grid">
        {/* Left Column - Tech Image */}
        <div className="materials-visual">
          <Image
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
            alt="Advanced clear orthodontic materials and 3D precision fit"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>

        {/* Right Column - Tech Content */}
        <div className="materials-content">
          <div className="subtitle-badge">
            <span>Materials Used</span>
          </div>
          <h2 className="section-title" style={{ textAlign: "left", margin: "0 0 24px 0" }}>
            Advanced materials for <span>modern orthodontics.</span>
          </h2>
          <p className="section-description" style={{ marginBottom: "40px" }}>
            We only employ top-tier biocompatible polymer materials and state-of-the-art 3D imaging technology to manufacture comfortable, clear, and impact-resistant orthodontic aligners.
          </p>

          <div className="materials-list">
            {items.map((item, index) => (
              <div key={index} className="material-item">
                <div className="material-icon">
                  {item.icon}
                </div>
                <div className="material-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
