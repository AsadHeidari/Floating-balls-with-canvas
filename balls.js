const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

const d = canvas.getContext("2d");

class Ball {
  constructor(r, color) {
    this.r = r;
    this.color = color;
    this.x = random(this.r, innerWidth);
    this.y = random(this.r, innerHeight);
    this.vx = (Math.random() - 0.5) * 14;
    this.vy = (Math.random() - 0.5) * 14;

    this.draw();
  }
  draw() {
    d.beginPath();

    d.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    d.fillStyle = this.color;
    d.fill();
  }
  update() {
    if (this.x + this.r >= window.innerWidth || this.x - this.r <= 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.r >= window.innerHeight || this.y - this.r <= 0) {
      this.vy = -this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
    this.draw();
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function anime() {
  d.clearRect(0, 0, window.innerWidth, window.innerHeight);

  balls.forEach((ball) => ball.update());

  requestAnimationFrame(anime);
}

const balls = [
  new Ball(40, "red"),
  new Ball(30, "orange"),
  new Ball(20, "yellow"),
  new Ball(40, "red"),
  new Ball(30, "orange"),
  new Ball(50, "yellow"),
  new Ball(40, "red"),
  new Ball(30, "orange"),
  new Ball(40, "yellow"),
  // add balls here
];

anime();
