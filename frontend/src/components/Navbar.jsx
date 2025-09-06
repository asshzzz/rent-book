import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">RideShare</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/login" className="hover:text-gray-200">Login</Link>
        <Link to="/register" className="hover:text-gray-200">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
