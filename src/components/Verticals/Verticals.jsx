import React from "react";
import AnimatedDivRight from "./AnimatedDivRight";
import AnimatedDivLeft from "./AnimatedDivLeft";
import "./AnimatedDiv.css";
function Verticals() {
  return (
    <div>
      <div className="heading">
        <h1>VERTICALS</h1>
      </div>

      <div className="vertical">
        <AnimatedDivLeft>
          <img src="/FrontDev.png" />
        </AnimatedDivLeft>
        <AnimatedDivRight>
          <div className="appearedText right">
            <h2>Frontend Development</h2>
            <p>
            This department focuses on the visible part of websites and applications, the part users interact with directly. Frontend developers craft the layout, design, and interactive elements using technologies like HTML, CSS, and JavaScript, ensuring a visually appealing and user-friendly experience.
            </p>
          </div>
        </AnimatedDivRight>
      </div>

      <div className="vertical right">
        <AnimatedDivLeft>
          <div className="appearedText left">
            <h2>Backend Development</h2>
            <p>
            The backend handles the behind-the-scenes logic and data management. Backend developers build the server-side infrastructure, databases, and APIs that power the frontend, making sure everything runs smoothly and securely.
            </p>
          </div>
        </AnimatedDivLeft>
        <AnimatedDivRight>
          <img src="/BackDev.png" />
        </AnimatedDivRight>
      </div>

      <div className="vertical">
        <AnimatedDivLeft>
          <img src="/CompCod.jpeg" />
        </AnimatedDivLeft>
        <AnimatedDivRight>
          <div className="appearedText right">
            <h2>Competitive Coding</h2>
            <p>
            This department focuses on honing problem-solving and algorithmic skills through participation in coding contests and challenges. Members solve complex problems efficiently, often using C++, Java, or Python, and learn advanced data structures and algorithms. They train for prestigious competitions like ACM ICPC and Google Code Jam, fostering a competitive spirit and a passion for optimized code.
            </p>
          </div>
        </AnimatedDivRight>
      </div>

      <div className="vertical right">
        <AnimatedDivLeft>
          <div className="appearedText left">
            <h2>AI/ML</h2>
            <p>
            This department explores the fascinating world of artificial intelligence and machine learning. Members work on developing intelligent algorithms and models that can learn from data, make predictions, and perform complex tasks, enabling applications like chatbots, image recognition, and recommendation systems.
            </p>
          </div>
        </AnimatedDivLeft>
        <AnimatedDivRight>
          <img src="/Aiml.png" />
        </AnimatedDivRight>
      </div>

      <div className="vertical">
        <AnimatedDivLeft>
          <img src="/VidEd.jpeg" />
        </AnimatedDivLeft>
        <AnimatedDivRight>
          <div className="appearedText right">
            <h2>Video Editing</h2>
            <p>
            Here, raw footage is transformed into captivating stories. Video editors use software tools to cut, arrange, and enhance video clips, add music and sound effects, and create visually appealing transitions, contributing to the overall storytelling process.
            </p>
          </div>
        </AnimatedDivRight>
      </div>

      <div className="vertical right">
        <AnimatedDivLeft>
          <div className="appearedText left">
            <h2>App Development</h2>
            <p>
            This department focuses on building mobile applications for various platforms like Android and iOS. App developers design user interfaces, implement features, and ensure compatibility across different devices, providing users with convenient and engaging experiences on their smartphones and tablets.
            </p>
          </div>
        </AnimatedDivLeft>
        <AnimatedDivRight>
          <img src="AppDev.png" />
        </AnimatedDivRight>
      </div>

      <div className="vertical">
        <AnimatedDivLeft>
          <img src="/GameDev.png" />
        </AnimatedDivLeft>
        <AnimatedDivRight>
          <div className="appearedText right">
            <h2>Game Development</h2>
            <p>
            In this department, creativity and technical skills combine to build interactive and engaging games. Game developers design game mechanics, characters, levels, and user interfaces, often using game engines and programming languages like C++ or C# and Blender.
            </p>
          </div>
        </AnimatedDivRight>
      </div>
    </div>
  );
}

export default Verticals;
