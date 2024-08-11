// Carousel.js
import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const slides = [
  { text: "Slide 1" },
  { text: "Slide 2" },
  { text: "Slide 3" },
  // Add more slides as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState("0%");
  const progressRef = useRef(null);
  const intervalRef = useRef(null);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    resetProgress();
  };

  // Function to go to the previous slide
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
    resetProgress();
  };

  // Function to reset progress
  const resetProgress = () => {
    setProgressWidth("0%");
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Set up the automatic slide change and progress bar update
  useEffect(() => {
    // Reset progress on slide change
    resetProgress();

    // Start progress update
    const startTime = Date.now();
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / 5000) * 100, 100); // 5 seconds
      setProgressWidth(`${progress}%`);

      if (progress >= 100) {
        goToNext();
      }
    };

    intervalRef.current = setInterval(updateProgress, 100); // Update progress every 100ms

    return () => {
      clearInterval(intervalRef.current); // Cleanup on component unmount
    };
  }, [currentIndex]);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="carousel-content">
        <div className="carousel-text">{slides[currentIndex].text}</div>
      </div>
      <button className="carousel-button next" onClick={goToNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="carousel-dots">
        <div className="dot-container">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => {
                setCurrentIndex(index);
                resetProgress();
              }}
            >
              {index === currentIndex ? (
                <span
                  className="active-dot-inner"
                  style={{ width: progressWidth }}
                ></span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
