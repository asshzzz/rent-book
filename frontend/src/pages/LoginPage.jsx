import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login JSON:", JSON.stringify(formData));
    alert("Login simulated! Check console for JSON data.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-600">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-96 transform transition hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to continue your journey 🚲
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Login
          </button>
        </form>

        {/* Signup link */}
        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-teal-600 font-semibold hover:underline"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
