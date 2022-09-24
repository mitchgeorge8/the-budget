import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../utils/api/userApi";

import Navbar from "../components/Navbar";

export default function Settings() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getUser();

        if (response.status === 403) {
          return navigate("/login");
        }

        if (!response.ok) {
          throw new Error("Something went wrong.");
        }

        const user = await response.json();

        setUser(user);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, []);

  const handleLogOut = async (event) => {
    event.preventDefault();

    logout();
    setUser({});
    return navigate("/login");
  };

  return (
    <>
      <h1 className="text-center bg-zinc-50 text-lg p-1">Settings</h1>
      <div className="mx-6 my-4">
        {loading ? (
          <h2>Loading</h2>
        ) : (
          <h2 className="p-1 mb-2">{`Hello, ${user.firstName}`}</h2>
        )}
        <button
          onClick={handleLogOut}
          className="p-1 mt-2 text-center text-red-600 bg-zinc-50 rounded w-full"
        >
          Log Out
        </button>
      </div>
      <Navbar />
    </>
  );
}
