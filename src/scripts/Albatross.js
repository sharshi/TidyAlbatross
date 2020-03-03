export default class Albatross {
  constructor(ctx, cnvs) {
    this.ctx = ctx;
    this.canvas = cnvs;
    this.pos = 300;
    this.draw = this.draw.bind(this);
    this.al = new Image();
    this.al.src = './src/images/al-web.png';
    this.speed = 0;
  }

  init() {
    document.addEventListener("keydown", e => {
      let key = e.keyCode;
      if (key === 38 || key === 40) e.preventDefault();
      this.move(key);
      this.draw();
      console.log(this.pos += this.speed);
    });

    document.addEventListener("keyup", e => {
      this.speed = 0;
    })
  }

  draw() {
    this.pos += this.speed;
    this.ctx.clearRect(100, this.pos - 2, 65, 40);
    this.ctx.drawImage(this.al, 100, this.pos);
    requestAnimationFrame(this.draw);
  }

  move(key) {
    switch (key) {
      case 40: // down
        // this.pos = this.pos + 12;
        this.speed = 1;
        break;
      case 38: // up
        // this.pos = this.pos - 12;
        this.speed = -1;
        break;
      default:
        break;
    }
  }
};
