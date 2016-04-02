//Trash sorting installation
// based on Particle system from "The Nature of Code" by Daniel Shiffman



var ParticleSystem = function(position, type) {
  this.possible_images = [];
  for (var i = 0; i <= 33; i ++) {
     this.possible_images.push(loadImage('assets/' + type + '/' + i + '.jpg'));
  }

	this.origin = position.copy();
	this.particles = [];


  this.addParticle = function() {
        var myImage = this.possible_images[int(random(0, this.possible_images.length))];
        this.particles.push(new Particle(this.origin, myImage));
  };

  this.startSystem = function() {
    setInterval(this.addParticle.bind(this), 2700);  //make intervals btw items
  };

  this.run = function() {
  	for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };
};
