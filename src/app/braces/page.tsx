import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Orthodontic Braces | Thrissur | Firstooth Dental Studio",
  description: "Achieve straight, healthy teeth with modern orthodontic braces at Firstooth Dental Studio. Expert care in Thrissur, Kerala.",
};

export default function BracesPage() {
  const cards = [
    {
      tag: "Feature Or Benefits",
      title: "Align your teeth, elevate your smile.",
      image: "https://images.unsplash.com/photo-1617812191081-2a24e3f30e45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Complete Bite & Alignment Correction",
          desc: "Braces successfully resolve crowded teeth, underbites, overbites, crossbites, and complex jaw misalignments.",
        },
        {
          title: "Improved Long-Term Oral Health",
          desc: "Aligning your teeth eliminates hard-to-reach pockets, reducing the risks of cavities, plaque accumulation, and gum disease.",
        },
        {
          title: "Durable & Predictable Results",
          desc: "Traditional and modern braces provide highly controlled, physically guided movements, ensuring outstanding orthodontic results.",
        },
      ],
    },
    {
      tag: "Procedure Overview",
      title: "Expert bracket placement and tuning.",
      image: "https://images.unsplash.com/photo-1676155081516-1b848c9f413e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Orthodontic Evaluation",
          desc: "We perform full X-rays, visual studies, and digital photography to determine the teeth positions and curate a treatment plan.",
        },
        {
          title: "Bracket Bonding & Archwire Threading",
          desc: "Brackets are bonded onto each individual tooth, and a flexible memory-metal archwire is threaded through to initiate tension.",
        },
        {
          title: "Monthly Adjustments",
          desc: "Visit the clinic every 4 to 6 weeks for wire tightening, elastic bands changes, and progress checks.",
        },
      ],
    },
    {
      tag: "Materials Used",
      title: "High-grade metal, ceramic, and sapphire.",
      image: "https://images.unsplash.com/photo-1619987614890-4797e713fb03?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Stainless Steel & Titanium Brackets",
          desc: "Highly durable and efficient brackets designed to withstand high mechanical forces during complex movements.",
        },
        {
          title: "Polycrystalline Ceramic Brackets",
          desc: "Tooth-colored ceramic brackets that blend beautifully with your teeth for a much more discreet visual appearance.",
        },
        {
          title: "Nitinol & Beta-Titanium Archwires",
          desc: "Shape-memory wires that provide constant, gentle force to guide teeth comfortably and reliably.",
        },
      ],
    },
    {
      tag: "Aftercare Treatment",
      title: "Keep braces clean and healthy.",
      image: "https://images.unsplash.com/photo-1620775997780-a01e050a9db4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Interdental & Specialized Brushing",
          desc: "Clean thoroughly around brackets and under the archwire using specialized interproximal brushes after every meal.",
        },
        {
          title: "Avoid Sticky & Hard Foods",
          desc: "Refrain from eating hard nuts, popcorn, caramel, and chewing gum, which can break brackets or bend wires.",
        },
        {
          title: "Post-Braces Retention",
          desc: "Wear fixed or removable retainers as advised to prevent teeth from shifting back to their old positions.",
        },
      ],
    },
  ];

  return (
    <ServicePageTemplate
      title="Braces"
      heroImage="https://images.unsplash.com/photo-1720685193964-4529228a33c1?auto=format&fit=crop&q=80&w=1200"
      heroAlt="Firstooth Dental Studio Orthodontic Braces"
      cards={cards}
    />
  );
}
