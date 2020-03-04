const OBSTACLES = [
  'seal',
  'fire-pit',
  'person'
];

export default class Obstacle {
  constructor() {
    const idx = Math.floor(Math.random() * OBSTACLES.length);
    this.type = OBSTACLES[idx];
    this.posX = 800;
    this.img = new Image();
    this.img.src = `./src/images/${this.type}.png`;
    this.y = Math.floor(Math.random() * 380) + 100;
    this.hit = false;
  }

  draw(context) {
    context.drawImage(this.img, this.posX -= 1, this.y);
  }


  static generate(context) {
    return new Obstacle(context);
  }

};
