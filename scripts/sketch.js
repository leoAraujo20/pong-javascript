import { Ball } from "./ball.js";
import { Paddle } from "./paddle.js";

let ball;
let paddle1;
let paddle2;

let ballImg;
let paddle1Img;
let paddle2Img;
let bgImg;

function preload() {
  bgImg = loadImage("/images/fundo1.png");
  ballImg = loadImage("/images/bola.png");
  paddle1Img = loadImage("/images/barra01.png");
  paddle2Img = loadImage("/images/barra02.png");
}

function setup() {
  createCanvas(1200, 600);
  ball = new Ball(width / 2, height / 2, 25);
  paddle1 = new Paddle(30, height / 2, 100, 10, true); // Jogador
  paddle2 = new Paddle(width - 40, height / 2, 100, 10); // Oponente
}

function draw() {
  image(bgImg, 0, 0, width, height);
  ball.update(paddle1);
  ball.update(paddle2);
  ball.drawBall(ballImg);
  paddle1.drawPaddle(paddle1Img);
  paddle1.move();
  paddle2.drawPaddle(paddle2Img);
  paddle2.move(ball);
}

window.preload = preload;
window.setup = setup;
window.draw = draw;

