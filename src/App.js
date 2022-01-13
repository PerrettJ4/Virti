import React, { useState } from "react";
import "./App.css";
import { updateDisplay } from "./updateDisplay";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [imageState, setImageState] = useState({
    1: { visible: false, count: 0 },
    2: { visible: false, count: 0 },
    3: { visible: false, count: 0 },
  });

  const handleTime = (e) => {
    setCurrentTime(e.target.currentTime);
    console.log("BERFORE: ", imageState);
    updateDisplay(currentTime, imageState, setImageState);
    console.log("POST: ", imageState);
  };

  return (
    <div className="App">
      <header className="App-header">Big Buck Bunny</header>
      <main>
        <div className="content">
          <video
            autoPlay
            loop
            controls
            width="620"
            src="./Big_Buck_Bunny_1080_10s_5MB.mp4"
            type="video/webm"
            onTimeUpdate={handleTime}
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            Sorry, your browser doesn't support embedded videos.
          </video>

          <img
            src={process.env.PUBLIC_URL + "/images/image1.png"}
            alt="banana"
            id="image1"
            className="overlay"
            style={{ display: imageState[1].visible ? "block" : "none" }}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/image2.png"}
            alt="ps4 controller"
            id="image2"
            className="overlay"
            style={{ display: imageState[2].visible ? "block" : "none" }}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/image3.png"}
            alt="fire"
            id="image3"
            className="overlay"
            style={{ display: imageState[3].visible ? "block" : "none" }}
          />
        </div>
        <div style={{ color: "white" }}>elapsed time {currentTime}</div>
        <div style={{ color: "white" }}>
          is playing: {isPlaying ? "true" : "false"}
        </div>
        <div style={{ color: "white" }}>banana Count {imageState[1].count}</div>
        <div style={{ color: "white" }}>ps4 Count {imageState[2].count}</div>
        <div style={{ color: "white" }}>fire Count {imageState[3].count}</div>
      </main>
    </div>
  );
}

export default App;

// PLAN
// overlay images at the correct timings
// get timings of video - correlated overlays to the timings

// img
// create reusable component with start, end time props,
// number of on/offs
