//Create variables here
var dogimg,happyDog,db,foodS,foodStock,dog;
var button1,button2;
function preload()
{
  //load images here
  dogimg=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");

}

function setup() {
  var canvas=createCanvas(1000,1000);
  dog = createSprite(500,500);
   dog.addImage(dogimg);
   dog.scale=0.3;
  db=firebase.database();
  foodStock=db.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87); 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);

  }
  fill(0);
  textSize(20);
  text("food left:"+foodS,200,250)
  drawSprites();
  //add styles 
  

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  db.ref("/").set({
      food:x
  })


}
var button1=createButton("feedPet");
var button2=createButton("lastFed");

