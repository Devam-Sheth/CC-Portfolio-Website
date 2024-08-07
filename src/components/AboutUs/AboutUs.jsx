import React from "react";
import "./AboutUs.css";
import CCLogo from "../../assets/images/CC Logo.png";
const AboutUs = () => {
  const content = [
    {
      heading: "ABOUT US",
      para: "We are the Coding Club at Birla Institute of Technology and Sciences, Pilani. An Enthusiastic group of people working together to code better and efficiently. Established in 2014, we specialize in Website Development, Application Development, Game Development, Project Management, Programming, Graphic Designing",
    },
    {
      heading: "OUR WORK",
      para: "The Coding Club actively participates in BOSM (the sports fest), Oasis (the cultural fest), and APOGEE (the tech fest). During these events, we organize various events and contribute to the festival's tech-related aspects. Besides, our members enthusiastically undertake personal or group projects, fostering collaborative learning and innovation. Moreover, the club hosts workshops conducted by industry experts, offering valuable insights and opportunities for skill enhancement.",
    },
  ];
  return (
    <div className="container">
      {content.map((item, index) =>
        index !== 0 ? (
          <div key={index}>
            <h1 className="heading">{item.heading}</h1>
            <p className="para">{item.para}</p>
          </div>
        ) : (
          <div className="content-with-logo" key={index}>
            <h1 className="heading">{item.heading}</h1>
            <p className="para">{item.para}</p>
            <img src={CCLogo} alt="Logo" className="cc-logo" />
          </div>
        )
      )}
      <p className="below">Do check out some for our work below!</p>
    </div>
  );
};

export default AboutUs;
