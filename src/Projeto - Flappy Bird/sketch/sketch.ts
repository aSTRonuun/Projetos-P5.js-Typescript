let bird:Bird;
let pipes:Pipe[] = [];

let bird_img:p5.Image;
let pipe_img_bottom:p5.Image;
let pipe_img_top:p5.Image;
let background_img:p5.Image;

function loadImg(path: string): p5.Image {
  return loadImage(
    path,
    () => console.log("Loading " + path + " ok"),
    () => console.log("Loading " + path + " error")
  );
}

function preload() {
  bird_img = loadImg("../sketch/assets/bird.png");
  pipe_img_bottom = loadImg("../sketch/assets/pipe_bottom.png");
  pipe_img_top = loadImg("../sketch/assets/pipe_top.png");
  background_img = loadImg("../sketch/assets/background.png")
}
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  bird = new Bird(bird_img);
  pipes.push(new Pipe(pipe_img_top, pipe_img_bottom));
}

function draw() {
  print_background();
  bird.draw();   
  bird.update();

  addPipe();
  
  for(let i=pipes.length-1; i>= 0; i--){
    pipes[i].draw();
    pipes[i].update();

    if(pipes[i].hit(bird)) {
      console.log("HIT");
    }

    if(pipes[i].offescreen()) {
      pipes.splice(i, 1);
    }
  }
}

function print_background():void{
  image(background_img, 0,0, windowWidth, windowHeight);
}

function addPipe():void {
  if(frameCount % 100 == 0){
    pipes.push(new Pipe(pipe_img_top, pipe_img_bottom));
  }
}

function keyPressed():void{
  if(key === ' '){
    bird.up();
  }
}