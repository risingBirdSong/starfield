import p5 from "p5";



const p5Instance = new p5((s: p5) => {
  let mySample: p5;
  console.log("s ->", s);
  s.setup = () => {
    s.createCanvas(window.innerWidth, window.innerHeight);
    mySample = new Sample(s.width / 2, s.height / 2, 50);
  };

  s.draw = () => {
    s.background(0);
    mySample.draw();
  };
});


class Sample extends p5 {
  private x: number;
  private y: number;
  private size: number;
  //@ts-ignore
  constructor(x: number, y: number, size: number) {
    //@ts-ignore
    super();
    //@ts-ignore
    this.x = x;
    //@ts-ignore
    this.y = y;
    //@ts-ignore
    this.size = size;
  }
  draw() {
    p5Instance.fill(255);
    p5Instance.circle(this.x, this.y, this.size);
  }
}

export default p5Instance;