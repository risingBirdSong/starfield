import s from "..";

export default class Sample {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    console.log("s from inside sample class", s);
  }
  draw() {

    s.fill(255);
    s.circle(this.x, this.y, this.size);
  }
}
