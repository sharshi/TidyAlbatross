// js
import Game from './scripts/Game';
import Beach from './scripts/Beach';

// css
import "./styles/index.scss";

document.addEventListener('DOMContentLoaded', () => {
  const canvasGame = document.getElementById("canvas-game");
  canvasGame.width = 800;
  canvasGame.height = 480;
  const ctxGame = canvasGame.getContext("2d");
  let speed = 1;
  const beach = new Beach();
  beach.init();
  const game = new Game(speed, canvasGame, ctxGame);
  game.init();
})