let rectPositions = [];
let palette;
let numRows, rowHeight;

function setup() {
  // colorMode(HSB, 100);
  createCanvas(windowWidth, windowHeight);
  numRows = 5;
  rowHeight = windowHeight / numRows;
  background(0);
  palette = [color(0, 0, 255), color(255, 255, 255), color(0, 0, 0)];
  generateRows();
}

function draw() {
  // put drawing code here
}

function generateRows() {
  let startY = 0;
  for (let i = 0; i < 5; i++) {
    generateRow(i, 0, startY);
    startY += rowHeight;
  }
}

function generateRow(iteration, startX, startY) {
  let x = startX;
  let y = startY;
  let widthRemaining = windowWidth;
  rectPositions.push([]);
  for (let i = 0; i < 5; i++) {
    let rectWidth = int(random(widthRemaining));
    let rectHeight = rowHeight;
    let color = palette[Math.floor(Math.random() * palette.length)];
    noStroke();
    fill(color);
    // (i !== 4) ? rect(x, y, rectWidth, 100) : rect(x, y, widthRemaining, 100);
    rect(x, y, widthRemaining, rectHeight);
    widthRemaining -= rectWidth;
    x += rectWidth;
    rectPositions[iteration].push({ x: x, y: y, w: rectWidth, h: rectHeight });
  }
  console.log("!!!", rectPositions);
}
