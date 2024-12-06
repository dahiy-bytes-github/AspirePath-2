// src/components/Logo.js
import React from "react";
import "../styles/Logo.css"; // Optional, for styling

const Logo = () => {
  const imageUrl = "Logo.jpeg"

  return (
    <div className="logo-container">
      <img src={imageUrl} alt="AspirePath" className="logo" />
    </div>
  );
};

export default Logo;
