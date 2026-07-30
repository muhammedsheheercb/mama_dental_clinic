import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Dental Implants in Pazhanji | MAMA Dental Clinic",
  description:
    "Restore missing teeth with comfortable, natural-looking dental implants at MAMA Dental Clinic in Pazhanji, Kerala.",
};

export default function DentalImplantsPage() {
  const cards = [
    {
      tag: "Benefits",
      title: "A confident, stable replacement for missing teeth.",
      image: "/images/implants/3.webp",
      details: [
        {
          title: "Natural Appearance",
          desc: "Implant-supported teeth are designed to blend with your smile in shape, shade, and proportion.",
        },
        {
          title: "Comfortable Stability",
          desc: "A dental implant anchors the replacement tooth securely, helping you speak, eat, and smile with confidence.",
        },
        {
          title: "Support for Healthy Function",
          desc: "Replacing a missing tooth can help maintain chewing function and support the surrounding teeth.",
        },
      ],
    },
    {
      tag: "Procedure Overview",
      title: "Carefully planned from consultation to crown.",
      image: "/images/implants/2.webp",
      details: [
        {
          title: "Consultation and 3D Planning",
          desc: "We assess your oral health and use detailed imaging to plan implant placement and the final restoration.",
        },
        {
          title: "Implant Placement",
          desc: "The biocompatible implant is carefully positioned in the jaw to provide a strong foundation for your new tooth.",
        },
        {
          title: "Custom Crown or Bridge",
          desc: "After healing, a custom-made restoration is fitted to complete your smile and restore everyday function.",
        },
      ],
    },
    {
      tag: "Who It Helps",
      title: "Personalized solutions for different needs.",
      image: "/images/implants/4.webp",
      details: [
        {
          title: "Single Tooth Replacement",
          desc: "Replace one missing tooth without relying on neighboring teeth for support.",
        },
        {
          title: "Multiple Missing Teeth",
          desc: "Implant-supported bridges can restore several adjacent teeth with a secure and functional result.",
        },
        {
          title: "Full-Arch Rehabilitation",
          desc: "For extensive tooth loss, a tailored implant-supported solution can restore comfort and confidence.",
        },
      ],
    },
    {
      tag: "Aftercare",
      title: "Protect your investment with simple care.",
      image: "/images/implants/5.webp",
      details: [
        {
          title: "Maintain Daily Hygiene",
          desc: "Brush, floss, and clean around the restoration every day to keep the implant area healthy.",
        },
        {
          title: "Attend Follow-Up Reviews",
          desc: "Regular reviews allow our team to check the implant, gums, and bite over time.",
        },
        {
          title: "Avoid Excessive Force",
          desc: "Do not use your restoration to bite hard objects, and ask about a nightguard if you grind your teeth.",
        },
      ],
    },
  ];

  return (
    <ServicePageTemplate
      title="Dental Implants"
      heroImage="/images/implants/1.webp"
      heroAlt="Dental implant consultation at MAMA Dental Clinic"
      cards={cards}
    />
  );
}
