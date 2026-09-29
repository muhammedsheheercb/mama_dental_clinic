import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Dental Jewellery in Pazhanji | MAMA Dental Clinic",
  description:
    "Add a refined sparkle to your smile with professionally applied dental jewellery at MAMA Dental Clinic in Pazhanji, Kerala.",
  alternates: { canonical: "/services/dental-jewellery" },
  robots: { index: false, follow: true },
};

export default function DentalJewelleryPage() {
  const cards = [
    {
      tag: "About Dental Jewellery",
      title: "A small detail that makes your smile shine.",
      image: "/images/dental/2.webp",
      details: [
        {
          title: "A Personal Smile Accent",
          desc: "Dental jewellery is a small decorative gem or charm placed on the visible surface of a tooth to add a subtle, individual touch to your smile.",
        },
        {
          title: "No Drilling Required",
          desc: "When suitable, the jewellery is attached to the enamel with a professional dental bonding technique, without drilling or altering the tooth.",
        },
        {
          title: "Designed Around Your Style",
          desc: "Choose a look that feels right for you, from understated sparkle to a more expressive accent, with guidance from our dental team.",
        },
      ],
    },
    {
      tag: "The Appointment",
      title: "A careful, comfortable finishing touch.",
      image: "/images/dental/3.webp",
      details: [
        {
          title: "Smile Assessment",
          desc: "We first check that the selected tooth and surrounding gums are healthy, then discuss placement and the look you would like to achieve.",
        },
        {
          title: "Professional Preparation",
          desc: "The tooth is gently cleaned and prepared to help create a secure, smooth bond while keeping the process comfortable.",
        },
        {
          title: "Precise Placement",
          desc: "Your chosen piece is positioned carefully and bonded by the dentist so it sits neatly and complements your natural smile.",
        },
      ],
    },
    {
      tag: "Comfort & Safety",
      title: "Placed with your oral health in mind.",
      image: "/images/dental/4.webp",
      details: [
        {
          title: "Professional Dental Materials",
          desc: "We use jewellery and bonding materials selected for dental use, rather than relying on cosmetic adhesives that are not intended for the mouth.",
        },
        {
          title: "A Suitable Surface Matters",
          desc: "The dentist will recommend placement only where it is appropriate for your enamel, bite, and day-to-day comfort.",
        },
        {
          title: "Easy to Reassess",
          desc: "If you later want a change, the team can assess and professionally remove the piece while protecting the tooth surface.",
        },
      ],
    },
    {
      tag: "Aftercare",
      title: "Keep your sparkle looking its best.",
      image: "/images/dental/5.webp",
      details: [
        {
          title: "Brush Gently Every Day",
          desc: "Continue brushing twice daily with a soft toothbrush and fluoride toothpaste, taking a little extra care around the jewellery.",
        },
        {
          title: "Avoid Picking or Biting Hard Objects",
          desc: "Do not pull at the piece or use the tooth to bite hard objects, as unnecessary force can affect the bond.",
        },
        {
          title: "Keep Up Regular Check-Ups",
          desc: "Routine dental reviews help us keep your teeth, gums, and dental jewellery looking healthy and comfortable.",
        },
      ],
    },
  ];

  return (
    <ServicePageTemplate
      title="Dental Jewellery"
      heroImage="/images/dental/1.webp"
      heroAlt="Dental jewellery smile enhancement at MAMA Dental Clinic"
      cards={cards}
    />
  );
}
