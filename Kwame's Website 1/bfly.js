let mic;
let ground;
let stars;
let sunX = 0;

let myInt = 52;
let yoff = 0;
const dots = [];
var x = 280;
var y = 280;
function setup() {
  createCanvas(500, 500);
  frameRate(10);
  mic = new p5.AudioIn();
  mic.start();
  stars = createGraphics(width, height);
  stars.background(32, 0, 64);
  for (let i = 0; i < 1000; i++) {
    stars.stroke(255);
    stars.strokeWeight(2);
    stars.point(random(width), random(height));
  }
  ground = createGraphics(width, height * 0.25);
  ground.background(32);
  for (let i = 0; i < 1000; i++) {
    ground.noStroke();
    ground.fill(0, random(50), 0);
    ground.square(random(ground.width), random(ground.height), 10);
  }
}

function draw() {
  image(stars, 0, 0);