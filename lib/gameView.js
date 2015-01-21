;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var GameView = window.Asteroids.GameView = function GameView(ctx, game) {
    this.ctx = ctx;
    this.game = game;
  }

  GameView.prototype.start = function () {
    setInterval(function () {
      this.game.step();
      this.game.draw(this.ctx);
    }, 20);
    this.bindKeyHandlers();
  };

  GameView.prototype.bindKeyHandlers = function (first_argument) {
    var ship = this.game.ship;
    key('w', function() { ship.power([0, -1])} );
    key('d', function() { ship.power([1, 0])} );
    key('a', function() { ship.power([-1, 0])} );
    key('s', function() { ship.power([0, 1])} );

    key('up', function() { ship.power([0, -1])} );
    key('right', function() { ship.power([1, 0])} );
    key('left', function() { ship.power([-1, 0])} );
    key('down', function() { ship.power([0, 1])} );

    key('space', ship.fireBullet.bind(ship));
  };

})();
