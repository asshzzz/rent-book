import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h2 className="text-4xl font-bold mb-8">Welcome to RideShare</h2>
        <div className="flex space-x-8">
          <Link to="/login">
            <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-64 text-center hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Login</h3>
              <p>Access your account and start your ride.</p>
            </div>
          </Link>
          <Link to="/register">
            <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-64 text-center hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p>Join us and start your journey today.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
