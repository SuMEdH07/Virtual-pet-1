//Create variables here
var dog, dogImg, dogImg1;
var database;
var foodS, foodStock;
function preload()
{

  //load images here
  dogImg=loadImage("images/dogImg.png");
  dogImg=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(800, 700);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  
foodStock=database.ref('food');
foodStock.on("value",readStock);
textSize(20);
  
}


function draw() {  
background("white");

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);
}
  drawSprites();
  fill (255,255,254);
  stroke ("black");
  text("Food Remaining :"+foodS,170, 200);
  textSize(13);
  
  function readStock(data){
    foodS=data.val();
  }

 function writeStock(x){
   if(x<=0){
     x=0
   }else{
     x-1;
   }
   database.ref('/').update({
     Food:x
   })
 }

}



