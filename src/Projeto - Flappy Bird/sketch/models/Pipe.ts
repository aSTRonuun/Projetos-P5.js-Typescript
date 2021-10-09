class Pipe {
    top:number;
    bottom:number;
    x:number;
    y:number;
    speed:number;
    hightligt:boolean;
    pipe_top:p5.Image;
    pipe_bottom:p5.Image;

    constructor(pipe_top:p5.Image, pipe_bottom:p5.Image){
        this.pipe_top = pipe_top;
        this.pipe_bottom = pipe_bottom;
        this.top = random(height/2);
        this.bottom = random(height/2);
        this.x = width;
        this.y = 20;
        this.speed = 2;
        this.hightligt = false;
    }

    draw():void {
        fill(255);
        if(this.hightligt)
            fill(255,0,0);
        image(this.pipe_top, this.x, 0, this.y + 10, this.top + 10);
        image(this.pipe_bottom, this.x, height-this.bottom, this.y + 10, this.bottom + 10);

    }
   
    update():void {  
        this.x -= this.speed;
    }

    offescreen():boolean {
        if(this.x < -this.y){
            return true
        }
        return false;
    }

    hit(bird:Bird):boolean {
        if(bird.y + 10 < this.top || bird.y + 10 > height - this.bottom + 10) {
            if(bird.x > this.x && bird.x < this.x + this.y) {
                this.hightligt = true;
                return true;
            }
        }
        this.hightligt = false;
        return false;
    }

}