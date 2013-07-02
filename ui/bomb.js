
(function() {
  var app = angular.module("Bomb", []);
  var Bomb = require("./bomb").Bomb;


  app.factory("Bomb", function($rootScope, $q) {
    function BombFactory(delay) {
      var self = this;

      var defer = $q.defer();

      self.bomb = new Bomb(delay);
      self.exploded = self.resolved = self.bomb.exploded;

      self.promise = defer.promise;

      self.bomb.on("boom", function() {
        console.log(self.bomb.exploded);

	// Resolve the promise
        defer.resolve(self);

	// Broadcast an event
        $rootScope.$broadcast("boom", self);

	// Modify a property via $apply
        $rootScope.$apply(function() {
          self.exploded = true;
        });
      });
    };

    return BombFactory;
  });

})();
