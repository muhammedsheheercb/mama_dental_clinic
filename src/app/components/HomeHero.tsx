import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="home-hero-yellow" style={{ width: "100%", maxWidth: "100%" }}>
      {/* Guarantees to load - high quality smiling portrait */}
      <Image
        src="/images/hero.webp"
        alt="Because Smile Matters - Confident, beautiful smile at Firstooth Dental Studio"
        fill
        priority
        className="home-hero-bg-image"
        style={{ objectFit: "cover", objectPosition: "center 15%" }}
        sizes="100vw"
      />

      {/* Gradient overlay for high text readability */}
      <div className="home-hero-overlay" />

      {/* Centered content */}
      <div className="home-hero-content animate-fade-in-up" style={{ width: "100%", maxWidth: "800px" }}>
        <h1 className="home-hero-title">
          Because Smile Matters
        </h1>
        <p className="home-hero-subtitle">
          Experience the Next Level of Beauty, Comfort, and Personalized Care
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="#book" className="btn-pill-blue">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
