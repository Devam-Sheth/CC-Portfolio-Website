import React from "react";
import "./Team.css";
import ai from "../../assets/images/AI:ML Lead.jpeg";
import apogee from "../../assets/images/Apooge Coord.jpeg";
import bosm from "../../assets/images/BOSM Joint Coord.jpeg";
import cc from "../../assets/images/Competitive Coding Lead.jpeg";
import gameDev from "../../assets/images/Game Dev POR.jpeg";
import oasis from "../../assets/images/Oasis Coord.jpeg";
import githubLogo from "../../assets/images/github.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import instagramLogo from "../../assets/images/instagram.png";
const Team = () => {
  const data = [
    {
      name: "Manish Goyal",
      role: "BOSM Joint Coordinator",
      image: bosm,
    },
    {
      name: "Siddharth Khemani",
      role: "Apogee Coordinator",
      image: apogee,
    },
    {
      name: "Parth Khandelwal",
      role: "Oasis Coordinator",
      image: oasis,
    },
    {
      name: "Ameesh Sethi",
      role: "Competitive Coding Lead",
      image: cc,
    },
    {
      name: "Manvendra Siwatch",
      role: "AI/ML lead",
      image: ai,
    },
    {
      name: "Aditya Garg",
      role: "Game Development Lead",
      image: gameDev,
    },
  ];
  return (
    <>
      <h1 className="team-head">MEET THE TEAM!</h1>
      <div className="team">
        {data.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="por-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-media-handles">
              <img src={linkedinLogo} alt="" />
              <img src={githubLogo} alt="" />
              <img src={instagramLogo} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
