import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/loginforms.css";
function Register() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="wrapper-div">
      <h1>Registration</h1>
      <form id="registrationForm" onSubmit={handleSubmit}>
        <label for="username">
          <span class="icon" id="user-icon"></span>Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          onChange={handleChange}
        />

        <label for="password">
          <span class="icon" id="password-icon"></span>Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={handleChange}
        />

        <label for="mobile">
          <span class="icon" id="mobile-icon"></span>Mobile No.:
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          required
          onChange={handleChange}
        />

        <label for="name">
          <span class="icon" id="name-icon"></span>Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={handleChange}
        />

        <label for="email">
          <span class="icon" id="email-icon"></span>Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
        />

        <div className="flex-container">
          <label className="spacing-issue">
            <input
              type="radio"
              value="ADMIN"
              name="role"
              onChange={handleChange}
            />
            ADMIN
          </label>

          <label>
            <input
              type="radio"
              value="USER"
              name="role"
              checked
              onChange={handleChange}
            />
            USER
          </label>
        </div>
        <button type="submit" className="coloring-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
