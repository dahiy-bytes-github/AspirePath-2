import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      navigate("/"); // Redirect to homepage if not logged in
    }
  }, [navigate]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-page">
      <h2>Welcome, {user.firstName} {user.lastName}</h2>
      <div className="user-info">
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        {user.role === "mentor" && <p>Expertise: {user.expertise}</p>}
        {user.role === "mentee" && <p>Career Goal: {user.careerGoals}</p>}
      </div>
    </div>
  );
};

export default ProfilePage;
