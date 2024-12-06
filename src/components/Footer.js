import React, { useState } from "react";
import Swal from "sweetalert2"; // For alert messages
import { Icon } from "semantic-ui-react"; // For social media icons
import "../styles/Footer.css"; // Importing styles for the footer

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscription = (event) => {
    event.preventDefault();
    if (email.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Invalid Email",
        text: "Please enter a valid email address before subscribing.",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed",
      text: `${email} has been successfully subscribed.`,
      confirmButtonText: "Close",
    });

    setEmail(""); // Clear the email input
  };

  return (
    <>
      <footer className="footer">
        <div className="main-footer">
          <div className="footer-column">
            <h5>About Us</h5>
            <ul>
              <li><a href="/about">About AspirePath</a></li>
              <li><a href="/partner">Become a Partner</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/investor">Investor Relations</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Useful Links</h5>
            <ul>
              <li><a href="/signup">Sign Up</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Contact Us</h5>
            <ul>
              <li><Icon name="tty" /> 020-3430-2330</li>
              <li><Icon name="phone" /> +254-711-111-111</li>
              <li><Icon name="mail" /> support@aspirepath.com</li>
              <li><Icon name="globe" /> aspirepath.com</li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Newsletter</h5>
            <form onSubmit={handleSubscription}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button type="submit">
                <Icon name="arrow right" />
              </button>
            </form>
          </div>
        </div>

        <div className="socials">
          <a href="https://facebook.com/aspirepath" target="_blank" rel="noopener noreferrer">
            <Icon name="facebook" size="large" />
          </a>
          <a href="https://youtube.com/aspirepath" target="_blank" rel="noopener noreferrer">
            <Icon name="youtube" size="large" />
          </a>
          <a href="https://twitter.com/aspirepath" target="_blank" rel="noopener noreferrer">
            <Icon name="twitter" size="large" />
          </a>
          <a href="https://instagram.com/aspirepath" target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" size="large" />
          </a>
        </div>
      </footer>

      <div className="copyright">
        <hr />
        <p>&copy; 2024 AspirePath. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
