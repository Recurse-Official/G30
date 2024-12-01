import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaListAlt, FaUserMd, FaFileAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-050c9c text-white min-h-screen flex flex-col">
      <h2 className="text-2xl font-bold text-center py-6">Dashboard</h2>
      <nav className="flex-grow">
        <ul className="space-y-4 px-6">
          <li>
            <Link className="flex items-center gap-4 hover:text-a7e6ff transition" to="/personal-details">
              <FaUser /> Personal Details
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-4 hover:text-a7e6ff transition" to="/book-appointment">
              <FaCalendarAlt /> Book Appointment
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-4 hover:text-a7e6ff transition" to="/symptoms">
              <FaListAlt /> Predictive Diagnosis
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-4 hover:text-a7e6ff transition" to="/history">
              <FaFileAlt /> History
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-4 hover:text-a7e6ff transition" to="/connect-doctors">
              <FaUserMd /> Connect Doctors
            </Link>
          </li>
        </ul>
      </nav>
      <footer className="text-center py-4 text-sm text-gray-400">
        &copy; 2024 OmniFlux
      </footer>
    </div>
  );
};

export default Sidebar;
