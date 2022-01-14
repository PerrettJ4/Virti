export const updateDisplay = (currentTime, imageState, setImageState) => {
  switch (true) {
    case currentTime < 3.5:
      // NO IMAGES VISIBLE
      setImageState({
        1: { ...imageState[1], visible: false },
        2: { ...imageState[2], visible: false },
        3: { ...imageState[3], visible: false },
      });
      break;
    case currentTime < 6:
      // ONLY BANANA VISIBLE
      if (!imageState[1].visible && imageState[1].count < 1) {
        setImageState({
          ...imageState,
          1: { visible: true, count: imageState[1].count + 1 },
        });
      }
      break;
    case currentTime < 7.0:
      // BANANA, PS4 SHOWING ONLY
      if (!imageState[2].visible && imageState[2].count < 2) {
        setImageState({
          ...imageState,
          2: { visible: true, count: imageState[2].count + 1 },
        });
      }
      break;
    case currentTime < 8.0:
      // BANANA, PS4 & FIRE SHOWING
      if (!imageState[3].visible && imageState[3].count < 3) {
        setImageState({
          ...imageState,
          3: { visible: true, count: imageState[3].count + 1 },
        });
      }
      break;
    case currentTime < 8.5:
      // PS4 REMOVED
      setImageState({
        ...imageState,
        3: { visible: false, count: imageState[3].count },
      });
      break;
    case currentTime >= 8.5:
      // PS4 REMOVED
      setImageState({
        ...imageState,
        1: { visible: false, count: imageState[1].count },
        2: { visible: false, count: imageState[2].count },
      });
      break;
    default:
      console.log("nothing is happeninng");
    // code block
  }
};
