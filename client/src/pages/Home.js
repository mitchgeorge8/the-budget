import React, { useEffect } from "react";
const URL = process.env.MONGODB_URI || "http://localhost:3001/";

export default function Home() {
  useEffect(() => {
    async function test() {
      const response = await fetch(URL);

      if (!response.ok) {
        console.log(response.statusText);
        return;
      }

      const data = await response.json();
      console.log(data);
    }

    test();
    return;
  });

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
