import Game from './scripts/game';
import "./styles/reset.scss";
import "./styles/index.scss";

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.init();
})