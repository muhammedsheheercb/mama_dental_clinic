import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Smile Design in Pazhanji | MAMA Dental Clinic",
  description:
    "Plan a balanced, natural-looking smile with personalized digital smile design at MAMA Dental Clinic in Pazhanji, Kerala.",
};

export default function SmileDesignPage() {
  const cards = [
    {
      tag: "Benefits",
      title: "A smile designed around you.",
      image: "/images/smile/2.webp",
      details: [
        {
          title: "Personalized Smile Proportions",
          desc: "Your smile plan considers facial features, lip line, tooth shape, and natural proportions for a harmonious result.",
        },
        {
          title: "Preview Before Treatment",
          desc: "Digital planning helps you understand the proposed changes before treatment begins.",
        },
        {
          title: "A Coordinated Treatment Plan",
          desc: "Smile design can bring together whitening, bonding, veneers, gum contouring, or orthodontics when appropriate.",
        },
      ],
    },
    {
      tag: "Planning Process",
      title: "From first conversation to final result.",
      image: "/images/smile/3.webp",
      details: [
        {
          title: "Smile and Facial Assessment",
          desc: "We discuss your goals and evaluate your teeth, gums, bite, and facial balance.",
        },
        {
          title: "Digital Records and Mock-Up",
          desc: "Photos, scans, and digital measurements help us create a clear visual treatment plan for your smile.",
        },
        {
          title: "Conservative Treatment Delivery",
          desc: "We recommend only the treatment needed to achieve a healthy, natural-looking improvement.",
        },
      ],
    },
    {
      tag: "Treatment Options",
      title: "Thoughtful details make the difference.",
      image: "/images/smile/4.webp",
      details: [
        {
          title: "Whitening and Brightening",
          desc: "Professional whitening can refresh the shade of your smile before restorative or cosmetic treatment.",
        },
        {
          title: "Bonding and Veneers",
          desc: "Carefully selected materials can refine tooth shape, close small spaces, and improve symmetry.",
        },
        {
          title: "Gum and Bite Harmony",
          desc: "Gum contouring or orthodontic planning may be included when the gum line or bite affects the final result.",
        },
      ],
    },
    {
      tag: "Aftercare",
      title: "Keep your new smile looking its best.",
      image: "/images/smile/5.webp",
      details: [
        {
          title: "Follow a Gentle Hygiene Routine",
          desc: "Brush with a soft toothbrush, floss daily, and use the products recommended for your treatment.",
        },
        {
          title: "Protect Your Teeth",
          desc: "Avoid biting hard objects and ask about a protective nightguard if you clench or grind.",
        },
        {
          title: "Schedule Smile Reviews",
          desc: "Routine dental visits help maintain your oral health and the long-term appearance of your smile.",
        },
      ],
    },
  ];

  return (
    <ServicePageTemplate
      title="Smile Design"
      heroImage="/images/smile/1.webp"
      heroAlt="Digital smile design planning at MAMA Dental Clinic"
      cards={cards}
    />
  );
}
