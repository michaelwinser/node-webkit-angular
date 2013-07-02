(function() {
  var app = angular.module("app", ["Bomb"]);

  app.controller("MainController", function($scope, Bomb) {
    $scope.bombs = [];

    $scope.explosions = 0;

    $scope.add_bomb = function(delay) {
      console.log("add_bomb(", delay, ")")
      $scope.bombs.push(new Bomb(delay * 1000));
    }

    $scope.$on("boom", function() {
      $scope.explosions++;
    });
  });
})();
