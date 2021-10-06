const NL:number = 10;
const NC:number = 10;


const LADO:number = 50;
let snake_x:number = 4;
let snake_y:number = 1;
let snake_color: p5.Color;
let cell_color: p5.Color;

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
  if(keyCode === LEFT_ARROW)
    snake_x -= 1; 
  else if(keyCode === RIGHT_ARROW)
    snake_x += 1;
  else if(keyCode === UP_ARROW)
    snake_y -= 1;
  else if(keyCode === DOWN_ARROW)
    snake_y += 1;
}


function setup() {

  createCanvas(NC * LADO, NL * LADO);

  snake_color = color("pink");
  cell_color = color("gray");
}

function draw() {
  snake_limit_loop();
  draw_mat(cell_color);
  draw_cel(snake_x, snake_y, snake_color);
}