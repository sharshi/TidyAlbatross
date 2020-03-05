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
    this.lives = 5;
    this.maxSpeed = 9;
    this.timeout = 2000;

    // timeoutes
    this.trashTO;
    this.obstacleTO;

    // overall speed
    this.speed = speed;

    // sounds
    this.bird = new this.sound("./src/audio/bird.mp3");

    // listeners
    this.gamePause = this.gamePause.bind(this);
    document.addEventListener("visibilitychange", this.onVisibilityChange);
  }

  init() {
    this.score = 0;
    this.lives = 5;
    this.beach.init(this.speed);
    this.canvas.addEventListener('click', this.handleStart);
  }

  handleStart(e) {
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
    var rand = Math.round(Math.random() * (3000 - 500)) + this.timeout;
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
    var rand = Math.round(Math.random() * (3000 - 500)) + this.timeout;
    this.trashTO = setTimeout(() => {
      this.trash = this.trash.concat(new Trash());
      this.addTrash();
    }, rand);
  }

  draw() {
    this.beach.draw(this.speed);

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);    

    if (!this.gameIsActive) {

    } else if (this.lives === 0) {
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
        obs.draw(this.ctx, this.speed);
        if (
            albatrossLocation.y - obs.y < 30 && albatrossLocation.y - obs.y > -30 &&
            obs.posX - 100 <= 60 &&
            obs.posX - 100 >= -5 &&
            !obs.hit
          ) {
          obs.hit = true;
          this.lives = this.lives - 1; 
          setTimeout(() => {
            this.bird.play();
          }, 0);
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

          /**
           * faster + when top speed add more items
           */
          if ( this.score % 5 === 0 && this.speed <= this.maxSpeed ) {
            this.speed = this.speed + this.speed / 2;
            if (this.speed > this.maxSpeed) {
              this.timeout = 1000;
            }
          } 

          delete this.trash[i];
        } else {
          trsh.draw(this.ctx, this.speed);
        }
      })
      // clean up deleted trash
      this.trash = this.trash.filter(trsh => trsh)
  
      this.albatross.draw(this.lives);

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


  sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = () => this.sound.play();
    this.stop = () => this.sound.pause();
  }
};