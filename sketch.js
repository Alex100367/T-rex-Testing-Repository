var monkey;
var ground, invisibleGround, groundImage;
var ObstaclesGroup, BananaGroup, Banana, Obstacle;
var count = 0;

function preload(){
  monkey_running = loadImage("Monkey");
  
  groundImage = loadImage("")

  Obstacle = loadImage("");

  Banana = loadImage("")
}

function setup() {
  createCanvas(600, 200);
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  count = count + Math.round(getFrameRate()/30);
  text("Score: "+ count, 250, 100);
  
  monkey.collide(invisibleGround);
  
  SpawnBananas();
  
  SpawnObstacles();
  
  drawSprites();
}



function SpawnBananas(){
 if(frameCount % 80 === 0){ 
  var Banana = createSprite(600,100,30,30);
  Banana.velocityX = -5;
  Banana.y = Math.round(random(40,90));
  Banana.addImage("clouds",CloudImg);
  Banana.scale = 0.5;
  Banana.lifetime = 120;
 }
}



function SpawnObstacles(){
  
 if(frameCount % 70 === 0){
  var Obstacle = createSprite(600,170,30,30); 
  Obstacle.velocityX = -4
  Obstacle.scale = 0.5
  Obstacle.lifetime = 150;
 }
}