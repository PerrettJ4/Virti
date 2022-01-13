import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [imageState, setImageState] = useState([{visible: false, count: 0}, {visible: false, count: 0}, {visible: false, count: 0}]);

  const handleTime = (e) => {
    setCurrentTime(e.target.currentTime);
  };
  const isVisible = (id) => {
    switch (id) {
      case "image1":
        const action = currentTime >= 3.5 && currentTime < 8.5;
        action && 
        return ;
      case "image2":
        return currentTime >= 6.0 && currentTime < 8.0;
      case "image3":
        return currentTime >= 7 && currentTime < 8.5;

      default:
      // code block
    }
    return;
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
            style={{ display: isVisible("image1") ? "block" : "none" }}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/image2.png"}
            alt="banana"
            id="image2"
            className="overlay"
            style={{ display: isVisible("image2") ? "block" : "none" }}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/image3.png"}
            alt="banana"
            id="image3"
            className="overlay"
            style={{ display: isVisible("image3") ? "block" : "none" }}
          />
        </div>
        <div style={{ color: "white" }}>elapsed time {currentTime}</div>
        <div style={{ color: "white" }}>
          is playing: {isPlaying ? "true" : "false"}
        </div>
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
