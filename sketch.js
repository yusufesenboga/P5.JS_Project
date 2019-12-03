var diameter;
var diameterOther;
var dia;
function setup() {
  createCanvas(1000, 780);
}

function draw() {

  background(random(0, 255), random(0, 255), random(0, 255));
  fill(random(0, 255), random(0, 255), random(0, 255));

  if (diameterOther > 80) {
    background(255,0,0);
  }
  else {
    background(random(0, 255), random(0, 255), random(0, 255));
  }

  ellipse(500,290, diameter,diameter);
  ellipse(250, 125, diameter, diameter);
  ellipse(750, 125, diameter, diameter);

  fill(30);
  ellipse(250, 125, diameterOther, diameterOther);
  ellipse(750, 125, diameterOther, diameterOther);

  strokeWeight(4);
  stroke(51);
  fill(250,250,250);
  ellipse(500, 600, diameter, diameter);



if (mouseIsPressed) {
  diameter = diameter + 5;
  diameterOther = diameterOther + 2;
} else {
  diameter= 10;
  diameterOther=2;
}
if (diameterOther==500){
  diameter= 10;
  diameterOther=2;
}
text("X: "+mouseX, 0, height/4);
text("Y: "+mouseY, 0, height/2);
}
