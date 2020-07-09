// P5 Parcel Template by William Park (Twitter - @williamipark)
// Use this template to easily split up your p5 classes into mutliple files, and
// easy access to npm packages.

// See `sampleP5Class.js` for an example of a class set up.

// import "./styles.css";
import p5 from "p5";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "./constants";
import Sample from "./classes/sampleP5Class";

const p5Instance = new p5(s => {
  let mySample;
  console.log("s ->", s);
  s.setup = () => {
    s.createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
    mySample = new Sample(s.width / 2, s.height / 2, 50);
  };

  s.draw = () => {
    s.background(0);
    mySample.draw();
  };
});

export default p5Instance;
