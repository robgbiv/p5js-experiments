var capturer = new CCapture({
  format: 'gif',
  name: 'repeatingsquares',
  workersPath: './ccapture.js/src/',
});
var canvas;

const REPETITIONS = 4;
let RECTSIZE;
const allRects = [];
const loopFrame = 288;

function setup() {
  // const c = createCanvas(windowWidth, windowHeight);
  const canvasSize = 512;
  const c = createCanvas(canvasSize, canvasSize);
  canvas = c.canvas;

  background(40, 44, 52);
  angleMode(DEGREES);
  rectMode(CENTER);

  const center = { x: canvasSize / 2, y: canvasSize / 2 };
  RECTSIZE = canvasSize / 4;

  const startPosition = {
    x: center.x,
    y: center.y,
  }

  for (var i = 0; i < 4; i++) {
    oneSide(startPosition, RECTSIZE, i);
  }

  capturer.start();
}

function oneSide(startPosition, firstRectSize, iteration) {
  let centerX = startPosition.x;
  let centerY = startPosition.y;
  let thisRectSize = firstRectSize;
  let lineColour = 255;
  let rotateLeft = false;

  for (let i = 0; i < REPETITIONS; i++) {
    allRects.push(new oneRect(centerX, centerY, thisRectSize, lineColour, rotateLeft));
    thisRectSize = thisRectSize / 2;
    iteration % 2 === 0
      ? (centerX -= thisRectSize, rotateLeft = true)
      : (centerX += thisRectSize, rotateLeft = false);
    iteration <= 1
      ? centerY -= thisRectSize
      : centerY += thisRectSize;
  }
}

function oneRect(x, y, size, lineColour, rotateLeft) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.lineColour = lineColour;
  this.angle = 0;
  this.rotateLeft = rotateLeft;


  this.display = function() {
    push();
    translate(this.x, this.y);
    stroke(this.lineColour);
    noFill();
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
  }
}

function draw() {
  background(40, 44, 52);
  for (let i = 0; i < allRects.length; i++) {
    allRects[i].display();
  }
  if (frameCount < loopFrame) {
    capturer.capture(canvas);
  } else if (frameCount === loopFrame) {
    capturer.stop();
    capturer.save();
  }
}
