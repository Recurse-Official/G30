import React from "react";
import Sidebar from "../components/userDashboard/Sidebar";
import Navbar from "../components/userDashboard/Navbar";
import PersonalDetails from "../components/userDashboard/PersonalDetails";
// import BookAppointment from "../components/userDashboard/BookAppointment";
// import Symptoms from "../components/userDashboard/Symptoms";
// import ConnectDoctors from "../components/userDashboard/ConnectDoctors";
// import History from "../components/userDashboard/History";
import Footer from "../components/userDashboard/Footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4">
          {/* Example Components - Replace as needed */}
          <PersonalDetails />
          {/* Uncomment other components to use */}
          {/* <BookAppointment /> */}
          {/* <Symptoms /> */}
          {/* <ConnectDoctors /> */}
          {/* <History /> */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
