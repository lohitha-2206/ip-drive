// src/pages/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("loggedInUsername");
    if (!storedUsername) {
      navigate("/login"); // Redirect if not logged in
    }
    setUsername(storedUsername || "User");
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem("loggedInUsername"); // ✅ End session
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo">IP Drive</div>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li onClick={() => navigate("/internships")}>Internships</li>
          <li onClick={() => navigate("/hiring")}>Hiring</li>
          <li onClick={() => navigate("/calendar")}>Calendar</li>
          <li onClick={() => navigate("/resources")}>Resources</li>
          <li onClick={() => navigate("/quiz")}>AI Quiz</li>
          <li onClick={() => navigate("/saved")}>Saved</li>
        </ul>
        <div className="user-actions">
          <span>{username}</span>
          <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
        </div>
      </nav>

      <div className="welcome-section">
        <h1>Welcome, {username}</h1>
        <p>Here's an overview of your IP Drive activity</p>
      </div>

      <div className="cards-section">
        <div className="card">
          <h3>📂 Browse Internships</h3>
          <p>Explore and discover internship opportunities from leading companies.</p>
          <button onClick={() => navigate("/internships")}>View Internships</button>
        </div>
        <div className="card">
          <h3>💼 Browse Hiring</h3>
          <p>Find and apply to job opportunities that match your skills and experience.</p>
          <button onClick={() => navigate("/hiring")}>View Hiring</button>
        </div>
        <div className="card">
          <h3>📅 Upcoming Events</h3>
          <p>No upcoming events</p>
          <button onClick={() => navigate("/calendar")}>View Calendar</button>
        </div>
        <div className="card wide">
          <h3>⚙️ AI Quiz</h3>
          <p>Practice interview questions with our AI-powered quiz generator.</p>
          <button onClick={() => navigate("/quiz")}>Take a Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
