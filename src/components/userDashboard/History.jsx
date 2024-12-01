import React, { useState, useEffect } from "react";
import axios from "axios";

const History = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reports");
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
        alert("Failed to fetch reports. Please try again.");
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">History</h2>
      <ul className="space-y-4">
        {reports.map((report) => (
          <li
            key={report.id}
            className="p-4 border rounded-lg bg-gray-100 flex justify-between"
          >
            <div>
              <h3 className="text-lg font-medium">{report.name}</h3>
              <p className="text-sm text-gray-600">
                Date: {new Date(report.date).toLocaleDateString()}
              </p>
            </div>
            <a
              href={report.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
