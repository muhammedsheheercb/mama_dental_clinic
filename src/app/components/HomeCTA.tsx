import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomeCTA() {
  return (
    <section className="home-cta-section">
      <div className="home-cta-banner">
        
        {/* Left Side: Callouts and Action */}
        <div className="home-cta-left">
          <h2 className="home-cta-title">
            Experience the Difference in Dental Care
          </h2>
          
          <Link href="#book" className="btn-pill-blue-cta">
            Book Now
          </Link>
        </div>

        {/* Right Side: Beautiful smiling patient in dentist chair with perfect curve */}
        <div className="home-cta-right">
          <div className="home-cta-image-clipper">
            <Image
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
              alt="Happy patient smiling in dentist chair undergoing teeth checkup"
              fill
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
