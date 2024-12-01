import React from "react";
import { FaStethoscope, FaMicroscope, FaHeartbeat, FaDna } from "react-icons/fa";
import BackgroundAnimation from "../../animations/BackgroundAnimation";

const services = [
  {
    id: 1,
    icon: <FaHeartbeat className="text-4xl text-blue-500" />,
    title: "Health Risk Analysis",
    description:
      "Comprehensive insights into your health using AI-driven analytics to predict potential risks.",
  },
  {
    id: 2,
    icon: <FaDna className="text-4xl text-blue-500" />,
    title: "Genetic Profiling",
    description:
      "Personalized DNA analysis to provide insights into hereditary health conditions.",
  },
  {
    id: 3,
    icon: <FaMicroscope className="text-4xl text-blue-500" />,
    title: "Advanced Diagnostics",
    description:
      "Access cutting-edge diagnostic tools for precise and timely healthcare solutions.",
  },
  {
    id: 4,
    icon: <FaStethoscope className="text-4xl text-blue-500" />,
    title: "Doctor Consultations",
    description:
      "Connect with experienced healthcare professionals for personalized consultations.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-16 bg-gradient-to-b from-blue-100 to-white text-center overflow-hidden"
    >
      {/* Dynamic Grid Overlay */}
      <BackgroundAnimation sectionId="services" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our <span className="text-blue-600 font-cursive">Services</span>
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Empowering healthcare through innovation and precision. Explore what
          we offer to help you achieve your health goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
