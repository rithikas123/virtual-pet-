var dog, sadDog, happyDog;
var foodObj;
var foodS, foodStock;
var fedTime, lastFed, feed, addFood;

function preload() {
  sadDog = loadImage("Dog.png");
  happyDog = loadImage("happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000, 400);

  dog = createSprite(800, 200, 150, 150);
  dog.addImage(sadDog);
  dog.scale = 0.15;
  var foodRef = database.ref("food");
  foodRef.on("value", function (data) {
    foodS = data.val();
    console.log(foodS);
  });
}

function draw() {
  background(46, 139, 87);

  fill(255, 255, 254);
  textSize(15);
  text("remaining food " + foodS, 500, 200);
  if (keyDown(DOWN_ARROW)) {
    database.ref("/").update({
      food: foodS - 1,
    });
  }
  drawSprites();
}
