import Albatross from './Albatross';
import Beach from './Beach';
import Obstacle from './Obstacle';
import Trash from './Trash';
import Background from './Background';

export default class Game {
  constructor(speed, canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  init() {
    const albatross = new Albatross(this.ctx, this.canvas);

    albatross.draw();
    albatross.init();
  }

};
