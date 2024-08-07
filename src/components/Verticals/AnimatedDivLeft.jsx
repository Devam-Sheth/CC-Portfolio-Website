import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AnimatedDiv.css";

gsap.registerPlugin(ScrollTrigger);
var xRange = -50;
window.addEventListener("resize", function () {
  if (window.innerWidth <= 800) {
    xRange = 0;
  }
});

const AnimatedDivLeft = ({ children }) => {
  const divRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      {
        opacity: 0,
        y: xRange,
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
          toggleActions: "play reverse play reverse",
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
