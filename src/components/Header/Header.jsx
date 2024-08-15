import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/images/test_logo.png";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  const words = ["CODING CLUB BITS PILANI"];
  const words1 = [
    "MINIMUM BUGS, MAXIMUM EFFORT!",
    "COMPILED SUCCESSFULLY..THAT'S WHAT WE CALL A...GIGGITY!",
  ];

  return (
    <div className="header">
      <div className="header-content flex">
        <div className="logo">
          <img src={logo} className="logo-img" alt="" />
          <div className="center">
            <h1 className="Mothercode">CODING CLUB BITS PILANI</h1>
            <h2 className="quotes" style={{ margin: 0 }}>
              <Typewriter
                words={words1}
                loop={false}
                cursor
                typeSpeed={100}
                deleteSpeed={75}
                delaySpeed={500}
                cursorStyle="_"
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
