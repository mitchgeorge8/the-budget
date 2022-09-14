import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  function handleDropdownClick() {
    const navBar = document.querySelector("#navBar");

    if (navBar.classList.contains("hidden")) {
      navBar.classList.remove("hidden");
    } else {
      navBar.classList.add("hidden");
    }
  }

  function handleNavClick() {
    const dropdown = document.querySelector("#dropdown");
    if (getComputedStyle(dropdown).display === "flex") {
      handleDropdownClick();
    }
  }

  return (
    <header className="bg-zinc-800 text-white">
      <nav className="md:flex">
        <div className="flex justify-between p-3">
          <Link to="/" onClick={handleNavClick}>
            <h1 className="text-2xl md:text-3xl">The Budget</h1>
          </Link>
          <button
            id="dropdown"
            className="md:hidden flex items-center"
            onClick={handleDropdownClick}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div
          id="navBar"
          className="hidden md:flex text-right text-lg items-center mr-6 mb-4 md:m-0"
        >
          <Link
            to="/login"
            className="mb-1 md:my-0 md:mx-2"
            onClick={handleNavClick}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="mb-1 md:my-0 md:mx-2"
            onClick={handleNavClick}
          >
            Signup
          </Link>
          <Link
            to="/profile"
            className="mb-1 md:my-0 md:mx-2"
            onClick={handleNavClick}
          >
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
