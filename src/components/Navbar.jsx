// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ username }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("loggedInUsername");
    navigate("/login");
  };
  const user = JSON.parse(localStorage.getItem("user"));
<Navbar user={user} />


  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/dashboard")}>IP Drive</div>
     <ul className="nav-links">
  <li onClick={() => navigate("/dashboard")}>Dashboard</li>
  <li onClick={() => navigate("/internships")}>Internships</li>
  <li onClick={() => navigate("/hiring")}>Hiring</li>
  <li onClick={() => navigate("/calendar")}>Calendar</li>
  <li onClick={() => navigate("/resources")}>Resources</li>
  <li onClick={() => navigate("/quiz")}>AI Quiz</li>
  <li onClick={() => navigate("/saved")}>Saved</li> {/* ✅ FIXED */}
</ul>
      <div className="user-actions">
        <span>{username}</span>
        <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
