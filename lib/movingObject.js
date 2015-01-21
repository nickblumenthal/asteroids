;(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  // if (typeof MovingObject === "undefined") {
  //   window.Asteroids.MovingObject = {};
  // }

  var MovingObject = window.Asteroids.MovingObject = function(attributes) {
    this.pos = attributes.pos;
    this.vel = attributes.vel;
    this.radius = attributes.radius;
    this.color = attributes.color;
    this.game = attributes.game;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  }

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  }

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var distance = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]), 2) +
                         Math.pow((this.pos[1] - otherObject.pos[1]), 2));

    return distance < (this.radius * 2);
  };

  MovingObject.prototype.collideWith = function (otherObject) {
    // this.game.remove(otherObject);
    // this.game.remove(this);
  };


})()
