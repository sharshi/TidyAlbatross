import StartScreen from "./start_screen";

export default class Background {
  constructor(canvas, ctx, image) {
    this.bgPos = 0;
    // this.speed = speed;
    this.canvas = canvas;
    this.ctx = ctx;
    this.image = image;
    this.draw = this.draw.bind(this);
    this.startScreen = new StartScreen(this.canvas, this.ctx)

    this.started = false;
  }

  draw(speed) {
    let beachImage = new Image(480, 480);
    beachImage.src = `./src/images/${this.image}.png`;
    beachImage.addEventListener('load', () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let tileBg = this.ctx.createPattern(beachImage, 'repeat');
      this.ctx.fillStyle = tileBg;
      this.ctx.translate(-this.bgPos, 0);
      this.ctx.fillRect(this.bgPos, 0, this.canvas.width, this.canvas.height);
      this.ctx.translate(this.bgPos, 0);
      this.bgPos += speed;
      if (this.image === 'sand' && !this.started) {
        this.started = true;
        this.startScreen.draw();
      }
    }, false);
  }
};
