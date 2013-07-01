var util = require("util");

var EventEmitter = require("events").EventEmitter;

function Bomb(delay) {
  var self = this;
  this.exploded = false;
  this.timeout = setTimeout(function() {
    self.explode();
  }, delay);
}

util.inherits(Bomb, EventEmitter);

Bomb.prototype.explode = function() {
  this.exploded = true;
  console.log("boom");
  this.emit("boom");
}

exports.Bomb = Bomb;

