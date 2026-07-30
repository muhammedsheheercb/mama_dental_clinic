import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Dental Veneers in Pazhanji | MAMA Dental Clinic & Orthodontic Centre",
  description:
    "Transform your smile with premium porcelain veneers in Pazhanji, Kerala at MAMA Dental Clinic. Custom IPS e.max cosmetic veneers designed for a flawless natural look.",
};

export default function VeneersPage() {
  const cards = [
    {
      tag: "Feature Or Benefits",
      title: "A perfect smile, instantly yours.",
      image: "/images/veneers/smile.webp",
      details: [
        {
          title: "Instant Smile Transformation",
          desc: "Porcelain veneers are designed to mask minor imperfections, cracks, gaps, and severe discolorations in as few as two comfortable sessions.",
        },
        {
          title: "Natural Light Translucency",
          desc: "High-grade dental porcelain matches the natural light-reflecting qualities of natural enamel, ensuring a perfectly seamless and radiant look.",
        },
        {
          title: "Stain-Resistant Surface",
          desc: "Unlike natural tooth structures, porcelain is non-porous and highly resistant to stains from coffee, tea, red wine, and smoking.",
        },
      ],
    },
    {
      tag: "Procedure Overview",
      title: "Simple steps to stunning results.",
      image: "/images/veneers/simple.webp",
      details: [
        {
          title: "Consultation & Smile Design",
          desc: "We capture digital scans and construct a 3D diagnostic model of your proposed new teeth so you can preview the outcome beforehand.",
        },
        {
          title: "Conservative Tooth Preparation",
          desc: "An extremely thin portion of the front enamel (less than 0.5mm) is gently reshaped to create space for placement of your custom veneers.",
        },
        {
          title: "Precision Adhesive Bonding",
          desc: "Your hand-crafted porcelain shells are bonded onto the teeth using medical-grade adhesive, then instantly cured with specialized light.",
        },
      ],
    },
    {
      tag: "Materials Used",
      title: "Premium materials, natural perfection.",
      image: "/images/veneers/premium.webp",
      details: [
        {
          title: "IPS e.max Lithium Disilicate",
          desc: "The gold standard in cosmetic dentistry, offering exceptional durability, durability, and a highly customizable shade spectrum.",
        },
        {
          title: "Feldspathic Micro-Porcelain",
          desc: "Allows skilled technicians to build ultra-thin porcelain layers that look incredibly delicate yet possess robust longevity.",
        },
        {
          title: "Composite Resin Alternatives",
          desc: "An alternative direct bonding material ideal for immediate cosmetic patch-ups in a single dental appointment.",
        },
      ],
    },
    {
      tag: "Aftercare Treatment",
      title: "Maintain beauty with easy care.",
      image: "/images/veneers/maintain.webp",
      details: [
        {
          title: "Daily Flossing & Brushing",
          desc: "Maintain your standard daily hygiene routine with non-abrasive fluoride toothpaste to keep the supporting tooth structure healthy.",
        },
        {
          title: "Guard Against Impact",
          desc: "Refrain from directly chewing on hard elements like ice, pens, or fingernails, and wear a nightguard if you grind your teeth.",
        },
        {
          title: "Bi-Annual Clinic Checkups",
          desc: "Visit our clinic every 6 months to ensure the margins remain perfectly sealed and clean.",
        },
      ],
    },
  ];

  return (
    <ServicePageTemplate
      title="Veneers"
      heroImage="/images/veneers/main.webp"
      heroAlt="MAMA Dental Clinic Veneers Shade Matching"
      cards={cards}
    />
  );
}
