export default class Albatross {
  constructor(ctx, cnvs) {
    this.ctx = ctx;
    this.canvas = cnvs;
    this.pos = 300;
    this.draw = this.draw.bind(this);
    this.al = new Image();
    this.al.src = './src/images/al-web.png';
    this.speed = 0;
    this.maxHeight = 100;
    this.minHeight = 440;
    this.handleDown = this.handleDown.bind(this);
  }

  handleDown(e) {
    
    let key;
    if (e.type === 'touchstart') {
      key = this.getTouchPos(this.canvas, e);
    } else {
      key = e.keyCode;
    }
    
    // if ((key === 38 || key === 40) && e.type !== 'touchstart') e.preventDefault();
    if ((key === 38 || key === 40)) e.preventDefault();
    this.move(key);
    this.draw();
  }

  getTouchPos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    const coords = {
      x: e.targetTouches[0].clientX - rect.left,
      y: e.targetTouches[0].clientY - rect.top
    };
    return (coords.y > this.pos) ? 40 : 38;
  }


  init() { 
    document.addEventListener("keydown", this.handleDown);
    document.addEventListener("touchstart", this.handleDown, { passive: false });
    const keyUp = () => {
      this.al.src = './src/images/al-web.png';
      this.speed = 0;
    };
    document.addEventListener("keyup", keyUp);
    document.addEventListener("touchend", keyUp);
  }

  draw() {
    const tooHigh = this.pos === this.maxHeight && this.speed === -5;
    const tooLow = this.pos === this.minHeight && this.speed === 5;
    if (tooHigh || tooLow) {
    } else {
      this.pos += this.speed;
    }
    this.ctx.drawImage(this.al, 100, this.pos);
  }

  move(key) {
    switch (key) {
      case 40: // down
        this.al.src = './src/images/al-down.png';
        this.speed = 5;
        break;
      case 38: // up
        this.al.src = './src/images/al-up.png';
        this.speed = -5;
        break;
      default:
        break;
    }
  }
};
