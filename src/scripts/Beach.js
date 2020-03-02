import Background from './Background';

export default class Beach {
  constructor() {
    this.speed = 1;
  }

  init() {
    const canvasSand = document.getElementById("canvas-sand");
    const canvasWater = document.getElementById("canvas-water");
    canvasSand.width = 800;
    canvasSand.height = 480;
    canvasWater.width = 800;
    canvasWater.height = 480;
    const ctxSand = canvasSand.getContext("2d");
    const ctxWater = canvasWater.getContext("2d");
    const backgroundWater = new Background(this.speed + 0.2, canvasWater, ctxWater, 'water')
    const backgroundSand = new Background(this.speed, canvasSand, ctxSand, 'sand')
    requestAnimationFrame(backgroundWater.drawOne);
    requestAnimationFrame(backgroundSand.drawOne);

    const gameCanvas = document.getElementById("canvas-game");
    let started = false;
    gameCanvas.addEventListener('click', () => {
      if (!started) {
        this.render(backgroundWater, backgroundSand);
        started = true;
      }
    });
  }


  render(backgroundWater, backgroundSand) {
    requestAnimationFrame(backgroundWater.draw);
    requestAnimationFrame(backgroundSand.draw);
  }
};
