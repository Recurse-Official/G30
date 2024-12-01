import React, { useState } from "react";
import axios from "axios";

const BookAppointment = () => {
  const [appointment, setAppointment] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/appointments", appointment);
      alert("Appointment booked successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to book appointment.");
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold text-primary-400 mb-6">
        Book an Appointment
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-primary-100 p-6 rounded-lg shadow-md space-y-6"
      >
        <div>
          <label className="block text-primary-400 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={appointment.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-primary-400 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={appointment.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-primary-400 font-semibold mb-2">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={appointment.phone}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="block text-primary-400 font-semibold mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
        </div>
        <div>
          <label className="block text-primary-400 font-semibold mb-2">
            Time
          </label>
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
        </div>
        <div>
          <label className="block text-primary-400 font-semibold mb-2">
            Lab Location
          </label>
          <input
            type="text"
            name="location"
            value={appointment.location}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
            placeholder="Enter lab location"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary-300 text-white py-3 rounded-lg hover:bg-primary-400 transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
