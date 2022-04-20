var score1 = 0
function preload(){
  PlaneImg = loadImage("armyplane.png")
  BombImg = loadImage("bomb1.png")
  houseImg = loadImage("house.png")
  bgImg = loadImage("bg1.jpg")
  house2Img = loadImage("house2.png")
  house3Img = loadImage("house3.png")
  house4Img = loadImage("house4.png")
  blastImg = loadImage("blast.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 5
  plane = createSprite (displayWidth-200,displayHeight-800,50,50)
  plane.addImage(PlaneImg)
  plane.scale = 1.5
  houseGroup = new Group()
  missileGroup = new Group()
  blast = createSprite()
}
function draw() {
  
  background(600,600,600);  
  houses();
  if (keyDown("space")){
  dropMissiles()
  }
  plane.x = mouseX
  for(var i=0;i<houseGroup.length;i++)
  { if(houseGroup.get(i).isTouching(missileGroup))
    { houseGroup.get(i).destroy();
    missileGroup.destroyEach(); 
    score1=score1+1; 
    doBlast()
    }
  }
  drawSprites();
  textSize(40)
  fill("blue")
  text("Score:"+score1,200,100)
  
}
function houses(){
  if(frameCount % 100 === 0) {
    house = createSprite(displayWidth-1200,displayHeight-200,50,50)
    house.scale = 1
    house.velocityX = 3
    var rand = Math.round(random(1,4));
     switch(rand) { case 1: house.addImage(houseImg);
     break; case 2: house.addImage(house2Img);
     break; case 3: house.addImage(house3Img);
     break; case 4: house.addImage(house4Img); 
     break;  default: 
     break; }
     houseGroup.add(house)
     
     house.setCollider("rectangle",0,0,90,90)
  }


}
function dropMissiles(){
  missile = createSprite(plane.x,plane.y+85,50,50)
  missile.scale = 1
  missile.addImage(BombImg)
  missile.velocityY = 4
  missile.velocityX = -4
  missileGroup.add(missile)
  
  missile.setCollider("rectangle",0,0,70,70)
}
function doBlast(){
  blast = createSprite(house.x,house.y)
  blast.addImage(blastImg)
}