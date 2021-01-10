var fixedRect, movingRect;

var obj1,obj2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(100,100,50,50)
  obj1.shapeColor="green"
  movingRect.velocityX=-5
  fixedRect.velocityX=5
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

 if (isTouching(movingRect,obj1)){
  movingRect.shapeColor = "red";
  obj1.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  obj1.shapeColor = "green";

}
bounceOff(fixedRect,movingRect)
  drawSprites();
}

