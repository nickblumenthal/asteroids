;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = window.Asteroids.Game = function Game() {
    this.asteroids = [];
    for(var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.add(new window.Asteroids.Asteroid({'pos': this.randomPosition(), 'game': this}));
    }
    this.ship = new window.Asteroids.Ship({'pos': this.randomPosition(), 'game': this});
    this.bullets = [];
    this.image = new Image();
    this.image.src = './lib/myImage.jpg';
  };

  Game.DIM_X = window.innerWidth - 100;
  Game.DIM_Y = window.innerHeight - 100;
  Game.NUM_ASTEROIDS = 200;

  Game.prototype.randomPosition = function() {
    var x = Math.random() * Game.DIM_X;
    var y = Math.random() * Game.DIM_Y;

    return [x, y];
  };

  Game.prototype.add = function (obj) {
    if (obj instanceof window.Asteroids.Bullet) {
      this.bullets.push(obj);
    }else if (obj instanceof window.Asteroids.Asteroid) {
      this.asteroids.push(obj);
    }
  };

  // Game.prototype.addAsteroids = function() {
  //   this.asteroids.push(new window.Asteroids.Asteroid({'pos': this.randomPosition(), 'game': this}));
  // };

  Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.drawImage(this.image, 0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(function (asteroid) {
      asteroid.draw(ctx);
    })
  console.log(this.bullets);
  }

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function (obj) {
      obj.move();
    })
  };

  Game.prototype.wrap = function(pos) {
    x = pos[0] % Game.DIM_X;
    y = pos[1] % Game.DIM_Y;
    return [x, y];
  }

  Game.prototype.checkCollisions = function () {
    var allObjs = this.allObjects();
    for(var i = 0; i < allObjs.length; i++) {
      for(var j = i + 1; j < allObjs.length; j++) {
        if(allObjs[i].isCollidedWith(allObjs[j])) {
          allObjs[i].collideWith(allObjs[j]);
        }
      }
    }
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  }

  Game.prototype.remove = function (obj) {
    if(obj instanceof window.Asteroids.Asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(obj), 1);
    } else if(obj instanceof window.Asteroids.Bullet) {
      this.bullets.splice(this.bullets.indexOf(obj), 1)
    }
  };

  Game.prototype.allObjects = function () {
    answer = Array.prototype.slice.call(this.asteroids, 0);
    answer.push(this.ship);
    answer = answer.concat(this.bullets);
    return answer;
  };

})();
