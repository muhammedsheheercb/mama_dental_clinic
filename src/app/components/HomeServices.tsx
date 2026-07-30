import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomeServices() {
  return (
    <section
      className="section section-bg-light"
      id="services"
      style={{
        scrollMarginTop: "80px",
        padding: "80px 0 0 0",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <div style={{ width: "100%", maxWidth: "100%", padding: 0 }}>
        {/* Header Title */}
        <div
          className="section-title-wrapper"
          style={{ marginBottom: "50px", padding: "0 20px" }}
        >
          <div className="subtitle-badge">
            <span>Cosmetic Solutions</span>
          </div>
          <h2 className="section-title">
            Our specialized <span>cosmetic services.</span>
          </h2>
          <p className="section-description">
            We provide a comprehensive range of premium dental aesthetic
            solutions designed to restore function and deliver your dream smile.
          </p>
        </div>

        {/* Custom Services Grid (100% Full-bleed with 6px gap, responsive controlled via CSS classes) */}
        <div
          className="services-home-grid"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {/* Row 1: Veneers - Full Width */}
          <div
            className="service-banner-full"
            style={{ borderRadius: 0, position: "relative" }}
          >
            <Image
              src="/images/veneers/main.webp"
              alt="MAMA Dental Veneers matching shade selector tool"
              fill
              priority
              className="home-hero-bg-image"
              style={{ objectPosition: "center 40%", objectFit: "cover" }}
              sizes="100vw"
            />
            <div className="service-banner-overlay-dark" />
            <div className="service-banner-content-center">
              <h3 className="service-banner-title">Veneers</h3>
              <p className="service-banner-subtitle">
                Enhanced with Next-Gen Technology
              </p>
              <div className="service-banner-buttons">
                <Link href="/veneers" className="btn-banner-outline">
                  Learn More
                </Link>
                <Link href="/contact" className="btn-pill-blue">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2: Clear Aligners & Braces - 50/50 Split */}
          <div className="service-banner-half-split">
            {/* Clear Aligners */}
            <div
              className="service-banner-half"
              style={{ borderRadius: 0, position: "relative" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Clear aligner transparent trays"
                fill
                className="home-hero-bg-image"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="service-banner-overlay-dark" />
              <div className="service-banner-content-center">
                <h3 className="service-banner-title">Clear Aligners</h3>
                <p className="service-banner-subtitle">
                  Invisible. Precise. Perfect Fit
                </p>
                <div className="service-banner-buttons">
                  <Link href="/clean-aligners" className="btn-banner-outline">
                    Learn More
                  </Link>
                  <Link href="/contact" className="btn-pill-blue">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Braces */}
            <div
              className="service-banner-half"
              style={{ borderRadius: 0, position: "relative" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1720685193964-4529228a33c1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Smiling patient wearing aesthetic bracket braces"
                fill
                className="home-hero-bg-image"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="service-banner-overlay-dark" />
              <div className="service-banner-content-center">
                <h3 className="service-banner-title">Braces</h3>
                <p className="service-banner-subtitle">
                  Metal. Ceramic. Clear. Hidden
                </p>
                <div className="service-banner-buttons">
                  <Link href="/braces" className="btn-banner-outline">
                    Learn More
                  </Link>
                  <Link href="/contact" className="btn-pill-blue">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Crowns and Bridges & Teeth Whitening - 50/50 Split */}
          <div className="service-banner-half-split">
            {/* Crowns and Bridges */}
            <div
              className="service-banner-half"
              style={{ borderRadius: 0, position: "relative" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1675516030465-e2ad117e870f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dental crowns and bridge models"
                fill
                priority
                className="home-hero-bg-image"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="service-banner-overlay-dark" />
              <div className="service-banner-content-center">
                <h3 className="service-banner-title">Crowns and Bridges</h3>
                <p className="service-banner-subtitle">
                  Best-in-class Materials, Long Lasting
                </p>
                <div className="service-banner-buttons">
                  <Link href="/crowns-bridges" className="btn-banner-outline">
                    Learn More
                  </Link>
                  <Link href="/contact" className="btn-pill-blue">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Teeth Whitening */}
            <div
              className="service-banner-half"
              style={{ borderRadius: 0, position: "relative" }}
            >
              <Image
                src="/images/teeth.webp"
                alt="Patient undergoing laser teeth whitening cosmetology treatment"
                fill
                className="home-hero-bg-image"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="service-banner-overlay-dark" />
              <div className="service-banner-content-center">
                <h3 className="service-banner-title">Teeth Whitening</h3>
                <p className="service-banner-subtitle">
                  Instant Glow. Brighter Smile. Stunning Result
                </p>
                <div className="service-banner-buttons">
                  <Link href="/teeth-whitening" className="btn-banner-outline">
                    Learn More
                  </Link>
                  <Link href="/contact" className="btn-pill-blue">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Gum Contouring & Bonding and Fillings - 50/50 Split */}
          <div className="service-banner-half-split">
            {/* Gum Contouring */}
            <div
              className="service-banner-half"
              style={{ borderRadius: 0, position: "relative" }}
            >
              <Image
                src="/images/gum.webp"
                alt="Patient smile exhibiting healthy gum shapes and borders"
                fill
                className="home-hero-bg-image"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="service-banner-overlay-dark" />
              <div className="service-banner-content-center">
                <h3 className="service-banner-title">Gum Contouring</h3>
                <p className="service-banner-subtitle">
                  Better Shapes. Confident Smile
                </p>
                <div className="service-banner-buttons">
                  <Link href="/gum-contouring" className="btn-banner-outline">
                    Learn More
                  </Link>
                  <Link href="/contact" className="btn-pill-blue">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Bonding and Fillings */}
            <div
              className="service-banner-half"
              style={{ borderRadius: 0, position: "relative" }}
            >
              <Image
                src="/images/fill.webp"
                alt="Composite resin dental restoration for bonding"
                fill
                className="home-hero-bg-image"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="service-banner-overlay-dark" />
              <div className="service-banner-content-center">
                <h3 className="service-banner-title">Bonding and Fillings</h3>
                <p className="service-banner-subtitle">
                  Fix Imperfections. Renew Confidence
                </p>
                <div className="service-banner-buttons">
                  <Link href="/bonding-fillings" className="btn-banner-outline">
                    Learn More
                  </Link>
                  <Link href="/contact" className="btn-pill-blue">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Row 5: Pediatric Dentistry, Dental Implants & Smile Design */}
          <div className="service-banner-triple">
            {/* Pediatric Dentistry */}
            <div
              className="service-banner-half"
              style={{ borderRadius: 0, position: "relative" }}
            >
              <Image
                src="/images/pediatric/1.webp"
                alt="Child-friendly pediatric dentistry at MAMA Dental Clinic"
                fill
                className="home-hero-bg-image"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="service-banner-overlay-dark" />
              <div className="service-banner-content-center">
                <h3 className="service-banner-title">Pediatric Dentistry</h3>
                <p className="service-banner-subtitle">
                  Gentle Care for Growing Smiles
                </p>
                <div className="service-banner-buttons">
                  <Link
                    href="/pediatric-dentistry"
                    className="btn-banner-outline"
                  >
                    Learn More
                  </Link>
                  <Link href="/contact" className="btn-pill-blue">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Dental Implants */}
            <div
              className="service-banner-half"
              style={{ borderRadius: 0, position: "relative" }}
            >
              <Image
                src="/images/implants/1.webp"
                alt="Dental implant consultation and treatment planning"
                fill
                className="home-hero-bg-image"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="service-banner-overlay-dark" />
              <div className="service-banner-content-center">
                <h3 className="service-banner-title">Dental Implants</h3>
                <p className="service-banner-subtitle">
                  Strong Foundations. Natural Results
                </p>
                <div className="service-banner-buttons">
                  <Link href="/dental-implants" className="btn-banner-outline">
                    Learn More
                  </Link>
                  <Link href="/contact" className="btn-pill-blue">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Smile Design */}
            <div
              className="service-banner-half"
              style={{ borderRadius: 0, position: "relative" }}
            >
              <Image
                src="/images/smile/1.webp"
                alt="Digital smile design consultation"
                fill
                className="home-hero-bg-image"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="service-banner-overlay-dark" />
              <div className="service-banner-content-center">
                <h3 className="service-banner-title">Smile Design</h3>
                <p className="service-banner-subtitle">
                  Plan Your Most Confident Smile
                </p>
                <div className="service-banner-buttons">
                  <Link href="/smile-design" className="btn-banner-outline">
                    Learn More
                  </Link>
                  <Link href="/contact" className="btn-pill-blue">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
