import React from "react";
import Header from "./components/Header";
import HomeHero from "./components/HomeHero";
import HomeStudent from "./components/HomeStudent";
import HomeServices from "./components/HomeServices";
import HomeStrengths from "./components/HomeStrengths";
import HomeTestimonials from "./components/HomeTestimonials";
import HomeCTA from "./components/HomeCTA";
import Footer from "./components/Footer";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "MAMA Dental Clinic & Orthodontic Centre | Pazhanji, Thrissur",
  description: "MAMA Dental Clinic & Orthodontic Centre in Pazhanji, Thrissur offers comprehensive dental and orthodontic care including smile design, clear aligners, veneers and dental implants.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header />
      <main
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        <HomeHero />
        <HomeServices />
        <HomeStrengths />
        <HomeTestimonials />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
