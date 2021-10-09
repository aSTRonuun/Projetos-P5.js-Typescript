class Bird {
    private _x: number;
    private _y: number;
    private gravity:number;
    private velocity:number;
    private lift:number;
    private img:p5.Image

    constructor(img: p5.Image){
        this.img = img;
        this._x = 65;
        this._y = height/2;
        this.gravity = 0.3; 
        this.lift = -10;
        this.velocity = 0;
    }

    get x():number {
        return this._x;
    }


    get y():number {
        return this._y;
    }

    draw():void {  
        fill(255);
        image(this.img, this._x, this._y, 60, 60);
    } 

    update():void{
        this.velocity += this.gravity;
        this._y += this.velocity;    
        this.velocity *= 0.9;
        
        if(this._y > height){
            this._y = height;
            this.velocity = 0;
        }

        if(this._y < 0){
            this._y = 0;
            this.velocity = 0;
        }
    }

    up():void {
        this.velocity += this.lift;
    }
    
}