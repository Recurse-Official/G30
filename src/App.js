import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { user, isAuthenticated } = useAuth0();

  // const ProtectedRoute = ({ children }) => {
  //   if (!isAuthenticated || user?.name !== "omniflux") {
  //     alert("Only Admins can Login");
  //     return <Navigate to="/" />;
  //   }
  //   return children;
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route
          path="/admin"
          element={
            // <ProtectedRoute>
              <AdminDashboard />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
