var bullet,wall;
var speed,weight;
var thickness;
var damage

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 200, thickness, height/2);

  bullet=createSprite(50,200,50,20);
  
  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321);

  bullet.velocityX = speed;
}

function draw() {
  background("yellow");
   wall.shapeColor="grey"; 
   bullet.shapeColor="white";
   
if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
     damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
     
    if(damage>10){
      wall.shapeColor="red"; 
    } 

   if(damag<10){
     wall.shapeColor="green";
   } 
}

  drawSprites();
}

function hasCollided(Lbullet,Lwall){
    bulletRightEdge=Lbullet.x + Lbullet.width;
   wallLeftEdge=wall.x
  if(bulletRightEdge>=wallLeftEdge){
     // return true;
  }
  return false;
}
