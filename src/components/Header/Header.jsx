import React from "react";
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
    easing: "cubic-bezier(.03,.98,.52,.99)"
  };

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
                words={["CODING CLUB"]}
                loop={false}
                cursor
                typeSpeed={200}
                deleteSpeed={200}
                delaySpeed={3000}
                cursorStyle="_"
              />
            </h1>
            <h2 className="poppins" style={{ margin: 0 }}>
              BITS PILANI
            </h2>
          </div>
        </div>
        <div className="center">
          <h3 className="anta">
            We're the merc with a mouth, but with keyboards instead of katanas
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
