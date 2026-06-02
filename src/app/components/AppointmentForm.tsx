"use client";

import React, { useState } from "react";
import { Smile, Sparkles, Send, Check } from "lucide-react";

export default function AppointmentForm() {
  const [formStep, setFormStep] = useState(1);
  const [smileConcern, setSmileConcern] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "morning",
    message: "",
  });

  const concerns = [
    { id: "crowding", label: "Crowded Teeth", desc: "Teeth overlap or are too close together" },
    { id: "spacing", label: "Gaps & Spacing", desc: "Noticeable space or gaps between teeth" },
    { id: "overbite", label: "Bite Correction", desc: "Overbite, underbite, or crossbite issues" },
    { id: "general", label: "General Straightening", desc: "Seeking a straighter, more uniform smile" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (!smileConcern) {
      alert("Please select a smile concern to continue.");
      return;
    }
    setFormStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="section" id="book" style={{ scrollMarginTop: "80px" }}>
      <div className="container">
        <div className="section-title-wrapper" style={{ marginBottom: "50px" }}>
          <div className="subtitle-badge">
            <Smile size={16} />
            <span>Interactive Assessment</span>
          </div>
          <h2 className="section-title">
            Am I a candidate? <span>Book a consultation.</span>
          </h2>
          <p className="section-description">
            Tell us about your dental goals, select your preferred date, and our clinic specialists in Pazhanji will get in touch with you.
          </p>
        </div>

        <div className="assessment-card">
          {submitted ? (
            /* Success State */
            <div className="success-overlay" style={{ gridColumn: "span 2" }}>
              <div className="success-icon">
                <Check size={36} />
              </div>
              <h3>Booking Request Received!</h3>
              <p>
                Thank you, <strong>{formData.name}</strong>. Your smile assessment for <strong>{concerns.find(c => c.id === smileConcern)?.label}</strong> has been received. Our clinic manager will contact you at <strong>{formData.phone}</strong> within 2 hours to confirm your appointment for {formData.date}.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSubmitted(false);
                  setFormStep(1);
                  setSmileConcern("");
                  setFormData({ name: "", email: "", phone: "", date: "", time: "morning", message: "" });
                }}
              >
                Book Another Consultation
              </button>
            </div>
          ) : (
            /* Interactive Booking Form */
            <>
              <div className="assessment-form-side">
                {formStep === 1 ? (
                  /* Step 1: Select Smile Concern */
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                      <h3>Step 1: Select Smile Goal</h3>
                      <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--secondary)" }}>Step 1 of 2</span>
                    </div>
                    <p style={{ marginBottom: "32px" }}>
                      Choose the option below that best describes your dental concern. This helps us customize your clear aligner preview scan.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                      {concerns.map((concern) => (
                        <div
                          key={concern.id}
                          onClick={() => setSmileConcern(concern.id)}
                          style={{
                            border: `2px solid ${smileConcern === concern.id ? "var(--secondary)" : "var(--border)"}`,
                            backgroundColor: smileConcern === concern.id ? "var(--secondary-light)" : "var(--white)",
                            borderRadius: "var(--radius)",
                            padding: "20px",
                            cursor: "pointer",
                            transition: "var(--transition)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h4 style={{ fontSize: "1.15rem", color: "var(--primary)" }}>{concern.label}</h4>
                            <div style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              border: "2px solid var(--border)",
                              backgroundColor: smileConcern === concern.id ? "var(--secondary)" : "transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }} />
                          </div>
                          <p style={{ fontSize: "0.85rem", color: "var(--dark-light)", margin: 0 }}>{concern.desc}</p>
                        </div>
                      ))}
                    </div>

                    <button className="btn btn-primary" onClick={handleNextStep} style={{ width: "100%" }}>
                      Continue to Contact Info
                    </button>
                  </div>
                ) : (
                  /* Step 2: Contact Info */
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                      <h3>Step 2: Contact details</h3>
                      <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--secondary)" }}>Step 2 of 2</span>
                    </div>
                    <p style={{ marginBottom: "32px" }}>
                      Enter your details below to schedule your diagnostic 3D intraoral scan at MAMA Dental Clinic.
                    </p>

                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          className="form-input"
                          placeholder="Your Name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          className="form-input"
                          placeholder="+91 XXXXX XXXXX"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          className="form-input"
                          placeholder="name@example.com"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          className="form-input"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group form-group-full">
                        <label className="form-label">Preferred Time Slot</label>
                        <select
                          name="time"
                          className="form-select"
                          value={formData.time}
                          onChange={handleInputChange}
                        >
                          <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                          <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                          <option value="evening">Evening (3:00 PM - 6:00 PM)</option>
                        </select>
                      </div>
                      <div className="form-group form-group-full">
                        <label className="form-label">Additional Message (Optional)</label>
                        <textarea
                          name="message"
                          className="form-textarea"
                          placeholder="Any specific dental history, concerns, or requests..."
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setFormStep(1)}
                        style={{ flex: 1 }}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                        style={{ flex: 2 }}
                      >
                        {loading ? "Submitting..." : (
                          <>
                            <Send size={16} />
                            Book Appointment
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Info Sidebar */}
              <div className="assessment-info-side">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                  <Sparkles size={24} style={{ color: "var(--primary)" }} />
                  <h3 style={{ fontSize: "1.4rem", margin: 0 }}>Scan Package Details</h3>
                </div>
                
                <div className="info-bullet">
                  <div className="bullet-icon">
                    <Check size={18} />
                  </div>
                  <div className="bullet-text">
                    <h4>Free 3D Scan & Simulation</h4>
                    <p>Get a virtual 3D before-and-after simulation of your treatment results before you pay.</p>
                  </div>
                </div>

                <div className="info-bullet">
                  <div className="bullet-icon">
                    <Check size={18} />
                  </div>
                  <div className="bullet-text">
                    <h4>Consultation with Orthodontist</h4>
                    <p>1-on-1 detailed oral analysis with Dr. Minu and our orthodontics specialist team.</p>
                  </div>
                </div>

                <div className="info-bullet">
                  <div className="bullet-icon">
                    <Check size={18} />
                  </div>
                  <div className="bullet-text">
                    <h4>No Hidden Fees</h4>
                    <p>Transparent pricing, custom payment plans, and zero metal braces hassle.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
