class Board {
    public nc: number;
    public nl: number;
    public step: number;
    public background: p5.Image;

    constructor(x: number, y: number, step: number, background: p5.Image) {
        this.nc = x;
        this.nl = y;
        this.step = step;
        this.background = background;
    }

    draw():void {
        image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
        for(let x=0; x<this.nc; x++){
            for(let y=0; y<this.nl; y++){
                noFill();
                stroke(0);
                strokeWeight(2);
                rect(x * this.step, y * this.step, this.step, this.step);
            }
        }
    }
}