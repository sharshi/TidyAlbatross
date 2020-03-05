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
    this.onVisibilityChange = this.onVisibilityChange.bind(this);

    // logic
    this.ctx.font = "30px Arial";
    this.score = 4;
    this.gameIsActive = false;

    //timeoutes
    this.trashTO;
    this.obstacleTO;

    // overall speed
    this.speed = speed;

    // 
    document.addEventListener("visibilitychange", this.onVisibilityChange);
  }

  init() {
    this.score = 0;
    this.beach.init();
    this.canvas.addEventListener('click', this.handleStart);
  }

  handleStart(e) {
    // const coords = this.getClickPos(this.canvas, e)
    this.gameIsActive = true;
    this.albatross.init();
    this.addObstacle();
    this.addTrash();
    this.draw();
    this.canvas.removeEventListener('click', this.handleStart);
  }

  getClickPos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }


  addObstacle() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 2000;
    this.obstacleTO = setTimeout(() => {
      this.obstacles = this.obstacles.concat(new Obstacle());
      this.addObstacle();
    }, rand);
  }

  onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      this.gamePause('hide');
    } else {
      this.gamePause('show');
    }
  }

  addTrash() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 2000;
    this.trashTO = setTimeout(() => {
      this.trash = this.trash.concat(new Trash());
      this.addTrash();
    }, rand);
  }

  draw() {
    this.speed = this.speed + (this.score / 10) 


    this.beach.draw();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    if(this.score < 0) {
      this.gameOver();
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
            obs.posX - 100 >= -5 &&
            !obs.hit
          ) {
          obs.hit = true;
          this.score = this.score - 1; // change to lives
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
          if (this.score % 5 === 0) {
            this.speed = this.speed + this.speed / 2;
          }

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
  
  gameOver() {
    this.init();
    clearTimeout(this.trashTO);
    clearTimeout(this.obstacleTO);
    this.trash = [];
    this.obstacles = [];
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`game over :(`, 100, 200);
  }

  gamePause(hide) {
    if (hide === 'hide') {
      clearTimeout(this.trashTO);
      clearTimeout(this.obstacleTO);
    } else {
      if (this.gameIsActive) {
        this.addTrash();
        this.addObstacle();
      }
    }
  }
};