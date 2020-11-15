var bullet,wall;
var thickness,speed,weight;

function setup(){

  createCanvas(1200,400);

  thickness=random(32,60);

  bullet=createSprite(20,200,50,50);
  bullet.shapeColor="white";

  speed=random(80,260);
  
  weight=random(30,50);
  
  bullet.velocityX=speed;
  
  wall=createSprite(1100,200,thickness,height/2);
  wall.shapeColor="white";
  
}
function draw(){
  background("black");


  drawSprites();

  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10){
    
      wall.shapeColor="red";
    
    }
    
    if(damage<10){
    
      wall.shapeColor="green";
    
    }
 
  }
}


function hasCollided(bullet,wall){

 // bulletRightEdge=bullet.x;
  //wallLeftEdge=wall.x;

  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    return true;
  }
    {
    return false;
  }
}
