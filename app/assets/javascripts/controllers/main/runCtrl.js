var runControllers = angular.module('runControllers', []);

runControllers.controller('RunListCtrl', ['$scope',
  function($scope){
    $scope.runs = data;
  }]);

runControllers.controller('RunDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.runId = $routeParams.runId;
  }]);