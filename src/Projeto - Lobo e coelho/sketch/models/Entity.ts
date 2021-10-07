class Entity {
    x: number;
    y: number;
    step: number;
    image: p5.Image;

    constructor(x: number, y: number, step: number, image: p5.Image) {
        this.x = x;
        this.y = y;
        this.step = step;
        this.image = image;
    }

    public draw(): void {
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    }
}