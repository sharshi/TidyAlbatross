import Albatross from './albatross';
import Beach from './beach';
import Obstacle from './obstacle';
import Trash from './trash';
import Point from './point';

export default class Game {
  constructor() {

    this.canvas = document.getElementById("canvas-game");
    this.canvas.width = 800;
    this.canvas.height = 480;

    this.animFrame = null;

    this.ctx = this.canvas.getContext("2d");
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
    this.score = 0; // number of garbage collected
    this.totalPoints = 0;
    this.gameIsActive = false;
    this.lives = 5;
    this.maxSpeed = 9;
    this.timeout = 120;
    this.counter = -1;

    // initial speed
    this.speed = 2;

    // sounds
    this.bird = new this.sound("./src/audio/bird.mp3");

    // listeners
    this.gamePause = this.gamePause.bind(this);
    document.addEventListener("visibilitychange", this.onVisibilityChange);
    
    // keeping score
    this.points = new Point();
  }

  init() {
    this.beach.init(this.speed);
    this.canvas.addEventListener('click', this.handleStart);
  }

  handleStart(e) {
    const {x, y} = this.getClickPos(this.canvas, e) 
    const startX = (this.canvas.width / 2) - 50,
      startY = 140,
      startW = 100 + startX, 
      startH = 40 + startY;
    if (
      (x >= startX && x <= startW) &&
      (y >= startY && y <= startH)
       ) {
         this.gameIsActive = true;
         this.canvas.removeEventListener('click', this.handleStart);
         this.draw();
        
    }
    
  }


  getClickPos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  addObstacle() {
    this.obstacles = this.obstacles.concat(new Obstacle());
  }
  
  addTrash() {
    this.trash = this.trash.concat(new Trash());
  }

  onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      this.gamePause('hide');
    } else {
      this.gamePause('show');
    }
  }


  draw() {
    if (!this.gameIsActive) {

    } else if (this.lives === 0) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);    
      cancelAnimationFrame(this.animFrame);

      this.gameOver();
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);    
      this.beach.draw(this.speed);

      // GENERATE POINTS AND REMOVE ASSETS FROM CANVA
      const albatrossLocation = { 
        x: this.albatross.posX, 
        y: this.albatross.pos
      };
  
      if (this.counter === this.timeout) {
        this.addObstacle();
        this.addTrash();
        this.counter = -1;
      }

      this.counter = this.counter + 1;

      this.detectObstacles(albatrossLocation);
      this.detectTrash(albatrossLocation);

      this.albatross.draw(this.speed, this.lives);

      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Score: ${this.score}`, 10, 40);

      this.animFrame = requestAnimationFrame(this.draw);
    }
  }
  
  detectTrash(albatrossLocation) {
    this.trash.forEach((trsh, i) => {
      if (trsh.posX < -30) {
        delete this.trash[i];
      }
      if (albatrossLocation.y - trsh.y < 30 &&
        albatrossLocation.y - trsh.y > -30 &&
        trsh.posX - albatrossLocation.x <= 60 &&
        trsh.posX - albatrossLocation.x >= -5) {
        this.score = this.score + 1;

        if (this.score % 5 === 0 && this.speed <= this.maxSpeed) {
          this.speed = this.speed + this.speed / 4;
          if (this.speed > this.maxSpeed) {
            this.timeout = 90;
          }
        }
        delete this.trash[i];
      }
      else {
        trsh.draw(this.ctx, this.speed);
      }
    });
    // clean up deleted trash
    this.trash = this.trash.filter(trsh => trsh);
  }

  detectObstacles(albatrossLocation) {
    this.obstacles.forEach((obs, i) => {
      if (obs.posX < -30) {
        delete this.obstacles[i];
      }
      obs.draw(this.ctx, this.speed);
      if (albatrossLocation.y - obs.y < 30 && albatrossLocation.y - obs.y > -30 &&
        obs.posX - albatrossLocation.x <= 60 &&
        obs.posX - albatrossLocation.x >= -5 &&
        !obs.hit) {
        obs.hit = true;
        this.lives = this.lives - 1;
        setTimeout(() => {
          this.bird.play();
        }, 0);
      }
    });
    this.obstacles = this.obstacles.filter(obs => obs);
  }

  gameOver() {
    this.gameIsActive = false;
    this.points.store('score', {
      name: 'Ada',
      score: this.score
    })
    this.trash = [];
    this.obstacles = [];

    this.ctx.fillStyle = "#3400cd";
    this.ctx.textAlign = "center";
    this.ctx.fillText('game over :(', this.canvas.width / 2, 130);
    this.ctx.textAlign = "left";

    this.score = 0;
    this.speed = 1.5;
    this.totalPoints = 0;
    this.lives = 5;

    this.init();
  }

  gamePause(hide) {
    if (hide === 'hide') {
      this.gameIsActive = false;
    } else {
      this.gameIsActive = true;
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