

let mover;
let love = 10;
let change = 255;
let mind = 255;
let size = 0;
function setup() {
createCanvas(640, 360);
mover = new Mover();
girl = new Girl();
last = new Last();
sun = new Sun();
print(love+" left!");
}

function draw() {
background(change);

let gravity = createVector(0, 0.1);
mover.applyForce(gravity);

if (mouseIsPressed) {
  let wind = createVector(0.1, 0);
  mover.applyForce(wind);
}
sun.display();
mover.update();
mover.display();
mover.checkEdges();
mover.dark();
girl.display();
if (love<1) {
  last.display ();
}
}
class Mover {
constructor() {
  this.mass = 1;
  this.position = createVector(width / 2, height-20);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
}

applyForce(force) {
  var f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
}

update() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
}

display() {
  stroke(0);
  strokeWeight(2);
  fill(mind);
  ellipse(this.position.x, this.position.y-50, 48, 48);
  rectMode(CENTER);
  rect(this.position.x, this.position.y, 48, 48);
  text(love,this.position.x-15, this.position.y+2)
}
checkEdges() {
  if (this.position.x > 580) {
    this.position.x = 580;
    this.velocity.x *= -1;
    //change = random(0,255);
    mind = mind - 25;
    love = love -1;
    print(love+" left!");
    background(0);
    size= size+10;


 // } else if {
//    background(255);

  //} else if (this.position.x < 0) {
 //   this.velocity.x *= -1;
 //   this.position.x = 0;
  }
  if (this.position.y > height) {
    this.velocity.y *= -1;
    this.position.y = height;
  }
}
dark() {
   if (this.position.x > 580) {
    dark = dark+1
 //   delay(1000);
    print(dark);
   }
}
}
class Girl {
constructor() {
  this.mass = 1;
  this.position = createVector(width / 2, height-20);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
}

  display() {
    fill(255);
    ellipse(600, 340-50-size+2, 48+size,48+ size);
    rect(600, 340, 48+size,48+ size);
    fill(0);
    textSize(20);
    text('Go Get Her!', width/2+90, height/2+40);
  }
}
class Last {
display() {
    fill(255);
    rect(0, 0, 1280, 720);
    textSize(32);
    text('Dont Dreaming!', width/2-100, height/2);
}
}
class Sun {
display() {
    fill(255,255,0);
    ellipse(640, 0, 120, 120);
}
}
