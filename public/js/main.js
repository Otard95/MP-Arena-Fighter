/*jshint esversion: 6 */
/*jshint node: true */

const socket = new server_communication();

let time;
let pos;
let dir;
let speed = 5;
let acc = 1000/300;
let stopThreshold = 0.05;

function setup() {
  createCanvas(window.innerHeight,window.innerHeight);
  background(0);

  time = new Time();

  pos = createVector(100,100);
  dir = createVector();

}

function draw () {
  background(0);

  ellipse(pos.x, pos.y, 14, 14);

  if (keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW)) {
    dir.y -= acc * time.deltaTime();
  } else if (keyIsDown(DOWN_ARROW) && !keyIsDown(UP_ARROW)) {
    dir.y += acc * time.deltaTime();
  } else {
    // console.log('reset y');
    if (dir.y > 0) dir.y -= dir.y < stopThreshold ? dir.y : acc * time.deltaTime();
    if (dir.y < 0) dir.y += dir.y > -stopThreshold ? -dir.y : acc * time.deltaTime();
  }
  constrain(dir.y, -1, 1);

  if (keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW)) {
    dir.x -= acc * time.deltaTime();
  } else if (keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW)) {
    dir.x += acc * time.deltaTime();
  } else {
    // console.log('reset x');
    if (dir.x > 0) dir.x -= dir.x < stopThreshold ? dir.x : acc * time.deltaTime();
    if (dir.x < 0) dir.x += dir.x > -stopThreshold ? -dir.x : acc * time.deltaTime();
  }
  constrain(dir.x, -1, 1);

  dir.limit(1);

  pos.add(dir.copy().mult(speed));

  console.log('x: ' + dir.x,'y: ' + dir.y);

time.update();
}
