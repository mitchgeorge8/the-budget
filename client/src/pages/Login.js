import React, { useState } from "react";
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

  return (
    <>
      {user && <Navigate to="/budgets" replace={true} />}
      <h1 className="text-center bg-zinc-50 text-lg p-1">The Budget</h1>
      <form onSubmit={handleFormSubmit} className="m-6">
        <div className="">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full rounded py-1 px-2 mb-2 bg-zinc-50"
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="w-full rounded py-1 px-2 mb-2 bg-zinc-50"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full bg-green-600 text-white rounded p-1"
        >
          Login
        </button>
      </form>
    </>
  );
}
