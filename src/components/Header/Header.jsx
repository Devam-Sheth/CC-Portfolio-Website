import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.png";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "./Tilt";
import { Howl } from 'react-howler';

function Header() {
  const tiltEffectSettings = {
    max: 25,
    perspective: 1000,
    scale: 1.1,
    speed: 500,
    easing: "cubic-bezier(.03,.98,.52,.99)"
  };

  const words = ["CODING CLUB", "Minimum Bugs, Maximum Effort!", "Compiling success...That's what I call a...Giggity!"];

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
                typeSpeed={100}
                deleteSpeed={75}
                delaySpeed={1000}
                cursorStyle="_"
                onType={() => setCurrentWordIndex(prev => prev + 1)} // Update currentWordIndex
              />
            </h1>
            <h2 className="poppins" style={{ margin: 0 }}>
              BITS PILANI
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

