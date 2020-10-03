

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score
var redbGroup,bluebGroup, greenbGroup, pinkbGroup, arrowGroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
  redb= new Group();
  pinkb= new Group();
  greenb= new Group();
  blueb= new Group();
  arrowGroup= new Group();
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  

  score=0;

 
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
    
  
 
  //moving bow
  bow.y = World.mouseY
  
  if (keyDown("space")) {
  createArrow();  
  }
  if(arrowGroup.isTouching(redb)){
    redb.destroyEach();
    arrowGroup.destroyEach();
     score=score+1;
  }
  if(arrowGroup.isTouching(pinkb)){
    pinkb.destroyEach();
    arrowGroup.destroyEach();
     score=score+2;
  }
  if(arrowGroup.isTouching(blueb)){
    blueb.destroyEach();
    arrowGroup.destroyEach();
     score=score+4;
  }
  if(arrowGroup.isTouching(greenb)){
    greenb.destroyEach();
    arrowGroup.destroyEach();
     score=score+3;
  }
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1)  { 
      redballoon();
    } else if (select_balloon == 2) {
      greenballoon();
    } else if (select_balloon == 3) {
      blueballoon();
    } else { pinkballoon();
           } }
  
  drawSprites();
  textSize(16);
  fill(0);  
  text("Score: "+ score ,500,30);
}

function createArrow () {
  arrow = createSprite (360,100,5,10);
  arrow.addImage(arrowImage);
  //arrow.debug=true;
  arrow.setCollider("rectangle",0,0,5,10);
  arrow.x=360;
  arrow.y=bow.y;
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.lifetime=50;
  arrowGroup.add(arrow);
  
}

function redballoon(){
var red=createSprite(0,Math.round(random(20, 370)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.scale=0.1;
  red.lifetime=200;
  redb.add(red);
}

function blueballoon(){
var blue=createSprite(0,Math.round(random(20, 370)),10,10);
  blue.addImage(blue_balloonImage);
  //blue.debug=true
  blue.velocityX = 3;
  blue.scale=0.1;
  blue.lifetime=200;
  blueb.add(blue);
}

function pinkballoon(){
var pink=createSprite(0,Math.round(random(20, 370)),10,10);
  pink.addImage(pink_balloonImage);
  //pink.debug=true;
  pink.velocityX = 3;
  pink.scale=0.1;
  pink.lifetime=200;
  pinkb.add(pink);
}

function greenballoon(){
var green=createSprite(0,Math.round(random(20, 370)),10,10);
  green.addImage(green_balloonImage);
  //green.debug=true;
  green.velocityX = 3;
  green.scale=0.1;
  green.lifetime=200;
  greenb.add(green);
}




