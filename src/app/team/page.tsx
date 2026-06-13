import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Stethoscope, Briefcase, BookOpen, User, Check } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Meet Our Team | MAMA Dental Clinic & Orthodontic Centre",
  description: "Meet the professional dentists and specialists at MAMA Dental Clinic in Pazhanji, Kerala. Led by Chief Orthodontist Dr. Minu C. Mathews, our team includes prosthodontists, endodontists, pediatric dentists, oral surgeons, and periodontists.",
};

interface TeamMember {
  id: number;
  name: string;
  role: string;
  education: string;
  college?: string;
  image: string;
  bio?: string;
  areasOfExpertise: string[];
  certifications?: string[];
  achievements?: string[];
  experience?: string[];
}

export default function TeamPage() {
  const clinicalDirector: TeamMember = {
    id: 5,
    name: "Dr. Minu C. Mathews",
    role: "Chief Orthodontist & Clinical Director",
    education: "BDS, MDS (Orthodontics and Dentofacial Orthopedics)",
    image: "/images/team/5.webp",
    bio: "Dr. Minu C. Mathews guides the vision and clinical operations of MAMA Dental Clinic & Orthodontic Centre. Combining advanced orthodontic science with aesthetic expertise, she has established the clinic as Pazhanji's premier destination for comprehensive dental care and smile corrections.",
    areasOfExpertise: [
      "Modern Braces & Damon System",
      "Clear Aligner Therapy (Invisalign & Premium Aligners)",
      "Smile Designing & Aesthetic Dentistry",
      "Intraoral 3D Scanning & Digital Diagnostics",
      "Pediatric and Adult Interceptive Orthodontics"
    ]
  };

  const specialists: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Shilpa Elsa George",
      role: "Consultant Prosthodontist & Implantologist",
      education: "BDS, MDS (Prosthodontics, Crown & Bridge)",
      college: "Christian Dental College, Ludhiana",
      image: "/images/team/1.webp",
      bio: "Dr. Shilpa specializes in restoring and replacing missing teeth to improve both oral function and aesthetics. With advanced training in prosthodontics from CDC Ludhiana, she delivers highly customized, durable, and natural-looking dental solutions.",
      areasOfExpertise: [
        "Complete & Partial Dentures",
        "Teeth and Implant Supported Overdentures",
        "Porcelain Veneers & Laminates",
        "Crown & Bridge Restorations",
        "Digital Smile Designing"
      ]
    },
    {
      id: 2,
      name: "Dr. Meenu Prasannan",
      role: "Consultant Pediatric & Preventive Dentist",
      education: "MDS (Pediatric & Preventive Dentistry)",
      college: "Sri Sankara Dental College, Trivandrum",
      image: "/images/team/2.webp",
      areasOfExpertise: [
        "Child Behaviour Management",
        "Comprehensive Pediatric Treatments",
        "Preventive Dental Therapy for Children",
        "Laser Dentistry for Kids",
        "Minor Oral Surgical Procedures"
      ],
      certifications: [
        "Trained Provider in Conscious Sedation"
      ],
      achievements: [
        "Gold Medalist (First Rank) in MDS University Exam from Kerala University of Health Sciences (KUHS)",
        "Winner of multiple awards for scientific paper presentations at State and National Conferences",
        "Published research articles in prestigious PubMed indexed medical journals",
        "Expert in providing full-mouth rehabilitation for special children under General Anesthesia"
      ]
    },
    {
      id: 3,
      name: "Dr. Bhoomika P.C.",
      role: "Consultant Oral & Maxillofacial Surgeon",
      education: "MDS (Oral And Maxillofacial Surgery)",
      college: "Royal Dental College (Assistant Professor)",
      image: "/images/team/3.webp",
      bio: "Dr. Bhoomika combines academic excellence with clinical precision. Serving as an Assistant Professor at Royal Dental College, she provides specialized surgical care for complex extractions and oral surgical treatments.",
      areasOfExpertise: [
        "Minor Surgical Procedures",
        "Complex & Wisdom Teeth Extractions",
        "Pathological Lesion Management",
        "Maxillofacial Trauma Assessment"
      ]
    },
    {
      id: 4,
      name: "Dr. Akhil Thomas",
      role: "Consultant Endodontist & Root Canal Specialist",
      education: "MDS (Endodontics & Conservative Dentistry)",
      college: "PSM Dental College",
      image: "/images/team/4.webp",
      bio: "Dr. Akhil is dedicated to preserving the natural dentition through high-precision endodontic therapy. He specializes in advanced, pain-free root canal treatments utilizing the latest technology.",
      areasOfExpertise: [
        "Single-visit Root Canal Treatment",
        "Apexification & Regenerative Endodontics",
        "Microscope-assisted Root Canals",
        "Conservative Cosmetic Restorations"
      ]
    },
    {
      id: 6,
      name: "Dr. Rohith Ravindran",
      role: "Consultant Oral & Maxillofacial Surgeon",
      education: "MDS (Oral & Maxillofacial Surgery)",
      college: "Anjarakandy Dental College",
      image: "/images/team/6.webp",
      bio: "Dr. Rohith is an expert in surgical interventions for facial structures. His practice spans from minor oral surgeries to complex facial cosmetic and reconstructive procedures, focusing on patient comfort and functional outcomes.",
      areasOfExpertise: [
        "Minor and Major Maxillofacial Surgery",
        "Temporomandibular Joint (TMJ) Management",
        "Facial Cosmetic & Esthetic Procedures",
        "Maxillofacial Trauma Care"
      ]
    },
    {
      id: 7,
      name: "Dr. Anjali Sreedharan",
      role: "Consultant Periodontist & Implantologist",
      education: "BDS, MDS (Periodontics)",
      college: "Amrita University (BDS 2009-13, MDS 2016-19)",
      image: "/images/team/7.webp",
      areasOfExpertise: [
        "Advanced Periodontal Disease Management",
        "Laser-Assisted Periodontics & Gum Care",
        "Power-Driven Scaling & Root Planing",
        "Moesin Biomarker GCF Periodontal Analysis"
      ],
      achievements: [
        "1st Prize in Paper Presentation ('Maxillary Labial Frenum - A Novel Classification') at SPIK Midterm Conference 2018",
        "Published clinical author in the Journal of Indian Society of Periodontology (JISP)",
        "Published randomized control trial researcher on toothbrush contamination after use"
      ],
      experience: [
        "Dr. Kuruvila Memorial Dental Clinic, Kunnamkulam (Consultant & GP)",
        "D Cure Dental Clinic, Koottanad (Consultant Periodontist)",
        "Dr. Jabins Multispeciality Dental Clinic, Pavartty (Consultant)",
        "Orodent, Kunnamkulam & Noor Oral Care, Chammanur (Consultant)"
      ]
    },
    {
      id: 8,
      name: "Dr. Nithya R Krishnan",
      role: "Consultant Periodontist & Implantologist",
      education: "BDS, MDS (Periodontics)",
      college: "Coorg Institute of Dental Sciences",
      image: "/images/team/5.webp",
      bio: "Backed by 13 years of clinical dental practice and 8 years of expertise as a Periodontist, Dr. Nithya R Krishnan has gained extensive experience in leading clinics and hospitals, completing more than 500 advanced periodontal surgeries, periodontal plastic procedures, laser therapies, and dental implant treatments, delivering predictable outcomes and exceptional patient care.",
      areasOfExpertise: [
        "Laser-Assisted Periodontal Treatments",
        "Dental Implants",
        "Advanced Periodontal Surgeries",
        "Periodontal Plastic Procedures"
      ],
      certifications: [
        "Implant Dentistry from Nobel Biocare"
      ]
    }
  ];

  return (
    <>
      <Header />

      <main style={{ flex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden", backgroundColor: "#ffffff" }}>

        {/* Hero Banner Section */}
        <section className="team-hero-section" style={{ padding: "120px 0 50px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <div className="section-title-wrapper" style={{ marginBottom: "50px" }}>
              <div className="subtitle-badge">
                <User size={16} />
                <span>Our Specialists</span>
              </div>
              <h1 className="section-title" style={{ fontSize: "3.2rem", fontWeight: "800", color: "#0f4c5c", margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
                Meet Our <span>Expert Team</span>
              </h1>
              <p className="section-description" style={{ color: "#475569", fontSize: "1.125rem", maxWidth: "720px", margin: "0 auto", lineHeight: "1.6" }}>
                At MAMA Dental Clinic & Orthodontic Centre, we bring together highly qualified and experienced dental specialists across all major disciplines. We are committed to rendering the highest standard of ethical, advanced, and personalized dental care.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section - Dr. Minu C. Mathews */}
        {/* <section style={{ padding: "0 0 80px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#0f4c5c", textAlign: "center", marginBottom: "40px", position: "relative" }} className="section-title">
              Clinical <span>Leadership</span>
            </h2>

            <div className="team-page-director-card">
              <div className="team-avatar-container" style={{ aspectRatio: "1", width: "100%", height: "auto" }}>
                <Image
                  src={clinicalDirector.image}
                  alt={clinicalDirector.name}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1200px) 100vw, 400px"
                />
              </div>

              <div className="team-info" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <h3 style={{ fontSize: "1.9rem", color: "var(--primary)", fontWeight: "800", margin: "0 0 4px 0" }}>
                    {clinicalDirector.name}
                  </h3>
                  <span className="team-role" style={{ color: "var(--secondary)", fontSize: "0.95rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {clinicalDirector.role}
                  </span>
                </div>

                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "#1a252c", fontSize: "0.95rem" }}>
                  <GraduationCap size={20} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Education & Qualifications:</strong>
                    <div style={{ color: "#475569", marginTop: "2px" }}>{clinicalDirector.education}</div>
                  </div>
                </div>

                {clinicalDirector.bio && (
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "#334155", margin: 0 }}>
                    {clinicalDirector.bio}
                  </p>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--primary)", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Stethoscope size={16} /> Key Areas of Expertise:
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                    {clinicalDirector.areasOfExpertise.map((area, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: "#ffffff",
                          color: "var(--primary)",
                          fontSize: "0.85rem",
                          fontWeight: "600",
                          padding: "6px 14px",
                          borderRadius: "100px",
                          border: "1px solid rgba(15, 76, 92, 0.1)"
                        }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Specialists Grid Section */}
        <section style={{ padding: "80px 0 100px 0", backgroundColor: "#f7f9fa" }}>
          <div className="container">

            <div className="section-title-wrapper" style={{ marginBottom: "50px" }}>
              <h2 className="section-title" style={{ fontSize: "2.4rem" }}>
                Our Clinical <span>Specialists</span>
              </h2>
              <p className="section-description" style={{ fontSize: "1.05rem" }}>
                Collaborating to offer specialized dental expertise under one roof, ensuring complete care for you and your family.
              </p>
            </div>

            <div className="team-grid">
              {specialists.map((doctor) => (
                <div key={doctor.id} className="team-page-specialist-card">

                  {/* Avatar */}
                  <div className="team-page-specialist-avatar">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="130px"
                    />
                  </div>

                  {/* Name, Title & Qualifications */}
                  <div className="team-page-specialist-info">
                    <h3 style={{ fontSize: "1.45rem", color: "var(--primary)", fontWeight: "800", margin: "0 0 4px 0" }}>
                      {doctor.name}
                    </h3>
                    <span style={{ color: "var(--secondary)", fontSize: "0.825rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "12px" }}>
                      {doctor.role}
                    </span>

                    <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", justifyContent: "center", fontSize: "0.85rem", color: "#475569", textAlign: "center" }}>
                      <GraduationCap size={16} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                      <span>
                        {doctor.education}
                        {doctor.college && <span style={{ display: "block", fontSize: "0.775rem", fontStyle: "italic", marginTop: "2px" }}>{doctor.college}</span>}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="team-page-specialist-details">

                    {doctor.bio && (
                      <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: "1.6", margin: 0 }}>
                        {doctor.bio}
                      </p>
                    )}

                    {/* Areas of Expertise */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--primary)", display: "flex", alignItems: "center", gap: "6px" }}>
                        <Stethoscope size={14} /> Areas of Expertise:
                      </span>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                        {doctor.areasOfExpertise.map((area, i) => (
                          <li key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "0.85rem", color: "#334155" }}>
                            <Check size={14} style={{ color: "var(--secondary)", flexShrink: 0, marginTop: "3px" }} />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications (Special for Dr Meenu) */}
                    {doctor.certifications && doctor.certifications.length > 0 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid #e2e8f0", paddingTop: "12px" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--primary)", display: "flex", alignItems: "center", gap: "6px" }}>
                          <Award size={14} /> Certifications:
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          {doctor.certifications.map((cert, i) => (
                            <span key={i} style={{ fontSize: "0.8rem", color: "#1e293b", backgroundColor: "#e2e8f0", padding: "4px 10px", borderRadius: "4px", fontWeight: "500" }}>
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements (Special for Dr Meenu & Dr Anjali) */}
                    {doctor.achievements && doctor.achievements.length > 0 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid #e2e8f0", paddingTop: "12px" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--primary)", display: "flex", alignItems: "center", gap: "6px" }}>
                          <Award size={14} /> Key Achievements:
                        </span>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                          {doctor.achievements.map((ach, i) => (
                            <li key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "0.8rem", color: "#475569", lineHeight: "1.4" }}>
                              <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "1rem", lineHeight: "1", flexShrink: 0 }}>★</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Experience (Special for Dr Anjali) */}
                    {doctor.experience && doctor.experience.length > 0 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid #e2e8f0", paddingTop: "12px" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--primary)", display: "flex", alignItems: "center", gap: "6px" }}>
                          <Briefcase size={14} /> Consultant Experience:
                        </span>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                          {doctor.experience.map((exp, i) => (
                            <li key={i} style={{ display: "flex", gap: "6px", alignItems: "center", fontSize: "0.8rem", color: "#475569" }}>
                              <span style={{ width: "4px", height: "4px", backgroundColor: "var(--primary)", borderRadius: "50%", flexShrink: 0 }} />
                              <span>{exp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book Appointment CTA Section */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <div
              className="location-banner"
              style={{
                width: "100%",
                backgroundColor: "#00acee",
                borderRadius: "24px",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                alignItems: "center",
                boxShadow: "0 15px 35px rgba(0, 172, 238, 0.2)",
                position: "relative"
              }}
            >
              <div style={{ padding: "60px", display: "flex", flexDirection: "column", gap: "28px", zIndex: 2 }}>
                <h2 style={{ fontSize: "3rem", fontWeight: "800", color: "#ffffff", lineHeight: "1.2", margin: 0, fontFamily: "var(--font-serif)" }}>
                  Ready to Consult Our Specialists?
                </h2>
                <p style={{ color: "#ffffff", fontSize: "1.1rem", opacity: 0.9, margin: 0, maxWidth: "520px" }}>
                  Schedule your consultation today and experience world-class, comfortable dental care tailormade for you by Pazhanji's leading specialists.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="btn-pill-white-cta"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#00acee",
                      borderRadius: "100px",
                      padding: "14px 40px",
                      fontWeight: "800",
                      fontSize: "1.05rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>

              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "360px", display: "flex", justifyContent: "flex-end", overflow: "hidden" }}>
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                  alt="MAMA Dental Clinic Advanced Treatment Room"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
