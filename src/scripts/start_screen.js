import Obstacle from "./obstacle";
import Trash from "./trash";

export default class StartScreen {
  constructor(cnvs, ctx) {
    this.cnvs = cnvs;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = "#3400cd";
    this.ctx.font = "30px Arial"; 
    this.ctx.textAlign = "center";
    this.ctx.fillText('Click to start!', this.cnvs.width / 2, 170);

    this.ctx.fillStyle = "#3400cd";
    this.ctx.font = "20px Arial";
    this.ctx.fillText('Use the up and down arrow keys to help', this.cnvs.width / 2, 250);
    this.ctx.fillText('the albatross avoid obstacles and tidy up the beach.', this.cnvs.width / 2, 330 - 50);

    const seal = Obstacle.generate();
    const firePit = Obstacle.generate();
    const person = Obstacle.generate();

    const bottle = Trash.generate();
    const bag = Trash.generate();
    const beachBall = Trash.generate();


    // avoid
    this.ctx.fillText('AVOID', 225, 390 - 50);

    seal.drawOne(this.ctx, 170, 400 - 50, 'seal');
    firePit.drawOne(this.ctx, 210, 400 - 50, 'fire-pit');
    person.drawOne(this.ctx, 250, 400 - 50, 'person');


    // pick up
    this.ctx.fillText('COLLECT', 575, 390 - 50);

    bottle.drawOne(this.ctx, 520, 400 - 50, 'bottle');
    bag.drawOne(this.ctx, 560, 400 - 50, 'bag');
    beachBall.drawOne(this.ctx, 600, 400 - 50, 'beach-ball');

  }
};
