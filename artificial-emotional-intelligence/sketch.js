let emotions;
let img;

function preload() {
  let url =
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/moods.json";
  let response = loadJSON(url);
  console.log("!!!", { response });
  emotions = response;
  img = createImg(
    "https://images.unsplash.com/photo-1507149214576-19e2f76d09ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjY2ODIxfQ"
  );
}

function getImage(emotion) {
  let url =
    "https://images.unsplash.com/photo-1471017579609-0c3c8c0115f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjY2ODIxfQ";
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  image(img, 0, 0, windowWidth, windowHeight);
  loadPixels();
  console.log("!!!", emotions.moods);
  console.log('!!!', pixels)
}

function draw() {
}
