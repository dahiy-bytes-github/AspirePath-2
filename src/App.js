import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Account from "./pages/Account";
import HomePage from "./pages/HomePage";
import UserManagement from "./pages/UserManagement"; // Add UserManagement page
import { apiUrl } from "./utils.js"

function App() {
  console.log("API URL:", apiUrl);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/usermanagement" element={<UserManagement />} /> {/* New route for User Management */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
