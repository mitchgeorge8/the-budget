import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 text-white fixed bottom-0 w-full flex justify-around py-3">
      <Link to="/budgets">
        <i className="fa-solid fa-scale-balanced fa-lg"></i>
      </Link>
      <Link to="/transactions">
        <i className="fa-solid fa-receipt fa-lg"></i>
      </Link>
      <Link to="/reports">
        <i className="fa-solid fa-chart-simple fa-lg"></i>
      </Link>
      <Link to="/settings">
        <i className="fa-solid fa-gear fa-lg"></i>
      </Link>
    </nav>
  );
};

export default Navbar;
