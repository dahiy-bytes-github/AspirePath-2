import React, { useState, useEffect } from "react";
import '../styles/Home.css';

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <div>
      {/* Main Section: Image and Welcome Text */}
      <div className="mentor-welcome-section">
        {/* Left: Mentor-Mentee Image */}
        <div className="mentor-mentee-container">
          <img
            src="/images/Mentormentee.jpeg"
            alt="Mentor and Mentee Learning Together"
          />
        </div>

        {/* Right: Welcome Text */}
        <div className="welcome-text">
          {user ? (
            <div>
              <h1>Welcome, {user.firstName} {user.lastName}!</h1>
              <p>We're glad to have you on board. Let's connect!</p>
            </div>
          ) : (
            <div>
              <h1>Welcome to the Mentorship Platform</h1>
              <p>Connecting mentors and mentees to achieve career success!</p>
            </div>
          )}
        </div>
      </div>

      {/* Mentor Profiles Section */}
      <div className="mentor-profiles">
        <div className="mentor-card">
          <img src="/images/Abdi.jpeg" alt="John Doe" />
          <h3>Abdullahi Abdi</h3>
          <p>Mentor</p>
        </div>
        <div className="mentor-card">
          <img src="/images/brannon.jpeg" alt="Jane Smith" />
          <h3>Brannon Simiyu</h3>
          <p>Mentor</p>
        </div>
        <div className="mentor-card">
          <img src="/images/Wilder.jpeg" alt="Robert Brown" />
          <h3>Wilder Ondieki</h3>
          <p>Mentor</p>
        </div>
        <div className="mentor-card">
          <img src="/images/Dennis.jpeg" alt="Emily White" />
          <h3>Dennis waithuki</h3>
          <p>Mentor</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;