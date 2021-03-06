class Buble {
  x: number;
  y: number;
  letter: string;
  speed: number;

  static radius: number = 20;
  alive: boolean = true;

  constructor(x: number, y: number, letter: string, speed: number) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.speed = speed;
  }

  update():void {
    this.y += this.speed; 
  }

  draw():void {
    fill(255);
    stroke(255);
    circle(this.x, this.y, 2 * Buble.radius);
    fill(0);
    stroke(0);
    textSize(15);
    text(this.letter, this.x - 5, this.y + 5);
  }
}

class Board {
  bubbles: Buble[] = [];
  timeout: number = 30;
  timer: number = 0;
  hits: number = 0;
  mistakes: number = 0;

  constructor() {
  }

  update():void {
    this.checkBubbleTime();
    this.markOutSideBubbles();
    for (let bubble of this.bubbles) {
      bubble.update();
    }
    this.removeDeadBubbles();
  }

  removeByHit(code: number): void {
    for(let bubble of this.bubbles) {
      if(bubble.letter[0].toUpperCase().charCodeAt(0) == code) {
        bubble.alive = false;
        this.hits++;
        break;
      }
    }
  }

  checkBubbleTime():void {
    this.timer -= 1;
    if(this.timer <= 0) {
      this.addBubble();
      this.timer = this.timeout;
    }
  }

  markOutSideBubbles():void {
    for (let bubble of this.bubbles) {
      if(bubble.y + 2 * Buble.radius >= height) {
        bubble.alive = false;
        this.mistakes++;
      }
    }
  }

  removeDeadBubbles():void {
    let vivas: Buble[] = [];
    for (let bubble of this.bubbles) {
      if(bubble.alive) {
        vivas.push(bubble);
      }
    }
    this.bubbles = vivas;
  }

  addBubble():void {
    let x = random(0, width - 2 * Buble.radius);
    let y = -2 * Buble.radius;
    let letter = random(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    let speed = random(1, 5);
    let newBubble = new Buble(x, y, letter, speed);
    this.bubbles.push(newBubble);
  }

  draw():void {
    stroke("whire");
    fill("whire");
    textSize(30);
    text("Hits: " + this.hits + " Mistakes: " + this.mistakes, 30, 30);

    for (let bubble of this.bubbles) {
      bubble.draw();
    }
  }
}

class Game {
  board:Board;
  activeState: () => void;

  constructor() {
    this.board = new Board();
    this.activeState = this.gamePlay;
  }

  gamePlay(): void {
    this.board.update();
    background(50,50,50);
    this.board.draw();
    if(this.board.mistakes > 5) {
      this.activeState = this.gameOver;
    }
  }

  gameOver(): void {
    background(255,0,0);
    fill(0);
    textSize(100);
    text("Game Over", 100, 100);
    // if(random(50) < 1) {
    //   this.activeState = this.gamePlay;
    // }
  }
}

let game: Game;

function setup() {
  createCanvas(800,600);
  frameRate(30);
  game = new Game();
}

function keyPressed() {
  game.board.removeByHit(keyCode);
}

function draw() {
  game.activeState();

}