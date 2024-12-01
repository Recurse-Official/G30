import React, { useState } from "react";

const doctorsData = [
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
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookAppointment = (doctorName) => {
    alert(`Appointment booked with ${doctorName}`);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Connect with Doctors</h2>

      {/* Search Field */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by Disease"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{doctor.name}</h3>
              <p className="text-gray-700 mb-4">{doctor.specialty}</p>
              <button
                onClick={() => handleBookAppointment(doctor.name)}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-full"
              >
                Book Appointment
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <p className="text-gray-500">No doctors found for your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectDoctors;
