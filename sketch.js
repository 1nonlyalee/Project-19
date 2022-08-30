function preload(){
spaceImg = loadImg("space.png")
rocketImg1 = loadAnimation("rocket1.png");
meteorImg1 = loadAnimation("meteor1.png")
starImg1 = loadAnimation("star1.png")
gameOverImg =  loadImg("gameOver.png");
}

function setup() {
 createCanvas(1200,300);
 space = createSprite(70,150);
 space.addImg(spaceImg);
 space.velocityX = -5;

 mainRocket.setCollider("rectangle",0,0,40,40);
 gameOver = createSprite(640,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.9;
gameOver.visible = false;  
}

function draw() {
 drawSprites()
 textSize(20);
 fill(255);
 text("Distance: "+ distance,800,30);

 if(gamestate===play) {
    distance = distance + Math.round(getFrameRate()/50);
    path.velocityX = -(6 + 2*distance/150);
    mainCycilist.y = World.mouseY;
    edges = createEdgesSprites();
    mainCyclist .collide(edges);

    if(pinkCG.isTouching(mainCyclist)){
        gameState = END;
        player1.velocityY = 0;
        player1.addAnimation("metoerImg1",starImg1);
       }
       
       if(yellowCG.isTouching(mainCyclist)){
         gameState = END;
         player2.velocityY = 0;
         player2.addAnimation("metoerImg1",starImg1);
       }
       
       if(redCG.isTouching(mainCyclist)){
         gameState = END;
         player3.velocityY = 0;
         player3.addAnimation("metoerImg1",starImg1);
       }
       
   }else if (gameState === END) {
       gameOver.visible = true;
     
       textSize(20);
       fill(255);
       text("Press Up Arrow to Restart the game!", 500,200);
     
       path.velocityX = 0;
       mainCyclist.velocityY = 0;
       mainCyclist.addAnimation("RocketFlying",meteorImg1);
     
       pinkCG.setVelocityXEach(0);
       pinkCG.setLifetimeEach(-1);
     
       yellowCG.setVelocityXEach(0);
       yellowCG.setLifetimeEach(-1);
     
       redCG.setVelocityXEach(0);
       redCG.setLifetimeEach(-1);


 }
}