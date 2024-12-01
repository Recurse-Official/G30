import React from "react";
import { FaHeartbeat, FaStethoscope, FaPills, FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";
import BackgroundAnimation from "../../animations/BackgroundAnimation";
import omnifluxLogo from "../../assets/omniflux-logo-cropped.png";
import LoginButton from "../auth0/LoginButton";
import LogoutButton from "../auth0/LogoutButton";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, 10, 0], // Floating effect
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
      {/* Background Animation */}
      <BackgroundAnimation sectionId="hero" />

      <div className="text-center z-10 max-w-5xl mx-auto px-6">
        {/* OmniFlux Logo */}
        <div className="mb-8">
          <img
            src={omnifluxLogo}
            alt="OmniFlux Logo"
            className="mx-auto"
            style={{ width: "200px", height: "auto" }} // Adjusted size for prominence
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Revolutionizing Healthcare
        </h1>

        {/* Additional Space Between Headline and Subheadline */}
        <div className="mb-6"></div>

        <h2 className="text-5xl md:text-6xl font-bold text-blue-600 font-cursive">
          OmniFlux
        </h2>

        {/* Subtext */}
        <p className="text-2xl md:text-3xl text-gray-700 mt-6">
          Personalized, AI-driven solutions for{" "}
          <span className="text-blue-600 font-cursive">a healthier tomorrow</span>.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-12 flex justify-center gap-8">
          {/* Login Button */}
          <LoginButton>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition duration-300 ease-in-out"
            >
              Login
            </button>
          </LoginButton>

          {/* Logout Button */}
          <LogoutButton>
            <button
              className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 transition duration-300 ease-in-out"
            >
              Logout
            </button>
          </LogoutButton>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-10 left-20 text-blue-500 text-6xl"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <FaHeartbeat />
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 text-blue-400 text-5xl"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <FaPills />
        </motion.div>
        <motion.div
          className="absolute top-10 right-20 text-blue-500 text-6xl"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <FaStethoscope />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-blue-400 text-5xl"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <FaUserMd />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
