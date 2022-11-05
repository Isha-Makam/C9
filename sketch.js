var x
var ball 

function setup() {
  createCanvas(800,800);

  x = 5
  ball = createSprite(400,400,40,40)

  console.log(x)
}

function draw() {
  background("black");
if (keyDown("down")){
  ball.y += 2
}

if (keyDown("up")){
  ball.y -= 2
}

if (keyDown("right")){
  ball.x += 2
}

if (keyDown("left")){
  ball.x -= 2
}

  drawSprites();
}