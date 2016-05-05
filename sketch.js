//Trash sorting installation
// based on Particle system from "The Nature of Code" by Daniel Shiffman


var handTrash;
var handRecycle;
var hand = [];

function setup() {
  var canvas = createCanvas(720, 1700);
  // canvas.rotate(90*Math.PI/180);

  setFrameRate(60);

  for(i = 1; i < 7; i++){
    hand[i] = loadImage( "assets/hand/hand" + i + ".png" ); //throwing hand
  }

  //ps = new ParticleSystem(createVector(width/2, 50));
  handTrash = new ParticleSystem(createVector(width/4*3, -100), 'trash');
  handRecycle = new ParticleSystem(createVector(width/4, -100), 'recycle');

  handTrash.startSystem();
  handRecycle.startSystem();
}

var gifCount = 1;

function draw() {
  background(255);


  var milliTime = millis();
    console.log(milliTime);
  if(milliTime % 2000 >= 0) console.log("2 seconds gone");

  handTrash.run();
  handRecycle.run();

  imageMode(CORNER);
  image(hand[gifCount], width/4*3- 70, 0, 200 , 200);
  image(hand[gifCount], width/4- 70 , 0, 200 , 200);

  if(frameCount % 9 == 0){
    gifCount++;
    if(gifCount >= 7){
      gifCount=1;
    }
  }
}
