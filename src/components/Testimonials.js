import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <h1 className="ui centered header">Testimonials</h1>
      <div className="ui cards">
        <div className="card-container">
          <div className="ui card">
            <blockquote className="card content">
              <i className="quote left large blue icon centered"></i>
              "I had the privilege of being mentored by an incredible professional
              through AspirePath. Thanks to their mentorship, I gained confidence,
              expanded my network, and achieved my professional goals."
              <i className="quote right blue icon centered"></i>
            </blockquote>
            <h3 className="card content header">
              Sharon Jebiwott,<span className="ui italized header">mentee</span>
            </h3>
          </div>
        </div>
        <div className="card-container">
          <div className="ui card">
            <blockquote className="card content">
              <i className="quote left icon large red centered"></i>
              "AspirePath has been a game-changer for me. Our mentoring sessions
              were transformative. My mentor went above and beyond to provide
              personalized guidance, offer constructive feedback, and share
              invaluable resources."  
              <i className="quote right red icon centered"></i>
            </blockquote>
            <h3 className="card content header">
              Edwin Chawiya, <span className="ui italized header">mentee</span>
            </h3>
          </div>
        </div>
        <div className="card-container">
          <div className="ui card">
            <blockquote className="card content">
              <i className="quote left green large icon centered"></i>
              "AspirePath exceeded my expectations in every way. As a recent
              graduate entering a competitive job market, I was unsure of my
              career direction. Their mentorship gave me the clarity and motivation
              I needed to succeed." 
              <i className="quote right green icon centered"></i>
            </blockquote>
            <h3 className="card content header">
              Damaris Kerubo, <span className="ui italized header">mentee</span>
            </h3>
          </div>
        </div>
        <div className="card-container">
          <div className="ui card">
            <blockquote className="card content">
              <i className="quote left icon pink large centered"></i>"Being part of AspirePath
              has been an incredible experience. The platform not only connected
              me with a highly knowledgeable and accomplished mentor but also
              provided a structured framework for our mentorship journey."
              <i className="quote right pink icon centered"></i>
            </blockquote>
            <h3 className="card content header">
              Gil Maina, <span className="ui italized header">mentee</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
