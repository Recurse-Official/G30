import React, { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Mehta", specialty: "Coronary Artery Disease" },
  { id: 2, name: "Dr. Iyer", specialty: "Ischemic Stroke" },
  { id: 3, name: "Dr. Nair", specialty: "Type 1 Diabetes" },
  { id: 4, name: "Dr. Chatterjee", specialty: "Type 2 Diabetes" },
  { id: 5, name: "Dr. Reddy", specialty: "Pulmonary Fibrosis" },
  { id: 6, name: "Dr. Desai", specialty: "Asthma" },
  { id: 7, name: "Dr. Singh", specialty: "Breast Cancer" },
  { id: 8, name: "Dr. Bhattacharya", specialty: "Lung Cancer" },
  { id: 9, name: "Dr. Patil", specialty: "Parkinson's Disease" },
];

const ConnectDoctors = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Connect with Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctors) => (
          <div key={doctors.id} className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">{doctors.name}</h3>
            <p className="text-gray-600">Specialization: {doctors.specialization}</p>
            <p className="text-gray-600">Email: {doctors.email}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectDoctors;
