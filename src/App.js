import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Account from "./pages/Account";
import HomePage from "./pages/HomePage";
import MentorsPage from "./pages/MentorsPage";
import UserManagement from "./pages/UserManagement"; // Add UserManagement page

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/usermanagement" element={<UserManagement />} /> {/* New route for User Management */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;