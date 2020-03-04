import Game from './scripts/game';
import "./styles/index.scss";

document.addEventListener('DOMContentLoaded', () => {
  const canvasGame = document.getElementById("canvas-game");
  canvasGame.width = 800;
  canvasGame.height = 480;
  const ctxGame = canvasGame.getContext("2d");
  let speed = 1;
  const game = new Game(speed, canvasGame, ctxGame);
  game.init();
})