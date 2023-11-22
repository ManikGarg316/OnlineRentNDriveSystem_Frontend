import React, { useState } from "react";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import "../styles/loginforms.css";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({"role":"USER"});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // axios.post("http://localhost:9000/signup",{
    //   data: form
    // }).then((response) => {
    //   console.log(response.data);
    // })
//     fetch("http://localhost:9000/signup",
// {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify(form)
// })
// .then(function(res){ console.log(res.json()) })
// .catch(function(res){ console.log(res) })
axios
  .post("http://localhost:9000/signup", form, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
  .then(({data}) => {
    setMessage(data + ". Redirecting...");
    setTimeout(function(){
      setMessage("");
      navigate("/login")
    }, 2000);
});
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
      <p>{message}</p>
    </div>
  );
}

export default Register;
