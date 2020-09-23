var car,wall;
var speed,weight;
var deformation

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 200, 30, height/2);

  car=createSprite(50,200,50,20);
  
  weight=random(400,1500);
  speed=random(85,90);

  car.velocityX = speed;
}

function draw() {
  background("black");
   wall.shapeColor="grey"; 
   car.shapeColor="white"; 

  // wall.depth = car.depth;
   wall.depth = wall.depth + 1;
   
   if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor="red";
    } 
   if(deformation<180 && deformation>100)
   {

     car.shapeColor="yellow";
   }
   if(deformation<100)
   {
     car.shapeColor="green";
   } 
  }

  drawSprites();
}