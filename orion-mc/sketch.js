// An homage to Victor Vasarely
// https://theartstack.com/artist/victor-vasarely/orion-mc

let frameSize, tileSize, tileWidth;

let tiles = [];
let shapes = [];

// const tileGradient = [
//   [32, 32, 32],
//   [64, 64, 64],
//   [96, 96, 96],
//   [128, 128, 128],
//   [160, 160, 160],
//   [192, 192, 192],
//   [224, 224, 224],
//   [255, 255, 255]
// ];

// const shapeColours = [
//   [148, 0, 211],
//   [75, 0, 130],
//   [0, 0, 255],
//   [0, 255, 0],
//   [255, 255, 0],
//   [255, 127, 0],
//   [255, 0, 0]
// ];

const tileGradient = [
  [40, 35, 30],
  [61, 57, 51],
  [100, 92, 86],
  [129, 119, 113],
  [153, 142, 131],
  [183, 170, 154],
  [209, 195, 174],
  [227, 211, 187],
]

const shapeColours = {
  "darkblue": [0, 59, 89],
  "blue": [35, 111, 167],
  "lightblue": [54, 132, 195],
  "darkgreen": [58, 78, 48],
  "midgreen": [66, 133, 76],
  "lightgreen": [46, 197, 95],
  "orange": [255, 110, 8],
  "lightorange": [255, 161, 0],
  "yellow": [255, 220, 0],
  "darkred": [172, 62, 51],
  "midred": [221, 61, 36],
  "red": [255, 60, 30],
  "darkpurple": [128, 56, 91],
  "purple": [121, 76, 126],

}

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  canvas = c.canvas;
  background(0);

  tilesPerSide = 20;
  // frameSize = parseInt(windowHeight);
  frameSize = Math.round((windowHeight / tilesPerSide) * tilesPerSide);
  tileSize = frameSize / tilesPerSide;
  totalTiles = tilesPerSide * tilesPerSide;

  // let frameStartX = windowWidth / 2 - frameSize / 2;
  let windowWidthRounded = Math.round(
    (windowWidth / 2 / tilesPerSide) * tilesPerSide
  );
  let frameStartX = windowWidthRounded - frameSize / 2;
  let frameStartY = 0;

  let tileStartX = frameStartX;
  let tileStartY = frameStartY;

  // console.log("!!!", {
  //   frameSize,
  //   tilesPerSide,
  //   tileSize,
  //   totalTiles,
  //   windowWidthRounded,
  //   frameStartX,
  //   frameStartY,
  //   tileStartX,
  //   tileStartY
  // });

  for (let i = 0; i < tilesPerSide; i++) {
    for (let j = 0; j < tilesPerSide; j++) {
      // let tileColour = tileGradient[(i + j) % tileGradient.length];
      let tileColour =
        tileGradient[Math.floor(Math.random() * tileGradient.length)];
      let tile = new Tile(
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
    let shapeSize = this.size - Math.floor(Math.random() * 40);
    let keys = Object.keys(shapeColours)
    let shapeColour = shapeColours[keys[ keys.length * Math.random() << 0]];
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
    let shouldRotate = Math.random() <= 0.3;
    if (shouldRotate) {
      push();
      translate(this.x, this.y);
      let randomRotation = Math.random() * 25;
      rotate(PI / 3.0);
      let wideOrTall = Math.random() <= 0.5;
      let randomSize = Math.random() * 20;
      wideOrTall
        ? ellipse(0, 0, this.size - randomSize, this.size)
        : ellipse(0, 0, this.size, this.size - randomSize);
      pop();
    } else {
      ellipse(this.x, this.y, this.size);
    }
  }
}

function draw() {
  // put drawing code here
}
