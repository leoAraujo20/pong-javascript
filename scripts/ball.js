export class Ball {
  constructor(x, y, raio) {
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.speedX = 1;
    this.speedY = 1;
  }

  update(paddle) {
    this.x += this.speedX;
    this.y += this.speedY;
    // Verifica colisão com a raquete
    if (
      this.x - this.raio < paddle.x + paddle.width &&
      this.x + this.raio > paddle.x &&
      this.y - this.raio < paddle.y + paddle.height &&
      this.y + this.raio > paddle.y
    ) {
      this.speedX *= -1; // Inverte a direção horizontal
      this.speedX *= 1.2; // Aumenta a velocidade após cada colisão
    }

    // Verifica colisão com as bordas
    if (this.x < this.raio || this.x > width - this.raio) {
      this.reset();
    }
    if (this.y < this.raio || this.y > height - this.raio) {
      this.speedY *= -1;
    }
  }

  drawBall(ballImg) {
    image(
      ballImg,
      this.x - this.raio,
      this.y - this.raio,
      this.raio * 2,
      this.raio * 2
    );
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    this.speedX = Math.random() * 10 - 5;
    this.speedY = Math.random() * 10 - 5;
  }
}