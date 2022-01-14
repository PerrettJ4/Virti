import React, { useState, useRef } from "react";
import "./App.css";
import { updateDisplay } from "./updateDisplay";
import { runawayButton } from "./runawayButton";

function App() {
  const [theme, setTheme] = useState({
    bgColor: "black",
    textColor: "white",
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [imageState, setImageState] = useState({
    1: { visible: false, count: 0 },
    2: { visible: false, count: 0 },
    3: { visible: false, count: 0 },
  });
  // useRef for runaway button - passed into mouseover of App div
  const buttonRef = useRef();

  // external function which set the images timeline states
  const handleTime = (e) => {
    setCurrentTime(e.target.currentTime);
    updateDisplay(currentTime, imageState, setImageState);
  };

  return (
    <div
      className="App"
      onMouseMove={(e) => runawayButton(e, buttonRef.current)}
    >
      <header className="App-header">Big Buck Bunny</header>
      <main style={{ backgroundColor: theme.bgColor }}>
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
            onMouseOver={() =>
              setTheme({ bgColor: "yellow", textColor: "black" })
            }
          />
          <img
            src={process.env.PUBLIC_URL + "/images/image2.png"}
            alt="ps4 controller"
            id="image2"
            className="overlay"
            style={{ display: imageState[2].visible ? "block" : "none" }}
            onMouseOver={() =>
              setTheme({ bgColor: "magenta", textColor: "white" })
            }
          />
          <img
            src={process.env.PUBLIC_URL + "/images/image3.png"}
            alt="fire"
            id="image3"
            className="overlay"
            style={{ display: imageState[3].visible ? "block" : "none" }}
            onMouseOver={() =>
              setTheme({ bgColor: "red", textColor: "yellow" })
            }
          />
        </div>

        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "78%",
            maxWidth: "800px",

            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <table className="content-table">
            <tbody>
              <tr>
                <td>
                  <img
                    src={process.env.PUBLIC_URL + "/images/image1.png"}
                    alt="banana"
                    onMouseOver={() =>
                      setTheme({ bgColor: "yellow", textColor: "black" })
                    }
                  />
                </td>
                <td>{imageState[1].count}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src={process.env.PUBLIC_URL + "/images/image2.png"}
                    alt="ps4"
                    onMouseOver={() =>
                      setTheme({ bgColor: "magenta", textColor: "white" })
                    }
                  />
                </td>
                <td>{imageState[2].count}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src={process.env.PUBLIC_URL + "/images/image3.png"}
                    alt="fire"
                    onMouseOver={() =>
                      setTheme({ bgColor: "red", textColor: "yellow" })
                    }
                  />
                </td>
                <td>{imageState[3].count}</td>
              </tr>
            </tbody>
          </table>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "30%",
            }}
          >
            <div>
              <div style={{ color: theme.textColor }}>
                elapsed time {currentTime}
              </div>
              <div style={{ color: theme.textColor }}>
                is playing: {isPlaying ? "true" : "false"}
              </div>
            </div>
            <div></div>
            <button
              id="button"
              onClick={() => alert("Nice Catch") + window.location.reload()}
              ref={buttonRef}
            >
              Refresh Video
            </button>
          </div>
        </section>
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
