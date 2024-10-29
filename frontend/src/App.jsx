import { useState } from "react";
import "./App.css";

function App() {
  const videos = [
    {
      src: "../public/videos/vid1.mp4",
      title: "EcoSpark: Powering a greener tomorrow.",
    },
    {
      src: "../public/videos/vid2.mp4",
      title: "LaunchLink: Connecting ideas with opportunities.",
    },
    {
      src: "../public/videos/vid3.mp4",
      title: "InnoBloom: Nurturing innovation from seed to scale.",
    },
    {
      src: "../public/videos/vid4.mp4",
      title: "PulsePath: Guiding startups to growth and beyond.",
    },
    {
      src: "../public/videos/vid5.mp4",
      title: "BrightNest: Where big ideas find their home.",
    },
    {
      src: "../public/videos/vid6.mp4",
      title: "GrowthForge: Crafting tomorrow's leaders today.",
    },
  ];

  return (
    <>
      <nav className="navbar">
        <span className="logo ml-5">StartMitra</span>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="grid-container mt-8">
        {videos.map((video, index) => (
          <div className="grid-item" key={index}>
            <video width="320" height="240" controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>

      <footer className="absolute bottom-0 w-full">
        <center>@Startup Mitra. All rights reserved</center>
      </footer>
    </>
  );
}

export default App;
