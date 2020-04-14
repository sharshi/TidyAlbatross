import Albatross from './albatross';
import Beach from './beach';
import Obstacle from './obstacle';
import Trash from './trash';
import Point from './point';
import User from './user';

export default class Game {
  constructor() {

    this.canvas = document.getElementById("canvas-game");
    this.canvas.width = 1000;
    this.canvas.height = 600;

    this.animFrame = null;

    this.ctx = this.canvas.getContext("2d");
    this.trash = [];
    this.obstacles = [];
    this.albatross = new Albatross(this.ctx, this.canvas);
    this.draw = this.draw.bind(this);
    this.beach = new Beach();
    this.addObstacle = this.addObstacle.bind(this);
    this.addTrash = this.addTrash.bind(this);
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

    // add start method to window
    window.start = () => this.start(); 

    // add setUsername method to window
    window.setUsername = () => this.setUsername(); 
    this.setUsernameInput();
  }

  init() {
    this.beach.init(this.speed);
  }

  start() {
    this.albatross.addEventListeners();
    const splash = document.getElementById("splash");
    splash.classList.add("hide");
    this.gameIsActive = true;
    this.draw();
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

      // GENERATE POINTS AND REMOVE ASSETS FROM CANVAS
      const albatrossLocation = { 
        x: this.albatross.posX, 
        y: this.albatross.pos
      };
  
      if (this.counter === this.timeout) {
        setTimeout(this.addObstacle, Math.floor(Math.random() * 1500) + 500) 
        setTimeout(this.addTrash, Math.floor(Math.random() * 500))
        this.counter = -1;
      }

      this.counter = this.counter + 1;
      this.totalPoints = this.totalPoints + 1;
      
      this.detectObstacles(albatrossLocation);
      this.detectTrash(albatrossLocation);

      this.albatross.draw(this.speed, this.lives);

      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Score: ${((this.score) * 100) + this.totalPoints}`, 10, 40);

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
    this.albatross.removeEventListeners();
    const thisScore = ((this.score) * 100) + this.totalPoints;

    const highScore = localStorage.getItem('highScore');

    let gameOverMsg = 'game over :(';
    if (highScore < thisScore) {
      localStorage.setItem('highScore', thisScore);
      gameOverMsg = 'High score! ' + thisScore;
    }
    let name = localStorage.getItem("user");
    name = name ? name : 'Demo'
    this.points.store('score', {
      name,
      score: thisScore
    })

    this.resetGameInfo();
    this.openSplash(gameOverMsg);

    this.init();
  }

  setUsernameInput() {
    const username = localStorage.getItem("user");
    const usernameInput = document.getElementById("username-input");
    usernameInput.value = username;

    if (username) {
      this.setGreeting(username);
    }
  }

  setUsername() {
    const usernameInput = document.getElementById("username-input");
    const user = new User(usernameInput.value);
    localStorage.setItem("user", user.name);

    this.setGreeting(user.name);
  }

  setGreeting(user) {
    const greeting = document.getElementById("greeting");
    greeting.innerHTML = `Hello ${user}!`;
  }

  resetGameInfo() {
    this.gameIsActive = false;
    this.trash = [];
    this.obstacles = [];
    this.score = 0;
    this.speed = 1.5;
    this.totalPoints = 0;
    this.lives = 5;
  }

  openSplash(gameOverMsg) {
    const button = document.getElementById("start-button");
    button.innerHTML = "Play Again!";
    const splash = document.getElementById("splash");
    splash.classList.remove("hide");
    const gameOverEl = document.getElementById("game-over-msg");
    gameOverEl.classList.remove("hide");
    gameOverEl.innerHTML = gameOverMsg;
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