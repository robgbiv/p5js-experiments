const gridSize = 10;
const gridGap = 10;
let walker;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(40, 44, 52);
  var gridsX = windowWidth / gridSize;
  var gridsY = windowHeight / gridSize;

  for (var i = 0; i < gridsX; i++) {
    for (var j = 0; j < gridsY; j++) {
      noFill();
      stroke('rgba(255,255,255,0.05)');
      rect(i * gridGap, j * gridGap, gridSize, gridSize);
    }
  }
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.render();
}

class Walker {
  constructor() {
    this.x = width / gridSize / 2;
    this.y = height / gridSize / 2;
  }

  render() {
    // stroke(255);
    // point(this.x, this.y);
    fill(255);
    rect(this.x, this.y, 10, 10);
  }

  step() {
    let choice = floor(random(4));
    let r = random(1);
    // A 40% of moving to the right!
    if (r < 0.4) {
      this.x += 10;
    } else if (r < 0.6) {
      this.x -= 10;
    } else if (r < 0.8) {
      this.y += 10;
    } else {
      this.y -= 10;
    }
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }
}
