🚀 IP Drive – Internship & Placement Platform

IP Drive is a comprehensive internship and placement support platform designed for students.
It combines internship listings, job opportunities, AI-powered quizzes, application tracking, and a recruitment calendar into one unified system.

🌟 Features
🔐 Authentication

Secure login system

Dynamic username display on dashboard

Session-based authentication

📊 Dashboard

Personalized welcome message

Quick access cards:

Browse Internships

Browse Hiring

Calendar

AI Quiz

Clean and responsive UI

💼 Internships Section

Search bar for filtering

Dropdown filter (work type)

Data loaded from local JSON (converted from CSV)

Clean card-based layout

Save internships (stored in localStorage)

🏢 Hiring Section

Displays job listings from hiring.json

Similar layout to internships

Save functionality

📅 Recruitment Calendar

Interactive calendar UI

Events displayed directly on calendar tiles

Color-coded events:

🔴 Missed

🟡 Upcoming

🟢 Completed

Popup alerts (20 minutes before event)

Persistent storage

🧠 AI Quiz Generator

Practice interview questions

Topic-based quiz generation

Scalable system (supports 3000+ questions)

Future-ready for OpenAI integration

📚 Resources Section

Study materials and preparation content

Backend-ready for integration

🛠️ Tech Stack
Frontend

React.js

CSS

JavaScript

Backend

Node.js

Express.js

Database / Storage

Local JSON files (Internships & Hiring)

localStorage (Saved items & tracking)

Supabase (planned integration for dynamic backend)

Deployment

Vercel (Frontend)

Node server (Backend)

Live Demo:
👉 https://ip-drive-s1gv.vercel.app/

📂 Project Structure
IP-Drive/
│
├── client/                # React Frontend
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.js
│
├── server/                # Node.js Backend
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── data/
│   ├── internships.json
│   └── hiring.json
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/lohitha-2206/ip-drive.git
cd ip-drive
2️⃣ Install Backend Dependencies
cd server
npm install
npm start
3️⃣ Install Frontend Dependencies
cd client
npm install
npm start

Frontend runs on:

http://localhost:3000

Backend runs on:

http://localhost:5000
🔮 Future Improvements

Full Supabase integration

Real-time notifications

Resume builder with AI tailoring

Application tracking analytics

Mentor booking system

Admin dashboard

Email reminders for events
