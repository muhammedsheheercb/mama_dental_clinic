"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, X, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Veneers", href: "/veneers" },
    { name: "Clean Aligners", href: "/clean-aligners" },
    { name: "Braces", href: "/braces" },
    { name: "Crowns & Bridges", href: "/crowns-bridges" },
    { name: "Teeth Whitening", href: "/teeth-whitening" },
    { name: "Gum Contouring", href: "/gum-contouring" },
    { name: "Bonding & Filling", href: "/bonding-fillings" },
  ];

  return (
    <>
      {/* Main Header */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-content">
          {/* Logo */}
          <Link href="/" className="logo-wrapper" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <Image
              src="/images/logo.webp"
              alt="MAMA Dental Clinic Logo"
              width={38}
              height={38}
              style={{ objectFit: "contain", borderRadius: "6px" }}
              priority
            />
            <span className="logo-text" style={{ fontSize: "1.35rem", fontWeight: "800", color: "#1e3a44", letterSpacing: "-0.01em" }}>
              MAMA DENTAL<span>.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav">
            <div className="nav-dropdown-wrapper">
              <span className="nav-dropdown-trigger">
                Services <ChevronDown size={14} />
              </span>
              <div className="dropdown-menu">
                {services.map((service, index) => {
                  const isActive = pathname === service.href;
                  return (
                    <Link
                      key={index}
                      href={service.href}
                      className={`dropdown-item ${isActive ? "active" : ""}`}
                    >
                      {service.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link href="/about" className="nav-link">
              About Us
            </Link>
            <Link href="/careers" className="nav-link">
              Careers
            </Link>
            <Link href="/location" className="nav-link">
              Location
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/contact" className="nav-link">
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="header-cta">
            <Link href="/contact" className="btn btn-primary" style={{ padding: "10px 24px", fontSize: "0.875rem" }}>
              Book Now
            </Link>
          </div>

          {/* Mobile Action Controls (Modern 2-line Menu Icon as per user image, login button removed) */}
          <div className="mobile-actions">
            <button
              className="menu-toggle-custom"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3H24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M2 13H24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Backdrop Overlay */}
      <div 
        className={`mobile-nav-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
        {/* Mobile Header with close button only as per user image */}
        <div className="mobile-nav-header" style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            className="menu-toggle-custom"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ color: "#64748b" }}
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Links List */}
        <div className="mobile-links">
          {/* Services Accordion Link */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", width: "100%" }}
            >
              <span className={`mobile-link ${mobileServicesOpen ? "active-service" : ""}`} style={{ fontSize: "1.35rem", fontWeight: "600", transition: "color 0.3s ease" }}>
                Services
              </span>
              <div style={{
                border: mobileServicesOpen ? "1px solid #2ec4b6" : "1px solid #cbd5e1",
                borderRadius: "6px",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "all 0.3s ease",
                backgroundColor: mobileServicesOpen ? "rgba(46, 196, 182, 0.05)" : "transparent"
              }}>
                <ChevronDown size={18} style={{ color: mobileServicesOpen ? "#2ec4b6" : "#64748b" }} />
              </div>
            </div>
            
            {/* Collapsible services list with smooth display */}
            {mobileServicesOpen && (
              <div className="mobile-services-list animate-fade-in">
                {services.map((service, index) => {
                  const isActive = pathname === service.href;
                  return (
                    <Link
                      key={index}
                      href={service.href}
                      className="mobile-service-link"
                      onClick={() => setMobileMenuOpen(false)}
                      style={isActive ? { color: "var(--secondary)", fontWeight: "600" } : {}}
                    >
                      {service.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/careers" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Careers
          </Link>
          <Link href="/location" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Location
          </Link>
          <Link href="/blog" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </div>

        {/* Book Button */}
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{ width: "100%" }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
