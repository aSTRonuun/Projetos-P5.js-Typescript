class Snake {

    public snake_x:number;
    public snake_y:number;
    public snake_vx:number;
    public snake_vy:number;
    public snake_color: p5.Color;

    constructor(snake_color:p5.Color){
        this.snake_vx = 0;
        this.snake_vy = 0;
        this.snake_x = 5;
        this.snake_y = 3;
        this.snake_color = snake_color;
    }

    

}