import React, { useState, useEffect } from "react";
import "./Header.css";
import { useState,useEffect } from "react";
import logo from "../../assets/images/Logo.png";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "./Tilt";
import { Howl } from 'react-howler';

<<<<<<< HEAD
function Header() {
=======
const [visible, setVisible] = useState(false);
  const handleDone=()=>{
      setVisible(true)
  }
 
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

>>>>>>> 918182869f46fd0add8a7acab61258f782d6b9ae
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
<<<<<<< HEAD
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
=======
            <Typewriter words={["CODING CLUB"]} loop={1}  typeSpeed={100} deleteSpeed={50} delaySpeed={2000}  cursorStyle='_' onLoopDone={handleDone}/>
                </h1>
        {   showHeading &&
            <h2  className="poppins" style={{margin:0}}> <Typewriter words={["BITS PILANI"]} loop={1}  typeSpeed={100} deleteSpeed={50} delaySpeed={2000}  cursorStyle='|'  /></h2>
           }
           
>>>>>>> 918182869f46fd0add8a7acab61258f782d6b9ae
          </div>
        </div>
        <div className="center">
          <h3 className="anta">
           { showQuote && 
              <Typewriter words={["We code in the name of the Old Gods and the New","We are the Coding Club, we can do whatever the f**k we want"]} loop={0} cursor typeSpeed={50} deleteSpeed={40} delaySpeed={3000}  cursorStyle='|'  />}
         
           
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Header;

