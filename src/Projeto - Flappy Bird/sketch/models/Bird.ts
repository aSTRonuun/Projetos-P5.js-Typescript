class Bird {
    x: number;
    y: number;
    gravity:number;
    velocity:number;
    lift:number;

    constructor(x:number){
        this.x = x;
        this.y = height/2;
        this.gravity = 0.3; 
        this.lift = -10;
        this.velocity = 0;
    }

    draw():void {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    update():void{
        this.velocity += this.gravity;
        this.y += this.velocity;    
        this.velocity *= 0.9;
        
        if(this.y > height){
            this.y = height;
            this.velocity = 0;
        }

        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
    }

    up():void {
        this.velocity += this.lift;
    }
    
}