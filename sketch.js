var quadrado;
function setup() {
  quadrado = createSprite (200,200,25,10);
  quadrado.shapeColor = "red"
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  drawSprites ();
if (keyDown("w")) {
  quadrado.y = quadrado.y - 5
}
if (keyDown("s")) {
  quadrado.y = quadrado.y +5
}
if (keyDown("d")) {
  quadrado.x = quadrado.x +5
}
if (keyDown("a")) {
  quadrado.x = quadrado.x -5
}
}




