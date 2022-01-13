import React, { useState } from "react";
import "./App.css";
// import image1 from "../public/images/image1.png";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const handleEvent = (e) => {
    setCurrentTime(e.target.currentTime);
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
            onTimeUpdate={handleEvent}
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
          <img
            src={process.env.PUBLIC_URL + "/images/image1.png"}
            alt="banana"
            id="image1"
            class="overlay"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/image2.png"}
            alt="banana"
            id="image2"
            class="overlay"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/image3.png"}
            alt="banana"
            id="image3"
            class="overlay"
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

// const imageComp = (startTime, endTime, Xpos, Ypos, numOfDisplays) => {
//   position === 'top'
//   return (
//     <img
//       src={process.env.PUBLIC_URL + "/images/image1.png"}
//       alt="banana"
//       id="image1"
//       class="overlay"
//     />
//   );
// }
