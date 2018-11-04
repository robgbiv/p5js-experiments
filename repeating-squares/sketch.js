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
  const c = createCanvas(windowWidth, windowHeight);
  // const canvasSize = 512;
  // const c = createCanvas(canvasSize, canvasSize);
  canvas = c.canvas;

  // background(40, 44, 52);
  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
  rectMode(CENTER);
  background(220, 23, 20);

  // const center = { x: canvasSize / 2, y: canvasSize / 2 };
  // RECTSIZE = canvasSize / 4;
  const center = { x: windowWidth / 2, y: windowHeight / 2 };
  RECTSIZE = windowWidth / 4;

  const startPosition = {
    x: center.x,
    y: center.y,
  }

  for (var i = 0; i < 4; i++) {
    oneSide(startPosition, RECTSIZE, i);
  }

  // capturer.start();
}

function oneSide(startPosition, firstRectSize, iteration) {
  let centerX = startPosition.x;
  let centerY = startPosition.y;
  let thisRectSize = firstRectSize;
  let lineColour = 255;
  let fillColour = color(random(0, 360), 100, 100);
  // let fillColour = (random(0, 360), random(0, 255), random(0, 255));
  let rotateLeft = false;

  for (let i = 0; i < REPETITIONS; i++) {
    // allRects.push(new oneRect(centerX, centerY, thisRectSize, lineColour, rotateLeft));
    allRects.push(new oneRect(centerX, centerY, thisRectSize, fillColour, rotateLeft));
    thisRectSize = thisRectSize / 2;
    iteration % 2 === 0
      ? (centerX -= thisRectSize, rotateLeft = true)
      : (centerX += thisRectSize, rotateLeft = false);
    iteration <= 1
      ? centerY -= thisRectSize
      : centerY += thisRectSize;
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
    // stroke(this.lineColour);
    // noFill();
    noStroke();
    fill(this.fillColour);
    rect(0, 0, this.size, this.size);
    rotate(this.angle);
    rect(0, 0, this.size, this.size);
    pop();
    let rotateAngle = 100;
    // if (this.fillColour <= 127) {
    //   this.fillColour += 1
    // } else {
    //   this.fillColour -= 1;
    // }
    if (this.rotateLeft) {
      this.angle -= rotateAngle / this.size;
    } else {
      this.angle += rotateAngle / this.size;
    }
  }
}

function draw() {
  // background(40, 44, 52);
   // if (frameCount % 60 === 0) {
   //   background(220, 23, 20);
  // }
  background(220, 23, 20);
  for (let i = 0; i < allRects.length; i++) {
    allRects[i].display();
  }
  // if (frameCount < loopFrame) {
  //   capturer.capture(canvas);
  // } else if (frameCount === loopFrame) {
  //   capturer.stop();
  //   capturer.save();
  // }
}
