;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = window.Asteroids.Bullet = function (attributes) {
    attributes.radius = Bullet.RADIUS;
    attributes.color = Bullet.COLOR;
    window.Asteroids.MovingObject.call(this, attributes);
  }
  window.Asteroids.Util.inherits(window.Asteroids.MovingObject, Bullet);

  Bullet.RADIUS = 2;
  Bullet.COLOR = "#00ff00";

  Bullet.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if(this.pos[0] > window.Asteroids.Game.DIM_X ||
      this.pos[0] < 0 ||
      this.pos[1] > window.Asteroids.Game.DIM_Y ||
      this.pos[1] < 0) {
        this.game.remove(this);
    }
  }

  Bullet.prototype.collideWith = function(otherObj) {
    if (otherObj instanceof window.Asteroids.Asteroid) {
      this.game.remove(otherObj);
      this.game.remove(this);
    }
  }


})();
