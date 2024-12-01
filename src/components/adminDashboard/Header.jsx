import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center bg-blue-600 p-4 shadow-md z-10">
      <div className="text-white text-2xl font-bold">Admin Dashboard</div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Logout
      </button>
    </header>
  );
};

export default Header;
