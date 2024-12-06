// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo"; // Import the Logo component
import "./Navbar.css"; // Optional for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo /> {/* Add Logo here */}
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" className={({ isActive }) => (isActive ? "active" : "")}>
            Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/usermanagement" className={({ isActive }) => (isActive ? "active" : "")}>
            User Management
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
