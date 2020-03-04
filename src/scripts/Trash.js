const TRASH = [
  'bottle',
  'bag'
];

export default class Trash {
  constructor() {
    const idx = Math.floor(Math.random() * TRASH.length);
    this.type = TRASH[idx];
    this.posX = 800;
    this.img = new Image();
    this.img.src = `./src/images/${this.type}.png`;
    this.y = Math.floor(Math.random() * 380) + 100;
  }

  draw(context) {
    context.drawImage(this.img, this.posX -= 1, this.y);
  }


  static generate(context) {
    return new Trash(context);
  }

};
