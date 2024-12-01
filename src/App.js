import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const {user, isAuthenticated} = useAuth0();

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated || user?.name !== "Vrishank Warrier") {
      alert("Only Admins can Login");
      return <Navigate to="/dashboard" />;
    }
    return children;
  };
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>} />
    </Routes>
  );
};

export default App;
