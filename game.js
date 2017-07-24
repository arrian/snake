


class Game {
  constructor(columns, rows, scale) {
    this.scale = scale;

    this.columns = columns;
    this.rows = rows;

    this.apple = this.generateApple();

    this.snake = new Snake(createVector(floor(columns / 2), floor(rows / 2)), createVector(columns - 1, rows - 1));
  }

  update() {
    this.snake.update();

    if(this.snake.head.x === this.apple.x && this.snake.head.y === this.apple.y) {
      this.snake.grow();
      this.apple = this.generateApple();
    }
  }

  draw() {
    fill(0, 255, 255);
    this.drawSquare(this.apple);

    fill(0, 0, 255);
    this.snake.segments.forEach(segment => this.drawSquare(segment));
  }

  drawSquare(position) {
    rect(position.x * this.scale, position.y * this.scale, this.scale, this.scale);
  }

  generateApple() {
    let apple = createVector(floor(random(this.columns)), floor(random(this.rows)));
    console.log(apple);
    return apple;
  }




}
