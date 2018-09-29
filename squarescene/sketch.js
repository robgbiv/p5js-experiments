function setup() {
  // createCanvas(windowWidth, windowHeight);
  var c = createCanvas(2560, 1440);
  background(40, 44, 52);

  var squaresPerRow = 5;
  var marginPerSquare = 20;
  var totalWidth = 800;
  var squareWidth = (totalWidth / squaresPerRow) - (marginPerSquare * squaresPerRow);

  var squareX = random(400);
  var squareY = random(400);

  for (var i = 0; i < squaresPerRow; i++) {
    for (var j = 0; j < squaresPerRow; j++) {
      square = new Square(j * squareWidth, i * squareWidth + 300, squareY);
      // square = new Square(squareWidth, j * squareWidth, i * squareWidth);
      square.display();
      squareX += squareWidth;
      squareY += squareWidth;
    }
  }

  // square = new Square(400, 400, 400);
  // square.display();

  // saveCanvas(c, 'weird-coloursquares', 'png');
}

function draw() {
  // square.display();
}

function Square(size, x, y) {
  this.size = size;
  this.x = x;
  this.y = y;
  this.fillColours = [
    [
      [105,210,231],
      [167,219,216],
      [224,228,204],
      [243,134,48],
      [250,105,0]
    ],
    [
      [89,79,79],
      [84,121,128],
      [69,173,168],
      [157,224,173],
      [229,252,194]
    ],
    [
      [63,184,175],
      [127,199,175],
      [216,216,167],
      [255,158,157],
      [255,61,127]
    ]
  ]
  this.palette = this.fillColours[Math.floor(Math.random()*this.fillColours.length)];

  this.display = function() {
    noFill();
    stroke(255);
    var numPixels = 10;
    var pixelSize = this.size / 10;
    // rect(this.x, this.y, this.size, this.size);
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        // fill(random(255));
        var fillColour = this.palette[Math.floor(Math.random()*this.palette.length)];
        fill(fillColour);
        noStroke()
        rect(j * pixelSize + x, i * pixelSize + y, pixelSize, pixelSize);
      }
    }
  }
}
