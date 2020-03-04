import Stuff from './stuff';

const TRASH = [
  'bottle',
  'bag',
  'beach-ball'
];

export default class Trash extends Stuff {
  constructor() {
    super();
    const idx = Math.floor(Math.random() * TRASH.length);
    this.type = TRASH[idx];
    this.img.src = `./src/images/${this.type}.png`;
  }
};
