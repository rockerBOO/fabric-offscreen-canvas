# Offscreen rendering with fabric.js 

## Current State: Fixes needed

## [fabric.js](https://github.com/fabricjs/fabric.js) fixes required

* Detecting if in browser or node or worker
* Remove window/document references (not in workers)
* Send all events that could cause rendering to the worker.

[Following this guide](https://threejsfundamentals.org/threejs/lessons/threejs-offscreencanvas.html) to see how to abstract the code to be run on the worker.

## Install

Designed for yarn.

```
yarn
```

## Usage

```
yarn dev
```

Please fork if you want to help or just try on your own. Many fixes will be required in fabric.js to allow offscreen canvas.

I am looking at 70ms frames due to rendering and sampling image data (`getImageData`) so moving it off the main thread would allow the UI to be smooth even if its slow to render. 

Eventually would like to abstract the renderer to be all message based. Then we can run other renderers that can possibly use web assembly, webgpu, vulcan empowered renderers. 

Note: Browser support is limited for offscreen canvas. Chrome specifically supports it but many others don't at this time.
