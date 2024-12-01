// src/animations/BackgroundAnimation.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackgroundAnimation = ({ sectionId }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, [sectionId]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {[...Array(20)].map((_, row) =>
        [...Array(20)].map((_, col) => {
          const distance = Math.sqrt(
            Math.pow(mousePosition.x - (col * 50 + 25), 2) +
              Math.pow(mousePosition.y - (row * 50 + 25), 2)
          );
          const opacity = distance < 150 ? 1 - distance / 150 : 0;

          return (
            <motion.div
              key={`${sectionId}-${row}-${col}`}
              className="absolute w-2 h-2 bg-blue-300 rounded-full"
              style={{
                left: col * 50 + "px",
                top: row * 50 + "px",
                opacity,
              }}
            />
          );
        })
      )}
    </div>
  );
};

export default BackgroundAnimation;
