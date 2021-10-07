const NL:number = 10;
const NC:number = 10;

let snake:Snake;


const LADO:number = 50;
let snake_x:number = 0;
let snake_y:number = 0;
let snake_vx:number = 0;
let snake_vy:number = 0;
let snake_color: p5.Color;
let cell_color: p5.Color;
let timer:number = 0;

let food_x:number = 0;
let food_y:number = 0;
let food_color: p5.Color;
let eat_food_count = 0;

function count_food() {
  if(snake.snake_x == food_x && snake.snake_y == food_y){
    eat_food_count++;
    food_generate();
  }
}

function food_generate() {
  food_x = Math.floor(random(0, NC));
  food_y = Math.floor(random(0, NL));
}

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
  if(snake.snake_x == NC)
    snake.snake_x = 0;
  if(snake.snake_y == NL)
    snake.snake_y = 0;
  if(snake.snake_x == -1)
    snake.snake_x = NC - 1;
  if(snake.snake_y == -1)
    snake.snake_y = NL - 1;
}

function key_pressed(){
  if(keyCode === LEFT_ARROW){
      snake.snake_vx = -1;
      snake.snake_vy = 0; 
  }else if(keyCode === RIGHT_ARROW){
      snake.snake_vx = 1;
      snake.snake_vy = 0;
  }else if(keyCode === UP_ARROW){
      snake.snake_vx = 0;
      snake.snake_vy = -1;
  }else if(keyCode === DOWN_ARROW){
      snake.snake_vx = 0;
      snake.snake_vy = 1;
  }
}

function snake_wakl(){
  if(frameCount - timer > 10) {
      timer = frameCount;
      snake.snake_x += snake.snake_vx;
      snake.snake_y += snake.snake_vy;
  }
}

function setup() {

  createCanvas(NC * LADO, NL * LADO);
  snake = new Snake(color("green"));

  frameRate(30);
  cell_color = color("gray");
  food_color = color("magenta");
  food_generate();
}

function draw() {
  snake_wakl();
  key_pressed();
  snake_limit_loop();
  draw_mat(cell_color);
  draw_cel(food_x, food_y, food_color);
  draw_cel(snake.snake_x, snake.snake_y, snake.snake_color);
  count_food();

  fill("black");
  textSize(25);
  text(eat_food_count, 10, 30)

}