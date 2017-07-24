const WIDTH = 800;
const HEIGHT = 600;
const SCALE = 20;

let game;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	angleMode(DEGREES);
	colorMode(HSB);
	strokeWeight(0);
	frameRate(10);

	game = new Game(WIDTH / SCALE, HEIGHT / SCALE, SCALE);
}

function draw() {
	background(0);

	game.update();
	game.draw();
}

function keyPressed() {
	console.log('key pressed: ' + keyCode);
	if (keyCode === LEFT_ARROW) {
		game.snake.input(createVector(-1, 0));
  } else if (keyCode === RIGHT_ARROW) {
    game.snake.input(createVector(1, 0));
  } else if (keyCode === UP_ARROW) {
		game.snake.input(createVector(0, -1));
  } else if (keyCode === DOWN_ARROW) {
    game.snake.input(createVector(0, 1));
  }
}
