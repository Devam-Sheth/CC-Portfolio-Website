import React from "react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div></div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link smooth to="#home" onClick={toggleMenu}>
          Home
        </Link>
        <Link smooth to="#Team" onClick={toggleMenu}>
          Team
        </Link>
        <Link smooth to="#carousel" onClick={toggleMenu}>
          About
        </Link>
        <Link smooth to="#verticals" onClick={toggleMenu}>
          Verticals
        </Link>
        <Link className="mr-12" smooth to="#contact" onClick={toggleMenu}>
          Contact Us
        </Link>
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
