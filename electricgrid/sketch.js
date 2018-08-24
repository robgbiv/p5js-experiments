const gridSize = 10;
const gridGap = 10;
let walker;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(40, 44, 52);
  // var gridsX = windowWidth / gridSize;
  // var gridsY = windowHeight / gridSize;

  // for (var i = 0; i < gridsX; i++) {
  //   for (var j = 0; j < gridsY; j++) {
  //     noFill();
  //     stroke('rgba(255,255,255,0.05)');
  //     rect(i * gridGap, j * gridGap, gridSize, gridSize);
  //   }
  // }
  frameRate(1);
  walker = new Walker();
}

function draw() {
  walker.render();
  walker.step();
  // console.log('wow', { walker });
}

class Walker {
  constructor() {
    this.x = 0;
    this.y = height;
    this.steps = (int(random(0, 15)) * 2) % 100;
    this.stepsUp = this.steps / 2;
    this.stepsRight = this.steps / 2;
    this.xTarget = windowWidth;
    this.yTarget = 0;
    this.xAvgDistance = floor(this.xTarget / this.stepsRight);
    this.yAvgDistance = floor(this.y / this.stepsUp);
    console.log(this);
    console.log({ width, height });
  }

  render() {
    console.log('drawing...');
    stroke(255);
    // fill(255);
    point(this.x, this.y);
  }

  step() {
    let choice = random(1);
    // console.log({ choice });
    if (choice < 0.5) {
      // go right
      this.x += this.xAvgDistance;
    } else {
      // go left
      this.y += this.yAvgDistance;
    }
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }
}
