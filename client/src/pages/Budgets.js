import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getBudgets } from "../utils/api/budgetsApi";

import Navbar from "../components/Navbar";

export default function Budgets() {
  const [budgets, setBudgets] = useState({});

  useEffect(() => {
    const getBudgets = async () => {};
  });

  return (
    <>
      <div>
        <h1>Budgets</h1>
      </div>
      <Navbar />
    </>
  );
}
