# Offscreen rendering with fabric.js 

## Current State: Fixes needed

## fabric.js fixes required

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

