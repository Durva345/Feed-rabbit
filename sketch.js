var garden,rabbit,apple,redl;
var gardenImg,rabbitImg,appleImg,redlImg;
var PLAY=1;
var END=0;
var gameState=1;
var score = 0;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  redlImag = loadImage("redl.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleG=new Group();
redlG=new Group();
  
}

function draw() {

  
  background(0);
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if(gameState===PLAY){
    spawnApple();
    spawnRedl();

    if (appleG.isTouching(rabbit)) {
      score = 1;
      appleG.destroyEach();
      
    }
    
      
  else {
      if(redlG.isTouching(rabbit)) {
        gameState = END;
    }
    }
   if (gameState === END) {
 
     // changing the velocity of path & boy
     
     
//changing the lifetime of cash,diamond & jewelry group
     
     
//changing the velocity of cash,diamond,sword & jwellery groups
     appleG.velocityX = 0;
     redlG.velocityX = 0;
     
//changing the boy animation
     
// changing the gameOver visibility & treastureCollection to 0
     //gameOver.visible = true;
      score = 0;
     
// changing the destroy cash ,diamonds,jewllery & sword group & boy
     appleG.destroyEach();
     redlG.destroyEach();
     rabbit.destroy();
   }
    
  drawSprites();
  textSize(20);
  fill(255);
  text("Score: "+score,300,40);
    
     
  }

}


function spawnApple(){
  if(frameCount%80 ===0){
apple=createSprite(random(50,350),40,10,10);
//apple.y=Math.round;
    apple.addImage(appleImg);
    apple.scale=0.07;
    apple.velocityY=3;
    apple.depth=rabbit.depth;
    rabbit.depth=rabbit.depth+1;
  }    
}
  function spawnRedl(){
  if(frameCount%100 ===0){
  redl=createSprite(random(40,300),10,20,20);
  redl.scale=0.06;
  redl.addImage(redlImag);
  redl.velocityY=3;
  redl.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1
}
}