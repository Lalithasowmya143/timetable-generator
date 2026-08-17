// src/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";
import AboutUs from "./pages/AboutUs";
import Weeks from "./pages/Weeks";
import Timetable from "./pages/Timetable";
import Personal from "./pages/Personal";

// CSS
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar automatically shows login/logout based on localStorage */}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/weeks" element={<Weeks />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
