
class Snake {
  constructor(position, max) {
    this.init = position;

    this.start();

    this.max = max;
    this.isGrowing = false;

    this.velocity = createVector(1, 0);
  }

  start() {
    this.head = this.init;
    this.segments = [this.head];
  }

  update() {
    let collision = false;

    let newHead = this.head.copy().add(this.velocity);

    if(newHead.x > this.max.x) newHead.x = 0;
    if(newHead.x < 0) newHead.x = this.max.x;
    if(newHead.y > this.max.y) newHead.y = 0;
    if(newHead.y < 0) newHead.y = this.max.y;

    this.segments.forEach(segment => {
      if(segment.x === newHead.x && segment.y === newHead.y) {
        collision = true;
      }
    });

    if(collision) {
      this.start();
      return;
    }

    this.segments.push(newHead);

    if(this.isGrowing) {
      this.isGrowing = false;
    } else {
      this.segments.shift();
    }

    this.head = newHead;
  }

  grow() {
    this.isGrowing = true;
  }

  input(velocity) {
    if(this.velocity.copy().add(velocity).magSq() === 0 && this.segments.length > 1) return;
    this.velocity = velocity;
  }

}
