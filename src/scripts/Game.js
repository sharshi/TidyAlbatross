import Albatross from './Albatross';
import Beach from './Beach';
import Obstacle from './Obstacle';
import Trash from './Trash';

export default class Game {
  constructor(speed, canvas, ctx) {
    this.bgPos = 0;
    this.speed = speed;
    this.canvas = canvas;
    this.ctx = ctx;
    this.drawBackground = this.drawBackground.bind(this);
  }

  init() {

    requestAnimationFrame(this.drawBackground) 
  }

  drawBackground() {
    var beachImage = new Image(480, 480);
    beachImage.src = './src/images/beach.png';

    beachImage.addEventListener('load', () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      var tileBg = this.ctx.createPattern(beachImage, 'repeat');
      this.ctx.fillStyle = tileBg;

      this.ctx.translate(-this.bgPos, 0);
      
      this.ctx.fillRect(this.bgPos, 0, this.canvas.width, this.canvas.height)

      this.ctx.translate(this.bgPos, 0);

      this.bgPos += this.speed;
    }, false);

    

    requestAnimationFrame(this.drawBackground) 
  }

};
