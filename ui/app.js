(function() {
  var app = angular.module("app", ["Bomb"]);

  app.controller("MainController", function($scope, Bomb) {
    $scope.bomb = new Bomb(1000);
    $scope.$on("boom", function() {
      alert("bomb exploded");
    });
  });
})();
