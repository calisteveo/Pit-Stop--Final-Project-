// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
//= require_self
//= require_tree ./services/global
//= require_tree ./services/main
//= require_tree ./filters/global
//= require_tree ./filters/main
//= require_tree ./controllers/global
//= require_tree ./controllers/main
//= require_tree ./directives/global
//= require_tree ./directives/main

var PitStopApp = angular.module('PitStopApp', [
  'ngRoute',
  'runControllers'
  ]);

PitStopApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/runs', {
        templateUrl: 'partials/run-list.html',
        controller: 'RunListCtrl'
      }).
      when('/runs/:runId',{
        templateUrl: 'partials/run-detail.html',
        controller: 'RunDetailCtrl'
      }).
      otherwise({
        redirectTo: '/runs'
      });
}]);