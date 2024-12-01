import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../auth0/LogoutButton";
import LoginButton from "../auth0/LoginButton";

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

 

  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Dashboard Panel</h1>

      {isAuthenticated && user ? (
        <div className="flex items-center space-x-4">
          {user.picture && (
            <img
              src={user.picture}
              alt={user.name || "User"}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          )}
          <div>
            <h2 className="text-sm font-medium">{user.name || "User"}</h2>
            <p className="text-xs">{user.email || "No Email Available"}</p>
          </div>
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </nav>
  );
};

export default Navbar;
