import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-teal-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">RideShare - User</h1>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
          <Link to="/add-request" className="hover:text-gray-200">Add Request</Link>
          <Link to="/my-requests" className="hover:text-gray-200">My Requests</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h2 className="text-3xl font-bold text-teal-600 mb-8">User Dashboard</h2>
        <div className="flex space-x-8">
          <Link to="/add-request">
            <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-64 text-center hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Add Request</h3>
              <p>Create a new request for a ride or support.</p>
            </div>
          </Link>
          <Link to="/my-requests">
            <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-64 text-center hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">My Requests</h3>
              <p>View all your submitted requests.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
