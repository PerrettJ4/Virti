export const runawayButton = (e, evilButton) => {
  const OFFSET = 100;
  const distanceFromCenter = (boxPosition, mousePosition, boxSize) => {
    return boxPosition - mousePosition + boxSize / 2;
  };
  const setButtonPosition = (left, top) => {
    const windowBox = document.body.getBoundingClientRect();
    const buttonBox = evilButton.getBoundingClientRect();

    if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
      left = windowBox.right - buttonBox.width - OFFSET;
    }
    if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
      left = windowBox.left + OFFSET;
    }
    if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
      left = windowBox.bottom - buttonBox.height - OFFSET;
    }
    if (distanceFromCenter(top, windowBox.bottom, buttonBox.heihgt) > 0) {
      left = windowBox.top + OFFSET;
    }

    evilButton.style.left = `${left}px`;
    evilButton.style.top = `${top}px`;
  };

  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = evilButton.getBoundingClientRect();
  const horizontalDistanceFrom = distanceFromCenter(
    buttonBox.x,
    x,
    buttonBox.width
  );
  const verticalDistanceFrom = distanceFromCenter(
    buttonBox.y,
    y,
    buttonBox.height
  );
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;
  if (
    Math.abs(horizontalDistanceFrom) <= horizontalOffset &&
    Math.abs(verticalDistanceFrom) <= verticalOffset
  ) {
    setButtonPosition(
      buttonBox.x + (horizontalOffset / horizontalDistanceFrom) * 30,
      buttonBox.y + (verticalOffset / verticalDistanceFrom) * 30
    );
  }
};
