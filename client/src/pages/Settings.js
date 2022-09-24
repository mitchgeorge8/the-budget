import React, { useState, useEffect } from "react";
import { getUser } from "../utils/api/userApi";

import Navbar from "../components/Navbar";

export default function Settings() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getUser();

        if (!response.ok) {
          throw new Error("Something went wrong.");
        }

        const user = await response.json();
        setUser(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, []);

  console.log(user);

  return (
    <>
      <div>
        <h1>Settings</h1>
      </div>
      <Navbar />
    </>
  );
}
