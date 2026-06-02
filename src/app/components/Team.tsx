import React from "react";
import Image from "next/image";
import { Users } from "lucide-react";

export default function Team() {
  const members = [
    {
      name: "Dr. Saipriya N",
      role: "Co-founder & Chief Executive Officer",
      education: "BDS, Fellowship in Cosmetology",
      bio: "Dr. Saipriya N guides the vision and clinical operations of Firstooth. Combining dental science with aesthetic expertise, she has established the studio as Thrissur's premier destination for personalized cosmetic dental solutions, creating a nurturing and state-of-the-art environment for patient transformations.",
      details: "With a BDS and advanced fellowship in cosmetology, Dr. Saipriya blends clinical precision with facial aesthetics. Her vision centers on patient empowerment through education, quality assurance, ethical practice, and local community health initiatives.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Vishnu R Das",
      role: "Co-founder & Chief Strategy Officer",
      education: "BTech, MBA in Marketing & Operations",
      bio: "Vishnu R Das drives the strategic direction and innovative service models at Firstooth. Inspired to create a healthcare studio that embodies artistry and digital innovation, he oversees business operations, client relation programs, and patient-centered tech integration.",
      details: "Holding an engineering degree and a marketing MBA, Vishnu coordinates our advanced digital workflow, ensuring smooth visits, scheduling convenience, and modern 3D aligner manufacturing infrastructure.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <section className="section section-bg-light" id="about">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="subtitle-badge">
            <Users size={16} />
            <span>Meet Our Leadership</span>
          </div>
          <h2 className="section-title">
            The visionaries behind <span>Firstooth.</span>
          </h2>
          <p className="section-description">
            Our founders bring together dental cosmetic science and operational innovation to redefine the dental care experience in Kerala.
          </p>
        </div>

        <div className="team-grid">
          {members.map((member, index) => (
            <div key={index} className="team-card">
              {/* Avatar Column */}
              <div className="team-avatar-container">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1200px) 100vw, 20vw"
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
