import React, { useState, useEffect, useRef } from 'react';
import { highlightsSlides } from './SlideInfo';
import './VideoCarousel.css';
import playIcon from './play2.png';
import pauseIcon from './pause2.png';

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % highlightsSlides.length);
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
            <div className='button-wrapper'>
            <button onClick={handlePausePlay} className="play-pause-button">
            <img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? 'Pause' : 'Play'} />
          </button>
            </div>
          
          <div className="dots-wrapper">
            <div className="dots-container">
              {highlightsSlides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
