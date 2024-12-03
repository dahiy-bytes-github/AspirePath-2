import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../utils";
import "../styles/SignUpForm.css";

const PasswordErrorMessage = () => {
  return <p className="FieldError">Password should have at least 8 characters</p>;
};

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [role, setRole] = useState("role");
  const [specificField, setSpecificField] = useState("");
  const navigate = useNavigate(); // Redirect after registration

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
      const response = await fetch("http://localhost:8001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Account created!");
        clearForm();
        // Redirect to HomePage after successful registration
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
        <div className="Field">
          <label>Expertise <sup>*</sup></label>
          <select
            value={specificField}
            onChange={(e) => setSpecificField(e.target.value)}
          >
            <option value="">Select Expertise</option>
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
        <div className="Field">
          <label>Career Goals <sup>*</sup></label>
          <select
            value={specificField}
            onChange={(e) => setSpecificField(e.target.value)}
          >
            <option value="">Select Career Goal</option>
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
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Sign Up</h2>
        <div className="Field">
          <label>
            First name <sup>*</sup>
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
          />
        </div>
        <div className="Field">
          <label>Last name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
          />
        </div>
        <div className="Field">
          <label>
            Email address <sup>*</sup>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
          />
        </div>
        <div className="Field">
          <label>
            Password <sup>*</sup>
          </label>
          <input
            value={password.value}
            type="password"
            onChange={(e) => setPassword({ ...password, value: e.target.value })}
            onBlur={() => setPassword({ ...password, isTouched: true })}
            placeholder="Password"
          />
          {password.isTouched && password.value.length < 8 && <PasswordErrorMessage />}
        </div>
        <div className="Field">
          <label>
            Role <sup>*</sup>
          </label>
          <select value={role} onChange={handleRoleChange}>
            <option value="role" disabled>
              Select Role
            </option>
            <option value="mentor">Mentor</option>
            <option value="mentee">Mentee</option>
          </select>
        </div>
        {renderSpecificField()}
        <div className="Field">
          <button type="submit" disabled={!getIsFormValid()}>
            Sign Up
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default SignUpForm;
