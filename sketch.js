var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var coin;
var score=0

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  soundFile= loadSound("sound.mp3");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 10;
path.scale=1.2;

 soundFile.loop()

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

coinGroup=new Group()
}

function draw() {
  background(0);
  path.velocityY = 10;
  
  //boy.x = World.mouseX
  if (keyDown("RIGHT_ARROW")){
    boy.x=boy.x +3
  }
  if(keyDown("LEFT_ARROW")){
    boy.x=boy.x -3
  }
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/4;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
  coinspawn()
  fill ("yellow");
  textSize(20)
  text("SCORE: " +score,200,50)
  
  if(boy.isTouching(coinGroup)){
    coinGroup.destroyEach()
    score++
    
  }
}

function coinspawn (){
  if(frameCount%80===0){
    coin =createSprite(100,0);
    coin.scale=0.5;
    coin.addImage(coinImg);
    coin.velocityY=10;
    coin.x=Math.round(random(100,300))
    coin.lifetime=50
    coinGroup.add(coin)
  }
}