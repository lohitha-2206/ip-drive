import React from "react";
import "./CalendarCard.css";

const CalendarCard = ({ event, dateKey, index, onDelete, onComplete }) => {
  const getColor = () => {
    const now = new Date();
    const eventDate = new Date(dateKey);
    const timeDiff = eventDate - now;

    if (event.status === "complete") return "#d4edda"; // Green
    if (timeDiff <= 24 * 60 * 60 * 1000) return "#f8d7da"; // Red
    return "#fff3cd"; // Yellow
  };

  const statusLabel = () => {
    const now = new Date();
    const eventDate = new Date(dateKey);
    const timeDiff = eventDate - now;

    if (event.status === "complete") return "Completed";
    if (timeDiff <= 24 * 60 * 60 * 1000) return "Due Today";
    return "Upcoming";
  };

  return (
    <div className="calendar-card" style={{ backgroundColor: getColor() }}>
      <p><strong>{event.time}</strong></p>
      <p>{event.description}</p>
      {event.website && (
        <a href={event.website} target="_blank" rel="noreferrer">
          Visit Website
        </a>
      )}
      <div className="buttons">
        <button onClick={onComplete}>✓ Mark Complete</button>
        <button onClick={onDelete}>Delete</button>
      </div>
      <p className="status-label">{statusLabel()}</p>
    </div>
  );
};

export default CalendarCard;
