(function() {
  var app = angular.module("app", ["Bomb"]);

  app.controller("MainController", function($scope, Bomb) {
    $scope.bombs = [];

    $scope.explosions = 0;

    $scope.add_bomb = function(delay) {
      console.log("add_bomb(", delay, ")")
      var bomb = new Bomb(delay * 1000);
      $scope.bombs.push(bomb);

      bomb.promise.then(function() {
        bomb.resolved = true;
      });

    }

    $scope.$on("boom", function() {
      $scope.explosions++;
    });
  });
})();
