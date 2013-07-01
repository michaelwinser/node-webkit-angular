
(function() {
  var app = angular.module("Bomb", []);
  var Bomb = require("./bomb").Bomb;


  app.factory("Bomb", function($rootScope) {
    function BombFactory(delay) {
      var self = this;
      self.bomb = new Bomb(delay);
      self.exploded = self.bomb.exploded;
      self.bomb.on("boom", function() {
        console.log(self.bomb.exploded);
        $rootScope.$broadcast("boom", self);
        $rootScope.$apply(function() {
          self.exploded = true;
        });
      });
    };

    return BombFactory;
  });
})();
