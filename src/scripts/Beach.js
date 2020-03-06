import Background from './background';

export default class Beach {
  constructor() {
    this.width = 800;
    this.height = 480;

    this.canvasSand = document.getElementById("canvas-sand");
    this.canvasWater = document.getElementById("canvas-water");
    this.canvasSand.width = 800;
    this.canvasSand.height = 480;
    this.canvasWater.width = 800;
    this.canvasWater.height = 480;
    this.ctxSand = this.canvasSand.getContext("2d");
    this.ctxWater = this.canvasWater.getContext("2d");
    this.backgroundWater = new Background(this.canvasWater, this.ctxWater, 'water')
    this.backgroundSand = new Background(this.canvasSand, this.ctxSand, 'sand');
    this.draw = this.draw.bind(this);
  }

  init(speed) {
    this.backgroundWater.started = false;
    this.backgroundSand.started = false;
    this.draw(speed);
  }

  draw(speed) {
    this.backgroundWater.draw(speed);
    this.backgroundSand.draw(speed);
  }
};
