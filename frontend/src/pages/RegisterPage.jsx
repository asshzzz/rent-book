import React, { useState } from "react";
import Navbar from "../components/Navbar";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
    avatar: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      setFormData({ ...formData, avatar: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const output = {
      ...formData,
      avatar: formData.avatar ? formData.avatar.name : null,
    };
    console.log("Register JSON:", JSON.stringify(output));
    alert("Registration simulated! Check console for JSON data.");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]">
        <form
          onSubmit={handleRegister}
          className="bg-white p-8 rounded-2xl shadow-lg w-96"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">
            Sign Up
          </h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-3 mb-4 border rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg"
            onChange={handleChange}
            required
          />
          <select
            name="role"
            className="w-full p-3 mb-4 border rounded-lg"
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="file"
            name="avatar"
            accept="image/*"
            className="w-full p-3 mb-4 border rounded-lg"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
