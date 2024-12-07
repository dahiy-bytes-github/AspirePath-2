import React from "react";
import "../styles/Logo.css"; // Optional, for styling

const Logo = () => {
  const imageUrl ="https://aspiresd.org/wp-content/uploads/2020/11/logo-header-2x.png"; // External image URL

  return (
    <div className="logo-container">
      <img src={imageUrl} alt="AspirePath" className="logo" />
    </div>
  );
};

export default Logo;
