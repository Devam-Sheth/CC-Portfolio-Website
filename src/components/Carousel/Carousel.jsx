import React, { useState, useRef } from "react";
import "./Carousel.css";
import { Element } from "react-scroll";
const slides = [
  {
    heading: "About Us",
    content:
      "We are the Coding Club at Birla Institute of Technology and Sciences, Pilani. An Enthusiastic group of people working together to code better and efficiently. Established in 2014, we specialize in Website Development, Application Development, Game Development, Project Management, Programming, Graphic Designing",
  },
  {
    heading: "Achievements",
    content:
      "In the 23-24 ICPC cycle, 12 teams from BITS Pilani participated in the prelims, with “Lite lo” and “S(h)auch rahe hain” qualifying for the regionals. The “Lite lo” team, consisting of Tanveer Singh, Utkarsh Darolia, and Anish Kasegaonkar, ranked 11th in Amritapuri and 4th in Kanpur. They advanced to the ICPC Asia West Continent Final Contest 2023, where they secured 6th place and qualified for the ICPC World Finals 2023.",
  },
  {
    heading: "Achievements",
    content:
      "The “S(h)auch rahe hain” team, with Ameesh Sethi, Vishnu Hari, and Siddhant Attavar, ranked 22nd in Chennai regionals. In the 22-23 cycle, BITS Pilani received an honorable mention in the 47th Annual World Championship. In the 21-22 cycle, BITS Pilani was India's best ranked team in the 46th World finals and 26th overall.",
  },
  {
    heading: "Fest and Stalls",
    content:
      "During fests like APOGEE, BOSM, and Oasis, the Coding Club plays a pivotal role in bringing tech innovation and creativity to life. For APOGEE, the club integrates coding with the fest's theme, organizing events like Blind Coding and the International Coding League. During BOSM, the club focuses on enhancing the fest experience with projects like the Roulette app, which lets students wager on matches and earn points, along with creating the inauguration video and theme reveal. In Oasis, the club organizes a mix of pre-fest and fest events, including a Hackathon, Blender Workshop, AI Gallery, and VR experiences, ensuring that tech and creativity take center stage in every fest.",
  },
  {
    heading: "Alumni Achievements",
    content:
      "The Coding Club at BITS Pilani boasts an impressive array of alumni achievements. Members have excelled in international competitions, such as the ICPC World Finals, where teams like “Lite lo” from the 23-24 cycle made notable advancements. Alumni have also made significant contributions to tech startups and leading technology companies, leveraging their skills to drive innovation. Additionally, many have actively contributed to open source projects and earned prestigious awards, reflecting the high caliber of talent nurtured by the Coding Club.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
  
    <div id="carousel" className="carousel">
      <button className="carousel-button prev" onClick={goToPrev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="carousel-content">
        <div className="carousel-heading">
          <h3>{slides[currentIndex].heading}</h3>
        </div>
        <div className="carousel-text">{slides[currentIndex].content}</div>
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
              }}
            >
              {index === currentIndex ? (
                <span className="active-dot-inner"></span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  
  );
};

export default Carousel;
