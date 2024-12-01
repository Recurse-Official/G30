import React from "react";
import Hero from "../components/landing/Hero";
import AboutUs from "../components/landing/AboutUs";
import Labs from "../components/landing/Labs";
import ContactUs from "../components/landing/ContactUs";
import Footer from "../components/landing/Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Labs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
