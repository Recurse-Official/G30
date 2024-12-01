// src/components/ContactUs.jsx
import React from "react";
import BackgroundAnimation from "../../animations/BackgroundAnimation";

const ContactUs = () => {
  return (
    <section id="contact-us" className="relative py-16 bg-gradient-to-b from-blue-50 to-blue-100 text-center">
      <BackgroundAnimation sectionId="contact-us" className="-z-0"/>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-blue-600 font-cursive mb-8">Contact Us</h2>
        <p className="text-2xl text-gray-700 mb-12">
          Have questions or need assistance? Reach out to us today!
        </p>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
