export default class Albatross {
  constructor(ctx, cnvs) {
    this.ctx = ctx;
    this.canvas = cnvs;
    this.pos = 300;
    this.draw = this.draw.bind(this);
  }

  init() {
    document.addEventListener("keydown", e => {
      e.preventDefault();
      let key = e.keyCode;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.move(key);
      requestAnimationFrame(this.draw);
    });
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(100, this.pos, 50, 50);
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fill();
  }

  move(key) {
    switch (key) {
      case 40: // down
        this.pos = this.pos + 24;
      case 38: // up
        this.pos = this.pos - 12;
      default:
        break;
    }
  }

};
