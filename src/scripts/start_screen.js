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


      // avoid
      this.ctx.strokeStyle = "#3400cd";
      this.ctx.strokeRect(200, 400, 150, 80);

      this.ctx.fillStyle = "#3400cd";
      this.ctx.font = "bold 20px Arial";
      this.ctx.fillText('Avoid', 274, 424);
  
      seal.drawOne(this.ctx, 210, 434, 'seal');
      firePit.drawOne(this.ctx, 255, 434, 'fire-pit');
      person.drawOne(this.ctx, 300, 434, 'person');
  
  
      // pick up

      this.ctx.strokeStyle = "#3400cd";
      this.ctx.strokeRect(660, 400, 150, 80);

      this.ctx.fillStyle = "#3400cd";
      this.ctx.font = "bold 20px Arial";
      this.ctx.fillText('Collect', 734, 424);
  
      bottle.drawOne(this.ctx, 670, 434, 'bottle');
      bag.drawOne(this.ctx, 715, 434, 'bag');
      beachBall.drawOne(this.ctx, 760, 434, 'beach-ball');

      const highScore = localStorage.getItem('highScore');

      if (highScore) {
        this.ctx.fillText(`High Score: ${highScore}`, this.cnvs.width / 2, 500);
      }
    }, 500)
  }
};
