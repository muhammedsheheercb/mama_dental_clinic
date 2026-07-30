import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Pediatric Dentistry in Pazhanji | MAMA Dental Clinic",
  description:
    "Gentle pediatric and preventive dental care for children in Pazhanji, Kerala at MAMA Dental Clinic.",
};

export default function PediatricDentistryPage() {
  const cards = [
    {
      tag: "Benefits",
      title: "A positive start to lifelong oral health.",
      image: "/images/pediatric/2.webp",
      details: [
        {
          title: "Comfortable First Visits",
          desc: "We create calm, friendly appointments that help children feel safe and build positive dental habits from an early age.",
        },
        {
          title: "Prevention and Early Detection",
          desc: "Regular checkups help us identify cavities, bite concerns, and developing oral health needs before they become more complex.",
        },
        {
          title: "Personalized Care for Growing Smiles",
          desc: "Treatment plans are adapted to each child, their stage of development, and their comfort level.",
        },
      ],
    },
    {
      tag: "Treatments",
      title: "Complete care for developing teeth.",
      image: "/images/pediatric/3.webp",
      details: [
        {
          title: "Preventive Dental Checkups",
          desc: "Routine examinations and professional cleaning support healthy teeth and gums as your child grows.",
        },
        {
          title: "Fluoride and Fissure Sealants",
          desc: "Preventive treatments add extra protection to vulnerable tooth surfaces and help reduce the risk of decay.",
        },
        {
          title: "Cavity Care and Restorations",
          desc: "When treatment is needed, we use gentle techniques to restore comfort, function, and confidence.",
        },
      ],
    },
    {
      tag: "Growing Smiles",
      title: "Guidance through every stage.",
      image: "/images/pediatric/4.webp",
      details: [
        {
          title: "Habit and Hygiene Guidance",
          desc: "Children and parents receive simple, practical advice for brushing, flossing, nutrition, and daily oral care.",
        },
        {
          title: "Monitoring Jaw and Bite Development",
          desc: "We track facial growth and tooth eruption so orthodontic needs can be identified at the right time.",
        },
        {
          title: "Care for Every Child",
          desc: "Our team provides thoughtful support for anxious children and children who need additional care during treatment.",
        },
      ],
    },
    {
      tag: "Aftercare",
      title: "Healthy habits that last.",
      image: "/images/pediatric/5.webp",
      details: [
        {
          title: "Brush Twice a Day",
          desc: "Use a soft-bristled toothbrush and age-appropriate fluoride toothpaste with supervision when needed.",
        },
        {
          title: "Choose Tooth-Friendly Snacks",
          desc: "Limit frequent sugary snacks and drinks while choosing balanced foods that support healthy development.",
        },
        {
          title: "Keep Regular Recall Visits",
          desc: "Scheduled reviews allow us to maintain prevention and respond quickly as your child grows.",
        },
      ],
    },
  ];

  return (
    <ServicePageTemplate
      title="Pediatric Dentistry"
      heroImage="/images/pediatric/1.webp"
      heroAlt="Gentle pediatric dentistry at MAMA Dental Clinic"
      cards={cards}
    />
  );
}
