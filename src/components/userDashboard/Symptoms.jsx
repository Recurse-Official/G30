import React, { useState } from "react";
import axios from "axios";



const Symptoms = () => {

  
  const symptomsList = [
    "Chest pain", "Pain in arm or jaw", "Shortness of breath", "Wheezing",
    "Coughing", "Excessive thirst", "Frequent urination", "Fatigue",
    "Weight loss", "Loss of appetite", "Dizziness", "Confusion",
    "Disorientation", "Vision problems", "Blurred vision", "Severe headache",
    "Nausea", "Slow healing of wounds", "Dry cough", "Skin dimpling",
    "Nipple discharge", "Breast pain", "Lump in the breast", "Hoarseness",
    "Tremors"
  ];

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState(false);
  const [drink, setDrink] = useState('');
  const [smoke, setSmoke] = useState('');
  const [diet, setDiet] = useState('');
  const [sleepDuration, setSleepDuration] = useState('');
  const [exerciseHours, setExerciseHours] = useState('');
  const [fileUrl, setFileUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSymptoms([...selectedSymptoms, value]);
    } else {
      setSelectedSymptoms(selectedSymptoms.filter((symptom) => symptom !== value));
    }
  };

  const handleSubmit = async () => {
    if (cityError || !city) {
      alert("Please enter a valid city.");
      return;
    }

    const requestData = {
      symptoms: selectedSymptoms,
      city,
      drink,
      smoke,
      diet,
      sleepDuration,
      exerciseHours
    };

    setLoading(true);  // Show loading indicator

    try {
      const response = await axios.post("http://localhost:5000/diagnosis", requestData);

      if (response.data.file_url) {
        setFileUrl(response.data.file_url);
      } else {
        alert("PDF generation failed.");
      }
    } catch (error) {
      alert("An error occurred while processing your request.");
      console.error(error);
    } finally {
      setLoading(false);  // Hide loading indicator
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'personalized_health_report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Select Symptoms</h2>

      {/* Symptoms Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Symptoms</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {symptomsList.map((symptom, index) => (
            <label key={index} className="flex items-center">
              <input
                type="checkbox"
                value={symptom}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span className="text-gray-700">{symptom}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Lifestyle Questions */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Lifestyle Questions</h3>

        {/* Drink */}
        <div className="mb-4">
          <label className="block text-gray-700">Drink</label>
          <select
            value={drink}
            onChange={(e) => setDrink(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Never">Never</option>
            <option value="Occasional">Occasional</option>
            <option value="Frequently">Frequently</option>
          </select>
        </div>

        {/* Smoke */}
        <div className="mb-4">
          <label className="block text-gray-700">Smoke</label>
          <select
            value={smoke}
            onChange={(e) => setSmoke(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Never">Never</option>
            <option value="Occasional">Occasional</option>
            <option value="Frequently">Frequently</option>
          </select>
        </div>

        {/* Diet */}
        <div className="mb-4">
          <label className="block text-gray-700">Diet/Nutrition</label>
          <select
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Healthy">Healthy</option>
            <option value="Balanced">Balanced</option>
            <option value="Junk">Junk</option>
          </select>
        </div>
      </div>

      {/* Sleep and Exercise */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Sleep and Exercise</h3>

        <div className="mb-4">
          <label className="block text-gray-700">Sleep Duration (hours per night)</label>
          <input
            type="number"
            value={sleepDuration}
            onChange={(e) => setSleepDuration(e.target.value)}
            placeholder="Enter sleep duration"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Exercise (hours per week)</label>
          <input
            type="number"
            value={exerciseHours}
            onChange={(e) => setExerciseHours(e.target.value)}
            placeholder="Enter exercise hours"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default Symptoms;
