import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const companyLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Location", href: "/location" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Veneers", href: "/veneers" },
    { name: "Clean Aligners", href: "/clean-aligners" },
    { name: "Braces", href: "/braces" },
    { name: "Crowns and Bridges", href: "/crowns-bridges" },
    { name: "Teeth Whitening", href: "/teeth-whitening" },
    { name: "Gum Contouring", href: "/gum-contouring" },
    { name: "Bonding and Filling", href: "/bonding-fillings" },
  ];

  return (
    <>
      {/* Footer layout matching Image 2 perfectly with centered content matching CTA banner alignment */}
      <footer className="footer" id="contact" style={{ width: "100%", maxWidth: "100%", padding: "80px 0 30px 0", backgroundColor: "#f8f9fa", borderTop: "1px solid #e9ecef" }}>
        {/* Centered content wrapper constrained in CSS */}
        <div className="footer-container">
          
          {/* Main Footer Columns */}
          <div className="footer-top">
            
            {/* Column 1: Logo & Slogan */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                {/* Modern Blue/Green Tooth Shape Logo SVG from Image 2 */}
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 35C20 25 35 15 50 30C65 15 80 25 80 35C80 55 60 75 50 85C40 75 20 55 20 35Z" fill="#3ca8d5" opacity="0.85" />
                  <path d="M30 40C30 32 40 25 50 35C60 25 70 32 70 40C70 56 55 70 50 78C45 70 30 56 30 40Z" fill="#2ec4b6" opacity="0.95" />
                </svg>
                <span className="footer-logo-text" style={{ fontSize: "1.6rem", fontWeight: "800", letterSpacing: "-0.02em", color: "#1e3a44" }}>
                  FIRSTOOTH<span style={{ color: "#2ec4b6" }}>.</span>
                </span>
              </Link>
              
              <p style={{ margin: "4px 0 0 0", color: "#495057", fontSize: "0.95rem", fontWeight: "500" }}>
                Because Smile Matters
              </p>

              {/* Social Channels (Screenshot 8 / Image 2 circular outline black) */}
              <div className="social-links">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=100084315910037&mibextid=kFxxJD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                  style={{ border: "1px solid #111111", color: "#111111" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/firstoothdental?igsh=Zm0zbHZhanoza3J2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                  style={{ border: "1px solid #111111", color: "#111111" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                
                {/* YouTube */}
                <a
                  href="https://youtube.com/@firstooth?si=osGHRELA88GRKek6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="YouTube"
                  style={{ border: "1px solid #111111", color: "#111111" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12.5a29 29 0 0 0 .46 6.08 2.78 2.78 0 0 0 1.95 1.96C5.12 21 12 21 12 21s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12.5a29 29 0 0 0-.46-6.08z" />
                    <polygon points="9.75 15.02 15.5 12.5 9.75 9.98 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Company */}
            <div>
              <h3 className="footer-title">Company</h3>
              <ul className="footer-links" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} style={{ textDecoration: "none", color: "#495057" }}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="footer-title">Services</h3>
              <ul className="footer-links" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} style={{ textDecoration: "none", color: "#495057" }}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contacts Us */}
            <div>
              <h3 className="footer-title">Contacts Us</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                
                {/* Email */}
                <div className="footer-contact-item">
                  <Mail size={16} className="footer-contact-icon" style={{ color: "#495057" }} />
                  <div className="footer-contact-text">
                    <a href="mailto:firstoothaesthetics@gmail.com" style={{ color: "#495057", textDecoration: "none" }}>firstoothaesthetics@gmail.com</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="footer-contact-item">
                  <Phone size={16} className="footer-contact-icon" style={{ color: "#495057" }} />
                  <div className="footer-contact-text">
                    <a href="tel:+919633288966" style={{ color: "#495057", textDecoration: "none" }}>+91 96332 88966</a>
                  </div>
                </div>

                {/* Address */}
                <div className="footer-contact-item">
                  <MapPin size={16} className="footer-contact-icon" style={{ color: "#495057" }} />
                  <div className="footer-contact-text">
                    <p style={{ color: "#495057", fontSize: "0.925rem", lineHeight: "1.6", margin: 0 }}>
                      Second Floor, Safa Tower,<br />
                      Kunnamkulam Rd, Punkunnam,<br />
                      Thrissur, Kerala 680002
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom">
            <p style={{ margin: 0, color: "#868e96" }}>Copyright &copy; {new Date().getFullYear()} FIRSTOOTH DENTAL STUDIO</p>
          </div>

        </div>
      </footer>

      {/* Floating Green WhatsApp Button Trigger */}
      <a
        href="https://wa.me/919633288966"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.62.962 3.21 1.48 4.821 1.483 5.425.002 9.845-4.414 9.848-9.84.002-2.63-1.023-5.101-2.887-6.967C16.56 1.966 14.09 1.94 11.457 1.94c-5.43 0-9.85 4.414-9.853 9.84-.002 1.808.487 3.57 1.417 5.127L2.004 22l5.053-1.326H7.07c-.165-.004-.326-.008-.423-.02zM17.306 14c-.283-.141-1.67-.824-1.928-.918-.258-.094-.446-.141-.634.141-.188.281-.727.918-.891 1.104-.164.186-.328.21-.61.07-.282-.14-1.192-.44-2.27-1.402-.838-.748-1.404-1.67-1.569-1.952-.164-.282-.018-.435.122-.575.127-.125.282-.329.424-.494.14-.165.188-.282.282-.47.094-.188.047-.353-.024-.494-.07-.141-.634-1.528-.868-2.092-.228-.548-.46-.473-.634-.482-.164-.008-.353-.01-.54-.01-.188 0-.494.07-.753.353-.258.282-.986.963-.986 2.348 0 1.385 1.008 2.72 1.15 2.908.14.188 1.984 3.03 4.81 4.246.672.29 1.2.462 1.61.593.676.215 1.29.185 1.777.113.543-.08 1.67-.682 1.905-1.34.235-.658.235-1.222.164-1.34-.07-.118-.258-.188-.54-.329z" />
        </svg>
      </a>
    </>
  );
}
