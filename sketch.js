
var dog, happyDog;
var database;
var foodS, foodStock;
function preload()
{
  dog = loadImage("../images/d.png");
  happyDog = loadImage("../images/d1.png");
}

function setup() {
  createCanvas(500,500);
  dog=createSprite(250,250);
  dog.addImage("d.png");
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  

  drawSprites();
  //add styles here

}



