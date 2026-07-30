import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Stethoscope, Briefcase, User, Check } from "lucide-react";
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
  const specialists: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Minu C. Mathews",
      role: "Chief Dental Surgeon & Managing Director",
      education: "BDS, MDS (Orthodontics and Dentofacial Orthopedics)",
      college: "Christian Dental College, Ludhiana; Malabar Dental College (KUHS)",
      image: "/images/team/1.webp",
      bio: "Dr. Minu C. Mathews is an accomplished Specialist Orthodontist with over 10 years of clinical experience. She currently serves as the Chief Dental Surgeon and Managing Director at MAMA Dental Clinic and Orthodontic Centre. As an official Invisalign® Provider and specialist in Cosmetic Smile Designing & Veneering, she combines high-end aesthetic dental care with advanced orthodontic techniques to design seamless, natural-looking, and confident smiles.",
      areasOfExpertise: [
        "Cosmetic Dentistry & Smile Designing: Porcelain and composite veneers, cosmetic smile designing, crowns & bridges, aesthetic restorations",
        "Clear Aligners & Orthodontics: Invisalign®, clear aligner therapy, self-ligating brackets, MARPE, orthopedic and jaw discrepancy corrections",
        "Surgical & Advanced Procedures: Surgical extractions, surgery-assisted orthodontics, implant-supported orthodontics, impacted canines",
        "Preventive & Pediatric Care: Early growth modification, serial extractions, preventive orthodontics"
      ],
      certifications: ["Official Invisalign® Provider"]
    },
    {
      id: 2,
      name: "Dr. Bhoomika P.C.",
      role: "Specialist Oral & Maxillofacial Surgeon",
      education: "MDS (Oral & Maxillofacial Surgery)",
      college: "Assistant Professor – Royal Dental College",
      image: "/images/team/2.webp",
      bio: "Dr. Bhoomika P.C. is an accomplished Specialist Oral & Maxillofacial Surgeon dedicated to delivering precise, safe, and comfortable surgical care. She also serves as an Assistant Professor at Royal Dental College, training the next generation of dental professionals and staying at the forefront of modern surgical advancements.",
      areasOfExpertise: [
        "Minor Surgical Procedures: Impacted wisdom teeth, complex extractions, pre-prosthetic surgeries",
        "Surgical Oral Pathology: Cyst enucleation, biopsy procedures, soft tissue lesion excisions",
        "Trauma & Emergency Care: Minor maxillofacial trauma, facial lacerations, dental injuries",
        "Pre-Orthodontic & Aesthetic Surgeries: Frenectomies, surgical exposure of impacted teeth, alveoloplasty"
      ],
      achievements: ["Assistant Professor in the Department of Oral & Maxillofacial Surgery at Royal Dental College", "Committed to evidence-based practice, surgical safety protocols, and compassionate patient care"]
    },
    {
      id: 3,
      name: "Dr. Meenu Prasannan",
      role: "Specialist Pediatric Dentist",
      education: "MDS (Pediatric & Preventive Dentistry)",
      college: "Sri Sankara Dental College, Trivandrum",
      image: "/images/team/3.webp",
      bio: "Dr. Meenu Prasannan is a distinguished Specialist Pediatric Dentist and Gold Medalist (First Rank – KUHS). She provides comprehensive, pain-free dental care for infants, children, adolescents, and children with special healthcare needs, creating positive, anxiety-free dental experiences from a young age.",
      areasOfExpertise: [
        "Child Psychology & Behavior Management: Non-pharmacological behavior shaping and child-friendly dental care",
        "Sleep Dentistry & Sedation: Conscious Sedation and General Anesthesia",
        "Full Mouth Rehabilitation for Special Needs: Single-visit rehabilitation under General Anesthesia",
        "Preventive & Pediatric Treatments: Sealants, fluoride therapies, space maintainers, pulpectomies, pediatric crowns",
        "Laser Dentistry & Minor Surgeries: Minimally invasive laser procedures and minor oral surgery"
      ],
      certifications: ["Trained provider in Conscious Sedation and General Anesthesia"],
      achievements: ["Gold Medalist (First Rank) in MDS – Kerala University of Health Sciences (KUHS)", "Published researcher in PubMed-indexed international and national journals", "Award-winning presenter at State and National Pediatric Dentistry Conferences"]
    },
    {
      id: 4,
      name: "Dr. Akhil Thomas",
      role: "Endodontics",
      education: "Endodontics",
      college: "PSM Dental College",
      image: "/images/team/4.webp",
      areasOfExpertise: ["Root Canal Treatment", "Apexification"]
    },
    {
      id: 5,
      name: "Dr. Girish B. Viswanathan",
      role: "Prosthodontist & Senior Specialist Implantologist",
      education: "MDS in Prosthodontics & Implantology; BDS",
      college: "Kalinga Institute of Dental Sciences, KIIT University",
      image: "/images/team/5.webp",
      bio: "Dr. Girish B. Viswanathan is a distinguished Prosthodontist and Senior Specialist Implantologist with extensive experience in advanced restorative procedures and complex surgical implantology. He is known for full-mouth rehabilitations, graftless Zygomatic implants, and same-day teeth protocols, combining precision surgical techniques with international treatment standards.",
      areasOfExpertise: [
        "Advanced Dental Implantology: Single and multiple tooth implants, immediate loading implants, All-on-4 and All-on-6",
        "Complex Surgical Procedures: Zygomatic, Pterygoid, and Transnasal implants",
        "Guided Surgery & Bone Protocols: 3D CBCT guided surgery, bone grafting, sinus lifts, ridge augmentation, immediate extraction placements",
        "Prosthodontics & Rehabilitation: Zirconia and ceramic crowns & bridges, overdentures, full-mouth reconstructions"
      ],
      certifications: ["Advanced Zygomatic Implantology Training – Noris Medical", "Certified in Guided Implant Surgery and Digital Workflows – Straumann & Glidewell Laboratories"]
    },
    {
      id: 6,
      name: "Dr. Nithya R Krishnan",
      role: "Specialist Periodontist & Implantologist",
      education: "MDS (Periodontics & Implantology), BDS",
      college: "Coorg Institute of Dental Sciences",
      image: "/images/team/6.webp",
      bio: "Backed by 13 years of clinical practice and 8 years of specialized expertise, Dr. Nithya R Krishnan is an expert Periodontist and Implantologist. She has successfully performed over 500 advanced periodontal surgeries, laser treatments, and implant procedures.",
      areasOfExpertise: ["Implantology: Dental implants and Nobel Biocare restorations", "Advanced Gum Care: Laser-assisted periodontal treatments", "Surgical Expertise: Advanced periodontal and plastic surgeries"],
      certifications: ["Advanced certification in Implant Dentistry from Nobel Biocare"]
    },
    {
      id: 7,
      name: "Dr. Anjali Sreedharan",
      role: "Consultant Periodontist & Dental Surgeon",
      education: "MDS (Periodontics & Oral Implantology)",
      college: "BDS and MDS – Amrita University | Reg. No: 14064",
      image: "/images/team/7.webp",
      bio: "Dr. Anjali Sreedharan is a highly qualified Specialist Periodontist dedicated to advanced gum care and preventive dentistry. With a strong research background and expertise in laser applications and surgical periodontics, she focuses on personalized, evidence-based treatments for long-term oral health.",
      areasOfExpertise: [
        "Advanced Periodontal Care: Bleeding gums, bad breath, severe gum infections and periodontitis",
        "Laser & Flap Surgery: Minimally invasive gum rejuvenation and therapy",
        "Cosmetic Gum Contouring: Aesthetic reshaping for gummy smiles and uneven gum lines",
        "Preventive & Routine Dentistry: Scaling, deep cleaning, and oral hygiene instruction"
      ],
      achievements: ["Published researcher with multiple scientific awards in Periodontics"]
    },
    {
      id: 8,
      name: "Dr. Shilpa Elsa George",
      role: "Specialist Prosthodontist & Implantologist",
      education: "MDS (Prosthodontics, Crown & Bridge), BDS",
      college: "Christian Dental College, Ludhiana",
      image: "/images/team/8.webp",
      bio: "Dr. Shilpa Elsa George is a highly skilled Prosthodontist specializing in restorative, cosmetic, and implant dentistry. An alumnus of Christian Dental College, Ludhiana, she is dedicated to restoring patient smiles with precision, function, and natural aesthetics.",
      areasOfExpertise: [
        "Cosmetic Dentistry: Smile design and porcelain veneers",
        "Prosthetics: Complete dentures, crowns & bridges",
        "Implant Restorations: Teeth and implant-supported overdentures"
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
                  Schedule your consultation today and experience world-class, comfortable dental care tailormade for you by Pazhanji&apos;s leading specialists.
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
