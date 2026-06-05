import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Composite Bonding & Tooth Fillings in Pazhanji | MAMA Dental Clinic",
  description: "Repair chipped, cracked, or decayed teeth with natural-looking tooth-colored composite bonding and fillings at MAMA Dental Clinic, Pazhanji, Kerala.",
};

export default function BondingFillingsPage() {
  const cards = [
    {
      tag: "Feature Or Benefits",
      title: "Repair chips and decay invisibly.",
      image: "https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Seamless Cavity Filling",
          desc: "Composite resin fillings match your natural tooth color, replacing old silver fillings and preventing decay progression.",
        },
        {
          title: "Chip & Gap Restoration",
          desc: "Direct bonding fills small gaps and repairs chipped front teeth in a single visit, restoring your smile.",
        },
        {
          title: "Conservative & Fast Treatment",
          desc: "Requires minimal tooth prep, preserving your natural enamel, and is completed in a single session.",
        },
      ],
    },
    {
      tag: "Procedure Overview",
      title: "Direct composite bonding in single session.",
      image: "https://images.unsplash.com/photo-1663755489920-5e09f66d011a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Shade Selection & Prep",
          desc: "We select a composite resin shade that matches your natural enamel and gently clean the tooth surface.",
        },
        {
          title: "Composite Application & Sculpting",
          desc: "The putty-like composite resin is applied to the tooth and sculpted to recreate its natural shape.",
        },
        {
          title: "Light Curing & Polishing",
          desc: "A specialized curing light is used to harden the resin, which is then polished to match the shine of your teeth.",
        },
      ],
    },
    {
      tag: "Materials Used",
      title: "Biocompatible composite resins.",
      image: "https://images.unsplash.com/photo-1670250721717-889b17349fc4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        {
          title: "Hybrid Composite Resins",
          desc: "A mixture of glass and plastic fillers that provides excellent wear resistance and a natural polish.",
        },
        {
          title: "Etching & Bonding Agents",
          desc: "Medical-grade conditioning gels and adhesives that form a strong bond between the tooth enamel and the resin.",
        },
        {
          title: "Diamond Polishing Pastes",
          desc: "Ultra-fine polishing pastes used to create a smooth, glossy finish that mimics natural enamel.",
        },
      ],
    },
    {
      tag: "Aftercare Treatment",
      title: "Avoid staining agents, regular checkups.",
      image: "https://images.unsplash.com/photo-1606811951341-756fdd437682?auto=format&fit=crop&q=80&w=600",
      details: [
        {
          title: "Maintain Oral Hygiene",
          desc: "Brush and floss daily to keep the margins of your bonding clean and prevent new decay.",
        },
        {
          title: "Avoid Biting Hard Objects",
          desc: "Refrain from chewing on hard candies, ice, pens, or fingernails, which can chip the composite resin.",
        },
        {
          title: "Limit Staining Foods",
          desc: "Minimize consumption of coffee, tea, and red wine, as composite resin can stain over time.",
        },
      ],
    },
  ];

  return (
    <ServicePageTemplate
      title="Bonding & Filling"
      heroImage="https://images.unsplash.com/photo-1606811951341-756fdd437682?auto=format&fit=crop&q=80&w=1200"
      heroAlt="MAMA Dental Clinic Composite Bonding & Fillings"
      cards={cards}
    />
  );
}
