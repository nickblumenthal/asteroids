;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var Asteroid = window.Asteroids.Asteroid = function(pos) {

    attributes = pos;
    attributes.color = Asteroid.COLOR;
    attributes.radius = Asteroid.RADIUS;
    attributes.vel = [];
    attributes.vel[0] = Math.random();
    attributes.vel[1] = Math.random();
    Asteroids.MovingObject.call(this, attributes);
  };
  window.Asteroids.Util.inherits(window.Asteroids.MovingObject, Asteroid);

  Asteroid.COLOR = "#38a6f3";
  Asteroid.RADIUS = 15;

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof window.Asteroids.Ship) {
      otherObject.relocate();
    }
    if (otherObject instanceof window.Asteroids.Bullet) {
      this.game.remove(this);
      this.game.remove(otherObject);
    }
  };



})();
