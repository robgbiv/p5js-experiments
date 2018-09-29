const REPETITIONS = 4;
let RECTSIZE;

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  background(40, 44, 52);

  const center = { x: windowWidth / 2, y: windowHeight / 2 };
  RECTSIZE = windowWidth / 4;

  let startPosition = {
    x: center.x - (RECTSIZE / 2),
    y: center.y - (RECTSIZE / 2),
  }

  for (var i = 0; i < REPETITIONS; i++) {
    oneSide(startPosition, RECTSIZE, i);
  }
}

function oneSide(startPosition, firstRectSize, iteration) {
  let centerX = startPosition.x;
  let centerY = startPosition.y;
  let thisRectSize = firstRectSize;
  let lineColour = 255;

  for (let i = 0; i < REPETITIONS; i++) {
    drawRect(centerX, centerY, thisRectSize, lineColour);
    thisRectSize = thisRectSize / 2;
    iteration % 2 === 0
      ? centerX -= (thisRectSize / 2)
      : centerX += thisRectSize + (thisRectSize / 2);
    iteration <= 1
      ? centerY -= (thisRectSize / 2)
      : centerY += thisRectSize + (thisRectSize / 2);
  }
}

function drawRect(x, y, size, lineColour) {
  stroke(lineColour);
  noFill();
  rect(x, y, size, size);
}

function draw() {
  // put drawing code here
}
