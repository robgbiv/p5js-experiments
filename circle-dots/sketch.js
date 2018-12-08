function setup() {
  createCanvas(windowWidth, windowHeight);
  const CENTER = [windowWidth / 2, windowHeight / 2];
  angleMode(DEGREES);
  colorMode(HSB, 100);
  background(0);
  frameRate(10);
}

function draw() {
  // background(0);
  // stroke(255);
  // noFill()

  // beginShape();

  // let spacing = map(mouseX, 0, width, 0, 100);

  // endShape(CLOSE);
  // background(0);
  drawRing(random(500));
}

function drawRing(size) {
  this.colour = fill(random(100), random(100), random(100));
  const halfWidth = windowWidth / 2;
  const halfHeight = windowHeight / 2;
  for (let a = 0; a < 360; a += 10) {
    let x = size * sin(a) + halfWidth - random(70);
    let y = size * cos(a) + halfHeight + random(70);
    // fill(this.colour);
    ellipse(x, y, 3);
  }

}
