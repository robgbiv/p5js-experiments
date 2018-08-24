let walker;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(40, 44, 52);
  var gridSize = 10;
  var gridGap = 10;
  var gridsX = window.innerWidth / gridSize;
  var gridsY = window.innerHeight / gridSize;

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
    this.x = width / 2;
    this.y = height / 2;
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
