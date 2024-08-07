import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.png";
import { Typewriter } from 'react-simple-typewriter'
function Header() {
  return (
    <div className="header">
      <div className="header-content flex">
        <div className="logo">
          <img src={logo} className="logo-img" alt="" />
          <div className="center">
            <h1 className="Mothercode">
            <Typewriter words={["CODING CLUB"]} loop={false} cursor typeSpeed={100} deleteSpeed={50} delaySpeed={2000}  cursorStyle='|'/>
                </h1>
            <h2  className="poppins" style={{margin:0}}>BITS PILANI</h2>
          </div>
        </div>
        <div className="center">
          <h3 className="anta">
            We're the merc with a mouth, but with keyboards instead of katanas
          </h3>
        </div>
      </div>

      {/* <div className='center'>
        <h3>We're the merc with a mouth, but with keyboards instead of katanas</h3>
        </div> */}
    </div>
  );
}

export default Header;
