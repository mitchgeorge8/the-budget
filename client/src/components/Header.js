import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral-700 text-white">
      <nav className="md:flex">
        <div className="flex justify-between m-3">
          <Link to="/">
            <h1 className="text-2xl md:text-3xl">The Budget</h1>
          </Link>
          <button id="dropdown" className="md:hidden flex items-center" onClick={console.log("Dropdown")}>
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;