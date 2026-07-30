import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Laser Teeth Whitening in Pazhanji | MAMA Dental Clinic",
  description:
    "Brighten your smile up to 8 shades with professional, safe laser teeth whitening in Pazhanji, Kerala at MAMA Dental Clinic. Fast, painless cosmetic results.",
};

export default function TeethWhiteningPage() {
  const cards = [
    {
      tag: "Feature Or Benefits",
      title: "Brighten your smile up to 8 shades.",
      image:
        "https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Instant Cosmetic Transformation",
          desc: "Achieve a dramatically brighter smile in under an hour, ideal for weddings, interviews, and special social events.",
        },
        {
          title: "Safe & Controlled Treatment",
          desc: "Under our professional care, your gums, lips, and soft tissues are completely shielded to prevent burning and sensitivity.",
        },
        {
          title: "Deep Stain Eradication",
          desc: "Laser whitening penetrates below the enamel surface to lift stubborn stains caused by coffee, aging, and smoking.",
        },
      ],
    },
    {
      tag: "Procedure Overview",
      title: "Gentle laser activation, instant outcomes.",
      image:
        "https://images.unsplash.com/photo-1684607633080-df59e6874367?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Initial Polishing & Shade Record",
          desc: "We perform a quick clean to remove surface plaque and document your starting shade to track progress.",
        },
        {
          title: "Barrier Placement & Gel Application",
          desc: "A protective liquid dam is cured over the gums, and a high-strength hydrogen peroxide gel is applied to the teeth.",
        },
        {
          title: "Laser Activator Cycles",
          desc: "The gel is activated using a specialized light source for 15-minute cycles, breaking down stains quickly and safely.",
        },
      ],
    },
    {
      tag: "Materials Used",
      title: "Certified peroxide gels, tooth-friendly activation.",
      image:
        "https://images.unsplash.com/photo-1663185551550-f8f56529ac5e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Hydrogen Peroxide Whitening Gel",
          desc: "Clinical-strength bleaching formula designed to provide powerful yet safe oxidizing performance.",
        },
        {
          title: "Desensitizing Formulations",
          desc: "Our gels contain potassium nitrate and fluoride to help reduce tooth sensitivity and strengthen enamel.",
        },
        {
          title: "Gingival Protective Liquid Dam",
          desc: "A light-cured resin barrier that keeps the bleaching agent away from the gums, preventing chemical irritation.",
        },
      ],
    },
    {
      tag: "Aftercare Treatment",
      title: "Preserve brightness with white-diet tips.",
      image:
        "https://images.unsplash.com/photo-1650803075918-efbee311735d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Follow the 48-Hour White Diet",
          desc: "For the first 48 hours, avoid foods and drinks that can stain your teeth, such as coffee, tea, cola, red wine, berries, and curry.",
        },
        {
          title: "Rinse After Staining Foods",
          desc: "If you consume coffee or colored drinks later, rinse your mouth with water or use a straw to minimize direct contact.",
        },
        {
          title: "Touch-Up Trays Maintenance",
          desc: "Use custom home touch-up trays occasionally to keep your teeth bright and maintain the result over time.",
        },
      ],
    },
  ];

  return (
    <ServicePageTemplate
      title="Teeth Whitening"
      heroImage="https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      heroAlt="MAMA Dental Clinic Professional Teeth Whitening"
      cards={cards}
    />
  );
}
