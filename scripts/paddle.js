export class Paddle {
  constructor(x, y, h, w, isPlayer = false) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.isPlayer = isPlayer;
  }

  drawPaddle(paddleImg) {
    image(paddleImg, this.x, this.y, this.width, this.height);
  }

  move(ball = null) {
    if (this.isPlayer) {
      if (keyIsDown(UP_ARROW)) {
        this.y -= 3;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.y += 3;
      }
    } else {
        if (this.y < ball.y) {
            this.y += 3;
        } else if (this.y > ball.y) {
            this.y -= 3;
        }
    }
    // Limita a raquete dentro da tela
    this.y = constrain(this.y, 0, height - this.height);
  }
}
