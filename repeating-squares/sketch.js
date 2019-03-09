const REPETITIONS = 4;
let RECTSIZE;
const allRects = [];
const loopFrame = 288;

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  canvas = c.canvas;

  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
  rectMode(CENTER);
  background(220, 23, 20);

  const center = { x: windowWidth / 2, y: windowHeight / 2 };
  RECTSIZE = windowWidth / 4;

  const startPosition = {
    x: center.x,
    y: center.y,
  };

  for (var i = 0; i < 4; i++) {
    oneSide(startPosition, RECTSIZE, i);
  }
}

function oneSide(startPosition, firstRectSize, iteration) {
  let centerX = startPosition.x;
  let centerY = startPosition.y;
  let thisRectSize = firstRectSize;
  let lineColour = 255;
  let fillColour = color(random(0, 360), 100, 100);
  let rotateLeft = false;

  for (let i = 0; i < REPETITIONS; i++) {
    allRects.push(
      new oneRect(centerX, centerY, thisRectSize, fillColour, rotateLeft)
    );
    thisRectSize = thisRectSize / 2;
    iteration % 2 === 0
      ? ((centerX -= thisRectSize), (rotateLeft = true))
      : ((centerX += thisRectSize), (rotateLeft = false));
    iteration <= 1 ? (centerY -= thisRectSize) : (centerY += thisRectSize);
  }
}

function oneRect(x, y, size, fillColour, rotateLeft) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.fillColour = fillColour;
  this.angle = 0;
  this.rotateLeft = rotateLeft;

  this.display = function() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.fillColour);
    rect(0, 0, this.size, this.size);
    rotate(this.angle);
    rect(0, 0, this.size, this.size);
    pop();
    let rotateAngle = 100;
    if (this.rotateLeft) {
      this.angle -= rotateAngle / this.size;
    } else {
      this.angle += rotateAngle / this.size;
    }
  };
}

function draw() {
  background(220, 23, 20);
  for (let i = 0; i < allRects.length; i++) {
    allRects[i].display();
  }
}
