import "react-hot-loader";
import { hot } from "react-hot-loader/root";
import "style-loader!css-loader!normalize.css";

import React, { useEffect } from "react";
import { render } from "react-dom";

const sendSize = (worker) => (canvas) => () => {

worker.postMessage({ type: 'size', width: canas.clientWidth, height: canvas.clientHeight })
}


const App = () => {
	useEffect(() => {
  const worker = new Worker("./renderer.js");

  // worker.postMessage('yo')
  //

const canvas = document.querySelector("#canvas1");
	if (!canvas.transferControlToOffscreen) {
		// no support for offscreen canvas
		return
		}


try {
  const offscreen = canvas.transferControlToOffscreen();
			worker.postMessage({ type: "main", canvas: offscreen, msg: 'yo' }, [offscreen]);

		} catch (err) {
	console.error(err)
	return
		}


	sendSize(worker)(canvas)
return function cleanup() {

		}
	})

  return (
		<div style={{ border: '2px solid hsla(170, 20%, 20%, .5)' }}>
      <canvas id="canvas1"></canvas>
			cnavas
    </div>
  );
};
const Hot = hot(App);

render(<Hot />, document.getElementById("app"));
