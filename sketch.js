var dog, happyDog, database, foodS, foodStock;
var dogha;
var database;

function preload()
{
  dogha = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup(){
  createCanvas(500, 500);
  dog = createSprite(250,350,20,20);
  dog.addImage(dogha);
  dog.scale = 0.3;
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", function(data){
    foodS = data.val();
  })
}

function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }  
  drawSprites();
  textSize(20);
  fill("black");
  text("Food left : " + foodS,170,200);
}

function writeStock(x){
  x = x - 1;
  console.log(x);database.ref(' / ').update({
    Food : x
  })
  if(x<=0){
    x = 0;
  }
  else{
  }
}