import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, apiUrl } from "../utils";
import "../styles/SignUpForm.css";

const PasswordErrorMessage = () => {
  return <p className="error-message">Password should have at least 8 characters</p>;
};

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [role, setRole] = useState("role");
  const [specificField, setSpecificField] = useState("");
  const navigate = useNavigate();

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role" &&
      specificField
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
    setSpecificField("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      password: password.value,
      role,
      ...(role === "mentor" ? { expertise: specificField } : { careerGoals: specificField }),
    };

    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Account created!");
        clearForm();
        navigate("/");
      } else {
        alert("Failed to create account.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error creating account. Please try again.");
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setSpecificField("");
  };

  const renderSpecificField = () => {
    if (role === "mentor") {
      return (
        <div className="input-group">
          <select
            value={specificField}
            onChange={(e) => setSpecificField(e.target.value)}
            className="input-field"
          >
            <option value="" disabled>Expertise</option>
            <option value="Software Development">Software Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>
      );
    }

    if (role === "mentee") {
      return (
        <div className="input-group">
          <select
            value={specificField}
            onChange={(e) => setSpecificField(e.target.value)}
            className="input-field"
          >
            <option value="" disabled>Career Goals</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Project Manager">Project Manager</option>
            <option value="IT Manager">IT Manager</option>
          </select>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            value={password.value}
            type="password"
            onChange={(e) => setPassword({ ...password, value: e.target.value })}
            onBlur={() => setPassword({ ...password, isTouched: true })}
            placeholder="Password"
            className="input-field"
          />
          {password.isTouched && password.value.length < 8 && <PasswordErrorMessage />}
        </div>
        <div className="input-group">
          <select
            value={role}
            onChange={handleRoleChange}
            className="input-field"
          >
            <option value="role" disabled>Select Role</option>
            <option value="mentor">Mentor</option>
            <option value="mentee">Mentee</option>
          </select>
        </div>
        {renderSpecificField()}
        <button type="submit" disabled={!getIsFormValid()} className="login-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
