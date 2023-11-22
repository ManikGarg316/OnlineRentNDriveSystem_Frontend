import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/loginforms.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    axios
  .post("http://localhost:9000/login", form, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
  .then(({data}) => {
    localStorage.setItem("token", data);
    navigate("/home");
});
  };

  return (
    <div className="wrapper-div">
      <h1>Login</h1>
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

        <button type="submit" className="coloring-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
