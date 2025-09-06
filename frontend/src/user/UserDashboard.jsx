import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-teal-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">RideShare - User</h1>
      </nav>
      {/* Content */}
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h2 className="text-3xl font-bold text-teal-600 mb-8">User Dashboard</h2>
        <div className="flex space-x-8">
          <Link to="/addrequest">
            <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-64 text-center hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Add Request</h3>
              <p>Create a new request for a ride or support.</p>
            </div>
          </Link>
          <Link to="/myrequests">
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
