import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const Admin = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/sendalldetails"); // Replace with actual API endpoint
      setDataList(response.data.data || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`/sendrejectmail/${id}`);
      fetchData();
      console.log("mail sent: ", id)
    } catch (error) {
      console.error("Failed to rejection email:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.post(`/sendapprovemail/${id}`);
      fetchData();
      console.log("mail sent: ", id)
    } catch (error) {
      console.error("Failed to send approval email:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen pt-20">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Admin Panel</h1>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Mobile</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Appointment Status</th>
              <th className="p-4 text-left">Actions</th>
              <th className="p-4 text-left">SNP File</th>
            </tr>
          </thead>
          <tbody>
            {dataList.length > 0 ? (
              dataList.map((record) => (
                <tr key={record._id} className="even:bg-gray-100">
                  <td className="p-4">{record.name}</td>
                  <td className="p-4">{record.email}</td>
                  <td className="p-4">{record.mobile}</td>
                  <td className="p-4">{record.date || "N/A"}</td>
                  <td className="p-4">{record.time || "N/A"}</td>
                  <td className="p-4">{record.status || "Pending"}</td>
                  <td className="p-4">
                    <button 
                      onClick={() => handleApprove(record.email)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(record.email)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2"
                    >
                      Reject
                    </button>
                    
                  </td>
                  <td className="p-4">
                    <input type="file" />Upload SNP File
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
