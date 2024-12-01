import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaStethoscope, FaPills, FaUserMd } from "react-icons/fa";
import omnifluxLogo from "../../assets/omniflux-logo.png";
import LoginButton from "../auth0/LoginButton";
import LogoutButton from "../auth0/LogoutButton";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gridSize] = useState(10); // Number of grid items per row/column

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateOpacity = (gridX, gridY) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - gridX, 2) + Math.pow(mousePosition.y - gridY, 2)
    );
    return distance < 200 ? 1 - distance / 200 : 0;
  };

  const gridItems = [];
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const gridItemSize = Math.min(screenWidth, screenHeight) / gridSize;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const gridX = j * gridItemSize + gridItemSize / 2;
      const gridY = i * gridItemSize + gridItemSize / 2;

      gridItems.push(
        <motion.div
          key={`${i}-${j}`}
          className="absolute bg-blue-500 rounded-full"
          style={{
            width: "8px",
            height: "8px",
            left: `${gridX}px`,
            top: `${gridY}px`,
            opacity: calculateOpacity(gridX, gridY),
          }}
          animate={{
            scale: [0.9, 1.1, 0.9],
            transition: { duration: 2, repeat: Infinity },
          }}
        />
      );
    }
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 overflow-hidden">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">{gridItems}</div>

      {/* Hero Content */}
      <div className="text-center z-10 max-w-5xl mx-auto px-6">
        {/* OmniFlux Logo */}
        <div className="mb-8">
          <img
            src={omnifluxLogo}
            alt="OmniFlux Logo"
            className="mx-auto"
            style={{ width: "150px", height: "auto" }}
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Revolutionizing Healthcare with{" "}
          <span className="text-blue-600 font-cursive">OmniFlux</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-8">
          Personalized, AI-driven solutions for{" "}
          <span className="text-blue-600 font-cursive">a healthier tomorrow</span>.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="space-x-4">
          <LoginButton />
          <LogoutButton />
        </div>
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
