function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  background(40, 44, 52);

  const center = { x: windowWidth / 2, y: windowHeight / 2 };
  const rectSize = windowWidth / 4;
  const repetitions = 4;

  let centerX = center.x - (rectSize / 2);
  let centerY = center.y - (rectSize / 2);
  let thisRectSize = rectSize;
  let lineColour = 255;
  for (let i = 0; i < repetitions; i++) {
    // drawRect(center.x - (rectSize / 2), center.y - (rectSize / 2), rectSize, 255);
    drawRect(centerX, centerY, thisRectSize, lineColour);
    console.log({centerX});
    thisRectSize = thisRectSize / 2;
    centerX -= thisRectSize;
    centerY -= thisRectSize;
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
