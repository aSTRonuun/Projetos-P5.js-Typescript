let wolf_img_l: p5.Image;
let wolf_img_r: p5.Image;
let rabbit_img: p5.Image;
let board_img: p5.Image;


let wolf: Entity;
let rabbit: Entity;
let board: Board;

function loadImg(path: string): p5.Image {
  return loadImage(
    path,
    () => console.log("Loading " + path + " ok"),
    () => console.log("Loading " + path + " error")
  );
}

function preload() {
  wolf_img_r = loadImg("../sketch/assets/lobor.png");
  wolf_img_l = loadImg("../sketch/assets/lobol.png");
  rabbit_img = loadImg("../sketch/assets/coelho.png");
  board_img = loadImg("../sketch/assets/grama.jpg");
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    wolf.x--;
    wolf.image = wolf_img_l;
  } else if(keyCode === RIGHT_ARROW){
    wolf.x++;
    wolf.image = wolf_img_r;
  } else if(keyCode === UP_ARROW){
    wolf.y--;
  } else if(keyCode == DOWN_ARROW){
    wolf.y++;
  }
}

function setup() {
  let size = 100;
  wolf = new Entity(2, 2, size, wolf_img_r);
  rabbit = new Entity(1, 1, size, rabbit_img);
  board = new Board(6, 6, size, board_img);
  createCanvas(board.nc * size, board.nl * size);
}

function draw() {
  board.draw();
  wolf.draw();
  rabbit.draw();
  
}