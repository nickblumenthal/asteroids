;(function () {
  if (typeof Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  }

  var Ship = window.Asteroids.Ship = function(attributes) {
    attributes.radius = Ship.RADIUS;
    attributes.color = Ship.COLOR;
    attributes.vel = [0, 0];
    window.Asteroids.MovingObject.call(this, attributes);
  }

  window.Asteroids.Util.inherits(window.Asteroids.MovingObject, Ship);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    var attributes = {};
    attributes.vel = [];
    attributes.vel[0] = this.vel[0] * 5;
    attributes.vel[1] = this.vel[1] * 5;
    attributes.game = this.game;
    attributes.pos = this.pos;
    this.game.add(new window.Asteroids.Bullet(attributes));
  };

  Ship.RADIUS = 5;
  Ship.COLOR = '#ff0000';
})();
