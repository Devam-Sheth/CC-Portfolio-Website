import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/images/preview.png";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  const words1 = [
    "MINIMUM BUGS, MAXIMUM EFFORT!",
    "COMPILED SUCCESSFULLY..THAT'S WHAT WE CALL A...GIGGITY!",
  ];

  useEffect(() => {
    const list = document.querySelectorAll(".list");

    function activeLink(e) {
      list.forEach((item) => item.classList.remove("active"));
      e.currentTarget.classList.add("active");
    }

    list.forEach((item) => item.addEventListener("click", activeLink));

    // Cleanup event listeners on component unmount
    return () => {
      list.forEach((item) => item.removeEventListener("click", activeLink));
    };
  }, []);
  return (

    <>
      {/* <div className="navigation">
        <ul>
          <li className="list active">
            <a href="#">
              <span className="icon">
                <img src={Vector} alt="" />
              </span>
              <span className="text anta-small">Home</span>
              <span className="circle"></span>
            </a>
          </li>
          <li className="list">
            <ScrollLink to="Team" smooth={true} duration={1000}>
              <span className="icon">
                <img src={About} alt="" />
              </span>
              <span className="text anta-small">Team</span>
              <span className="circle"></span>
            </ScrollLink>
          </li>
          <li className="list">
            <ScrollLink to="About" smooth={true} duration={1000}>
              <span className="icon">
                <img src={Information} alt="" />
              </span>
              <span className="text anta-small">About</span>
              <span className="circle"></span>
            </ScrollLink>
          </li>
          <li className="list">
            <ScrollLink to="Vertical" smooth={true} duration={1200}>
              <span className="icon">
                <img src={Vertical_scroll} alt="" />
              </span>
              <span className="text anta-small">Verticals</span>
              <span className="circle"></span>
            </ScrollLink>
          </li>

          <div className="indicator"></div>
        </ul>
      </div> */}
      <div className="header" id="home"> 
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
    </>
  );
}

export default Header;
