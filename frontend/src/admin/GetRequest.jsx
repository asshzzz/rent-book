import React from "react";
import { Link } from "react-router-dom";

const GetRequest = () => {
  // Dummy requests data
  const requests = [
    { id: 1, name: "Ashish Kumar", type: "Pickup", status: "Pending" },
    { id: 2, name: "Riya Sharma", type: "Delivery", status: "Completed" },
    { id: 3, name: "Mohit Verma", type: "Recycling", status: "In Progress" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Admin Requests</h1>
        <div className="space-x-6">
          <Link to="/admindashboard" className="text-gray-700 font-medium hover:text-green-600">Dashboard</Link>
          <Link to="/getrequests" className="text-gray-700 font-medium hover:text-green-600">Get Requests</Link>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Logout
          </button>
        </div>
      </nav>

      {/* Requests Table */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
            All User Requests 📋
          </h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-100 text-green-700">
                <th className="p-3 border">ID</th>
                <th className="p-3 border">User</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr
                  key={req.id}
                  className="text-center hover:bg-green-50 transition"
                >
                  <td className="p-3 border">{req.id}</td>
                  <td className="p-3 border">{req.name}</td>
                  <td className="p-3 border">{req.type}</td>
                  <td className="p-3 border">{req.status}</td>
                  <td className="p-3 border">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetRequest;
