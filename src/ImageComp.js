import React, { useState } from "react";

const ImageComp = ({
  path,
  id,
  alt,
  currentTime,
  isPlaying,
  displayCount,
  startTime,
  endTime,
  Xpos,
  Ypos,
  numOfDisplays,
}) => {
  const [visible, setVisible] = useState(false);
  if (currentTime >= startTime && currentTime < endTime) {
    setVisible(true);
  }

  return (
    <img
      src={process.env.PUBLIC_URL + path.toString()}
      alt={alt}
      id={id}
      className="overlay"
      style={{ display: "block" }}
    />
  );
};

export default ImageComp;
