import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddRequest = () => {
  const [requestData, setRequestData] = useState({
    title: "",
    description: "",
    category: "General",
  });

  const handleChange = (e) => {
    setRequestData({ ...requestData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Request JSON:", JSON.stringify(requestData));
    alert("Request added! Check console for JSON data.");
  };

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

      {/* Form */}
      <div className="flex justify-center items-center h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-96"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">
            Add Request
          </h2>
          <input
            type="text"
            name="title"
            placeholder="Request Title"
            className="w-full p-3 mb-4 border rounded-lg"
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Request Description"
            className="w-full p-3 mb-4 border rounded-lg"
            onChange={handleChange}
            required
          ></textarea>
          <select
            name="category"
            className="w-full p-3 mb-4 border rounded-lg"
            onChange={handleChange}
          >
            <option value="General">General</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Complaint">Complaint</option>
          </select>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRequest;