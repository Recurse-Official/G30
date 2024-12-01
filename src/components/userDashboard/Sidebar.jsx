import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-600 text-white flex flex-col min-h-screen shadow-lg">
      <h2 className="text-2xl font-bold p-6 text-center border-b border-blue-700">
        Dashboard
      </h2>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li>
            <Link
              to="/dashboard/personal-details"
              className="block px-4 py-2 rounded hover:bg-blue-500"
            >
              Personal Details
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/book-appointment"
              className="block px-4 py-2 rounded hover:bg-blue-500"
            >
              Book Appointment
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/symptoms"
              className="block px-4 py-2 rounded hover:bg-blue-500"
            >
              Symptoms
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/connect-doctors"
              className="block px-4 py-2 rounded hover:bg-blue-500"
            >
              Connect Doctors
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/history"
              className="block px-4 py-2 rounded hover:bg-blue-500"
            >
              History
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
