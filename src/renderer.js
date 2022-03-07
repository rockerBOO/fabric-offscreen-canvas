import { fabric } from "fabric";
const handlers = {
  main,
  size,
  render,
};

const state = {
  width: 300,
  height: 300,
  canvas: undefined,
};

onmessage = (e) => {
  const fn = handlers[e.data.type];

  if (!fn) {
    throw new Error("no handler for type: " + e.data.type);
  }

  console.log("message", e.data.type);

  fn(e.data);

  console.log(e.data);
  console.log("got a message");
};

function main({ canvas }) {
  console.log("main");
  var ctx = canvas.getContext("2d");

  // ctx.beginPath();
  // ctx.moveTo(50, 50);   // Begin first sub-path
  // ctx.lineTo(200, 50);
  // ctx.moveTo(50, 90);   // Begin second sub-path
  // ctx.lineTo(280, 120);
  // ctx.stroke();
  state.canvas = fabric.Canvas(canvas);

  console.log(state.canvas);
}

function size(data) {
  state.width = data.width;
  state.height = data.height;
}

function render() {}
