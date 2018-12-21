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
    ring = new Ring();
    point = new Point();
    for (let i = 0; i < 200; i++) {
  	    ring.display(circleSize);
        circleSize += 20;
        ellipseSize += 0.1;
        h = (h + 2) % 100;
    }
}

function draw() {
    // background(0);
    // ring.display(circleSize);
    point.move();
    point.display();
}

class Ring {
    constructor() {
        this.halfWidth = windowWidth / 2;
        this.halfHeight = windowHeight / 2;
    }

    display(size) {
        this.size = size;
        noStroke();
        fill(h, s, b);
        for (let a = 0; a < 360; a++) {
            let x = this.size * sin(a) + this.halfWidth - random(5);
            let y = this.size * cos(a) + this.halfHeight + random(10);
            point = new Point(x, y, ellipseSize);
            point.display();
            // point.move();
        }
    }
}

class Point {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 1;
    }

    display() {
        ellipse(this.x, this.y, this.size);
    }

    move() {
        this.x += (-this.speed, this.speed);
        this.y += (-this.speed, this.speed);
    }
}
