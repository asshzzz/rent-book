import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./user/UserDashboard";
import AddRequest from "./user/AddRequest";
import MyRequests from "./user/MyRequest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
         <Route path="/userdashboard" element={<UserDashboard />} />
         <Route path="/addrequest" element={<AddRequest />} />
        <Route path="/myrequests" element={<MyRequests />} />
      </Routes>
    </Router>
  );
}

export default App;
