let h, s, b, circleSize, ellipseSize;

let rings = [];
let points = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    const CENTER = [windowWidth / 2, windowHeight / 2];
    angleMode(DEGREES);
    colorMode(HSB, 100);
    background(0);
    h = random(100);
    s = 70;
    b = 70;
    circleSize = 1;
    ellipseSize = 1;
    for (let i = 0; i < 15; i++) {
        ring = new Ring();
        rings.push(ring);
  	    ring.display(circleSize, h);
        circleSize += 20;
        ellipseSize += 0.1;
        h = (h + 2) % 100;
    }
}

function draw() {
    background(0);
    points.forEach(point => {
        point.move();
        point.display();
    })
}

class Ring {
    constructor(hue) {
        this.halfWidth = windowWidth / 2;
        this.halfHeight = windowHeight / 2;
        this.hue = hue;
    }

    display(size, hue) {
        this.size = size;
        for (let a = 0; a < 360; a++) {
            let x = this.size * sin(a) + this.halfWidth;
            let y = this.size * cos(a) + this.halfHeight;
            point = new Point(x, y, ellipseSize, hue);
            point.display();
            points.push(point);
        }
    }
}

class Point {
    constructor(x, y, size, hue) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.hue = hue;
        this.speed = 1;
    }

    display() {
        noStroke();
        fill(this.hue, s, b);
        ellipse(this.x, this.y, this.size);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
}
