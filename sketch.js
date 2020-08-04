var car,wall;
var speed,weight;
var chanceofdeath;
function setup() {
  createCanvas(800, 400);
  speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(700,200,30,400);
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor=color(255);
  wall.shapeColor=color(80,80,80);
  chanceofdeath=0.5*weight*speed*speed/22500;
}

function draw() {
  background(220);
  drawSprites();
  
 if (wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0;
  if (chanceofdeath>100 && chanceofdeath<180){
 car.shapeColor=color(230,230,0);
  }  

  if (chanceofdeath>180)
  {   
  car.shapeColor=color(255,0,0);
  }
  if (chanceofdeath<100)
  {   
  car.shapeColor=color(0,255,0);
  }  
}
 

 
}


  

