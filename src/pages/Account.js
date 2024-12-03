import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import "../styles/Account.css"; // Optional CSS for layout or container styling
import LoginForm from "./LoginForm";

const Account = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const toggleForm = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <div className="account-container">
      {isSigningUp ? (
        <div>
          <SignUpForm />
          <p className="toggle-text">
            Already have an account?{" "}
            <button onClick={toggleForm} className="toggle-link">
              Login Here
            </button>
          </p>
        </div>
      ) : (
        <div>
          <LoginForm onRegisterClick={toggleForm} />
          <p className="toggle-text">
            Don't have an account?{" "}
            <button onClick={toggleForm} className="toggle-link">
              Register Here
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Account;
