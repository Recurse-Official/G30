import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";


const PersonalDetails = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
    allergies: "",
    pastIllnesses: "",
    currentMedication: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div
      className="min-h-screen p-6 bg-white flex flex-col"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Personal Details</h2>
      <div className="flex-grow">
        {isEditing ? (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={userInfo.age}
                  onChange={handleInputChange}
                  placeholder="Enter your age"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={userInfo.weight}
                  onChange={handleInputChange}
                  placeholder="Enter your weight in kg"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={userInfo.height}
                  onChange={handleInputChange}
                  placeholder="Enter your height in cm"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={userInfo.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
              <div>
                <label className="block text-gray-700">Gender (M/F)</label>
                <input
                  type="text"
                  name="gender"
                  value={userInfo.gender}
                  onChange={handleInputChange}
                  placeholder="Enter your gender (M/F)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Allergies</label>
              <input
                type="text"
                name="allergies"
                value={userInfo.allergies}
                onChange={handleInputChange}
                placeholder="List any allergies (if any)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Past Illnesses</label>
              <textarea
                name="pastIllnesses"
                value={userInfo.pastIllnesses}
                onChange={handleInputChange}
                placeholder="Mention any past illnesses"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Current Medication</label>
              <textarea
                name="currentMedication"
                value={userInfo.currentMedication}
                onChange={handleInputChange}
                placeholder="Mention any ongoing medication"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              ></textarea>
            </div>
            <button
              type="button"
              onClick={handleSave}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Save
            </button>
          </form>
        ) : (
          <div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-2"><strong>Name:</strong> {userInfo.name}</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Phone:</strong> {userInfo.phone}</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> {userInfo.email}</p>
              <p className="text-lg text-gray-700 mb-2"><strong>City:</strong> {userInfo.city}</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Age:</strong> {userInfo.age}</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Weight:</strong> {userInfo.weight} kg</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Height:</strong> {userInfo.height} cm</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Gender:</strong> {userInfo.gender}</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Allergies:</strong> {userInfo.allergies}</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Past Illnesses:</strong> {userInfo.pastIllnesses}</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Current Medication:</strong> {userInfo.currentMedication}</p>
            </div>
            <button
              type="button"
              onClick={handleEdit}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 mt-4 transition"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
