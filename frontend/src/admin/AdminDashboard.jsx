import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-600">Admin Dashboard</h1>
        <div className="space-x-6">
          <Link to="/admin" className="text-gray-700 font-medium hover:text-purple-600">Dashboard</Link>
          <Link to="/get-requests" className="text-gray-700 font-medium hover:text-purple-600">Get Requests</Link>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-[500px] text-center transform transition hover:scale-105">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Welcome Admin 🎉</h2>
          <p className="text-gray-600 mb-6">
            Manage requests, monitor activity, and keep everything on track 🚀
          </p>
          <Link
            to="/get-requests"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            View All Requests
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
