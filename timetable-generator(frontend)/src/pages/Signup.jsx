// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const fields = [
    { name: "name", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Mobile Number", type: "tel" },
    { name: "password", label: "Password", type: "password" },
    { name: "confirmPassword", label: "Confirm Password", type: "password" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.profession) {
      alert("Please select a profession!");
      return;
    }

    // ✅ Fake signup: save user in localStorage
    const fakeUser = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      profession: formData.profession,
    };

    localStorage.setItem("user", JSON.stringify(fakeUser));

    alert(`Account created for ${fakeUser.name}!`);
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="form-group">
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* Profession dropdown */}
        <div className="form-group">
          <label>Profession</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Profession --</option>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
          <button
            type="button"
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
}
