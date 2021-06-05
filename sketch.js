var fr , mr
var o1

function setup() {
  createCanvas(800,400);
  fr =createSprite(400, 200, 50, 50);
  mr =createSprite(200, 200, 50, 50);
  o1 = createSprite(600,200,50,50);
  fr.shapeColor = "green"
  mr.shapeColor = "green"
  o1.shapeColor = "green"

  fr.debug = true
  mr.debug = true
  o1.debug = true
}

function draw() {
  background(0);  

  mr.x =World.mouseX
  mr.y =World.mouseY
if(isTouching(fr,mr)){
fr.shapeColor = "red"
mr.shapeColor = "red"
}
else{
fr.shapeColor = "green"
  mr.shapeColor = "green"
}

 if(isTouching(o1,mr)){
  o1.shapeColor = "red"
  mr.shapeColor = "red"

 }
 else{
  o1.shapeColor = "green"

 }




  drawSprites(); 
}

