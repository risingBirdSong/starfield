import p5 from "p5";



const myp5 = new p5((s: p5) => {

  const stars: typeof Star[] = [];

  let speed = 1;

  s.setup = function setup() {
    s.createCanvas(600, 600);
    for (let i = 0; i < 800; i++) {
      stars[i] = new Star();
    }
  };

  s.draw = function draw() {
    speed = s.map(s.mouseX, 0, s.width, 0, 50);
    s.background(0);
    // s.translate(s.width / 2, s.height / 2);
    for (let i = 0; i < stars.length; i++) {
      stars[i].update();
      stars[i].show();
    }
  };

  function Star() {
    this.x = s.random(-s.width, s.width);
    this.y = s.random(-s.height, s.height);
    this.z = s.random(s.width);
    this.pz = this.z;

    this.update = function () {
      this.z = this.z - speed;
      if (this.z < 1) {
        this.z = s.width;
        this.x = s.random(-s.width, s.width);
        this.y = s.random(-s.height, s.height);
        this.pz = this.z;
      }
    };

    this.show = function () {
      s.fill(255);
      s.noStroke();

      var sx = s.map(this.x / this.z, 0, 1, 0, s.width);
      var sy = s.map(this.y / this.z, 0, 1, 0, s.height);

      var r = s.map(this.z, 0, s.width, 16, 0);
      s.ellipse(sx, sy, r, r);

      var px = s.map(this.x / this.pz, 0, 1, 0, s.width);
      var py = s.map(this.y / this.pz, 0, 1, 0, s.height);

      this.pz = this.z;

      s.stroke(255);
      s.line(px, py, sx, sy);
    };
  }
});
// },'sketch1');

export default myp5;