let bird:Bird;

function setup() {
  createCanvas(400, 600);
  bird = new Bird(64);
}


function draw() {
  background(0);
  bird.draw();   
  bird.update();
}

function keyPressed(){
  if(key === ' '){
    bird.up();
  }
}