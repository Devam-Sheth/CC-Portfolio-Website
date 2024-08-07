// AnimatedDivLeft.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AnimatedDiv.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedDivLeft = ({ children }) => {
  const divRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      {
        opacity: 0,
        y: -50,
        x: -50,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none", // Only play animation once when entering view
          once: true, // Ensure animation plays only once
        },
      }
    );
  }, []);

  return (
    <div ref={divRef} className="animated-div">
      {children}
    </div>
  );
};

export default AnimatedDivLeft;
