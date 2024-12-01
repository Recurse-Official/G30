import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const PersonalDetails = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
    allergies: "",
    illness: "",
    medication: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  // Fetch user details based on email if already exists
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`/senddetails/${userInfo.email}`);
      if (response.data.success) {
        const user = response.data.data.find(
          (user) => user.email === userInfo.email
        );

        if (user) {
          // Ensure all required fields are populated, even if missing in the response
          const updatedUserInfo = {
            name: user.name || "",
            mobile: user.mobile || "",
            email: user.email || "",
            city: user.city || "",
            age: user.age || "",
            weight: user.weight || "",
            height: user.height || "",
            gender: user.gender || "",
            allergies: user.allergies || "",
            illness: user.illness || "",
            medication: user.medication || "",
          };

          setUserInfo(updatedUserInfo);
          setIsEditing(false);
        }
      }
    } catch (error) {
      console.error("Error fetching user details: ", error);
    }
  };

  // Save or update details in the database
  const handleSave = async () => {
    try {
      const response = await axios.post("/personeldetail", userInfo);
      console.log("Response: ", response.data);
      alert("Details saved successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving details: ", error);
      alert("Failed to save details. Please try again.");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Automatically fetch details when the component is loaded if email is provided
  useEffect(() => {
    if (userInfo.email) fetchUserDetails();
  }, [userInfo.email]);

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
                  name="mobile"
                  value={userInfo.mobile}
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
                name="illness"
                value={userInfo.illness}
                onChange={handleInputChange}
                placeholder="Mention any past illnesses"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Current Medication</label>
              <textarea
                name="medication"
                value={userInfo.medication}
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
            {/* Render user details */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
