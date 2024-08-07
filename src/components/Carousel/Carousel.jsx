import React, { useState, useEffect, useRef } from "react";
import { highlightsSlides } from "./SlideInfo";
import "./Carousel.css";
import playIcon from "../../assets/images/play2.png";
import pauseIcon from "../../assets/images/pause2.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % highlightsSlides.length
        );
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const handlePausePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div id="slider">
      <div className="carousel-container">
        <div>
          {highlightsSlides[currentIndex].textLists.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="controls-container">
          <div className="dots-wrapper">
            <div className="dots-container">
              {highlightsSlides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
          <img
            src={isPlaying ? pauseIcon : playIcon}
            alt={isPlaying ? "Pause" : "Play"}
            className="play-pause-icon"
            onClick={handlePausePlay}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
