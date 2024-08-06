import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "./Carousel.css"; // Import CSS for styling

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    gsap.to(slideRef.current, {
      x: `-${currentIndex * 100}%`,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Assume 4 slides for this example
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + 4) % 4 // Assume 4 slides for this example
    );
  };

  const colors = ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9"]; // Define colors for slides

  return (
    <div className="carousel">
      <button className="carousel-control prev" onClick={goToPrevious}>
        &lt;
      </button>
      <div className="carousel-slide-container">
        <div className="carousel-slide" ref={slideRef}>
          {colors.map((color, index) => (
            <div
              className="carousel-item"
              key={index}
              style={{ backgroundColor: color }}
            >
              <p className="carousel-text">Slide {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-control next" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
