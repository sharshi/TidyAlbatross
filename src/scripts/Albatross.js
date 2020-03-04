export default class Albatross {
  constructor(ctx, cnvs) {
    this.ctx = ctx;
    this.canvas = cnvs;
    this.pos = 300;
    this.draw = this.draw.bind(this);
    this.al = new Image();
    this.al.src = './src/images/al-web.png';
    this.speed = 0;
    this.maxHeight = 100;
    this.minHeight = 440;
  }

  init() {
    document.addEventListener("keydown", e => {
      let key = e.keyCode;
      if (key === 38 || key === 40) e.preventDefault();
      this.move(key);
      this.draw();
    });

    document.addEventListener("keyup", e => {
      this.speed = 0;
    })
  }

  draw() {
    const tooHigh = this.pos === this.maxHeight && this.speed === -5;
    const tooLow = this.pos === this.minHeight && this.speed === 5;
    if (tooHigh || tooLow) {
    } else {
      this.pos += this.speed;
    }
    this.ctx.drawImage(this.al, 100, this.pos);
  }

  move(key) {
    switch (key) {
      case 40: // down
        this.speed = 5;
        break;
      case 38: // up
        this.speed = -5;
        break;
      default:
        break;
    }
  }
};
