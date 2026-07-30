import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Clear Aligners in Pazhanji | Invisible Braces | MAMA Dental Clinic",
  description:
    "Straighten your teeth comfortably with virtually invisible clear aligners at MAMA Dental Clinic, Pazhanji. Personalized orthodontic plans by Orthodontist Dr. Minu.",
};

export default function CleanAlignersPage() {
  const cards = [
    {
      tag: "Feature Or Benefits",
      title: "Invisible, comfortable, and removable alignment.",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600",
      details: [
        {
          title: "Invisible Correction",
          desc: "Clear aligners offer a discreet way to straighten your teeth, eliminating the need for metal braces. These aligners are nearly invisible, allowing you to go about your day confidently, knowing that your orthodontic treatment is practically undetectable.",
        },
        {
          title: "Comfortable Fit",
          desc: "Made from smooth, flexible plastic, clear aligners are comfortable to wear, with no sharp edges or wires. They are custom-made to fit snugly over your teeth, ensuring a comfortable experience throughout your treatment. Unlike traditional braces, clear aligners won't irritate your gums or cheeks.",
        },
        {
          title: "Removable Convenience",
          desc: "Clear aligners can be easily removed for eating, drinking, brushing, and flossing, making it easier to maintain your oral hygiene during treatment. You can continue to enjoy your favourite foods without restrictions. Simply pop them back in after meals to stay on track with your treatment plan.",
        },
      ],
    },
    {
      tag: "Procedure Overview",
      title: "3D digital scans and custom aligner sets.",
      image:
        "https://images.unsplash.com/photo-1562332328-13fe756de51a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Intraoral 3D Scan",
          desc: "We perform a quick, radiation-free digital scan of your mouth to create a high-precision 3D model of your current dentition.",
        },
        {
          title: "Custom Trays Fabrication",
          desc: "Using the precise digital simulation, we print a customized series of medical-grade aligner trays tailored to shift your teeth sequentially.",
        },
        {
          title: "Weekly Progression & Checkups",
          desc: "You switch to a new set of aligner trays every 1 to 2 weeks, visiting our clinic periodically to verify that teeth movement follows the plan.",
        },
      ],
    },
    {
      tag: "Materials Used",
      title: "Medical-grade, BPA-free clear thermoplastics.",
      image: "/images/aligner/medical.webp",
      details: [
        {
          title: "BPA-Free Medical Polyurethane",
          desc: "Trays are made of FDA-approved, biocompatible clear plastic that does not leach chemicals or cause allergic reactions.",
        },
        {
          title: "SmartTrack Flexible Elastomers",
          desc: "A proprietary multi-layer orthodontic material designed to deliver gentle, constant force, improving predictability of movements.",
        },
        {
          title: "SmartForce Attachments",
          desc: "Small, tooth-colored composite attachments placed on specific teeth to serve as handles, enabling complex rotational shifts.",
        },
      ],
    },
    {
      tag: "Aftercare Treatment",
      title: "Simple daily washing and retainer care.",
      image: "/images/aligner/clean.webp",
      details: [
        {
          title: "Clean Aligners Daily",
          desc: "Always rinse your aligner trays under cold or lukewarm water and brush them gently with a soft toothbrush.",
        },
        {
          title: "22 Hours Wear Rule",
          desc: "To achieve optimal alignment progression, keep your trays in for 20 to 22 hours daily, removing them only to eat and clean.",
        },
        {
          title: "Retainer Phase",
          desc: "After your treatment concludes, wear clear nighttime retainers to lock your teeth in their new positions permanently.",
        },
      ],
    },
  ];

  return (
    <ServicePageTemplate
      title="Clean Aligners"
      heroImage="https://images.unsplash.com/photo-1609840113929-b130355987e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      heroAlt="MAMA Dental Clinic Premium Clean Aligners"
      cards={cards}
    />
  );
}
