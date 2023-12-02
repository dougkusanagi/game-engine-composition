import "./style.css";
// import Game from "./Game";

// const game = new Game();
// game.start();

// TODO: Implement composition using simple objects

const Game = function () {
  this.canvas = document.getElementById("screen");
  this.context = this.canvas.getContext("2d");

  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
};
function Vec2(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

const SquareSprite = function ({ object, size = new Vec2(), color = "red" }) {
  this.object = object;
  this.size = size;
  this.color = color;

  this.draw = function ({ context }) {
    context.fillStyle = color;
    context.fillRect(object.position.x, object.position.y, size.x, size.y);
  };
};

const player = {
  position: new Vec2(100, 100),
  velocity: new Vec2(0, 0),

  // implements SquareSprite
  sprite: SquareSprite,
};

new Game();

console.log(player);
