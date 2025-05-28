// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/login/login';
import Dashboard from './pages/Dashboard/Dashboard';
import Internships from "./pages/Internships/Internships";
import Hiring from "./pages/Hiring/Hiring";
import Calendar from "./pages/Calendar/Calendar";
import ResourcesPage from './pages/Resources/ResourcesPage';
import Quiz from './pages/Quiz/Quiz';
import Saved from './pages/Saved/Saved';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/hiring" element={<Hiring />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/saved" element={<Saved />} />
    </Routes>
  );
}

export default App;


