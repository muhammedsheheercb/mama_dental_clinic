import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Blogs | MAMA Dental Clinic & Orthodontic Centre | Pazhanji, Kerala",
  description: "Stay updated with the latest dental tips, clinical advice, and orthodontic breakthroughs from Dr. Minu and the team at MAMA Dental Clinic.",
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 10, 2024",
      title: "Teeth Whitening: The Best Professional Options For A Brighter Smile",
      excerpt: "Professional teeth whitening is one of the fastest ways to enhance your smile. Whether you want a quick in-office treatment or a take-home kit, there are many options available. Many people search for \"professional teeth whitening near me\" to find...",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
      date: "December 10, 2024",
      title: "The Importance Of Regular Dental Cleanings: Prevent Cavities And Gum Disease",
      excerpt: "Regular dental cleanings are crucial for maintaining your oral health. They help prevent cavities, gum disease, and other serious dental issues. Many people search for...",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1609207825181-52d3214556dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 10, 2024",
      title: "Gum Contouring: How To Achieve A Perfect Smile With Laser Dentistry",
      excerpt: "If you've ever felt self-conscious about a gummy smile, gum contouring might be the solution you're looking for. This procedure reshapes the gum line to...",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
      date: "December 10, 2024",
      title: "Clear Aligners vs. Braces: Which Treatment is Right for Your Smile?",
      excerpt: "Deciding between clear aligners and traditional braces can be tough. Both offer excellent orthodontic results, but differ in comfort, visibility, and lifestyle...",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
      date: "December 10, 2024",
      title: "Top 5 Benefits Of Dental Implants: A Permanent Solution For Missing Teeth",
      excerpt: "Dental implants are widely considered the gold standard for tooth replacement. They look, feel, and function just like natural teeth, offering a permanent solution...",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
      date: "December 10, 2024",
      title: "The Ultimate Guide To Cosmetic Dentistry: Transform Your Smile Today",
      excerpt: "Cosmetic dentistry has evolved to offer incredible, life-changing procedures. From bonding to veneers, discover how you can completely transform your smile's...",
    },
  ];

  const featured = posts[0];

  return (
    <>
      <Header />

      <main style={{ flex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden", backgroundColor: "#ffffff" }}>

        {/* Section 1: Featured Post Banner (2-column desktop, responsive) */}
        <section className="blog-featured-section" style={{ padding: "140px 0 60px 0", backgroundColor: "#ffffff" }}>
          <div className="service-container">

            <div className="blog-featured-layout" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "50px", alignItems: "center" }}>

              {/* Featured Left: Image */}
              <div
                className="blog-featured-image-wrapper"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "480px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.05)"
                }}
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Featured Right: Typography */}
              <div className="blog-featured-content" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <span className="blog-date" style={{ fontSize: "1rem", color: "#94a3b8", fontWeight: "500" }}>
                  {featured.date}
                </span>

                <h1
                  className="blog-featured-title"
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    color: "#1e3a44",
                    margin: 0,
                    fontFamily: "var(--font-serif)",
                    lineHeight: "1.2",
                    letterSpacing: "-0.01em"
                  }}
                >
                  Teeth Whitening: The Best Professional Options For A...
                </h1>

                <p
                  className="blog-featured-excerpt"
                  style={{
                    fontSize: "1.1rem",
                    color: "#64748b",
                    lineHeight: "1.7",
                    margin: 0
                  }}
                >
                  {featured.excerpt}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Section 2: Remaining Blog Posts Grid (3-column layout) */}
        <section className="blog-grid-section" style={{ padding: "30px 0 100px 0", backgroundColor: "#ffffff" }}>
          <div className="service-container">

            <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px 30px" }}>
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="blog-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    cursor: "pointer"
                  }}
                >
                  {/* Card Image */}
                  <div
                    className="blog-card-image-wrapper"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "260px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.04)"
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>

                  {/* Card Content */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span className="blog-date" style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
                      {post.date}
                    </span>

                    <h2
                      className="blog-card-title"
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: "800",
                        color: "#1e3a44",
                        margin: 0,
                        lineHeight: "1.35",
                        fontFamily: "var(--font-serif)"
                      }}
                    >
                      {post.title}
                    </h2>

                    <p
                      className="blog-card-excerpt"
                      style={{
                        fontSize: "0.95rem",
                        color: "#64748b",
                        lineHeight: "1.6",
                        margin: 0
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
