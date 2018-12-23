const BLUE = '#0000ff';
const RED = '#ff0000';

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  background(40, 44, 52);

  for (let i = 0; i < 10; i++) {
    aLine = new linePair(i, i * 20);
    aLine.display();
  }
}

function linePair(iteration, length) {
  let CENTER = [window.innerWidth / 2, window.innerHeight / 2];

  this.display = function() {
    if (iteration % 2 === 0) {
      let xStart = CENTER[0] - (length / 2);
      let xEnd = xStart;
      let yStart = CENTER[1] - (length / 2);
      let yEnd = CENTER[1] + (length / 2);
      console.log('!!! even', xStart, xEnd, yStart, yEnd);
      stroke(BLUE);
      line(xStart, yStart, xEnd, yEnd);
      // }
    } else {
      let xStart = CENTER[0] - (length / 2);
      let xEnd = CENTER[0] + (length / 2);
      let yStart = CENTER[1] - (length / 2);
      let yEnd = yStart;
      console.log('!!! odd', xStart, xEnd, yStart, yEnd);
      stroke(RED);
      line(xStart, yStart, xEnd, yEnd);
    }
  }
}

function draw() {
  // put drawing code here
}
