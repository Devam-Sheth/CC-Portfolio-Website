import React from "react";


import './verticals.css';

const Verticals = () => {
  return (

    <div className="verticalContainer">

      <div className="heading">
        <h1>VERTICALS</h1>
      </div>

      <div className="container">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1699885960867-56d5f5262d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Frontend Development" />
          <div className="card__head">Frontend Development</div>
          <div className="card__content">
            <p>This department focuses on the visible part of websites and applications, the part users interact with directly. Frontend developers craft the layout, design, and interactive elements using technologies like HTML, CSS, and JavaScript, ensuring a visually appealing and user-friendly experience.</p>
            <p>Team Members: Lorem Ipsum</p>
          </div>
        </div>
        <div className="card">
          <img src="https://img.freepik.com/free-photo/it-specialist-checking-code-computer-dark-office-night_1098-18699.jpg?size=626&ext=jpg" alt="Backend Development" />
          <div className="card__head">Backend Development</div>
          <div className="card__content">
            <p>The backend handles the behind-the-scenes logic and data management. Backend developers build the server-side infrastructure, databases, and APIs that power the frontend, making sure everything runs smoothly and securely.</p>
            <p>Team Members: Lorem Ipsum</p>
          </div>
        </div>
        <div className="card">
          <img src="https://th.bing.com/th/id/OIG4.QR8PjwMwKHOQjPHmGO1x?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Competitive Coding" />
          <div className="card__head">Competitive Coding</div>
          <div className="card__content">
            <p>This department focuses on honing problem-solving and algorithmic skills through participation in coding contests and challenges. Members solve complex problems efficiently, often using C++, Java, or Python, and learn advanced data structures and algorithms. They train for prestigious competitions like ACM ICPC and Google Code Jam, fostering a competitive spirit and a passion for optimized code.</p>
            <p>Team Members: Lorem Ipsum</p>
          </div>
        </div>
        <div className="card">
          <img src="https://th.bing.com/th/id/OIG3.4Lv8G3IRIOVSZ_OoiMan?pid=ImgGn" alt="AI/ML" />
          <div className="card__head">AI/ML</div>
          <div className="card__content">
            <p>This department explores the fascinating world of artificial intelligence and machine learning. Members work on developing intelligent algorithms and models that can learn from data, make predictions, and perform complex tasks, enabling applications like chatbots, image recognition, and recommendation systems.</p>
            <p>Team Members: Lorem Ipsum</p>
          </div>
        </div>
        <div className="card">
          <img src="https://th.bing.com/th/id/OIG3.kwFWgtrn3w8JsWAfLlBM?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Video Editing" />
          <div className="card__head">Video Editing</div>
          <div className="card__content">
            <p>Here, raw footage is transformed into captivating stories. Video editors use software tools to cut, arrange, and enhance video clips, add music and sound effects, and create visually appealing transitions, contributing to the overall storytelling process.</p>
            <p>Team Members: Lorem Ipsum</p>
          </div>
        </div>
        <div className="card">
          <img src="https://th.bing.com/th/id/OIG3.dMLTLpjdxIDJz15A9ArO?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="App Development" />
          <div className="card__head">App Development</div>
          <div className="card__content">
            <p>This department focuses on building mobile applications for various platforms like Android and iOS. App developers design user interfaces, implement features, and ensure compatibility across different devices, providing users with convenient and engaging experiences on their smartphones and tablets.</p>
            <p>Team Members: Lorem Ipsum</p>
          </div>
        </div>
        <div className="card">
          <img src="https://th.bing.com/th/id/OIG4.6ucBRWxK3r00s5.4Z138?pid=ImgGn" alt="Game Development" />
          <div className="card__head">Game Development</div>
          <div className="card__content">
            <p>In this department, creativity and technical skills combine to build interactive and engaging games. Game developers design game mechanics, characters, levels, and user interfaces, often using game engines and programming languages like C++ or C# and Blender.</p>
            <p>Team Members: Lorem Ipsum</p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Verticals;












