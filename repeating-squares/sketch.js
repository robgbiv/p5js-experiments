const REPETITIONS = 4;
let RECTSIZE;
let startPosition;
let allRects = [];

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  background(40, 44, 52);
  angleMode(DEGREES);
  rectMode(CENTER);

  const center = { x: windowWidth / 2, y: windowHeight / 2 };
  RECTSIZE = windowWidth / 4;

  startPosition = {
    x: center.x,
    y: center.y,
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
      ? centerX -= thisRectSize
      : centerX += thisRectSize;
    iteration <= 1
      ? centerY -= thisRectSize
      : centerY += thisRectSize;
  }
}

function oneRect(x, y, size, lineColour) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.lineColour = lineColour;
  this.angle = 0;

  this.display = function() {
    push();
    translate(this.x, this.y);
    stroke(this.lineColour);
    noFill();
    rect(0, 0, this.size, this.size);
    rotate(this.angle);
    rect(0, 0, this.size, this.size);
    pop();
    this.angle += 0.05;
  }
}

function draw() {
  for (let i = 0; i < allRects.length; i++) {
    allRects[i].display();
    allRects[i].display();
  }
}
