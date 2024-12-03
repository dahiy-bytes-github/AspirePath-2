import React, { useState, useEffect } from "react";
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
  );
};

export default HomePage;
