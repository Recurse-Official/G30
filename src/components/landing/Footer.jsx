// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">OmniFlux</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionizing healthcare with AI-driven solutions.
            </p>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center gap-2">
                <FaPhone className="text-blue-500" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500" />
                info@omniflux.com
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" />
                123 OmniFlux Ave, NY
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} OmniFlux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
