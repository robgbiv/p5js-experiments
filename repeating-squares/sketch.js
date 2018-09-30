const REPETITIONS = 4;
let RECTSIZE;
let startPosition;
let allRects = [];

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  background(40, 44, 52);
  angleMode(DEGREES);

  const center = { x: windowWidth / 2, y: windowHeight / 2 };
  RECTSIZE = windowWidth / 4;

  startPosition = {
    x: center.x - (RECTSIZE / 2),
    y: center.y - (RECTSIZE / 2),
  }

  for (var i = 0; i < 4; i++) {
    oneSide(startPosition, RECTSIZE, i);
  }
}

function oneSide(startPosition, firstRectSize, iteration) {
  let centerX = startPosition.x;
  let centerY = startPosition.y;
  let thisRectSize = firstRectSize;
  let lineColour = 255;

  for (let i = 0; i < REPETITIONS; i++) {
    allRects.push(new oneRect(centerX, centerY, thisRectSize, lineColour));
    thisRectSize = thisRectSize / 2;
    iteration % 2 === 0
      ? centerX -= (thisRectSize / 2)
      : centerX += thisRectSize + (thisRectSize / 2);
    iteration <= 1
      ? centerY -= (thisRectSize / 2)
      : centerY += thisRectSize + (thisRectSize / 2);
  }
}

function oneRect(x, y, size, lineColour) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.lineColour = lineColour;
  this.angle = 0;
  stroke(this.lineColour);
  noFill();

  this.display = function() {
    rect(this.x, this.y, this.size, this.size);
  }

  this.rotateRect = function() {
    translate(this.x, this.y);
    rotate(this.angle);
    this.angle += 1;
  }
}

function draw() {
  let totalRects = allRects.length;
  for (let i = 0; i < allRects.length; i++) {
    allRects[i].rotateRect();
    allRects[i].display();
  }
}
