// src/components/AboutUs.jsx
import React from "react";
import { FaBullseye } from "react-icons/fa";
import BackgroundAnimation from "../../animations/BackgroundAnimation";
import indiandnaresearch from "../../assets/indian-dna-research.png";
import dnastrands from "../../assets/dna-strands.png"

const AboutUs = () => {
  const handleMouseMove = (e, imgRef) => {
    const { clientX: x, clientY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = imgRef.current;

    const offsetX = ((x - width / 2) / width) * 10; // Adjust intensity
    const offsetY = ((y - height / 2) / height) * 10;

    imgRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };

  const resetTransform = (imgRef) => {
    imgRef.current.style.transform = "translate(0, 0)";
  };

  const firstImageRef = React.useRef(null);
  const secondImageRef = React.useRef(null);

  return (
    <section id="about-us" className="relative py-16 bg-gradient-to-b from-white to-blue-50 text-center">
      <BackgroundAnimation sectionId="about-us" className="-z-100"/>
      <div className="z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-blue-600 font-cursive mb-8">About Us</h2>
        <p className="text-2xl text-gray-700 mb-12">
          We are revolutionizing healthcare with <span className="font-cursive">cutting-edge technology</span> and personalized solutions.
        </p>

        {/* First Row: First Image and Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image Section */}
          <div
            className="flex justify-center"
            onMouseMove={(e) => handleMouseMove(e, firstImageRef)}
            onMouseLeave={() => resetTransform(firstImageRef)}
          >
            <img
              ref={firstImageRef}
              src={indiandnaresearch}
              alt="Indian DNA Research"
              className="rounded-lg shadow-lg transition-transform duration-200"
              style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "500px" }}
            />
          </div>
          {/* Text Section */}
          <div className="text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaBullseye className="text-blue-500" />
              <span className="font-cursive">Our Vision</span>
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              At OmniFlux, we integrate genomics, lifestyle, and AI-driven insights for{" "}
              <span className="font-cursive">actionable, data-driven healthcare solutions</span>. By personalizing care, we empower individuals to achieve optimal health outcomes.
            </p>
          </div>
        </div>

        {/* Second Row: Second Image and Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-left order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaBullseye className="text-blue-500" />
              <span className="font-cursive">Our Commitment</span>
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our team is dedicated to pushing the boundaries of healthcare innovation. Through collaboration with global experts, we aim to redefine the standard of personalized health solutions and bridge the gap between science and well-being.
            </p>
          </div>
          {/* Image Section */}
          <div
            className="flex justify-center order-1 lg:order-2"
            onMouseMove={(e) => handleMouseMove(e, secondImageRef)}
            onMouseLeave={() => resetTransform(secondImageRef)}
          >
            <img
              ref={secondImageRef}
              src={dnastrands}
              alt="DNA Strands"
              className="rounded-lg shadow-lg transition-transform duration-200"
              style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
