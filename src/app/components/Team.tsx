import React from "react";
import Image from "next/image";
import { Users } from "lucide-react";

export default function Team() {
  const members = [
    {
      name: "Dr. Minu C. Mathews",
      role: "Chief Orthodontist & Clinical Director",
      education: "BDS, MDS (Orthodontics and Dentofacial Orthopedics)",
      bio: "Dr. Minu C. Mathews guides the vision and clinical operations of MAMA Dental Clinic & Orthodontic Centre. Combining advanced orthodontic science with aesthetic expertise, she has established the clinic as Pazhanji's premier destination for comprehensive dental care and smile corrections.",
      details: "With specialized expertise in modern braces and clear aligners, Dr. Minu leverages advanced digital diagnostics (including digital X-rays and intraoral 3D scanning) to ensure precise, comfortable, and personalized treatment results for patients of all ages.",
      image: "/images/team/5.webp",
    },
  ];

  return (
    <section className="section section-bg-light" id="about">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="subtitle-badge">
            <Users size={16} />
            <span>Meet Our Orthodontist</span>
          </div>
          <h2 className="section-title">
            Led by <span>Dr. Minu.</span>
          </h2>
          <p className="section-description">
            Dr. Minu brings together advanced dental science and specialized orthodontic expertise to redefine the dental care experience in Pazhanji, Kerala.
          </p>
        </div>

        <div className="team-grid" style={{ gridTemplateColumns: "1fr", maxWidth: "800px", margin: "0 auto" }}>
          {members.map((member, index) => (
            <div key={index} className="team-card">
              {/* Avatar Column */}
              <div className="team-avatar-container">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1200px) 100vw, 30vw"
                />
              </div>

              {/* Bio Column */}
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--dark)", marginBottom: "12px" }}>
                  {member.education}
                </p>
                <p className="team-bio" style={{ marginBottom: "12px" }}>
                  {member.bio}
                </p>
                <p className="team-bio" style={{ fontSize: "0.85rem", color: "var(--dark-light)", fontStyle: "italic" }}>
                  {member.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
