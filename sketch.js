//creating variables;
var bullet,wall;
var speed,weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  
 //creating the wall; 
  wall=createSprite(1500, 200, thickness, height/2);

//creating the bullet; 
  bullet=createSprite(50,200,50,20);

// creating the properties;
  thickness=random(88,100);
  weight=random(30,52);
  speed=random(223,321);

  bullet.velocityX = speed;
}

function draw() {     
 //giving the background color;    
  background("blue");

  //giving the color;
   wall.shapeColor = "black"; 
   bullet.shapeColor="white";
 
 //giving condition for damaging the wall;  
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;

  //giving the damage;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

 //colour of the wall changes red;
    if(damage>10){
      wall.shapeColor = "red";      
    } 
     
//colour of the wall changes green;
    if(damag<10){
     wall.shapColor = "green";
   } 
  }
  drawSprites();
}

//giving function hasCollided;
function hasCollided(Rbullet,Lwall){
  bulletRightEdge=Rbullet.x + Rbullet.width;
  wallLeftEdge=Lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    bullet.velocityX = 0;
     return true;
  }
  return false;
}