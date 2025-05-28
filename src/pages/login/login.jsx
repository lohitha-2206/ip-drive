// src/pages/Login/Login.jsx
import React, { useState } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
  localStorage.setItem("loggedInUsername", storedUser.username); // ✅ Save session
  alert("Login successful!");
  navigate("/dashboard");
}
 else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
