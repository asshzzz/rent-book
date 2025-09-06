import React, { useState } from "react";
import { Link } from "react-router-dom";


const MyRequests = () => {
  // Simulated request data
  const [requests] = useState([
    { id: 1, title: "Flat Tire", description: "Need maintenance", category: "Maintenance" },
    { id: 2, title: "Booking Issue", description: "App crashed during booking", category: "Complaint" },
  ]);

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

      {/* Requests List */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">My Requests</h2>
        <div className="grid gap-4">
          {requests.length > 0 ? (
            requests.map((req) => (
              <div
                key={req.id}
                className="bg-white p-6 rounded-xl shadow-md border"
              >
                <h3 className="text-xl font-semibold">{req.title}</h3>
                <p className="text-gray-600">{req.description}</p>
                <span className="text-sm text-teal-700 font-medium">
                  Category: {req.category}
                </span>
              </div>
            ))
          ) : (
            <p>No requests found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRequests;