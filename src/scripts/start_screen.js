export default class StartScreen {
  constructor(cnvs, ctx) {
    this.cnvs = cnvs;
    this.ctx = ctx;
  }

  draw() {
    setTimeout(() => {
      this.ctx.textAlign = "center";
      this.ctx.fillStyle = "#3400cd";
      this.ctx.font = "bold 20px Arial";
      const highScore = localStorage.getItem('highScore');

      if (highScore) {
        this.ctx.fillText(`High Score: ${highScore}`, this.cnvs.width / 2, 500);
      }
    }, 500)
  }
};
