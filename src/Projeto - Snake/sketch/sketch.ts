const NL:number = 10;
const NC:number = 10;


const LADO:number = 50;
let snake_x:number = 4;
let snake_y:number = 1;
let snake_vx:number = 0;
let snake_vy:number = 0;
let snake_color: p5.Color;
let cell_color: p5.Color;
let timer:number = 0;

function draw_cel(x:number, y:number, color: p5.Color){
  noStroke();
  fill(color);
  square(x * LADO + 1, y * LADO + 1, LADO - 1);
}

function draw_mat(color: p5.Color) {
  fill(155);
  for(let c = 0; c < NC; c++){
    for(let l = 0; l < NL; l++){
      draw_cel(c, l, color);
    }
  }
}

function snake_limit_loop() {
  if(snake_x == NC)
    snake_x = 0;
  if(snake_y == NL)
    snake_y = 0;
  if(snake_x == -1)
    snake_x = NC - 1;
  if(snake_y == -1)
    snake_y = NL - 1;
}

function keyPressed() {
  if(keyCode === LEFT_ARROW){
    snake_vx = -1;
    snake_vy = 0; 
  }else if(keyCode === RIGHT_ARROW){
    snake_vx = 1;
    snake_vy = 0;
  }else if(keyCode === UP_ARROW){
    snake_vx = 0;
    snake_vy = -1;
  }else if(keyCode === DOWN_ARROW){
    snake_vx = 0;
    snake_vy = 1;
  }
}

function snake_walk(){
  if(frameCount - timer > 10) {
    timer = frameCount;
    snake_x += snake_vx;
    snake_y += snake_vy;
  }
}

function setup() {

  createCanvas(NC * LADO, NL * LADO);
  frameRate(30);
  snake_color = color("pink");
  cell_color = color("gray");
}

function draw() {
  snake_walk();
  snake_limit_loop();
  draw_mat(cell_color);
  draw_cel(snake_x, snake_y, snake_color);

  fill(0);
  textSize(25);
  text(frameCount, 10, 30);
}