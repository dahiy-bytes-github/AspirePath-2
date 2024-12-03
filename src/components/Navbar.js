import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Optional for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" activeClassName="active">
            Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/mentors" activeClassName="active">
            Mentors
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
