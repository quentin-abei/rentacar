import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
      <header className="main_nav">
        <Link className="logo" to="/">CARRENT</Link>
        <nav className="nav_link">
        <Link className="about" to="/about">About</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
