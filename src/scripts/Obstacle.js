const OBSTACLES = [
  'seal',
  'fire-pit',
  'person'
];

export default class Obstacle {
  constructor(context) {
    const idx = Math.floor(Math.random() * OBSTACLES.length);
    this.type = OBSTACLES[idx];
    this.context = context;
    this.posX = 800;
    this.drawOne = this.drawOne.bind(this);
    this.draw = this.draw.bind(this);
    this.img = new Image();
    this.img.src = `./src/images/${this.type}.png`;
    this.y = Math.floor(Math.random() * 380) + 100;

  }

  draw() {
    this.context.clearRect(this.posX, this.y, 30, 30);
    this.drawOne();
    
    if (this.posX > -30) {

      requestAnimationFrame(this.draw)
    } else {
      this.context.clearRect(this.posX, this.y, 30, 30);
    }
  }

  drawOne() {
    this.context.drawImage(this.img, this.posX -= 1, this.y);
  }

  // static generate(ctx) {
  //   const obs = new Obstacle(ctx);
  //   return obs;
  // }

};
