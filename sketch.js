
var dog, happyDog, database, foodS, foodStock, dogImg, happyDogImg;
function preload()
{
  dogImg = loadImage("dog.png");
  happyDogImg = loadImage("doghappy.png");
}

function setup() {
	createCanvas(500, 500);
  dog.addImage(dogImg);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() { 
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  
  testSize(10);
  fill("blue");
  text("press UP_ARROW key To Feed Mango Milk");
  stroke();

}



