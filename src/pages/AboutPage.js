import React from 'react'
import Mission from "../components/Mission";
import Vision from "../components/Vision";
import Values from '../components/Values'; // Adjust path as needed
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";
import "../styles/AboutPage.css";
import "../styles/Footer.css";




function AboutPage() {
  return (
    <div>
      <Mission/>
      <Vision/>
      <Values/>
      <Testimony/>
      <div className="testimonials">
  {/* Testimonials content */}
</div>

<hr className="section-divider" />

<div className="contact-details">
  {/* Contact details content */}
</div>

      <Footer/>
      
      
    </div>
  )
}

export default AboutPage
