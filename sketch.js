//creating variables;
var bullet,wall;
var speed,weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  
  wall=createSprite(1500, 200, thickness, height/2);

  bullet=createSprite(50,200,50,20);
  
  thickness=random(88,100);
  weight=random(30,52);
  speed=random(223,321);

  bullet.velocityX = speed;
}

function draw() {
  background("yellow");

   wall.shapeColor=color(80,80,80); 
   bullet.shapeColor="white";
   
if(hasCollided(bullet,wall)){
  
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness *thickness *thickness);

  
    if(damage>10){
      wall.shapeColor="red"; 
    } 
    
    
   if(damag<10){
     wall.shapeColor="green";
   } 
}

  drawSprites();
}

function hasCollided(Rbullet,Lwall){
  bulletRightEdge=Rbullet.x + Rbullet.width;
  wallLeftEdge=Lwall.x
  if(bulletRightEdge>=wallLeftEdge){
     return true;
  }
  return false;
}