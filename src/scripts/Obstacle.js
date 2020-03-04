import Stuff from './stuff';

const OBSTACLES = [
  'seal',
  'fire-pit',
  'person'
];

export default class Obstacle extends Stuff {
  constructor() {
    super();
    const idx = Math.floor(Math.random() * OBSTACLES.length);
    this.type = OBSTACLES[idx];
    this.img.src = `./src/images/${this.type}.png`;
  }
};
