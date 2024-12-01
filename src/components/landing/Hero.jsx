// src/components/Hero.jsx
import React from "react";
import { FaHeartbeat, FaStethoscope, FaPills, FaUserMd } from "react-icons/fa";
import BackgroundAnimation from "../../animations/BackgroundAnimation";
import LoginButton from "../auth0/LoginButton";
import LogoutButton from "../auth0/LogoutButton";


const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
      <BackgroundAnimation sectionId="hero" />
      <div className="text-center z-10 max-w-5xl mx-auto px-6">
        {/* OmniFlux Logo */}
        <div className="mb-8">
          <img
            src="../../assets/omniflux-logo.png"
            alt="OmniFlux Logo"
            className="mx-auto"
            style={{ width: "150px", height: "auto" }}
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Revolutionizing Healthcare with <span className="text-blue-600 font-cursive">OmniFlux</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-8">
          Personalized, AI-driven solutions for{" "}
          <span className="text-blue-600 font-cursive">a healthier tomorrow</span>.
        </p>
        
        {/* Call-to-Action Button */}
        <LoginButton />
        <LogoutButton/>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FaHeartbeat className="absolute top-10 left-20 text-blue-500 text-6xl" />
        <FaPills className="absolute bottom-10 left-10 text-blue-400 text-5xl" />
        <FaStethoscope className="absolute top-10 right-20 text-blue-500 text-6xl" />
        <FaUserMd className="absolute bottom-10 right-10 text-blue-400 text-5xl" />
      </div>
    </section>
  );
};

export default Hero;
