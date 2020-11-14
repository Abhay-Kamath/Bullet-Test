var thickness,wall;
var bullet,speed,weight;
function setup() {
  createCanvas(800*2,400);
  speed = random(223,321)
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  
  bullet = createSprite(50,200,50,10);
 
  bullet.velocityX = speed;
  damage = 0.5*speed*speed*weight/thickness*thickness*thickness;
}

function draw() {
  background(0);  
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    if(damage>10){
      wall.shapeColor = "red"
    }else if(damage<10){
      wall.shapeColor = "green"
  
    }
  }
  drawSprites();
}