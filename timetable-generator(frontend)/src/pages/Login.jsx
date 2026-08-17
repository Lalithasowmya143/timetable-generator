import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    profession: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Fake login logic
    if (!formData.profession) {
      alert("Please select a profession!");
      return;
    }

    // Create a fake user object
    const fakeUser = {
      name: formData.email.split("@")[0], // use email username as name
      email: formData.email,
      profession: formData.profession,
    };

    console.log("Login Response:", fakeUser);

    // Save user in localStorage
    localStorage.setItem("user", JSON.stringify(fakeUser));

    alert(`Welcome ${fakeUser.name}!`);

    // Redirect based on profession
    if (fakeUser.profession === "Student") {
      navigate("/personal");
    } else if (fakeUser.profession === "Faculty") {
      navigate("/weeks");
    } else {
      navigate("/profile");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password with toggle */}
        <div className="form-group password-field">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Profession Dropdown */}
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

        {/* Buttons */}
        <div className="button-group">
          <button type="submit" className="login-btn">
            Login
          </button>
          <button
            type="button"
            className="signup-btn"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
