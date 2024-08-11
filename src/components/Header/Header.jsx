import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.png";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "./Tilt";

function Header() {
  const tiltEffectSettings = {
    max: 25,
    perspective: 1000,
    scale: 1.1,
    speed: 500,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const words = ["CODING CLUB BITS PILANI"];
  const words1 = [
    "MINIMUM BUGS, MAXIMUM EFFORT!",
    "COMPILED SUCCESSFULLY..THAT'S WHAT WE CALL A...GIGGITY!",
  ];

  return (
    <div className="header">
      <div className="header-content flex">
        <div className="logo">
          <Tilt tiltEffectSettings={tiltEffectSettings}>
            <img src={logo} className="logo-img" alt="" />
          </Tilt>
          <div className="center">
            <h1 className="Mothercode">
              <Typewriter
                words={words}
                loop={false}
                cursor
                typeSpeed={0}
                deleteSpeed={0}
                delaySpeed={0}
                cursorStyle="_"
              />
            </h1>
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
