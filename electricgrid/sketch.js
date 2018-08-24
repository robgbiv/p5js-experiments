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
}

function draw() {
  // put drawing code here
}
