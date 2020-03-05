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
      if (this.image === 'water' && !this.started) {
        this.ctx.font = "30px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "#ffdc93";
        this.ctx.fillText('Tidy Albatross', this.canvas.width / 2, 30);
        // this.ctx.strokeText('Tidy Albatross', this.canvas.width / 2, 30);
      }
      if (this.image === 'sand' && !this.started) {

        this.started = true;
        this.startScreen.draw();
      }
    }, false);
  }
};
