import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-zinc-700 fixed bottom-0 w-full flex justify-around py-3">
      <NavLink
        to="/budgets"
        className={({ isActive }) => (isActive ? "text-blue-600" : "")}
      >
        <i className="fa-solid fa-scale-balanced fa-lg"></i>
      </NavLink>
      <NavLink
        to="/transactions"
        className={({ isActive }) => (isActive ? "text-blue-500" : "")}
      >
        <i className="fa-solid fa-receipt fa-lg"></i>
      </NavLink>
      <NavLink
        to="/reports"
        className={({ isActive }) => (isActive ? "text-blue-500" : "")}
      >
        <i className="fa-solid fa-chart-simple fa-lg"></i>
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? "text-blue-500" : "")}
      >
        <i className="fa-solid fa-gear fa-lg"></i>
      </NavLink>
    </nav>
  );
}
