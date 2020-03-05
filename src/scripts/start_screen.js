import Obstacle from "./obstacle";
import Trash from "./trash";

export default class StartScreen {
  constructor(cnvs, ctx) {
    this.cnvs = cnvs;
    this.ctx = ctx;
  }

  draw(status) {
    const seal = new Obstacle();
    const firePit = new Obstacle();
    const person = new Obstacle();

    const bottle = new Trash();
    const bag = new Trash();
    const beachBall = new Trash();

    setTimeout(() => {
      this.ctx.textAlign = "center";

      this.ctx.fillStyle = "#3400cd";
      this.ctx.font = "30px Arial";

      // this.ctx.fillText(status === 'start' ? 'Click to Start!' : 'Nice Try! Click to Start Again!', this.cnvs.width / 2, 170);

      this.ctx.fillText('Click to Start!', this.cnvs.width / 2, 170);

      this.ctx.fillStyle = "#3400cd";
      this.ctx.font = "20px Arial";
      this.ctx.fillText('Use the up and down arrow keys to help', this.cnvs.width / 2, 250);
      this.ctx.fillText('the albatross avoid obstacles and tidy up the beach.', this.cnvs.width / 2, 330 - 50);
      // avoid
      this.ctx.fillText('AVOID', 225, 390 - 50);
  
      seal.drawOne(this.ctx, 170, 400 - 50, 'seal');
      firePit.drawOne(this.ctx, 210, 400 - 50, 'fire-pit');
      person.drawOne(this.ctx, 250, 400 - 50, 'person');
  
  
      // pick up
      this.ctx.fillText('COLLECT', 575, 340);
  
      bottle.drawOne(this.ctx, 520, 350, 'bottle');
      bag.drawOne(this.ctx, 560, 350, 'bag');
      beachBall.drawOne(this.ctx, 600, 350, 'beach-ball');


      this.ctx.font = "20px Arial";
      this.ctx.textAlign = "center";
      this.ctx.fillText('By Shersheial Borisute', this.cnvs.width / 2, 450);
    }, 500)

  }
};
