
var monkey , monkey_running;
var bananaImage, bananaGroup, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(200,300,40,40);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.08;
  ground = createSprite(200,373,850,100);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background(141,241,255);
  drawSprites();
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  if(keyDown("space") && monkey.y > 298){
    monkey.velocityY = -12;
  }
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  banana();
  obstacles();
  score = Math.ceil(frameCount/frameRate())
  fill("black");
  text("Survival Time: "+ score, 300,30);

  
}
function banana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,0,20,20);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
}
function obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,308,20,20);
    obstacle.scale = 0.1;
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}





