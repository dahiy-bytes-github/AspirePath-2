// src/components/Logo.js
import React from "react";
import "../styles/Logo.css"; // Optional, for styling

const Logo = () => {
  const imageUrl ="https://cdn.vanderbilt.edu/vu-web/medschool-wpcontent/sites/5/2019/11/20110210/ASPIRE-Rings-Circle-for-ASPIRE-ON-1.png"; // External image URL

  return (
    <div className="logo-container">
      <img src={imageUrl} alt="AspirePath" className="logo" />
    </div>
  );
};

export default Logo;
