/* eslint-disable no-undef, no-unused-vars */

let Engine = Matter.Engine,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

let offset = 0.0;
let sunset, checkbox, bgImg;
let engine, world, runner;
let boxes = [];

function preload() {
  sunset = loadFont("assets/fonts/sunset.otf");
  bgImg = loadImage("assets/images/brick-wall.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  runner = Runner.create();
  Runner.run(runner, engine);

  textAlign(CENTER, BASELINE);
  textFont(sunset);
  textSize(60);

  drawingContext.shadowBlur = 40;

  angleMode(DEGREES);
  rectMode(CENTER);

  checkbox = createCheckbox("light on", true);
  checkbox.changed(toggleLight);
}

function draw() {
  frameRate(24);
  // background(50);
  background(bgImg);
  translate(width / 2, height / 2);

  boxes.forEach((box) => {
    box.show();
  });

  push();
  // noStroke();
  // strokeWeight(0.2);
  // drawingContext.shadowColor = color(0, 250, 172);
  // stroke(0, 250, 172);
  fill("rgba(0, 0, 0, 0.7)");
  rect(0, 0, 400, 280, 20);
  pop();

  // RING
  push();
  noFill();
  strokeWeight(4);
  if (checkbox.checked()) {
    drawingContext.shadowColor = color(0, 250, 172);
    stroke(0, 250, 172);
  } else {
    drawingContext.shadowColor = color(0);
    stroke(50);
  }
  // top
  drawArc(218, 305);
  // right
  drawArc(345, 356);
  // bottom
  drawArc(30, 130);
  // left
  drawArc(169, 176);
  pop();

  // TEXT
  push();
  if (checkbox.checked()) {
    drawingContext.shadowColor = color(237, 4, 126);
    fill(230);
    flicker(50);
  } else {
    drawingContext.shadowColor = color(0);
    fill(50);
  }
  rotate(-10);
  writeText("Cocktails", 0, -20, 5);
  writeText("&", 0, 10, 10, 30);
  writeText("Dreams", 0, 50, 5);
  pop();
}

function flicker(c) {
  offset += 0.2;
  let n = noise(offset);
  if (n < 0.2) {
    drawingContext.shadowColor = color(c);
    fill(c);
  }
}

function drawArc(start, stop, x = 0, y = 0, diameter = 200, times = 5) {
  for (let i = 0; i <= times; i++) {
    arc(x, y, diameter, diameter, start, stop);
  }
}

function writeText(string, x, y, times = 1, size = 60) {
  for (let i = 0; i <= times; i++) {
    // emissiveMaterial(0, 250, 172);
    textSize(size);
    text(string, x, y);
  }
}

function toggleLight() {
  if (checkbox.checked()) {
    console.log("checked");
  } else {
    console.log("not checked");
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
