import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Calendar, ShieldCheck, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Left Text Column */}
        <div className="hero-text-column animate-fade-in-up">
          <div className="subtitle-badge">
            <Sparkles size={16} style={{ color: "var(--secondary)" }} />
            <span>Modern Orthodontics</span>
          </div>
          
          <h1 className="hero-title">
            Straighten your smile <span>without the metal.</span>
          </h1>
          
          <p className="hero-description">
            Experience the freedom of clear orthodontic correction. MAMA Clean Aligners are custom-made, virtually invisible, and easily removable—giving you a flawless smile comfortably and confidently.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">
              <Calendar size={18} />
              Book Appointment
            </Link>
            <Link href="#features" className="btn btn-secondary">
              Learn Benefits
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h4>100%</h4>
              <p>Invisible & Metal-Free</p>
            </div>
            <div className="stat-item">
              <h4>15k+</h4>
              <p>Perfect Smiles Crafted</p>
            </div>
            <div className="stat-item">
              <h4>0%</h4>
              <p>Interest EMI Options</p>
            </div>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
              alt="Confident, beautiful smile with MAMA Clean Aligners"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Floating Card 1 */}
          <div className="hero-floating-card floating-card-1">
            <div className="icon-badge">
              <ShieldCheck size={20} />
            </div>
            <div className="floating-card-text">
              <p>MAMA Quality</p>
              <h5>Medical-Grade</h5>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="hero-floating-card floating-card-2">
            <div className="icon-badge" style={{ backgroundColor: "#fffbeb", color: "var(--accent)" }}>
              <Heart size={20} />
            </div>
            <div className="floating-card-text">
              <p>Patient Satisfaction</p>
              <h5>99.8% Perfect Fit</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
