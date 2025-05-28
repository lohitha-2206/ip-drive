import React, { useEffect, useState } from "react";
import hiringData from "../../data/hiring.json";
import HiringCard from "./HiringCard";
import Navbar from "../../components/Navbar";
import "../Internships/internships.css";

const Hiring = () => {
  const [hiringList, setHiringList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modeFilter, setModeFilter] = useState("All");

  useEffect(() => {
    setHiringList(hiringData);
    setFiltered(hiringData);
  }, []);

  useEffect(() => {
    let results = hiringList.filter((item) =>
      item.job_title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (modeFilter !== "All") {
      results = results.filter((item) =>
        item.remote_onsite.toLowerCase() === modeFilter.toLowerCase()
      );
    }

    setFiltered(results);
  }, [searchTerm, modeFilter, hiringList]);

  const handleSaveHiring = (item) => {
    const saved = JSON.parse(localStorage.getItem("savedHiring")) || [];
    const isAlreadySaved = saved.some((i) => i.job_id === item.job_id);
    if (!isAlreadySaved) {
      const updated = [...saved, item];
      localStorage.setItem("savedHiring", JSON.stringify(updated));
      alert("Hiring opportunity saved!");
    } else {
      alert("Already saved.");
    }
  };

  const username = localStorage.getItem("loggedInUsername") || "User";

  return (
    <>
      <Navbar username={username} />
      <div className="internships-page">
        <h1>Hiring Opportunities</h1>

        <div className="filters">
          <input
            type="text"
            placeholder="Search by role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="internship-grid">
          {filtered.map((item) => (
            <HiringCard
              key={item.job_id}
              hiring={item}
              onSave={handleSaveHiring}
              isSavedPage={false}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hiring;
