import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Crowns & Bridges | Pazhanji, Kerala | MAMA Dental Clinic",
  description: "Restore damaged or missing teeth with custom crowns and bridges at MAMA Dental Clinic. Natural-looking restorations in Pazhanji, Kerala.",
};

export default function CrownsBridgesPage() {
  const cards = [
    {
      tag: "Feature Or Benefits",
      title: "Restore functionality and natural aesthetics.",
      image: "https://images.unsplash.com/photo-1590718778567-5ad1d013e5ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Structural Tooth Protection",
          desc: "Crowns reinforce fragile, broken, or heavily decayed teeth, preventing further fracturing and preserving the natural root system.",
        },
        {
          title: "Gap Correction & Stabilization",
          desc: "Bridges anchor custom replacement teeth into empty spaces, restoring chewing functionality and preventing surrounding teeth from drifting.",
        },
        {
          title: "Flawless Cosmetics Match",
          desc: "Our restorations are shaded and shaped to blend with your surrounding natural teeth, restoring your natural smile aesthetics.",
        },
      ],
    },
    {
      tag: "Procedure Overview",
      title: "Precise dental impressions and custom fitting.",
      image: "https://images.unsplash.com/photo-1612283105859-6e2585710acd?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Tooth Preparation & Shaping",
          desc: "The damaged tooth structure is contoured to create an ideal anchor surface for the crown or bridge placement.",
        },
        {
          title: "Digital or Physical Impressions",
          desc: "We capture highly accurate impressions of the prepared tooth to guide the lab technicians in creating your custom restoration.",
        },
        {
          title: "Permanent Cementation",
          desc: "Once received from the lab, the crown or bridge is checked for bite alignment, adjusted, and permanently cemented in place.",
        },
      ],
    },
    {
      tag: "Materials Used",
      title: "Premium porcelain and durable zirconia.",
      image: "https://images.unsplash.com/photo-1660300110666-9ff243d1328a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Solid Zirconia Restorations",
          desc: "Virtually indestructible dental material that stands up to heavy grinding forces, making it perfect for back molars.",
        },
        {
          title: "Porcelain-Fused-to-Metal (PFM)",
          desc: "A classic restoration option combining the strength of a metal base with the pleasing aesthetics of a porcelain overlay.",
        },
        {
          title: "Full Ceramic & E.max",
          desc: "Metal-free, premium porcelain material offering unmatched beauty, shine, and light reflection for front teeth.",
        },
      ],
    },
    {
      tag: "Aftercare Treatment",
      title: "Protect restorations for lifelong durability.",
      image: "https://images.unsplash.com/photo-1687811159645-2423b8e03333?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Flossing Under Bridges",
          desc: "Use specialized floss threaders or water flossers to clean beneath the suspended replacement tooth (pontic) daily.",
        },
        {
          title: "Avoid Hard & Chewy Foods",
          desc: "Refrain from biting ice, hard candies, or highly sticky foods directly on your crowns to protect the ceramic bond.",
        },
        {
          title: "Professional Dental Cleaning",
          desc: "Visit the clinic twice a year for scaling, checkups, and verification of the margins and underlying bone support.",
        },
      ],
    },
  ];

  return (
    <ServicePageTemplate
      title="Crowns & Bridges"
      heroImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200"
      heroAlt="MAMA Dental Clinic Crowns & Bridges"
      cards={cards}
    />
  );
}
