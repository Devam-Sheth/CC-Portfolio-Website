import React from "react";
import "./AboutUs.css";
import CCLogo from "../../assets/images/CC Logo.png";
const AboutUs = () => {
  const content = [
    {
      heading: "ABOUT US",
      para: "We are the Coding Club at Birla Institute of Technology and Sciences, Pilani. An Enthusiastic group of people working together to code better and efficiently. Established in 2014, we specialize in Website Development, Application Development, Game Development, Project Management, Programming, Graphic Designing",
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
          </div>
        )
      )}
    </div>
  );
};

export default AboutUs;
