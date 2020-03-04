import Background from './Background';

export default class Beach {
  constructor() {
    this.speed = 1;
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
    this.backgroundWater = new Background(this.speed + 0.2, this.canvasWater, this.ctxWater, 'water')
    this.backgroundSand = new Background(this.speed, this.canvasSand, this.ctxSand, 'sand');
    this.draw = this.draw.bind(this);
  }

  init() {
    this.draw();
  }

  draw() {
    this.backgroundWater.draw();
    this.backgroundSand.draw();
  }
};
