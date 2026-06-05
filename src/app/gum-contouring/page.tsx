import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Laser Gum Contouring in Pazhanji | MAMA Dental Clinic",
  description: "Correct your gummy smile with advanced, painless laser gum contouring at MAMA Dental Clinic, Pazhanji, Kerala. Enhance symmetry with fast recovery time.",
};

export default function GumContouringPage() {
  const cards = [
    {
      tag: "Feature Or Benefits",
      title: "Reshape your gumline, balance your smile.",
      image: "https://images.unsplash.com/photo-1663182234283-28941e7612da?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Symmetric Gumline Correction",
          desc: "Reshapes an uneven, thick, or low-hanging gumline to show more of your teeth and create a balanced smile.",
        },
        {
          title: "Virtually Painless Laser Treatment",
          desc: "We use dental lasers that seal the tissue as they sculpt, minimizing bleeding, swelling, and discomfort.",
        },
        {
          title: "Fast Recovery & Healing",
          desc: "Most patients heal fully in just a few days, requiring only mild OTC pain relievers and gentle rinsing.",
        },
      ],
    },
    {
      tag: "Procedure Overview",
      title: "Micro-laser precision, minimal healing time.",
      image: "https://images.unsplash.com/photo-1664529845836-433c172142ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Mapping the Ideal Gumline",
          desc: "We mark the ideal boundary on your gum tissue to guide the reshaping process.",
        },
        {
          title: "Gentle Laser Sculpting",
          desc: "A soft-tissue laser is used to gently trim away excess gum tissue and sculpt a beautiful contour.",
        },
        {
          title: "Post-Treatment Evaluation",
          desc: "We check the symmetry of your gumline and provide care instructions to ensure optimal healing.",
        },
      ],
    },
    {
      tag: "Materials Used",
      title: "Advanced soft-tissue dental lasers.",
      image: "https://images.unsplash.com/photo-1660737216869-ad3d43c36500?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Diode Dental Lasers",
          desc: "Highly precise soft-tissue lasers designed to cut gently while sealing blood vessels and nerve endings.",
        },
        {
          title: "Topical & Local Anesthetics",
          desc: "High-strength numbing gels ensure you feel completely comfortable throughout the procedure.",
        },
        {
          title: "Saline & Antibacterial Washes",
          desc: "Gentle rinsing agents used to cleanse the area and promote healthy tissue healing.",
        },
      ],
    },
    {
      tag: "Aftercare Treatment",
      title: "Gentle rinsing and fast recovery.",
      image: "https://images.unsplash.com/photo-1606811951341-756fdd437682?auto=format&fit=crop&q=80&w=600",
      details: [
        {
          title: "Warm Salt Water Rinses",
          desc: "Rinse gently with warm salt water 2-3 times daily to keep the gum margins clean and soothe the tissue.",
        },
        {
          title: "Brush with Care",
          desc: "Use a super-soft toothbrush and avoid direct, hard scrubbing on the healing gumline for the first week.",
        },
        {
          title: "Avoid Spicy & Acidic Foods",
          desc: "Steer clear of sharp chips, chili, and acidic juices that could irritate the healing gum tissue.",
        },
      ],
    },
  ];

  return (
    <ServicePageTemplate
      title="Gum Contouring"
      heroImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200"
      heroAlt="MAMA Dental Clinic Gum Contouring"
      cards={cards}
    />
  );
}
