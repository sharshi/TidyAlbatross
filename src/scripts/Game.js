import Albatross from './albatross';
import Beach from './beach';
import Obstacle from './obstacle';
import Trash from './trash';

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
    this.handleStart = this.handleStart.bind(this);
    // logic
    this.ctx.font = "30px Arial";
    this.score = 0;

    //timeoutes
    this.trashTO;
    this.obstacleTO;

  }

  init() {
    this.score = 0;
    this.beach.init();
    this.canvas.addEventListener('click', this.handleStart);
  }

  handleStart() {
    this.albatross.init();
    this.addObstacle();
    this.addTrash();
    this.draw();
    this.canvas.removeEventListener('click', this.handleStart);
  }

  addObstacle() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 2000;
    this.obstacleTO = setTimeout(() => {
      this.obstacles = this.obstacles.concat(new Obstacle());
      this.addObstacle();
    }, rand);
  }

  addTrash() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 2000;
    this.trashTO = setTimeout(() => {
      this.trash = this.trash.concat(new Trash());
      this.addTrash();
    }, rand);
  }

  draw() {
    this.beach.draw();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.score < 0 ) {
      this.init()
      clearTimeout(this.trashTO);
      clearTimeout(this.obstacleTO);
      this.trash = [];
      this.obstacles = [];
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`game over :(`, 100, 200);
    } else {

      // GENERATE POINTS AND REMOVE ASSETS FROM CANVA
      const albatrossLocation = { 
        x: 100, 
        y: this.albatross.pos
      };
  
      this.obstacles.forEach((obs, i) => {
        if (obs.posX < -30) {
          delete this.obstacles[i];
        }
        obs.draw(this.ctx);
        if (
            albatrossLocation.y - obs.y < 30 && albatrossLocation.y - obs.y > -30 &&
            obs.posX - 100 <= 60 &&
            obs.posX - 100 >= -60 &&
            !obs.hit
          ) {
          obs.hit = true;
          this.score = this.score - 1;
        }
      })
      this.obstacles = this.obstacles.filter(obs => obs)
  
      this.trash.forEach((trsh, i) => {
        if (trsh.posX < -30) {
          delete this.trash[i];
        }
        if (
            albatrossLocation.y - trsh.y < 30 &&
            albatrossLocation.y - trsh.y > -30 && 
            trsh.posX - 100 <= 60 &&
            trsh.posX - 100 >= -5 
          ) {
          this.score = this.score + 1;
          delete this.trash[i];
        } else {
          trsh.draw(this.ctx);
        }
      })
      this.trash = this.trash.filter(trsh => trsh)
  
  
      this.albatross.draw();
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Score: ${this.score}`, 10, 40);
  
      requestAnimationFrame(this.draw);
    }

  }




  

};
