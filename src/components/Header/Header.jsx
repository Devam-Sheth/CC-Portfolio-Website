import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.png";
function Header() {
  return (
    <div className="header">
      <div className="header-content flex">
        <div className="logo">
          <img src={logo} className="logo" alt="" />
          <div className="center">
            <h1 className="Mothercode">CODING CLUB</h1>
            <h2>BITS PILANI</h2>
            
          </div>
        </div>
       
      </div>
      
      {/* <div className='center'>
        <h3>We're the merc with a mouth, but with keyboards instead of katanas</h3>
        </div> */}
      </div>
    
  );
}

export default Header;
