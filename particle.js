//Trash sorting installation
// based on Particle system from "The Nature of Code" by Daniel Shiffman



var Particle = function(position, img) {
  this.acceleration = createVector(random(-1, 1), random(-1, 1));  //cannot getrid of acceleration
  this.velocity = createVector(0, 1);
  this.position = position.copy();

  this.image = img;

  this.lifespan = 255.0;

  this.run = function() {
    this.update();
    this.display();
  };

  // Method to update position
  this.update = function(){
    //this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    //this.lifespan -= 2;
  };

  // Method to display
  this.display = function() {
    /////////////////////item IMAGE//////////////
    imageMode(CENTER);
    image(this.image, this.position.x, this.position.y, this.image.height/1.5, this.image.width/1.5); //this.image.height/10, this.image.width/10
    //  stroke(200, this.lifespan);
    //  strokeWeight(2);
    //  fill(127, this.lifespan);
    //  ellipse(this.position.x, this.position.y, 12, 12);
  };

  // Is the particle still useful?
  this.isDead = function(){
    return this.position.y > height + 100;
    // if (this.lifespan < 0.0) {
    //   return true;
    // } else {
    //   return false;
    // }
  };
};
