import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { login } from "../utils/api/userApi";

export default function Login() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(userFormData);

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const user = await response.json();
      setUser(user);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  console.log(user);

  return (
    <>
      {user && <Navigate to="/budgets" replace={true} />}
      <form onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}
