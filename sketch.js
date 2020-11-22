var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(50, 200, 15, 15);
  bullet.shapeColor = color("white");
  bullet.velocityX = speed;

  thickness = random(22,83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

}

function draw() {
  background(0,0,0);  
  if (hasCollided(bullet, wall)){
    
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if (damage > 10){
      wall.shapeColor = color("red");
    } else if(damage < 10){
      wall.shapeColor = color("green");
    }
  }
  drawSprites();

}

function hasCollided(bulletPara, wallPara){
  bulletRightEdge = bulletPara.x + bulletPara.width;
  wallLeftEdge= wallPara.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}