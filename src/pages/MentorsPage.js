import React, { useState, useEffect } from "react";

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch("http://localhost:8001/users");
        const data = await response.json();
        const mentorsList = data.filter((user) => user.role === "mentor");
        setMentors(mentorsList);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="mentors-container">
      <h2>Available Mentors</h2>
      {mentors.length ? (
        mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card">
            <h3>{mentor.firstName} {mentor.lastName}</h3>
            <p>Email: {mentor.email}</p>
            <p>Expertise: {mentor.expertise}</p>
          </div>
        ))
      ) : (
        <p>No mentors available at the moment.</p>
      )}
    </div>
  );
};

export default MentorsPage;
