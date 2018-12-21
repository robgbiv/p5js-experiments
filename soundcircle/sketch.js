let h, s, b, circleSize, ellipseSize;

function setup() {
    createCanvas(windowWidth, windowHeight);
    const CENTER = [windowWidth / 2, windowHeight / 2];
    angleMode(DEGREES);
    colorMode(HSB, 100);
    background(0);
    frameRate(24);
    h = random(100);
    s = 70;
    b = 70;
    circleSize = 1;
    ellipseSize = 1;
    for (let i = 0; i < 200; i++) {
  	    drawRing(circleSize);
        circleSize += 20;
        ellipseSize += 0.1;
        h = (h + 2) % 100;
    }
}

function draw() {
}

function drawRing(size) {
    const halfWidth = windowWidth / 2;
    const halfHeight = windowHeight / 2;
	  noStroke();
	  fill(h, s, b);
    for (let a = 0; a < 360; a++) {
        let x = size * sin(a) + halfWidth - random(5);
        let y = size * cos(a) + halfHeight + random(10);
        ellipse(x, y, ellipseSize);
    }
}
