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

    let started = false;
    this.canvas.addEventListener('click', () => {
      if (!started) {
        setInterval(() => {
          const obs = new Obstacle(this.ctx);
          obs.draw();
        }, 2000);
        started = true;
      }
    });

    albatross.init();
  }




  

};
