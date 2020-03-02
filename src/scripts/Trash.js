export default class Trash {
  constructor(type) {
    this.type = type;
  }

  points() {
    switch (this.type) {
      case 'bottle':
        return 1;
      case 'six-pack-rings':
        return 3;
      case 'plastic-bag':
        return 2;
      case 'drift-wood':
        return 1;
      case 'cloth-item':
        return 1;
      default:
        return 0;
    }
  }
};
