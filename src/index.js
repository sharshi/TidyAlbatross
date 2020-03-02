// js
import Game from './scripts/Game';

// css
import "./styles/index.scss";

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 480;
  const ctx = canvas.getContext("2d");

  const game = new Game(1, canvas, ctx);

  game.init();
})