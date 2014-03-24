// # @IndexCtrl = ($scope) ->
// #   $scope.data = 
// #     runs: [
// #       {name: 'Golden Gate Park', distance: '8 mi', time: '45 min'}, 
// #       {name:'Ocean Beach', distance: '5 mi', time: '30 min'}
// #     ]
var PitStopApp = angular.module('PitStopApp', []);

PitStopApp.controller('IndexCtrl', function ($scope){
  $scope.runs = [
    {'name': 'Golden Gate Park',
     'distance': '8 mi',
     'time': '45 min'},
    {'name': 'Ocean Beach',
     'distance': '5 mi',
     'time': '30 min'}
  ];
});