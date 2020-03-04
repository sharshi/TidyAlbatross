import Albatross from './Albatross';
import Beach from './Beach';
import Obstacle from './Obstacle';
import Trash from './Trash';

export default class Game {
  constructor(speed, canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.trash = [];
    this.obstacles = [];
    this.albatross = new Albatross(this.ctx, this.canvas);
    this.draw = this.draw.bind(this);
    this.beach = new Beach();
    this.addObstacle = this.addObstacle.bind(this);
    this.addTrash = this.addTrash.bind(this);
  }

  init() {
    this.albatross.init();
    this.draw();
    this.addObstacle();
    this.addTrash();
    this.beach.init();
  }

  addObstacle() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 2000;
    setTimeout(() => {
      this.obstacles = this.obstacles.concat(Obstacle.generate(this.ctx));
      this.addObstacle();
    }, rand);
  }

  addTrash() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 2000;
    setTimeout(() => {
      this.trash = this.trash.concat(Trash.generate(this.ctx));
      this.addTrash();
    }, rand);
  }

  draw() {
    this.beach.draw();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.obstacles.forEach((obs, i) => {
      if (obs.posX < -30) {
        delete this.obstacles[i];
      }
      obs.draw(this.ctx);
    })
    this.obstacles = this.obstacles.filter(obs => obs)

    this.trash.forEach((trsh, i) => {
      if (trsh.posX < -30) {
        delete this.trash[i];
      }
      trsh.draw(this.ctx);
    })
    this.trash = this.trash.filter(trsh => trsh)

    this.albatross.draw();
    requestAnimationFrame(this.draw);
  }




  

};
