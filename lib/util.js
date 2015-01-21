;(function () {
  if (typeof Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  }
  var Util = window.Asteroids.Util;

  Util.inherits = function (parent, child) {
    function Surrogate(){};
    Surrogate.prototype = parent.prototype
    child.prototype = new Surrogate();
  };


})();
