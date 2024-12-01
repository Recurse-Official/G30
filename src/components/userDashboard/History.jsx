import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("/api/reports");
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Health Report History</h2>
      <ul className="space-y-4">
        {reports.map((report) => (
          <li
            key={report.id}
            className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{report.name}</h3>
                <p className="text-gray-600">{report.date}</p>
              </div>
              <a
                href={report.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
