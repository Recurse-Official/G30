import React from "react";
import omnifluxLogo from "../../assets/omniflux-logo-cropped.png"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center bg-blue-600 p-4 shadow-md z-10">
      <div className="flex items-center space-x-4">
        <img
          src={omnifluxLogo}
          alt="Omniflux Logo"
          className="w-12 h-12" // Adjust logo size
        />
        <h2 className="text-2xl text-white font-bold">Omniflux</h2>
        </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Logout
      </button>
    </header>
  );
};

export default Header;
