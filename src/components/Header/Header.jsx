import React from "react";
import "./Header.css";
import { useState,useEffect } from "react";
import logo from "../../assets/images/Logo.png";
import { Typewriter } from 'react-simple-typewriter'
function Header() {
const [visible, setVisible] = useState(false);
  const handleDone=()=>{
      setVisible(true)
  }
  // useEffect(() => {
    
  
  
  // }, [])
 
    const [showHeading, setShowHeading] = useState(false);
    const [showQuote, setShowQuote] = useState(false);

    useEffect(() => {
        const headTimer = setTimeout(() => {
            setShowHeading(true);
        }, 1300); //
        const quoteTimer=setTimeout(()=>{
          setShowQuote(true)
        },  [2600]);

        
        return () =>
          {clearTimeout(headTimer);
            clearTimeout(quoteTimer);
        } 
    }, []);
  return (
    <div className="header">
      <div className="header-content flex">
        <div className="logo">
          <img src={logo} className="logo-img" alt="" />
          <div className="center">
            <h1 className="Mothercode">
            <Typewriter words={["CODING CLUB"]} loop={1}  typeSpeed={100} deleteSpeed={50} delaySpeed={2000}  cursorStyle='|' onLoopDone={handleDone}/>
                </h1>
        {   showHeading &&
            <h2  className="poppins" style={{margin:0}}> <Typewriter words={["BITS PILANI"]} loop={1}  typeSpeed={100} deleteSpeed={50} delaySpeed={2000}  cursorStyle='|'  /></h2>
           }
           
          </div>
        </div>
        <div className="center">
          <h3 className="anta">
            { showQuote && 
              <Typewriter words={["We code in the name of the Old Gods and the New","We are the Coding Club, we can do whatever the f**k we want"]} loop={0} cursor typeSpeed={50} deleteSpeed={40} delaySpeed={2000}  cursorStyle='|'  />}
         
           
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
