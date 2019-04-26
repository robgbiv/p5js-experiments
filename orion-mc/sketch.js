// An homage to Victor Vasarely
// https://theartstack.com/artist/victor-vasarely/orion-mc

let frameSize, tileSize, tileWidth;

let tiles = [];
let shapes = [];

const tileGradient = [
  [32, 32, 32],
  [64, 64, 64],
  [96, 96, 96],
  [128, 128, 128],
  [160, 160, 160],
  [192, 192, 192],
  [224, 224, 224],
  [255, 255, 255]
];

const shapeColours = [
  [148, 0, 211],
  [75, 0, 130],
  [0, 0, 255],
  [0, 255, 0],
  [255, 255, 0],
  [255, 127, 0],
  [255, 0, 0]
];

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  canvas = c.canvas;
  background(0);

  frameSize = windowHeight;
  tilesPerSide = 20;
  tileSize = frameSize / tilesPerSide;
  totalTiles = tileSize * tileSize;

  let frameStartX = windowWidth / 2 - frameSize / 2;
  let frameStartY = 0;

  let tileStartX = frameStartX;
  let tileStartY = frameStartY;

  for (let i = 0; i < tilesPerSide; i++) {
    for (let j = 0; j < tilesPerSide; j++) {
      // let tileColour = tileGradient[(i + j) % tileGradient.length];
      let tileColour =
        tileGradient[Math.floor(Math.random() * tileGradient.length)];
      tile = new Tile(
        i * tileSize + frameStartX,
        j * tileSize + frameStartY,
        tileSize,
        color(tileColour)
      );
      tiles.push(tile);
      tile.display();
      tileStartX += tileSize;
      tileStartY += tileSize;
    }
  }
}

class Tile {
  constructor(x, y, size, colour) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.colour = colour;
  }

  display() {
    noStroke();
    fill(this.colour);
    rect(this.x, this.y, this.size, this.size);
    let shapeX = this.x + this.size / 2;
    let shapeY = this.y + this.size / 2;
    let shapeSize = this.size - Math.floor(Math.random() * 100 + 10);
    let shapeColour =
      shapeColours[Math.floor(Math.random() * shapeColours.length)];
    let shape = new Shape(shapeX, shapeY, shapeSize, shapeColour);
    shapes.push(shape);
    shape.display();
  }
}

class Shape {
  constructor(x, y, size, colour) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.colour = colour;
  }

  display() {
    noStroke();
    fill(this.colour);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
  }
}

function draw() {
  // put drawing code here
}
