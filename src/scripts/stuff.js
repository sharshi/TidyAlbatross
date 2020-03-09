

export default class Stuff {
  constructor() {
    this.posX = 1000;
    this.img = new Image();
    this.y = Math.floor(Math.random() * 460) + 100;
    this.hit = false;
  }

  draw(context, speed) {
    context.drawImage(this.img, this.posX -= speed, this.y, 40, 40);
  }

  drawOne(context, posX, posY, image) {
    const img = new Image(30, 30);
    img.src = `./src/images/large/${image}.png`;
    img.addEventListener('load', () => {
      context.drawImage(img, posX, posY, 40, 40);
    });
  }


};
