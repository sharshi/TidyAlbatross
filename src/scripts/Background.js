export default class Background {
  constructor(speed, canvas, ctx, image) {
    this.bgPos = 0;
    this.speed = speed;
    this.canvas = canvas;
    this.ctx = ctx;
    this.image = image;
    this.draw = this.draw.bind(this);
  }

  draw() {
    let beachImage = new Image(480, 480);
    beachImage.src = `./src/images/${this.image}.png`;
    beachImage.addEventListener('load', () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let tileBg = this.ctx.createPattern(beachImage, 'repeat');
      this.ctx.fillStyle = tileBg;
      this.ctx.translate(-this.bgPos, 0);
      this.ctx.fillRect(this.bgPos, 0, this.canvas.width, this.canvas.height);
      this.ctx.translate(this.bgPos, 0);
      this.bgPos += this.speed;
    }, false);
  }
};
