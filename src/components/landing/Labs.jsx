// src/components/Labs.jsx
import React from "react";
import BackgroundAnimation from "../../animations/BackgroundAnimation";
import { FaMapMarkerAlt } from "react-icons/fa";

const Labs = () => {
  return (
    <div id="labs" className="relative py-16 bg-gradient-to-r from-blue-50 via-white to-blue-100 text-center">
      <BackgroundAnimation sectionId="labs" />
      <div className="z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-blue-600 font-cursive mb-8">Find Our Labs</h2>
        <p className="text-2xl text-gray-700 font-sans mb-12">
          Locate our DNA sequencing labs near you and access personalized healthcare solutions tailored to your needs.
        </p>
        <div className="relative h-96 w-full rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086206!2d144.95373521531806!3d-37.81627997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777fdfe6e1e74b!2sGoogle!5e0!3m2!1sen!2s!4v1694898437854"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Labs;
